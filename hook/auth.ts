import { authRequest, axiosClient } from "@/request";
import axios, { Axios } from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PublicConfiguration, SWRResponse } from "swr/dist/types";
import {
	useSession,
	signIn as signInNextAuth,
	signOut as signOutNextAuth,
	signIn,
} from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

const MILLISECOND_OF_ONE_HOUR = 60 * 60 * 1000;

interface UserProfile {
	name: string;
	username: string;
	email: string;
}

interface AuthData {
	session: any;
	signIn: any;
	signOut: any;
	status: "unauthenticated" | "loading" | "authenticated";
}

const useAuth = (options?: Partial<PublicConfiguration>): AuthData => {
	//const [isProvider, setIsProvider] = useState(!isBasicLogin);
	const { data: session, status } = useSession();
	//const router = useRouter();

	// const {
	// 	data: profileFromBasicLogin,
	// 	error,
	// 	mutate: mutateSystem,
	// } = useSWR(
	// 	"/profile",
	// 	async () => {
	// 		try {
	// 			return await axiosClient.get("/profile");
	// 		} catch ($e) {
	// 			return null;
	// 		}
	// 	},
	// 	{
	// 		dedupingInterval: MILLISECOND_OF_ONE_HOUR,
	// 		revalidateOnFocus: false,
	// 		revalidateOnMount: false,
	// 		...options,
	// 	}
	// );

	//from providers
	// const login = async (redirectTo?: string) => {
	// 	await authRequest.login({
	// 		username: "hello",
	// 		password: "hello123",
	// 	});

	// 	await mutateSystem();

	// 	if (redirectTo) {
	// 		router.push(redirectTo);
	// 	}
	// };

	// const logout = async () => {
	// 	await authRequest.logout();
	// 	await mutateSystem({}, false);
	// 	console.log("hehe");
	// 	router.push("/");
	// };

	const signIn = useCallback(
		(providerId?: string, callbackUrl?: string) =>
			signInNextAuth(providerId || undefined, { callbackUrl: callbackUrl || "/" }),
		[]
	);

	const signOut = useCallback(
		(callbackUrl?: string) =>
			signOutNextAuth({ callbackUrl: callbackUrl || "/auth/sign-in" }),
		[]
	);

	return {
		session,
		status,
		signIn,
		signOut,
	};
};

export { useAuth };
