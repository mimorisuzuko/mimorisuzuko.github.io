import express from 'express';
import open from 'open';
import libpath from 'path';
import { Server } from 'ws';
import chokidar from 'chokidar';
import config from '../config';
import build from './build-func';

const app = express();
const ws = new Server({ port: 3001 });
let promises = [];

app.use('/', express.static(libpath.join(process.cwd(), config.dst)));

app.listen(3000, async () => {
    await build();
    await open('http://0.0.0.0:3000');

    chokidar
        .watch(libpath.join(process.cwd(), config.src), {
            ignored: /(^|[/\\])\../,
            persistent: true
        })
        .on('change', () => {
            promises.push(async () => {
                await build();
                ws.clients.forEach((a) => a.send('reload'));
            });
        });
});

const watch = async () => {
    const last = promises.pop();

    if (last) {
        await last();
    }

    promises = [];

    setTimeout(watch, 1000);
};

watch();
