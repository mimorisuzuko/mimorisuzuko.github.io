import React from 'react';
import { css } from 'emotion';

const Head = () => (
    <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>USB00.00</title>
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
                '"Helvetica Neue", Helvetica, Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif'
        })}
    >
        {children}
    </body>
);

export default {
    dst: './',
    Head,
    Body
};
