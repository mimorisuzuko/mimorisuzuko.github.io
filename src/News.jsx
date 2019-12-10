import React from 'react';
import { css } from 'emotion';
import lodashMap from 'lodash/map';

const News = () => (
    <table
        className={css({
            borderCollapse: 'collapse',
            borderSpacing: 0,
            td: {
                padding: '0.5rem',
                borderBottom: '1px solid rgb(230, 236, 240)'
            }
        })}
    >
        <tbody>
            {lodashMap(
                [
                    {
                        date: '2016/10/22',
                        contentJsx: (
                            <>
                                <a href='http://isucon.net/archives/48712866.html'>
                                    ISUCON6
                                </a>
                                にエンボディパイプ椅子（mactkg, kwzr,{' '}
                                <b>mimorisuzuko</b>
                                ）として出場
                            </>
                        )
                    },
                    {
                        date: '2017/01/26',
                        contentJsx: (
                            <>
                                <a href='http://www.billboard-japan.com/hack2016'>
                                    LIVE MUSIC HACKASONG
                                </a>
                                にてteam-kite（山田開斗，<b>薄羽大樹</b>
                                ）としてJazztronik・野崎良太賞を受賞
                            </>
                        )
                    },
                    {
                        date: '2017/07/31 - 08/04',
                        contentJsx: (
                            <>
                                Wantedly, Inc.の
                                <a href='https://www.wantedly.com/projects/100705'>
                                    ReactでつくるWebフロントエンドコース
                                </a>
                                に参加（
                                <a href='http://mimorisuzuko.hatenablog.com/entry/2017/08/09/180000'>
                                    <i className='fas fa-external-link-alt' />
                                </a>
                                ）
                            </>
                        )
                    },
                    {
                        date: '2017/08/22 - 08/23',
                        contentJsx: (
                            <>
                                オープンキャンパスで後輩2人とドローンを飛ばす（ソフトウェアを担当,{' '}
                                <a href='https://www.facebook.com/hrky0206/videos/1887665261486337/'>
                                    <i className='fas fa-external-link-alt' />
                                </a>
                                ）
                            </>
                        )
                    },
                    {
                        date: '2017/10/05',
                        contentJsx: (
                            <>
                                デイリーポータルZに
                                <a href='https://abpro.jp/2017/'>ABPro2017</a>
                                の記事が掲載（分度器,{' '}
                                <a href='http://portal.nifty.com/kiji/171005200841_1.htm'>
                                    <i className='fas fa-external-link-alt' />
                                </a>
                                ）
                            </>
                        )
                    }
                ],
                ({ date, contentJsx }) => (
                    <tr>
                        <td>{date}</td>
                        <td>{contentJsx}</td>
                    </tr>
                )
            )}
        </tbody>
    </table>
);

export default News;
