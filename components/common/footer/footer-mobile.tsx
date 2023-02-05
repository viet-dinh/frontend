import { Box } from "@mui/material";
import * as React from "react";

export interface FooterMobileProps {}

function FooterMobile(props: FooterMobileProps) {
	return <Box display={{ xs: "block", md: "none" }}>Meo!</Box>;
}

export { FooterMobile };
