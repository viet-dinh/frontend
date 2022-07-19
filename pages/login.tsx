import { useAuth } from "@/hook/auth";
import { authRequest } from "@/request";
import { useRouter } from "next/router";
import * as React from "react";

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
	const { profile, login, logout } = useAuth();
	const router = useRouter();

	if (profile?.username) {
		router.push("/");
	}

	const handleLogin = async () => {
		await login();
		console.log("redirect dashboard");
	};

	return (
		<div>
			<h1>Login page</h1>

			<div>Profile: {JSON.stringify(profile || {})}</div>

			<button onClick={() => login()}> Login </button>
			<button onClick={logout}> Logout</button>
		</div>
	);
}
