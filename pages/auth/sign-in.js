import { Box, Button, Container } from "@mui/material";
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
			<Container>
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => signIn(provider.id)}
						>
							Sign in with {provider.name}
						</Button>
					</div>
				))}
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
