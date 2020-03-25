import React from 'react';
import { css } from 'emotion';
import { getUsbVersion } from './shared/funcs';

const Head = () => (
    <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{getUsbVersion()}</title>
        <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'
        />
        <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css'
        />
    </head>
);

const Body = ({ children }) => (
    <body
        className={css({
            fontFamily:
                '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'
        })}
    >
        {children}
    </body>
);

export default {
    dst: './',
    src: 'src',
    Head,
    Body
};
