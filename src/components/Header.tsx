import Colors from "../shared/colors";
import { usbVersion } from "../shared/utils";

const links = ["Publications", "Awards", "Education", "Work", "Others"];

export default function Header() {
	return (
		<div
			css={{
				"@media screen and (min-width: 480px)": {
					a: {
						display: "flex"
					}
				},
				"> div, a": {
					color: "white",
					paddingBottom: "1rem",
					paddingTop: "1rem"
				},
				a: {
					display: "none"
				},
				backgroundColor: Colors.Pink,
				display: "flex",
				marginBottom: "1rem",
				paddingLeft: "1rem"
			}}
		>
			<div css={{ marginRight: "1rem" }}>{usbVersion()}</div>
			{links.map((a, i) => {
				return (
					<a
						css={{
							":hover": {
								backgroundColor: "white",
								color: Colors.Pink
							},

							":not(:first-child)": {
								marginLeft: -1
							},
							display: "flex",
							textDecoration: "none",
							transform: "skew(-45deg)"
						}}
						href={`#${a.toLowerCase()}`}
						key={i}
					>
						<div
							css={{
								backgroundColor: "white",
								height: "100%",
								width: 1
							}}
						/>
						<div
							css={{
								paddingLeft: "1rem",
								paddingRight: "1rem",
								transform: "skew(45deg)"
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
