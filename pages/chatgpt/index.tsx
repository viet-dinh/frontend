import { useAuth } from "@/hook";
import MainLayout from "@/layout/main";
import { NextPageWithLayout } from "@/models";
import { Box, Container } from "@mui/system";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";
import {MessageRight, MessageLeft} from "./Message"
import moment from 'moment';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';  

const configuration = new Configuration({
    organization: "org-6pOkSCD9aNlSwnwhQ0FLUujA",
    apiKey: process.env.CHATGPT || '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',
});

export interface ChatGPTPageProps {}

const createMessage = (time: any, body: any, isGPT: any) => {
	return {
		time: time,
		body: body,
		isGPT:isGPT
	}
}

const getCurrentDate = () => {
	return moment().format('DD/MM/YYYY, h:mm:ss a');
}

const ChatGPTPage: NextPageWithLayout = (props: ChatGPTPageProps) => {
	//const { session, signIn, signOut } = useAuth();

	const [response, setResponse] = useState<String>('');
	const [isFetching, setIsFetching] = useState(false);
	const [question, setQuestion] = useState<String>('');
	const [messages, setMessages] = useState(() => [
		createMessage(getCurrentDate(), 'Ask me anything?', true)
	]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuestion(event.target.value);
	  };

	const fetch = () => {
		if (!question) {
			return;
		}

		const prompt = question;

		setQuestion('');

 
		const openai = new OpenAIApi(configuration);
		setMessages(messages => [...messages, createMessage(getCurrentDate(), question, false), createMessage(getCurrentDate(), <LinearProgress/>, true)])

		setIsFetching(true);
		openai.createCompletion({
			model: "text-davinci-003",
			prompt: prompt,
			max_tokens: 200,
			temperature: 0,
		  }).then(data => {
			setIsFetching(false);
			setMessages(messages => [...messages.slice(0,-1), createMessage(getCurrentDate(), data?.data?.choices[0].text, true)])
			setResponse(data?.data?.choices[0].text);
		  });
	}

	useEffect(() => {
		fetch();
	}, [])
	
	return (
		<Box>
			<Box sx={{
				height: '1/2',
				width: '100%',
				maxHeight: '1/2'
			}}>
				<Box>
					{messages.map(message=> {
						if (!message.isGPT) {
							return <MessageRight
							message={message.body}
							timestamp={message.time}
							avatarDisp={false}
							/>
						}

						return <MessageLeft
						message={message.body}
						timestamp={message.time}
						photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
						displayName="Chat GPT"
						avatarDisp={true}
					  />
					})}
				</Box>

			<TextField
				fullWidth
				disabled={isFetching}
				id="filled-helperText"
				label="Enter Your question"
				defaultValue=""
				helperText="I wish you lots of fun!"
				variant="filled"
				value={question}
				onChange={handleChange}
				onKeyUp={e => {

					if(e.keyCode != 13){
						return;
					}
					if(isFetching){
						return
					}

					fetch();
				}}
				/>
			</Box>
		</Box>
	);
};

ChatGPTPage.Layout = MainLayout;

export default ChatGPTPage;
