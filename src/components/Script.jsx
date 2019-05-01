import React from 'react';
import libpath from 'path';
import { execSync } from 'child_process';
import lodashMerge from 'lodash/merge';
import config from '../../config';
import fs from 'fs-extra';

const {
	env: { NODE_ENV }
} = process;

const Script = ({ src, babelOptions = {} }) => {
	const { presets, plugins } = lodashMerge(
		{ plugins: [], presets: [] },
		babelOptions
	);

	const dst = libpath.join(process.cwd(), config.dst, src);
	const dstDir = libpath.dirname(dst);

	if (!fs.existsSync(dstDir)) {
		fs.mkdirpSync(dstDir);
	}

	if (NODE_ENV === 'production') {
		execSync(
			`npx browserify ${libpath.join(
				process.cwd(),
				src
			)} -t [ babelify --presets [ ${presets.join(
				' '
			)} ] --plugins [ ${plugins.join(
				' '
			)} ] ] | npx uglifyjs -c > ${dst}`
		);
	} else {
		execSync(
			`npx browserify ${libpath.join(
				process.cwd(),
				src
			)} -o ${dst} -t [ babelify --presets [ ${presets.join(
				' '
			)} ] --plugins [ ${plugins.join(' ')} ] ]`
		);
	}

	return <script src={src} />;
};

export default Script;
