import React from 'react';
import { renderStylesToString } from 'emotion-server';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs-extra';
import libpath from 'path';
import config from '../config';
import App from '../src/App';

const dst = libpath.join(process.cwd(), config.dst);

export default async () => {
	if (await !fs.exists(dst)) {
		await fs.mkdir(dst);
	}

	await fs.writeFile(
		libpath.join(dst, 'index.html'),
		`<!DOCTYPE html>${renderStylesToString(
			renderToStaticMarkup(
				<html lang='ja'>
					<config.Head />
					<config.Body>
						<App />
					</config.Body>
				</html>
			)
		)}`
	);
};
