import { Box } from "@mui/material";
import * as React from "react";
import { FooterDesktop } from "./footer-desktop";
import { FooterMobile } from "./footer-mobile";

export interface FooterProps {}

function Footer(props: FooterProps) {
	return (
		<Box>
			<FooterDesktop />
			<FooterMobile />
		</Box>
	);
}

export { Footer };
