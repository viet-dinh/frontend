import { useAuth } from "@/hook";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import ControlledAccordions from "@/components/accordions/controlled-accordions";

const Home: NextPage = () => {
	const { session, signIn, signOut } = useAuth();

	return (
		<Box>
			<Container>
				<Stack
					sx={{
						backgroundImage: `url("\home.jpg")`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						height: "527px",
					}}
				>
					<Box
						sx={{
							color: "#fff",
							marginTop: "131px",
							marginLeft: "107px",
							maxWidth: "600px",
						}}
					>
						<Typography
							sx={{
								fontWeight: 700,
								fontSize: "64px",
							}}
						>
							Chào {session ? session.user.name : "ẩn danh"}
						</Typography>
						<Typography variant="subtitle1">
							Pellentesque tempus mollis eleifend. Nullam facilisis orci
							eget blandit volutpat. Etiam interdum enim eget leo porttitor,
							eu hendrerit augue molestie. Etiam odio nulla, rhoncus vel
							risus sed, ultricies facilisis ante. Sed imperdiet diam leo.
						</Typography>
					</Box>

					<Typography variant="h1" color="primary.main"></Typography>
				</Stack>

				<Box marginY={4}>
					<ControlledAccordions />
				</Box>
			</Container>
		</Box>
	);
};

export default Home;
