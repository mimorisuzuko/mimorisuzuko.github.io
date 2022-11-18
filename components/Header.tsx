import { usbVersion } from '../shared/utils';
import Colors from '../shared/colors';
import { css } from '@emotion/react';

const links = ['Publications', 'Awards', 'Education', 'Work', 'Others'];

export default function Header() {
    return (
        <div
            css={css`
                background-color: ${Colors.Pink};
                margin-bottom: 1rem;
                display: flex;
                padding-left: 1rem;

                > div,
                a {
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    color: white;
                }

                a {
                    display: none;
                }

                @media screen and (min-width: 480px) {
                    a {
                        display: flex;
                    }
                }
            `}
        >
            <div
                css={css`
                    margin-right: 1rem;
                `}
            >
                {usbVersion()}
            </div>
            {links.map((a, i) => {
                return (
                    <a
                        key={`Header-${i}`}
                        href={`#${a.toLowerCase()}`}
                        css={css`
                            text-decoration: none;
                            transform: skew(-45deg);
                            display: flex;

                            &:hover {
                                color: ${Colors.Pink};
                                background-color: white;
                            }

                            &:not(:first-child) {
                                margin-left: -1px;
                            }
                        `}
                    >
                        <div
                            css={css`
                                width: 1px;
                                height: 100%;
                                background-color: white;
                            `}
                        />
                        <div
                            css={css`
                                transform: skew(45deg);
                                padding-left: 1rem;
                                padding-right: 1rem;
                            `}
                        >
                            {a}
                        </div>
                    </a>
                );
            })}
        </div>
    );
}
