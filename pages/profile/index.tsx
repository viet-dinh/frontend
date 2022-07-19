import { useAuth } from "@/hook";
import AdminLayout from "@/layout/admin";
import { NextPageWithLayout } from "@/models";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import * as React from "react";

export interface ProfilePageProps {}

const ProfilePage: NextPageWithLayout = (props: ProfilePageProps) => {
	const { profile, logout } = useAuth();

	return (
		<Box>
			<Container>
				<div>Profile: {JSON.stringify(profile || {})}</div>
				<Button onClick={() => logout()}>Log out</Button>
			</Container>
		</Box>
	);
};

ProfilePage.Layout = AdminLayout;

export default ProfilePage;
