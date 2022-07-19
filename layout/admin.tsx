import Auth from "@/components/auth/auth";
import { Header } from "@/components/common";
import { LayoutProps } from "@/models/layout";
import { authRequest } from "@/request";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React, { useEffect } from "react";

export default function AdminLayout(props: LayoutProps) {
	useEffect(() => {
		console.log("mounting");
		return () => console.log("unmount");
	}, []);
	return (
		<Auth>
			<Header></Header>
			<Box>
				<Container>
					<Link href={"/"}>
						<a>Home</a>
					</Link>
				</Container>
			</Box>
			<div>{props.children}</div>
		</Auth>
	);
}
