import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
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
	const { data: session } = useSession();
	const { profile } = useAuth({ revalidateOnMount: true });

	const loginPayload =
		session || profile
			? {
					label: "Sign out",
					path: "/logout",
			  }
			: {
					label: "Sign In",
					path: "/login",
			  };

	const NAVS = [...ROUTE_LIST, loginPayload];

	return (
		<Box display={{ xs: "none", md: "block" }} py={2}>
			<Container>
				<Stack direction="row" justifyContent={"flex-end"}>
					{NAVS.map((route) => {
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
				</Stack>
			</Container>
		</Box>
	);
}

export { HeaderDesktop };
