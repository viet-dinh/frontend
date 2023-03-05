import { Box, Typography } from "@mui/material";
import * as React from "react";
import { HeaderDesktop } from "./header-desktop";

export interface HeaderMobileProps {}

function HeaderMobile(props: HeaderMobileProps) {
	return <Box	 display={{ xs: "block", md: "none" }}>
		<HeaderDesktop></HeaderDesktop>
	</Box>;
}

export { HeaderMobile };
