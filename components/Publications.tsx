import React from 'react';
import { css } from '@emotion/react';
import bibtex from 'bibtex-parse-js';
import journalsWithReview from '../shared/bibs/journals-w-review.bib';
import papersInternationalWithReview from '../shared/bibs/papers-international-w-review.bib';
import postersAndDemosInternationalWithReview from '../shared/bibs/posters-and-demos-international-w-review.bib';
import papersDomesticWithReview from '../shared/bibs/papers-domestic-w-review.bib';
import oralsDomestic from '../shared/bibs/orals-domestic.bib';
import postersAndDemosDomestic from '../shared/bibs/posters-and-demos-domestic.bib';

const isMe = (name: string) => {
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
}: Publication) => {
    const ret = [];
    const authors = author.split(' and ');
    const { length: authorsLength } = authors;

    authors.forEach((a, i) => {
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

    return ret;
};

const renderJournalEn = ({
    entryTags: {
        author,
        title,
        booktitle,
        journal,
        series,
        volume,
        number,
        articleno,
        issue_date,
        pages,
        numpages,
        year,
        url,
        _others_,
        _miyashitacomurl_
    }
}: Publication) => {
    const ret = [];
    const authors = author.split(' and ');
    const { length: authorsLength } = authors;

    authors.forEach((a, i) => {
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

    if (articleno) {
        ret.push(`, Article ${articleno} (${issue_date})`);
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

    return ret;
};

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
}: Publication) => {
    const ret = [];
    const authors = author.split(' and ');
    const { length: authorsLength } = authors;

    authors.forEach((a, i) => {
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

    return ret;
};

export default function Publications() {
    return (
        <div
            css={css`
                details {
                    margin-top: 1em;
                    margin-bottom: 1em;
                }

                summary {
                    h3 {
                        margin-top: 0;
                        margin-bottom: 0;
                        display: inline-block;
                    }
                }

                li {
                    overflow-wrap: break-word;
                }
            `}
        >
            <h3>Journal w/ review</h3>
            <ol>
                {bibtex.toJSON(journalsWithReview).map((a, i) => {
                    return (
                        <li key={`journals-w-review-${i}`}>
                            {/[\u4E00-\u9FAF\u3040-\u3096\u30A1-\u30FA]/.test(
                                a.entryTags.journal!
                            )
                                ? renderPublicationJa(a)
                                : renderJournalEn(a)}
                        </li>
                    );
                })}
            </ol>
            <h3>Paper at international conference w/ review</h3>
            <ol>
                {bibtex.toJSON(papersInternationalWithReview).map((a, i) => {
                    return (
                        <li key={`papers-international-w-review-${i}`}>
                            {renderPublicationEn(a)}
                        </li>
                    );
                })}
            </ol>
            <h3>Poster and demo at international conference w/ review</h3>
            <ol>
                {bibtex
                    .toJSON(postersAndDemosInternationalWithReview)
                    .map((a, i) => {
                        return (
                            <li
                                key={`posters-and-demos-international-w-review-${i}`}
                            >
                                {renderPublicationEn(a)}
                            </li>
                        );
                    })}
            </ol>
            <h3>Paper at domestic conference w/ review</h3>
            <ol>
                {bibtex.toJSON(papersDomesticWithReview).map((a, i) => {
                    return (
                        <li key={`papers-domestic-w-review-${i}`}>
                            {renderPublicationJa(a)}
                        </li>
                    );
                })}
            </ol>
            <details>
                <summary>
                    <h3>Oral presentation at domestic conference</h3>
                </summary>
                <ol>
                    {bibtex.toJSON(oralsDomestic).map((a, i) => {
                        return (
                            <li key={`orals-domestic-${i}`}>
                                {renderPublicationJa(a)}
                            </li>
                        );
                    })}
                </ol>
            </details>
            <details>
                <summary>
                    <h3>Poster and demo at domestic conference</h3>
                </summary>
                <ol>
                    {bibtex.toJSON(postersAndDemosDomestic).map((a, i) => {
                        return (
                            <li key={`posters-and-demos-domestic${i}`}>
                                {renderPublicationJa(a)}
                            </li>
                        );
                    })}
                </ol>
            </details>
        </div>
    );
}
