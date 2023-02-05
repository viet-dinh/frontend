import { Footer, Header } from "@/components/common";
import IsMobile from "@/components/IsMobile";
import { LayoutProps } from "@/models/layout";
import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import { useEffect } from "react";

export default function MainLayout(props: LayoutProps) {
	const isMobile = IsMobile();

	useEffect(() => {
		console.log("mounting");
		return () => console.log("unmount");
	}, []);

	return (
		<Stack minHeight={"100vh"}>
			<Header />
			<Box component={"main"} flexGrow={1} marginTop={isMobile ? 0 : "100px"}>
				{props.children}
			</Box>
			<Footer />
		</Stack>
	);
}
