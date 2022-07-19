import { useAuth } from "@/hook/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export interface AuthProps {
	children: any;
}

export default function Auth({ children }: AuthProps) {
	const [originUrl, setOriginUrl] = useState("");
	const router = useRouter();
	const { profile, login } = useAuth({ revalidateOnMount: true });

	console.log(profile);
	useEffect(() => {
		if (profile !== undefined && !profile?.username) {
			console.log(profile);
			router.push("/login");
		}
	}, [router, profile]);

	if (!profile?.username) {
		return <div>...Loading</div>;
	}

	return <div>{children}</div>;
}
