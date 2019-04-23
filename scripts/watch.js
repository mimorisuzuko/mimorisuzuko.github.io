import liveServer from 'live-server';
import chokidar from 'chokidar';
import libpath from 'path';
import { exec } from 'child_process';
import config from '../config';

let timer = -1;

const build = () =>
	new Promise((resolve, reject) => {
		exec('yarn build', (err, stdout, stderr) => {
			if (err) {
				reject(err);
			} else {
				resolve({ stdout, stderr });
			}
		});
	})
		.then(({ stdout, stderr }) => {
			console.log('🙆‍  Succeeded to build');
			console.log(`Stdout: ${stdout}`);
			console.log(`Stderr: ${stderr}`);
		})
		.catch((err) => {
			console.log('🙅‍  Failed to build');
			console.log(`Err: ${err}`);
		});

(async () => {
	await build();

	liveServer.start({
		port: 3000,
		root: libpath.join(process.cwd(), config.dst)
	});
	chokidar
		.watch(libpath.join(process.cwd(), '../src/'), {
			ignored: /(^|[/\\])\../,
			persistent: true
		})
		.on('change', () => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				build();
			}, 1000);
		});
})().catch(console.error);
