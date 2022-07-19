import { authRequest, axiosClient } from "@/request";
import axios, { Axios } from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PublicConfiguration, SWRResponse } from "swr/dist/types";

const MILLISECOND_OF_ONE_HOUR = 60 * 60 * 1000;

interface UserProfile {
	name: string;
	username: string;
	email: string;
}

interface AuthData {
	profile: any;
	error: any;
	login: any;
	logout: any;
}

const useAuth = (options?: Partial<PublicConfiguration>): AuthData => {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR(
		"/profile",
		async () => {
			try {
				return await axiosClient.get("/profile");
			} catch ($e) {
				return null;
			}
		},
		{
			dedupingInterval: MILLISECOND_OF_ONE_HOUR,
			revalidateOnFocus: false,
			revalidateOnMount: false,
			...options,
		}
	);

	const router = useRouter();

	const login = async (redirectTo?: string) => {
		await authRequest.login({
			username: "hello",
			password: "hello123",
		});

		await mutate();

		if (redirectTo) {
			router.push(redirectTo);
		}
	};

	const logout = async () => {
		await authRequest.logout();
		await mutate({}, false);
		console.log("hehe");
		router.push("/");
	};

	return {
		profile,
		error,
		login,
		logout,
	};
};

export { useAuth };
