/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { css } from '@emotion/react';

const items: {
    iconClassName: string;
    jsx: JSX.Element | string;
}[] = [
    {
        iconClassName: 'fa-solid fa-cake-candles',
        jsx: '1995/02/06'
    },
    {
        iconClassName: 'fa-solid fa-user-graduate',
        jsx: 'Doctor of Science'
    },
    {
        iconClassName: 'fa-solid fa-briefcase',
        jsx: 'ITANDI Inc.'
    },
    {
        iconClassName: 'fa-solid fa-envelope',
        jsx: 'm(at)mimorisuzu.co'
    },
    {
        iconClassName: 'fa-brands fa-x-twitter',
        jsx: <a href='https://x.com/HirokiUsuba'>HirokiUsuba</a>
    },
    {
        iconClassName: 'fa-brands fa-facebook',
        jsx: <a href='https://www.facebook.com/hrky0206'>hrky0206</a>
    },
    {
        iconClassName: 'fa-brands fa-github',
        jsx: <a href='https://github.com/mimorisuzuko'>mimorisuzuko</a>
    },
    {
        iconClassName: 'fa-brands fa-google',
        jsx: (
            <a href='https://scholar.google.co.jp/citations?user=JxA4JoIAAAAJ'>
                Google Scholar
            </a>
        )
    }
];

const favorites = [
    <>
        <a href='https://hibiki-cast.jp/hibiki_f/mimori_suzuko/'>
            Suzuko Mimori
        </a>
        ; <a href='https://www.twitch.tv/yunocy'>yunocy</a>
    </>
];

export default function Profile() {
    return (
        <div
            css={css`
                display: flex;
                flex-wrap: wrap;

                > div {
                    padding: 0 0.5rem;
                    box-sizing: border-box;
                }
            `}
        >
            <div
                css={css`
                    flex-basis: 100%;

                    @media screen and (min-width: 480px) {
                        flex-basis: 30%;
                    }
                `}
            >
                <img
                    css={css`
                        width: 100%;
                        display: block;
                        border-radius: 50%;
                    `}
                    src='/me.jpg'
                    alt='logo'
                />
            </div>
            <div
                css={css`
                    flex-basis: 100%;

                    @media screen and (min-width: 480px) {
                        flex-basis: 70%;
                    }
                `}
            >
                <div
                    css={css`
                        font-size: 2rem;

                        small {
                            color: gray;
                        }
                    `}
                >
                    Hiroki Usuba / <small>薄羽 大樹</small>
                </div>
                <ul className='fa-ul'>
                    {items.map(({ iconClassName, jsx }, i) => (
                        <li key={`item-${i}`}>
                            <span className='fa-li'>
                                <i className={iconClassName} />
                            </span>
                            {jsx}
                        </li>
                    ))}
                </ul>
                <ul className='fa-ul'>
                    {favorites.map((a, i) => (
                        <li key={`favorite-${i}`}>
                            <span className='fa-li'>
                                <i className='fa-solid fa-heart' />
                            </span>
                            {a}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
