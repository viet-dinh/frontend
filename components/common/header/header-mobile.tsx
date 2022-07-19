import { Box } from "@mui/material";
import * as React from "react";

export interface HeaderMobileProps {}

function HeaderMobile(props: HeaderMobileProps) {
	return <Box display={{ xs: "block", md: "none" }}>HEADER mobile</Box>;
}

export { HeaderMobile };
