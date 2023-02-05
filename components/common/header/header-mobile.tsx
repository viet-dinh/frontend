import { Box, Typography } from "@mui/material";
import * as React from "react";

export interface HeaderMobileProps {}

function HeaderMobile(props: HeaderMobileProps) {
	return <Box	 display={{ xs: "block", md: "none" }}>
		<Typography variant="h2">Meo meo!!</Typography>
	</Box>;
}

export { HeaderMobile };
