import { Box, Container, Stack, Link as MuiLink, Button } from "@mui/material";
import * as React from "react";
import { ROUTE_LIST } from "./routes";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useAuth } from "@/hook";

export interface HeaderDesktopProps {}

function HeaderDesktop(props: HeaderDesktopProps) {
	const router = useRouter();
	const { status, signIn, signOut } = useAuth();

	const SignButton =
		status === "authenticated" ? (
			<Button onClick={() => signOut()} variant="contained" color="success">
				Log Out
			</Button>
		) : (
			<Button onClick={() => signIn()} variant="outlined" color="error">
				Login
			</Button>
		);

	<Button variant="outlined" color="error">
		Error
	</Button>;

	return (
		<Box display={{ xs: "none", md: "block" }} py={2}>
			<Container>
				<Stack direction="row" justifyContent={"flex-end"} alignItems="center">
					{ROUTE_LIST.map((route) => {
						console.log(router.pathname);
						return (
							<Link key={route.path} passHref href={route.path}>
								<MuiLink
									className={clsx({
										active: route.path === router.pathname,
									})}
									marginLeft={2}
									fontWeight={"medium"}
								>
									{route.label}
								</MuiLink>
							</Link>
						);
					})}
					<Box marginLeft={2}>{SignButton}</Box>
				</Stack>
			</Container>
		</Box>
	);
}

export { HeaderDesktop };
