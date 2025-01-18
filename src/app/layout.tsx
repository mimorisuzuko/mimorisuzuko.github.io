import type { Metadata } from "next";
import type { ReactNode } from "react";
import { usbVersion } from "../shared/utils";

export const metadata: Metadata = {
	title: usbVersion()
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
