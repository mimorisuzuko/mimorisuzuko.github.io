import React from 'react';
import { renderStylesToString } from 'emotion-server';
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/core';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs-extra';
import libpath from 'path';

const dst = libpath.join(__dirname, '../docs');

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
