import { useAuth } from "@/hook/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export interface AuthProps {
	children: any;
}

export default function Auth({ children }: AuthProps) {
	const router = useRouter();
	const { session, status, signIn, signOut } = useAuth();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/login");
		}
	}, [router, status]);

	if (!session) {
		return <div>...Loading</div>;
	}

	return <div>{children}</div>;
}
