import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";

export interface SummaryProps {}

export default function Summary(props: SummaryProps) {
	return (
		<Box component={"section"}>
			<Container>
				<Stack direction={"row"} alignItems="flex-start"></Stack>
			</Container>
		</Box>
	);
}
