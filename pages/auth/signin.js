import { Box, Button } from "@mui/material";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
	return (
		<Box>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<Button onClick={() => signIn(provider.id)}>
						Sign in with {provider.name}
					</Button>
				</div>
			))}
		</Box>
	);
}

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
