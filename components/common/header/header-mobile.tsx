import { Box } from "@mui/material";
import * as React from "react";

export interface HeaderMobileProps {}

function HeaderMobile(props: HeaderMobileProps) {
	return <h1 display={{ xs: "block", md: "none" }}>
		Meo Meo!!
	</h1>;
}

export { HeaderMobile };
