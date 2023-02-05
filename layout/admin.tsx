import Auth from "@/components/auth/auth";
import { Footer, Header } from "@/components/common";
import IsMobile from "@/components/IsMobile";
import { LayoutProps } from "@/models/layout";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

export default function AdminLayout(props: LayoutProps) {
	const isMobile = IsMobile();

	useEffect(() => {
		console.log("mounting");
		return () => console.log("unmount");
	}, []);
	return (
		<Auth>
			<Stack minHeight={"100vh"}>
				<Header />
				<Box component={"main"} flexGrow={1} marginTop={isMobile ? 0 : "90px"}>
					{props.children}
				</Box>
				<Footer />
			</Stack>
		</Auth>
	);
}
