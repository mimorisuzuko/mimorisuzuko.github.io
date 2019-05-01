import React from 'react';
import { renderStylesToString } from 'emotion-server';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs-extra';
import libpath from 'path';
import config from '../config';
import App from '../src';
import { exec } from 'child_process';

const dstDir = libpath.join(process.cwd(), config.dst);
const {
	env: { NODE_ENV }
} = process;

export default async () => {
	if (await !fs.exists(dstDir)) {
		await fs.mkdir(dstDir);
	}

	await new Promise((resolve, reject) => {
		const src = libpath.join(process.cwd(), 'src/index.jsx');
		const dst = libpath.join(dstDir, 'index.js');

		exec(
			NODE_ENV === 'production'
				? `npx browserify ${src} --extension=.jsx -t babelify | npx uglifyjs -c > ${dst}`
				: `npx browserify ${src} --extension=.jsx -o ${dst} -t babelify`,
			(err, stdout, stderr) => {
				if (err || stderr) {
					reject(err || stderr);
				} else {
					resolve(stdout);
				}
			}
		);
	});

	await fs.writeFile(
		libpath.join(dstDir, 'index.html'),
		`<!DOCTYPE html>${renderStylesToString(
			renderToStaticMarkup(
				<html lang='ja'>
					<config.Head />
					<config.Body>
						<div id='root'>
							<App />
						</div>
						<script src='index.js' />
					</config.Body>
				</html>
			)
		)}`
	);
};
