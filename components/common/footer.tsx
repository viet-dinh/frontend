import { Box } from "@mui/material";
import * as React from "react";

export interface FooterProps {}

function Footer(props: FooterProps) {
	return (
		<Box component="footer" py="2" textAlign="center">
			Footer
		</Box>
	);
}

export { Footer };
