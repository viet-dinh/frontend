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
	const cookies = new Cookies(req, res);

	const accessToken = cookies.get("access_token");

	if (accessToken) {
		req.headers.Authorization = `Bearer ${accessToken}`;
	}

	req.headers.cookie = "";

	return new Promise((resolver) => {
		proxy.web(req, res, { target: API_URL, changeOrigin: true });
		proxy.once("proxyRes", () => resolver(true));
	});
}
