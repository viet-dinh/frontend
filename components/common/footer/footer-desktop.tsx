import { Box, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Container } from "@mui/system";

export interface FooterDesktopProps {}

function FooterDesktop(props: FooterDesktopProps) {
	return (
		<Box
			sx={{
				backgroundColor: "#474646",
				color: "white",
			}}
		>
			<Container
				sx={{
					paddingTop: "40px",
					paddingBottom: "40px",
				}}
			>
				<Stack spacing={2}>
					<Typography
						sx={{
							fontFamily: "Oleo Script",
							fontSize: 24,
						}}
					>
						VIETTECH
					</Typography>
					<Box>
						<Stack direction={"row"}>
							<Stack
								spacing={1}
								flexGrow="1"
								maxWidth={"50%"}
								paddingRight="16px"
							>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua
								</Typography>
								<Stack direction={"row"} spacing={1}>
									<FacebookIcon />
									<TwitterIcon />
								</Stack>
							</Stack>

							<Stack spacing={1} flexGrow="1">
								<Stack direction={"row"} spacing={1}>
									<MailOutlineIcon />
									<Typography>dinhquocvietpro@gmail.com</Typography>
								</Stack>
								<Stack direction={"row"} spacing={1}>
									<LocationOnIcon />
									<Typography>
										71/6 Chu Văn AnPhường 26, Bình Thạnh, Thành phố Hồ
										Chí Minh
									</Typography>
								</Stack>
								<Stack direction={"row"} spacing={1}>
									<LocalPhoneIcon />
									<Typography>0397167138</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}

export { FooterDesktop };
