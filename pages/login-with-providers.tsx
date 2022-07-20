import AdminLayout from "@/layout/admin";
import * as React from "react";
import { NextPageWithLayout } from "../models";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export interface ILoginWithProvidersPageProps {}

const LoginWithProvidersPage: NextPageWithLayout = (
	props: ILoginWithProvidersPageProps
) => {
	const { data: session } = useSession();

	return (
		<div>
			{" "}
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<button onClick={() => signIn()}>SignIn</button>
			<button onClick={() => signOut()}>SingOut</button>
		</div>
	);
};

export default LoginWithProvidersPage;
