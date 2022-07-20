import Cookies from "cookies";
import httpProxy from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.API_URL || "https://js-post-api.herokuapp.com";
const proxy = httpProxy.createProxyServer();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST" || req.method === "GET") {
		const cookies = new Cookies(req, res);
		const accessToken = cookies.get("access_token");

		if (!accessToken) {
			return res.status(200).json({ message: "Already logout" });
		}

		cookies.set("access_token");
		res.status(200).json({ message: "Logout successfully" });
	}
}
