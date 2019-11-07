import build from './build-func';

(async () => {
    await build();
})().catch(console.error);
