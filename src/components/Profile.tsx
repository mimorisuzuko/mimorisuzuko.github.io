import { type CSS, css } from "@mimorisuzuko/yuuka";
import type { FC, ReactNode } from "react";
import {
	RiBriefcase4Fill,
	RiCake2Fill,
	RiFacebookBoxFill,
	RiGithubFill,
	RiGoogleFill,
	RiGraduationCapFill,
	RiHeart3Fill,
	RiMailFill,
	RiTwitterXFill
} from "react-icons/ri";

const items: {
	Icon: FC<{ className: string }>;
	jsx: ReactNode;
}[] = [
	{
		Icon: RiCake2Fill,
		jsx: "1995/02/06"
	},
	{
		Icon: RiGraduationCapFill,
		jsx: "Doctor of Science"
	},
	{
		Icon: RiBriefcase4Fill,
		jsx: "ITANDI Inc."
	},
	{
		Icon: RiMailFill,
		jsx: "m(at)mimorisuzu.co"
	},
	{
		Icon: RiTwitterXFill,
		jsx: <a href="https://x.com/HirokiUsuba">HirokiUsuba</a>
	},
	{
		Icon: RiFacebookBoxFill,
		jsx: <a href="https://www.facebook.com/hrky0206">hrky0206</a>
	},
	{
		Icon: RiGithubFill,
		jsx: <a href="https://github.com/mimorisuzuko">mimorisuzuko</a>
	},
	{
		Icon: RiGoogleFill,
		jsx: (
			<a href="https://scholar.google.co.jp/citations?user=JxA4JoIAAAAJ">
				Google Scholar
			</a>
		)
	}
];

const styles = {
	ul: { listStyle: "none", padding: 0 }
} as const satisfies { [key: string]: CSS };

const [listIconClassName, ListIconStyle] = css({
	marginRight: 8,
	verticalAlign: "middle"
});

export default function Profile() {
	return (
		<div
			css={{
				"> div": {
					boxSizing: "border-box",
					padding: "0 0.5rem"
				},
				display: "flex",
				flexWrap: "wrap"
			}}
		>
			<div
				css={{
					"@media screen and (min-width: 480px)": {
						flexBasis: "30%"
					},
					flexBasis: "100%"
				}}
			>
				<img
					alt="logo"
					css={{
						borderRadius: "50%",
						display: "block",
						width: "100%"
					}}
					src="/me.jpg"
				/>
			</div>
			<div
				css={{
					"@media screen and (min-width: 480px)": {
						flexBasis: "70%"
					},
					flexBasis: "100%"
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
				<ListIconStyle />
				<ul css={styles.ul}>
					{items.map(({ Icon, jsx }, i) => (
						<li key={i}>
							<Icon className={listIconClassName} />
							{jsx}
						</li>
					))}
				</ul>
				<ul css={styles.ul}>
					<li>
						<RiHeart3Fill className={listIconClassName} />
						<a href="https://hibiki-cast.jp/hibiki_f/mimori_suzuko/">
							Suzuko Mimori
						</a>
						; <a href="https://www.twitch.tv/yunocy">yunocy</a>;{" "}
						<a href="https://x.com/bibian_ct1203">Bibian Murakawa</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
