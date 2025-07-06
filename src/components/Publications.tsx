import { css } from "@mimorisuzuko/yuuka";
import type { ReactNode } from "react";
import { RiFilePdf2Fill, RiNewsFill, RiYoutubeFill } from "react-icons/ri";
import {
	arxivs,
	journalsWithReview,
	oralsDomestic,
	type Publication,
	papersDomesticWithReview,
	papersInternationalWithReview,
	postersAndDemosDomestic,
	postersAndDemosInternationalWithReview
} from "../shared/bibs";

const [iconClassName, IconStyle] = css({
	verticalAlign: "middle"
});

const isMe = (name: string) => {
	return (
		name === "Usuba, Hiroki" || name === "Hiroki Usuba" || name === "薄羽大樹"
	);
};

const renderAuthorEn = (author: string) => {
	const ret: ReactNode[] = [];
	const authors = author.split(" and ");
	const { length: authorsLength } = authors;

	authors.forEach((a, i) => {
		let name = "";

		if (a.includes(",")) {
			const [b, c] = a.split(", ");

			name = `${c} ${b}`;
		} else {
			name = a;
		}

		const last = i === authorsLength - 1;

		if (last) {
			ret.push("and ");
		}

		ret.push(isMe(name) ? <b key={name}>{name}</b> : name, last ? ". " : ", ");
	});

	return ret;
};

const renderPublicationEn = ({
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
}: Publication) => {
	const ret = [...renderAuthorEn(author)];

	ret.push(`${title}. `);
	ret.push("In ", <i key={booktitle}>{booktitle}</i>);

	if (typeof series === "string") {
		ret.push(` (${series})`);
	}

	if (typeof pages === "string") {
		ret.push(`, ${pages}`);
	} else if (typeof numpages === "string") {
		ret.push(`, ${numpages} pages`);
	}

	ret.push(`, ${year}. `);
	if (typeof url === "string") {
		ret.push(
			<a href={url} key={url}>
				{url}
			</a>
		);
	}

	if (typeof _others_ === "string") {
		ret.push(` [${_others_}]`);
	}

	if (typeof _miyashitacomurl_ === "string") {
		ret.push(
			" ",
			<a href={_miyashitacomurl_} key={_miyashitacomurl_}>
				[<RiFilePdf2Fill className={iconClassName} />
				PDF]
			</a>
		);
	}

	return ret;
};

const renderJournalEn = ({
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
}: Publication) => {
	const ret = [...renderAuthorEn(author)];

	ret.push(`${title}. `);

	if (typeof journal === "string") {
		ret.push(<i key={journal}>{journal}</i>);
	}

	if (typeof booktitle === "string") {
		ret.push(<i key={booktitle}>{booktitle}</i>);
	}

	if (typeof volume === "string") {
		ret.push(`, Vol. ${volume}`);
	}

	if (typeof number === "string") {
		ret.push(`, No. ${number}`);
	}

	if (typeof series === "string") {
		ret.push(` (${series})`);
	}

	if (typeof articleno === "string") {
		ret.push(`, Article ${articleno}`);
	}

	if (typeof issue_date === "string") {
		ret.push(` (${issue_date})`);
	}

	if (typeof pages === "string") {
		ret.push(`, ${pages}`);
	} else if (typeof numpages === "string") {
		ret.push(`, ${numpages} pages`);
	}

	ret.push(`, ${year}. `);
	ret.push(
		<a href={url} key={url}>
			{url}
		</a>
	);

	if (typeof _others_ === "string") {
		ret.push(` [${_others_}]`);
	}

	if (typeof _miyashitacomurl_ === "string") {
		ret.push(
			" ",
			<a href={_miyashitacomurl_} key={_miyashitacomurl_}>
				[<RiFilePdf2Fill className={iconClassName} />
				PDF]
			</a>
		);
	}

	return ret;
};

const renderPublicationJa = ({
	author,
	title,
	journal,
	booktitle,
	volume,
	number,
	pages,
	year,
	_others_,
	_miyashitacomurl_,
	_videourl_,
	_pressrelease_
}: Publication) => {
	const ret = [];
	const authors = author.split(" and ");
	const { length: authorsLength } = authors;

	authors.forEach((a, i) => {
		const b = a.split(/,\s?/);
		const name = b.length === 1 ? b[0] : `${b[0]}${b[1]}`;
		const last = i === authorsLength - 1;

		ret.push(isMe(name) ? <b key={name}>{name}</b> : name, last ? ". " : ", ");
	});

	ret.push(`${title}. `);

	if (typeof journal === "string") {
		ret.push(journal);
	}

	if (typeof booktitle === "string") {
		ret.push(booktitle);
	}

	if (typeof volume === "string") {
		ret.push(`, Vol. ${volume}`);
	}

	if (typeof number === "string") {
		ret.push(`, No. ${number}`);
	}

	if (typeof pages === "string") {
		ret.push(`, ${pages}`);
	}

	ret.push(`, ${year}. `);

	if (typeof _others_ === "string") {
		ret.push(` [${_others_}]`);
	}

	if (typeof _miyashitacomurl_ === "string") {
		ret.push(
			" ",
			<a href={_miyashitacomurl_} key={_miyashitacomurl_}>
				[<RiFilePdf2Fill className={iconClassName} />
				PDF]
			</a>
		);
	}

	if (typeof _videourl_ === "string") {
		ret.push(
			" ",
			<a href={_videourl_} key={_videourl_}>
				[<RiYoutubeFill className={iconClassName} />
				Video]
			</a>
		);
	}

	if (typeof _pressrelease_ === "string") {
		ret.push(
			" ",
			<a href={_pressrelease_} key={_pressrelease_}>
				[<RiNewsFill className={iconClassName} />
				Press release]
			</a>
		);
	}

	return ret;
};

const renderPublicationArxiv = ({
	author,
	title,
	year,
	eprint,
	archivePrefix,
	url,
	primaryClass
}: Publication) => {
	const ret = [];
	const authors = author.split(" and ");
	const { length: authorsLength } = authors;

	authors.forEach((a, i) => {
		const b = a.split(/,\s?/);
		const name = b.length === 1 ? b[0] : `${b[0]}${b[1]}`;
		const last = i === authorsLength - 1;

		ret.push(isMe(name) ? <b key={name}>{name}</b> : name, last ? ". " : ", ");
	});

	ret.push(`${title}. `);
	ret.push(`arXiv preprint ${archivePrefix}:${eprint} [${primaryClass}]`);
	ret.push(`, ${year}. `);
	ret.push(
		<a href={url} key={url}>
			{url}
		</a>
	);

	return ret;
};

export default function Publications() {
	return (
		<div
			css={{
				details: {
					marginBottom: "1em",
					marginTop: "1em"
				},

				li: {
					overflowWrap: "break-word"
				},

				summary: {
					h3: {
						display: "inline-block",
						marginBottom: 0,
						marginTop: 0
					}
				}
			}}
		>
			<IconStyle />
			<h3>Journal w/ review</h3>
			<ol>
				{journalsWithReview.map((a, i) => {
					return (
						<li key={i}>
							{/[\u4E00-\u9FAF\u3040-\u3096\u30A1-\u30FA]/.test(a.journal!)
								? renderPublicationJa(a)
								: renderJournalEn(a)}
						</li>
					);
				})}
			</ol>
			<h3>Paper at international conference w/ review</h3>
			<ol>
				{papersInternationalWithReview.map((a, i) => {
					return <li key={i}>{renderPublicationEn(a)}</li>;
				})}
			</ol>
			<h3>Poster and demo at international conference w/ review</h3>
			<ol>
				{postersAndDemosInternationalWithReview.map((a, i) => {
					return <li key={i}>{renderPublicationEn(a)}</li>;
				})}
			</ol>
			<h3>Paper at domestic conference w/ review</h3>
			<ol>
				{papersDomesticWithReview.map((a, i) => {
					return <li key={i}>{renderPublicationJa(a)}</li>;
				})}
			</ol>
			<details>
				<summary>
					<h3>Oral presentation at domestic conference</h3>
				</summary>
				<ol>
					{oralsDomestic.map((a, i) => {
						return <li key={i}>{renderPublicationJa(a)}</li>;
					})}
				</ol>
			</details>
			<details>
				<summary>
					<h3>Poster and demo at domestic conference</h3>
				</summary>
				<ol>
					{postersAndDemosDomestic.map((a, i) => {
						return <li key={i}>{renderPublicationJa(a)}</li>;
					})}
				</ol>
			</details>
			<details>
				<summary>
					<h3>arxiv.org</h3>
				</summary>
				<ol>
					{arxivs.map((a, i) => {
						return <li key={i}>{renderPublicationArxiv(a)}</li>;
					})}
				</ol>
			</details>
		</div>
	);
}
