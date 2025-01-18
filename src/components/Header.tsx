import Colors from "../shared/colors";
import { usbVersion } from "../shared/utils";

const links = ["Publications", "Awards", "Education", "Work", "Others"];

export default function Header() {
	return (
		<div
			css={{
				backgroundColor: Colors.Pink,
				marginBottom: "1rem",
				display: "flex",
				paddingLeft: "1rem",
				"> div, a": {
					paddingTop: "1rem",
					paddingBottom: "1rem",
					color: "white"
				},
				a: {
					display: "none"
				},
				"@media screen and (min-width: 480px)": {
					a: {
						display: "flex"
					}
				}
			}}
		>
			<div css={{ marginRight: "1rem" }}>{usbVersion()}</div>
			{links.map((a, i) => {
				return (
					<a
						css={{
							textDecoration: "none",
							transform: "skew(-45deg)",
							display: "flex",

							":hover": {
								color: Colors.Pink,
								backgroundColor: "white"
							},

							":not(:first-child)": {
								marginLeft: -1
							}
						}}
						href={`#${a.toLowerCase()}`}
						key={i}
					>
						<div
							css={{
								width: 1,
								height: "100%",
								backgroundColor: "white"
							}}
						/>
						<div
							css={{
								transform: "skew(45deg)",
								paddingLeft: "1rem",
								paddingRight: "1rem"
							}}
						>
							{a}
						</div>
					</a>
				);
			})}
		</div>
	);
}
