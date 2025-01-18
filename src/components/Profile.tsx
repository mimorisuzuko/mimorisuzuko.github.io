import type { ReactNode } from "react";

const items: {
	iconClassName: string;
	jsx: ReactNode;
}[] = [
	{
		iconClassName: "fa-solid fa-cake-candles",
		jsx: "1995/02/06"
	},
	{
		iconClassName: "fa-solid fa-user-graduate",
		jsx: "Doctor of Science"
	},
	{
		iconClassName: "fa-solid fa-briefcase",
		jsx: "ITANDI Inc."
	},
	{
		iconClassName: "fa-solid fa-envelope",
		jsx: "m(at)mimorisuzu.co"
	},
	{
		iconClassName: "fa-brands fa-x-twitter",
		jsx: <a href="https://x.com/HirokiUsuba">HirokiUsuba</a>
	},
	{
		iconClassName: "fa-brands fa-facebook",
		jsx: <a href="https://www.facebook.com/hrky0206">hrky0206</a>
	},
	{
		iconClassName: "fa-brands fa-github",
		jsx: <a href="https://github.com/mimorisuzuko">mimorisuzuko</a>
	},
	{
		iconClassName: "fa-brands fa-google",
		jsx: (
			<a href="https://scholar.google.co.jp/citations?user=JxA4JoIAAAAJ">
				Google Scholar
			</a>
		)
	}
];

export default function Profile() {
	return (
		<div
			css={{
				display: "flex",
				flexWrap: "wrap",
				"> div": {
					padding: "0 0.5rem",
					boxSizing: "border-box"
				}
			}}
		>
			<div
				css={{
					flexBasis: "100%",

					"@media screen and (min-width: 480px)": {
						flexBasis: "30%"
					}
				}}
			>
				<img
					alt="logo"
					css={{
						width: "100%",
						display: "block",
						borderRadius: "50%"
					}}
					src="/me.jpg"
				/>
			</div>
			<div
				css={{
					flexBasis: "100%",

					"@media screen and (min-width: 480px)": {
						flexBasis: "70%"
					}
				}}
			>
				<div
					css={{
						fontSize: "2rem",

						small: {
							color: "gray"
						}
					}}
				>
					Hiroki Usuba / <small>薄羽 大樹</small>
				</div>
				<ul className="fa-ul">
					{items.map(({ iconClassName, jsx }, i) => (
						<li key={i}>
							<span className="fa-li">
								<i className={iconClassName} />
							</span>
							{jsx}
						</li>
					))}
				</ul>
				<ul className="fa-ul">
					<li>
						<span className="fa-li">
							<i className="fa-solid fa-heart" />
						</span>
						<a href="https://hibiki-cast.jp/hibiki_f/mimori_suzuko/">
							Suzuko Mimori
						</a>
						; <a href="https://www.twitch.tv/yunocy">yunocy</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
