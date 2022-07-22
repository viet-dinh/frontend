import { Box, Button, Container, Stack } from "@mui/material";
import { getProviders, signIn } from "next-auth/react";
import { useAuth } from "@/hook/auth";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
	const { session, status, signIn, signOut } = useAuth();
	const router = useRouter();

	if (status === "authenticated") {
		router.push("/");
	}

	return (
		<Box>
			<Container
				sx={{
					paddingTop: 2,
				}}
			>
				<Stack spacing={1} alignItems="center">
					{Object.values(providers).map((provider) => (
						<Box maxWidth={"200px"} key={provider.name}>
							<Button
								variant="outlined"
								color="info"
								onClick={() => signIn(provider.id)}
							>
								Sign in with {provider.name}
							</Button>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	);
}

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
