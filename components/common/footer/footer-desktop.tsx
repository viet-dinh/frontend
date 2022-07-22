import { Box, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export interface FooterDesktopProps {}

function FooterDesktop(props: FooterDesktopProps) {
	return (
		<Box
			sx={{
				backgroundColor: "#474646",
				padding: "60px 90px 32px 90px",
				color: "white",
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
					<Stack direction={"row"} spacing={10}>
						<Stack spacing={1} maxWidth="400px">
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua
							</Typography>
							<Stack direction={"row"} spacing={1}>
								<FacebookIcon />
								<TwitterIcon />
							</Stack>
						</Stack>

						<Stack spacing={1}>
							<Stack direction={"row"} spacing={1}>
								<MailOutlineIcon />
								<Typography>dinhquocvietpro@gmail.com</Typography>
							</Stack>
							<Stack direction={"row"} spacing={1}>
								<LocationOnIcon />
								<Typography>
									71/6 Chu Văn AnPhường 26, Bình Thạnh, Thành phố Hồ Chí
									Minh
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
		</Box>
	);
}

export { FooterDesktop };
