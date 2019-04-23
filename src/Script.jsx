import React from 'react';
import libpath from 'path';
import { execSync } from 'child_process';
import lodashMerge from 'lodash/merge';

const {
	env: { NODE_ENV }
} = process;

const Script = ({ src, babelOptions = {} }) => {
	const { presets, plugins } = lodashMerge(
		{ plugins: [], presets: [] },
		babelOptions
	);

	if (NODE_ENV === 'production') {
		execSync(
			`npx browserify ${libpath.join(
				__dirname,
				src
			)} -t [ babelify --presets [ ${presets.join(
				' '
			)} ] --plugins [ ${plugins.join(
				' '
			)} ] ] | npx uglifyjs -c > ${libpath.join(
				process.cwd(),
				'docs',
				src
			)}`
		);
	} else {
		execSync(
			`npx browserify ${libpath.join(__dirname, src)} -o ${libpath.join(
				process.cwd(),
				'docs',
				src
			)} -t [ babelify --presets [ ${presets.join(
				' '
			)} ] --plugins [ ${plugins.join(' ')} ] ]`
		);
	}

	return <script src={src} />;
};

export default Script;
