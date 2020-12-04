import React from 'react';
import bibtex from 'bibtex-parse-js';
import lodashMap from 'lodash/map';
import lodashEach from 'lodash/forEach';
import { css } from 'emotion';
import oralDomesticConf from './bibs/oral-domestic-conf.bib';
import paperDomesticConfWithReview from './bibs/paper-domestic-conf-w-review.bib';
import paperInternationalConfWithReview from './bibs/paper-international-conf-w-review.bib';
import posterAndDemoDomesticConf from './bibs/poster-and-demo-domestic-conf.bib';
import posterAndDemoInternationalConfWithReview from './bibs/poster-and-demo-international-conf-w-review.bib';
import journalWithReview from './bibs/journal-w-review.bib';
let pubCnt = 1;

const isMe = (name) => {
    return (
        name === 'Usuba, Hiroki' ||
        name === 'Hiroki Usuba' ||
        name === '薄羽大樹'
    );
};

const renderPublicationEn = ({
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
    pubCnt += 1;

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

        ret.push(isMe(name) ? <b>{name}</b> : name, last ? '. ' : ', ');
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

    return (
        <li
            className={css({
                overflowWrap: 'break-word'
            })}
        >
            {ret}
        </li>
    );
};

/**
 * @param {string} filename
 */
const renderPublicationsEn = (txt) => (
    <ol start={pubCnt}>
        {lodashMap(bibtex.toJSON(txt), (json) => renderPublicationEn(json))}
    </ol>
);

const renderJournalEn = ({
    entryTags: {
        author,
        title,
        booktitle,
        journal,
        series,
        volume,
        number,
        pages,
        numpages,
        year,
        url,
        _others_,
        _miyashitacomurl_
    }
}) => {
    pubCnt += 1;

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

        ret.push(isMe(name) ? <b>{name}</b> : name, last ? '. ' : ', ');
    });

    ret.push(`${title}. `);

    if (journal) {
        ret.push(<i>{journal}</i>);
    }

    if (booktitle) {
        ret.push(<i>{booktitle}</i>);
    }

    if (volume) {
        ret.push(`, Vol. ${volume}`);
    }

    if (number) {
        ret.push(`, No. ${number}`);
    }

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

    return (
        <li
            className={css({
                overflowWrap: 'break-word'
            })}
        >
            {ret}
        </li>
    );
};

/**
 * @param {string} filename
 */
const renderJournals = (txt) => (
    <ol start={pubCnt}>
        {lodashMap(bibtex.toJSON(txt), (json) => {
            const {
                entryTags: { title }
            } = json;

            return /[\u4E00-\u9FAF\u3040-\u3096\u30A1-\u30FA]/.test(title)
                ? renderPublicationJa(json)
                : renderJournalEn(json);
        })}
    </ol>
);

const renderPublicationJa = ({
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
    pubCnt += 1;

    const ret = [];
    const authors = author.split(' and ');
    const { length: authorsLength } = authors;

    lodashEach(authors, (a, i) => {
        const b = a.split(/,\s?/);
        const name = b.length === 1 ? b[0] : `${b[0]}${b[1]}`;
        const last = i === authorsLength - 1;

        ret.push(isMe(name) ? <b>{name}</b> : name, last ? '. ' : ', ');
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

    return (
        <li
            className={css({
                overflowWrap: 'break-word'
            })}
        >
            {ret}
        </li>
    );
};

const renderPublicationsJa = (txt) => (
    <ol start={pubCnt}>
        {lodashMap(bibtex.toJSON(txt), (json) => renderPublicationJa(json))}
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
        <h3>Journal w/ review</h3>
        {renderJournals(journalWithReview)}
        <h3>Paper at international conference w/ review</h3>
        {renderPublicationsEn(paperInternationalConfWithReview)}
        <h3>Poster and demo at international conference w/ review</h3>
        {renderPublicationsEn(posterAndDemoInternationalConfWithReview)}
        <h3>Paper at domestic conference w/ review</h3>
        {renderPublicationsJa(paperDomesticConfWithReview)}
        <h3>Oral presentation at domestic conference</h3>
        {renderPublicationsJa(oralDomesticConf)}
        <h3>Poster and demo at domestic conference</h3>
        {renderPublicationsJa(posterAndDemoDomesticConf)}
    </div>
);

export default Publications;
