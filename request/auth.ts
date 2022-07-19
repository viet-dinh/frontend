import { LoginPayload } from "@/models";
import { axiosClient } from "@/request";

export const authRequest = {
	login: (loginPayload: LoginPayload) => {
		return axiosClient.post("/login", loginPayload);
	},
	logout: () => {
		return axiosClient.post("/logout");
	},
	getProfile: () => {
		return axiosClient.get("/profile");
	},
};
