import liveServer from 'live-server';
import chokidar from 'chokidar';
import libpath from 'path';
import { exec } from 'child_process';
import config from '../config';

class Builder {
	constructor() {
		this.canBuild = true;
	}

	async build() {
		const { canBuild } = this;

		if (canBuild) {
			this.canBuild = false;

			return new Promise((resolve, reject) => {
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
				})
				.finally(() => {
					this.canBuild = true;
				});
		}
	}
}

const builder = new Builder();

(async () => {
	await builder.build();

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
			builder.build();
		});
})().catch(console.error);
