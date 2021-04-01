import React from 'react';
import { css } from 'emotion';
import Nav from './Nav';
import { pinkColor } from './style';
import lodashMap from 'lodash/map';
import Publications from './Publications';
import Img from './components/Img';

const FaListItem = ({ icon, children }) => (
    <li>
        <span className='fa-li'>
            <i className={icon} />
        </span>
        {children}
    </li>
);
const renderFaList = (items) =>
    lodashMap(items, ({ iconClassName, contentJsx }) => (
        <FaListItem icon={iconClassName}>{contentJsx}</FaListItem>
    ));

const App = () => (
    <>
        <Nav />
        <main
            className={css({
                maxWidth: 960,
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '1rem',
                boxSizing: 'border-box',
                a: {
                    color: pinkColor
                },
                h2: {
                    color: pinkColor
                }
            })}
        >
            <div className='row'>
                <div className='col-md-4'>
                    <div className='box'>
                        <Img
                            src='assets/me.jpg'
                            css={css({
                                display: 'block',
                                width: '100%',
                                borderRadius: '50%'
                            })}
                        />
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='box'>
                        <p
                            className={css({
                                fontSize: '2rem'
                            })}
                        >
                            Hiroki Usuba /{' '}
                            <small
                                className={css({
                                    color: 'gray'
                                })}
                            >
                                薄羽 大樹
                            </small>
                        </p>
                        <ul className='fa-ul'>
                            {renderFaList([
                                {
                                    iconClassName: 'fa fa-birthday-cake',
                                    contentJsx: '1995/02/06'
                                },
                                {
                                    iconClassName: 'fa fa-envelope',
                                    contentJsx: 'm(at)mimorisuzu.co'
                                },
                                {
                                    iconClassName: 'fa fa-graduation-cap',
                                    contentJsx: 'Meiji University (D3)'
                                },
                                {
                                    iconClassName: 'fa fa-flask',
                                    contentJsx: (
                                        <a href='https://miyashita.com'>
                                            Miyashita Lab
                                        </a>
                                    )
                                },
                                {
                                    iconClassName: 'fa fa-briefcase',
                                    contentJsx:
                                        'ex-YUKAI Engineering Inc.; part time'
                                },
                                {
                                    iconClassName: 'fa fa-briefcase',
                                    contentJsx: (
                                        <>
                                            ex-Wantedly, Inc.;{' '}
                                            <a href='https://www.wantedly.com/projects/100705'>
                                                internship
                                            </a>
                                            ; web frontend
                                        </>
                                    )
                                },
                                {
                                    iconClassName: 'fa fa-briefcase',
                                    contentJsx:
                                        'ex-Knocknote Inc.; part time; web frontend'
                                },
                                {
                                    iconClassName: 'fa fa-briefcase',
                                    contentJsx:
                                        'Yahoo! JAPAN Research; internship'
                                },
                                {
                                    iconClassName: 'fab fa-twitter',
                                    contentJsx: (
                                        <a href='https://twitter.com/HirokiUsuba'>
                                            HirokiUsuba
                                        </a>
                                    )
                                },
                                {
                                    iconClassName: 'fab fa-facebook',
                                    contentJsx: (
                                        <a href='https://www.facebook.com/hrky0206'>
                                            hrky0206
                                        </a>
                                    )
                                },
                                {
                                    iconClassName: 'fab fa-github',
                                    contentJsx: (
                                        <a href='https://github.com/mimorisuzuko'>
                                            @mimorisuzuko
                                        </a>
                                    )
                                },
                                {
                                    iconClassName: 'fab fa-google',
                                    contentJsx: (
                                        <a href='https://scholar.google.co.jp/citations?user=JxA4JoIAAAAJ'>
                                            Scholar
                                        </a>
                                    )
                                },
                                {
                                    iconClassName: 'fas fa-external-link-alt',
                                    contentJsx: (
                                        <a href='https://www.wantedly.com/users/17860447'>
                                            Wantedly
                                        </a>
                                    )
                                }
                            ])}
                        </ul>
                        <ul className='fa-ul'>
                            {renderFaList([
                                {
                                    iconClassName: 'fas fa-heart',
                                    contentJsx:
                                        'Human-Computer Interaction; GUIs; Pointing'
                                },
                                {
                                    iconClassName: 'fas fa-heart',
                                    contentJsx: 'JavaScript (React; Electron)'
                                },
                                {
                                    iconClassName: 'fas fa-heart',
                                    contentJsx: (
                                        <>
                                            Voice actress (
                                            <a href='https://hibiki-cast.jp/hibiki_f/mimori_suzuko/'>
                                                Suzuko Mimori
                                            </a>
                                            ); IDOL (
                                            <a href='https://www.hinatazaka46.com/s/official/artist/6'>
                                                Kyoko Saito
                                            </a>
                                            ;{' '}
                                            <a href='https://wa-suta.world/profile/member.php?id=1000943'>
                                                Ruka Mishina
                                            </a>
                                            );{' '}
                                            <a href='https://twitter.com/mizuyuno_'>
                                                yunocy
                                            </a>
                                        </>
                                    )
                                }
                            ])}
                        </ul>
                    </div>
                </div>
            </div>
            <h2 id='publications'>Publications</h2>
            <Publications />
            <h2 id='awards'>Awards</h2>
            <ul>
                <li>
                    Jazztronik・野崎良太賞, team-kite（山田開斗，<b>薄羽大樹</b>
                    ）,{' '}
                    <a href='http://www.billboard-japan.com/hack2016'>
                        LIVE MUSIC HACKASONG
                    </a>
                    , 2017.
                </li>
            </ul>
            <h2 id='others'>Others</h2>
            <ul>
                <li>
                    エンボディパイプ椅子（mactkg，kwzr，<b>mimorisuzuko</b>)
                    として
                    <a href='http://isucon.net/archives/48712866.html'>
                        ISUCON6
                    </a>
                    の本戦出場
                </li>
                <li>
                    <a href='https://dailyportalz.jp/kiji/171005200841'>
                        ABPro2017
                    </a>
                    に参加
                </li>
                <li>
                    2018年度の明治大学オープンキャンパスで
                    <a href='https://www.facebook.com/hrky0206/videos/1887665261486337/'>
                        ドローンを飛ばす
                    </a>
                </li>
            </ul>
        </main>
        <script
            defer
            src='https://use.fontawesome.com/releases/v5.0.6/js/all.js'
        />
    </>
);

export default App;
