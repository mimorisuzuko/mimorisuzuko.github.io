"use client";

import { useEffect, useRef, useState } from "react";
import Colors from "../shared/colors";
import { usbVersion } from "../shared/utils";

const links = ["Publications", "Awards", "Education", "Work", "Others"];

export default function Header() {
	const [version, setVersion] = useState(usbVersion());
	const animationRef = useRef(-1);

	useEffect(() => {
		const loop = () => {
			const nextVersion = usbVersion();

			setVersion(nextVersion);
			animationRef.current = requestAnimationFrame(loop);
		};

		loop();

		return () => {
			cancelAnimationFrame(animationRef.current);
		};
	}, []);

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
			<div css={{ marginRight: "1rem" }}>{version}</div>
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
