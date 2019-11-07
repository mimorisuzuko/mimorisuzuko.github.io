import React from 'react';
import bibtex from 'bibtex-parse-js';
import lodashMap from 'lodash/map';
import lodashEach from 'lodash/forEach';
import { css } from 'emotion';
import domesticJournalWithReview from './bibs/domestic-journal-w-review.bib';
import oralDomesticConf from './bibs/oral-domestic-conf.bib';
import paperDomesticConfWithReview from './bibs/paper-domestic-conf-w-review.bib';
import paperInternationalConfWithReview from './bibs/paper-international-conf-w-review.bib';
import posterAndDemoDomesticConf from './bibs/poster-and-demo-domestic-conf.bib';
import posterAndDemoInternationalConfWithReview from './bibs/poster-and-demo-international-conf-w-review.bib';

const isMe = (name) => {
    return (
        name === 'Usuba, Hiroki' ||
        name === 'Hiroki Usuba' ||
        name === '薄羽大樹'
    );
};

/**
 * @param {string} filename
 */
const renderPublicationEn = (txt) => (
    <ol>
        {lodashMap(
            bibtex.toJSON(txt),
            ({
                entryTags: {
                    author,
                    title,
                    booktitle,
                    series,
                    pages,
                    numpages,
                    year,
                    url,
                    _others_,
                    _miyashitacomurl_
                }
            }) => {
                const ret = [];
                const authors = author.split(' and ');
                const { length: authorsLength } = authors;

                lodashEach(authors, (a, i) => {
                    const [b, c] = a.split(', ');
                    const name = `${c} ${b}`;
                    const last = i === authorsLength - 1;

                    if (last) {
                        ret.push('and ');
                    }

                    ret.push(
                        isMe(name) ? <b>{name}</b> : name,
                        last ? '. ' : ', '
                    );
                });

                ret.push(`${title}. `);
                ret.push('In ', <i>{booktitle}</i>);

                if (series) {
                    ret.push(` (${series})`);
                }

                if (pages) {
                    ret.push(`, ${pages}`);
                } else if (numpages) {
                    ret.push(`, ${numpages} pages`);
                }

                ret.push(`, ${year}. `);
                ret.push(<a href={url}>{url}</a>);

                if (_others_) {
                    ret.push(` [${_others_}]`);
                }

                if (_miyashitacomurl_) {
                    ret.push(
                        ' ',
                        <a href={_miyashitacomurl_}>
                            [<i className='far fa-file-pdf' />
                            PDF]
                        </a>
                    );
                }

                return <li>{ret}</li>;
            }
        )}
    </ol>
);

const renderPublicationJa = (txt) => (
    <ol>
        {lodashMap(
            bibtex.toJSON(txt),
            ({
                entryTags: {
                    author,
                    title,
                    journal,
                    booktitle,
                    volume,
                    number,
                    pages,
                    year,
                    url,
                    _others_,
                    _miyashitacomurl_,
                    _videourl_,
                    _pressrelease_
                }
            }) => {
                const ret = [];
                const authors = author.split(' and ');
                const { length: authorsLength } = authors;

                lodashEach(authors, (a, i) => {
                    const b = a.split(/,\s?/);
                    const name = b.length === 1 ? b[0] : `${b[0]}${b[1]}`;
                    const last = i === authorsLength - 1;

                    ret.push(
                        isMe(name) ? <b>{name}</b> : name,
                        last ? '. ' : ', '
                    );
                });

                ret.push(`${title}. `);

                if (journal) {
                    ret.push(journal);
                }

                if (booktitle) {
                    ret.push(booktitle);
                }

                if (volume) {
                    ret.push(`, Vol. ${volume}`);
                }

                if (number) {
                    ret.push(`, No. ${number}`);
                }

                if (pages) {
                    ret.push(`, ${pages}`);
                }

                ret.push(`, ${year}. `);
                ret.push(<a href={url}>{url}</a>);

                if (_others_) {
                    ret.push(` [${_others_}]`);
                }

                if (_miyashitacomurl_) {
                    ret.push(
                        ' ',
                        <a href={_miyashitacomurl_}>
                            [<i className='far fa-file-pdf' />
                            PDF]
                        </a>
                    );
                }

                if (_videourl_) {
                    ret.push(
                        ' ',
                        <a href={_videourl_}>
                            [<i className='fab fa-youtube' />
                            Video]
                        </a>
                    );
                }

                if (_pressrelease_) {
                    ret.push(
                        ' ',
                        <a href={_pressrelease_}>
                            [<i className='fa fa-newspaper' />
                            Press release]
                        </a>
                    );
                }

                return <li>{ret}</li>;
            }
        )}
    </ol>
);

const Publications = () => (
    <div
        className={css({
            svg: {
                paddingRight: 3
            }
        })}
    >
        <h3>Paper at international conference w/ review</h3>
        {renderPublicationEn(paperInternationalConfWithReview)}
        <h3>Poster and demo at international conference w/ review</h3>
        {renderPublicationEn(posterAndDemoInternationalConfWithReview)}
        <h3>Domestic journal w/ review</h3>
        {renderPublicationJa(domesticJournalWithReview)}
        <h3>Paper at domestic conference w/ review</h3>
        {renderPublicationJa(paperDomesticConfWithReview)}
        <h3>Oral presentation at domestic conference</h3>
        {renderPublicationJa(oralDomesticConf)}
        <h3>Poster and demo at domestic conference</h3>
        {renderPublicationJa(posterAndDemoDomesticConf)}
    </div>
);

export default Publications;
