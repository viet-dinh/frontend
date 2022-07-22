import {
	Box,
	Container,
	Stack,
	Link as MuiLink,
	Button,
	AppBar,
	Toolbar,
	Typography,
	Tooltip,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import * as React from "react";
import { ROUTE_LIST } from "./routes";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useAuth } from "@/hook";
import { styled } from "@mui/material/styles";

export interface HeaderDesktopProps {}

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function HeaderDesktop(props: HeaderDesktopProps) {
	const router = useRouter();
	const { session, status, signIn, signOut } = useAuth();
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const SignButton =
		status === "authenticated" ? (
			<Box sx={{ flexGrow: 0 }}>
				<Tooltip title="Open settings">
					<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
						<Avatar
							sx={{ width: 42, height: 42 }}
							alt={session?.user?.name}
							src={session?.user?.image}
						/>
					</IconButton>
				</Tooltip>
				<Menu
					sx={{ mt: "45px" }}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					{settings.map((setting) => {
						let handleClick = handleCloseUserMenu;

						if ("Profile" === setting) {
							handleClick = () => router.push("/profile");
						}

						if ("Logout" === setting) {
							handleClick = () => signOut("/");
						}

						return (
							<MenuItem key={setting} onClick={handleClick}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						);
					})}
				</Menu>
			</Box>
		) : (
			<Button
				sx={{ borderRadius: 21, width: 102, height: 40 }}
				onClick={() => signIn()}
				variant="outlined"
				color="primary"
			>
				<Typography variant="subtitle2">Login</Typography>
			</Button>
		);

	<Button variant="outlined" color="error">
		Error
	</Button>;

	return (
		<Box display={{ xs: "none", md: "block" }}>
			<AppBar position="fixed">
				<Container>
					<Toolbar disableGutters>
						<Stack
							direction="row"
							justifyContent="center"
							alignItems="center"
							width={"100%"}
						>
							<Stack
								direction="row"
								justifyContent={"flex-start"}
								alignItems="center"
								justifySelf={"flex-start"}
							>
								{ROUTE_LIST.map((route) => {
									console.log(router.pathname);
									return (
										<Link key={route.path} passHref href={route.path}>
											<MuiLink
												className={clsx({
													active:
														route.path === router.pathname,
												})}
												marginRight={4}
												sx={{
													fontSize: 14,
													fontWeight: 500,
												}}
											>
												{route.label}
											</MuiLink>
										</Link>
									);
								})}
							</Stack>

							<Box sx={{ flexGrow: 1, textAlign: "center" }}>
								<Typography
									sx={{
										fontFamily: "Oleo Script",
										fontSize: 24,
										position: "absolute",
										top: "50%",
										left: "50%",
										marginTop: "-18px",
										marginLeft: "-50px",
									}}
								>
									VIETTECH
								</Typography>
							</Box>

							<Box marginLeft={2}>{SignButton}</Box>
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
			<Container></Container>
		</Box>
	);
}

export { HeaderDesktop };
