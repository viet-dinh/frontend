import Cookies from "cookies";
import httpProxy from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, CreateCompletionRequestPrompt, OpenAIApi } from "openai";
var CryptoJS = require("crypto-js");



const API_URL = process.env.API_URL || "https://js-post-api.herokuapp.com";
const proxy = httpProxy.createProxyServer();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const bytes  = CryptoJS.AES.decrypt(process.env.CHATGPT_SECRET, 'aza');

		const key = bytes.toString(CryptoJS.enc.Utf8);
		const configuration = new Configuration({
			organization: "org-6pOkSCD9aNlSwnwhQ0FLUujA",
			apiKey: key,
		});

		const openai = new OpenAIApi(configuration);

		const { question } = req.query
		openai.createCompletion({
			model: "text-davinci-003",
			prompt: question ?? '',
			max_tokens: 4000,
			temperature: 0,
		  }).then(data => {
			res.status(200).json({answer: data?.data?.choices[0]?.text});
		  }).catch(e => {
			//console.log(e.response)
			res.status(500).json({ error: 'error'});
		  });
 
	}
}
