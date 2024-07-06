import Head from 'next/head';
import Script from 'next/script';
import { css } from '@emotion/react';
import { usbVersion } from '../shared/utils';
import Colors from '../shared/colors';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Publications from '../components/Publications';

export default function Home() {
    return (
        <div>
            <style jsx global>{`
                body {
                    margin: 0;
                    font-family: 'Helvetica Neue', Arial,
                        'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo,
                        sans-serif;
                }
                a {
                    color: ${Colors.Pink};
                }
            `}</style>
            <Script src='https://kit.fontawesome.com/9129381b44.js' />
            <Head>
                <title>{usbVersion()}</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
            </Head>
            <Header />
            <div
                css={css`
                    max-width: 960px;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;

                    h2 {
                        color: ${Colors.Pink};
                    }
                `}
            >
                <Profile />
                <h2 id='publications'>Publications</h2>
                <Publications />
                <h2 id='awards'>Awards</h2>
                <ul>
                    <li>
                        Jazztronik・野崎良太賞, team-kite（山田開斗，
                        <b>薄羽大樹</b>）,{' '}
                        <a href='https://www.billboard-japan.com/hack2016'>
                            LIVE MUSIC HACKASONG
                        </a>
                        , 2017.
                    </li>
                </ul>
                <h2 id='education'>Education</h2>
                <ul>
                    <li>
                        Bachelor of Science, Meiji University, supervised by
                        Homei Miyashita, 2014/4 -- 2017/3.
                    </li>
                    <li>
                        Master of Science, Meiji University, supervised by Homei
                        Miyashita, 2017/4 -- 2019/3.
                    </li>
                    <li>
                        Doctor of Science, Meiji University, supervised by Homei
                        Miyashita, 2019/4 -- 2022/3.
                    </li>
                </ul>
                <h2 id='work'>Work</h2>
                <ul>
                    <li>
                        YUKAI Engineering Inc., JavaScript, Part time, 2016/4 --
                        2017/12.
                    </li>
                    <li>
                        Yamaha Corporation, Drone control module (JavaScript),
                        Subcontracting, 2017/10 -- 2017/12.
                    </li>
                    <li>
                        Wantedly, Inc.,{' '}
                        <a href='https://www.wantedly.com/projects/100705'>
                            サマーインターン2017：ReactでつくるWebフロントエンドコース
                        </a>
                        , Internship, 2017/7.
                    </li>
                    <li>
                        KNOCKNOTE Inc., Web application (JavaScript), Part time,
                        2018/1 -- 2019/3
                    </li>
                    <li>
                        YUKAI Engineering Inc., JavaScript, Part time, 2016/4 --
                        2017/12.
                    </li>
                    <li>
                        YUKAI Engineering Inc., JavaScript,{' '}
                        <a href='https://github.com/YUKAI/emo-motion-editor'>
                            Emo Motion Editor
                        </a>
                        , Subcontracting, 2019/11 -- 2020/7.
                    </li>
                    <li>
                        Meiji University, Research Associate, 2019/4 -- 2022/3.
                    </li>
                    <li>
                        Yahoo Japan Corporation (Yahoo! Japan Research),
                        Internship, 2018/9 -- 2021/9.
                    </li>
                    <li>
                        Taste & Aroma Strategic Research Institute, JavaScript,
                        Subcontracting, 2022/1 -- 2022/3.
                    </li>
                    <li>
                        Yahoo Japan Corporation (Yahoo! Japan Research), Project
                        researcher, 2022/4 -- 2023/9.
                    </li>
                    <li>
                        LY Corporation (LY Research), Project researcher,
                        2023/10 -- 2024/2.
                    </li>
                    <li>
                        <b>
                            ITANDI Inc., Frontend engineer,
                            2024/3 -- present.
                        </b>
                    </li>
                </ul>
                <h2 id='others'>Others</h2>
                <ul>
                    <li>
                        Participated in{' '}
                        <a href='https://isucon.net/archives/48712866.html'>
                            ISUCON6
                        </a>{' '}
                        as エンボディパイプ椅子（mactkg，kwzr，
                        <b>mimorisuzuko</b>)
                    </li>
                    <li>
                        Participated in{' '}
                        <a href='https://dailyportalz.jp/kiji/171005200841'>
                            ABPro2017
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/hrky0206/videos/1887665261486337/'>
                            Fly 3D printed drone
                        </a>{' '}
                        at 2018 Meiji University Open Campus
                    </li>
                    <li>
                        Developed{' '}
                        <a href='https://lydesign.jp/n/n9aa3192089f9'>
                            Tappy: UX tool to visualize tap success rate
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
