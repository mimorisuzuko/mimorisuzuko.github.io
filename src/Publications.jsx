import React from 'react';
import fs from 'fs';
import bibtex from 'bibtex-parse-js';
import libpath from 'path';
import lodashMap from 'lodash/map';
import lodashEach from 'lodash/forEach';
import { css } from 'emotion';

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
const renderPublicationEn = (filename) => (
	<ol>
		{lodashMap(
			bibtex.toJSON(
				fs.readFileSync(libpath.join(__dirname, filename), {
					encoding: 'utf-8'
				})
			),
			({
				entryTags: {
					author,
					title,
					booktitle,
					series,
					pages,
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
				ret.push('In ', <i>{booktitle}</i>, ` (${series})`);

				if (pages) {
					ret.push(`, ${pages}`);
				}

				ret.push(`, ${year}. `);
				ret.push(<a href={url}>{url}</a>);
				ret.push(` [${_others_}]`);

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

const renderPublicationJa = (filename) => (
	<ol>
		{lodashMap(
			bibtex.toJSON(
				fs.readFileSync(libpath.join(__dirname, filename), {
					encoding: 'utf-8'
				})
			),
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
		{renderPublicationEn('./bibs/paper-international-conf-w-review.bib')}
		<h3>Poster and demo at international conference w/ review</h3>
		{renderPublicationEn(
			'./bibs/poster-and-demo-international-conf-w-review.bib'
		)}
		<h3>Domestic journal w/ review</h3>
		{renderPublicationJa('bibs/domestic-journal-w-review.bib')}
		<h3>Paper at domestic conference w/ review</h3>
		{renderPublicationJa('bibs/paper-domestic-conf-w-review.bib')}
		<h3>Oral presentation at domestic conference</h3>
		{renderPublicationJa('bibs/oral-domestic-conf.bib')}
		<h3>Poster and demo at domestic conference</h3>
		{renderPublicationJa('bibs/poster-and-demo-domestic-conf.bib')}
	</div>
);

export default Publications;
