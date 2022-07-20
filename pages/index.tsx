import { useAuth } from "@/hook";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const { session, signIn, signOut } = useAuth();

	return (
		<Box>
			<Box>
				<Typography variant="h1" color="primary.main">
					Xin chào con gà {session ? session.user.name : "ẩn danh"}
				</Typography>
			</Box>
			<Container maxWidth="sm" sx={{ backgroundColor: "#f3d" }}>
				Container SM
			</Container>
			<Container sx={{ backgroundColor: "#ff2" }}>Container Md</Container>
		</Box>
	);
};

export default Home;
