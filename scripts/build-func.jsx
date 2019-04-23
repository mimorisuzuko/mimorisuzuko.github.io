import React from 'react';
import { renderStylesToString } from 'emotion-server';
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/core';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs-extra';
import libpath from 'path';
import config from '../config';

const dst = libpath.join(process.cwd(), config.dst);

export default async () => {
	if (await !fs.exists(dst)) {
		await fs.mkdir(dst);
	}

	const { default: App } = await import('../src/App').then((App) => {
		return App;
	});

	await fs.writeFile(
		libpath.join(dst, 'index.html'),
		`<!DOCTYPE html>${renderStylesToString(
			renderToStaticMarkup(
				<CacheProvider value={cache}>
					<App />
				</CacheProvider>
			)
		)}`
	);
};
