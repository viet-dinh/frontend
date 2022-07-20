import { useAuth } from "@/hook";
import AdminLayout from "@/layout/admin";
import { NextPageWithLayout } from "@/models";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";

export interface ProfilePageProps {}

const ProfilePage: NextPageWithLayout = (props: ProfilePageProps) => {
	const { session, signIn, signOut } = useAuth();

	return (
		<Box>
			<Container>
				<div>Profile: {JSON.stringify(session || {})}</div>
				<Button onClick={() => signOut()}>Log out</Button>
			</Container>
		</Box>
	);
};

ProfilePage.Layout = AdminLayout;

export default ProfilePage;
