import React from 'react';
import { renderStylesToString } from '@emotion/server';
import { renderToString } from 'react-dom/server';
import fs from 'fs-extra';
import libpath from 'path';
import config from '../config';
import App from '../src';
import browserify from 'browserify';
import babelify from 'babelify';
import uglifyjs from 'uglify-js';

const dstDir = libpath.join(process.cwd(), config.dst);
const {
    env: { NODE_ENV }
} = process;

export default async () => {
    if (await !fs.exists(dstDir)) {
        await fs.mkdir(dstDir);
    }

    await fs.writeFile(
        libpath.join(dstDir, 'index.js'),
        await new Promise((resolve, reject) => {
            const src = libpath.join(process.cwd(), 'src/index.jsx');

            browserify({
                extensions: ['.jsx']
            })
                .add(src)
                .transform(babelify)
                .bundle((err, bundled) => {
                    if (err) {
                        reject(err);
                    } else {
                        let str = bundled.toString();

                        if (NODE_ENV === 'production') {
                            const { code, error } = uglifyjs.minify(str);

                            if (error) {
                                reject(error);
                            } else {
                                str = code;
                            }
                        }

                        resolve(str);
                    }
                });
        }),
        { encoding: 'utf-8' }
    );

    await fs.writeFile(
        libpath.join(dstDir, 'index.html'),
        `<!DOCTYPE html>${renderStylesToString(
            renderToString(
                <html lang='ja'>
                    <config.Head />
                    <config.Body>
                        <div id='root'>
                            <App />
                        </div>
                        <script src='index.js' />
                        {NODE_ENV === 'development' ? (
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                            (new WebSocket('ws://0.0.0.0:3001')).addEventListener('message', ({ data }) => {
                                if (data === 'reload') {
                                    document.location.reload();
                                }
                            })
                            `
                                }}
                            />
                        ) : null}
                    </config.Body>
                </html>
            )
        )}`
    );
};
