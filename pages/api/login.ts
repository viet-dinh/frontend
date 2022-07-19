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
	if (req.method !== "POST") {
		return res.status(404).json("This method is not supported");
	}

	return new Promise((resolver) => {
		proxy.web(req, res, {
			target: API_URL,
			changeOrigin: true,
			selfHandleResponse: true,
		});

		proxy.once("proxyRes", (proxyRes) => {
			let body = "";
			proxyRes.on("data", (chunk) => {
				body += chunk;
			});

			proxyRes.on("end", function () {
				const { accessToken, expiredAt } = JSON.parse(body);

				const cookies = new Cookies(req, res, {
					secure: process.env.NODE_ENV !== "development",
				});

				cookies.set("access_token", accessToken, {
					httpOnly: true,
					sameSite: "strict",
					expires: new Date(expiredAt),
				});

				(res as NextApiResponse)
					.status(200)
					.json({ message: "Login successfully" });
			});
		});
	});
}
