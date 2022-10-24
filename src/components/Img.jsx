import React from 'react';
import libpath from 'path';
import config from '../../config';
import fs from 'fs';

const Img = ({ src, className }) => {
    if (typeof document === 'undefined') {
        const dst = libpath.join(process.cwd(), config.dst, src);
        const dstDir = libpath.dirname(dst);

        if (!fs.existsSync(dstDir)) {
            fs.mkdirpSync(dstDir);
        }

        fs.writeFileSync(
            dst,
            fs.readFileSync(libpath.join(process.cwd(), 'src', src)),
            { encoding: null }
        );
    }

    return <img src={src} className={className} />;
};

export default Img;
