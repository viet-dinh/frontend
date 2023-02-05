import { useAuth } from "@/hook";
import MainLayout from "@/layout/main";
import { NextPageWithLayout } from "@/models";
import { Box, Container } from "@mui/system";
import { Configuration, CreateCompletionRequestPrompt, OpenAIApi } from "openai";
import { useEffect, useState } from "react";
import {MessageRight, MessageLeft} from "./Message"
import moment from 'moment';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";


export interface ChatGPTPageProps {}

const createMessage = (time: any, body: any, isGPT: any) => {
	return {
		time: time,
		body: body,
		isGPT:isGPT
	}
}

const getCurrentDate = () => {
	console.log(process.env.CHATGPT_SECRET)
	return moment().format('DD/MM/YYYY, h:mm:ss a');
}

const ChatGPTPage: NextPageWithLayout = (props: ChatGPTPageProps) => {
	//const { session, signIn, signOut } = useAuth();

	const [response, setResponse] = useState<string>('');
	const [isFetching, setIsFetching] = useState(false);
	const [question, setQuestion] = useState<string>('');
	const [messages, setMessages] = useState(() => [
		createMessage(getCurrentDate(), 'Ask me anything?', true)
	]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuestion(event.target.value);
	  };

	const findAnswer = () => {
		if (!question) {
			return;
		}

		const prompt = question;

		setQuestion('');

		console.log(process.env.CHATGPT_SECRET)
		console.log(process.env.FACEBOOK_CLIENT_SECRET)
		
 
		setMessages(messages => [...messages, createMessage(getCurrentDate(), question, false), createMessage(getCurrentDate(), <LinearProgress/>, true)])

		setIsFetching(true);

		fetch(`/api/chatgpt?question=${prompt}`)
		.then(res => res.json())
		.then(data => {
			setIsFetching(false);
			setMessages(messages => [...messages.slice(0,-1), createMessage(getCurrentDate(), data?.answer ?? '', true)])
		  }).catch(e => {
			setIsFetching(false);
			setMessages(messages => [...messages.slice(0,-1), createMessage(getCurrentDate(), 'Xin lỗi tôi hết tiền :)))', true)])
		  });
	}
	
	return (
		<Box>
			<Box 
			sx={{
				// height: '50vh',
				// minHeight: '50%',//change here,
				// overflow: 'auto',
			}}>
				<Box sx={{
					marginBottom: '50px'
					}}>
					{messages.map((message, index)=> {
						if (!message.isGPT) {
							return <MessageRight
							key={index}
							message={message.body}
							timestamp={message.time}
							avatarDisp={false}
							/>
						}

						return <MessageLeft
						key={index}
						message={message.body}
						timestamp={message.time}
						photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
						displayName="My name is Vàng"
						avatarDisp={true}
					  />
					})}
				</Box>

			<FormControl sx={{width: "100%"}}>
				<InputLabel htmlFor="chat">{!isFetching ? "Enter your question" : "Please wait meoooo"}</InputLabel>
				<OutlinedInput
				fullWidth
				disabled={isFetching}
				id="chat"
				label="Enter Your question"
				defaultValue=""
				value={question}
				onChange={handleChange}
				endAdornment={
					<InputAdornment position="end">
					  <IconButton
						aria-label="toggle password visibility"
						onClick={() => findAnswer()}
						edge="end"
					  >
						  <SendIcon/>
					  </IconButton>
					</InputAdornment>
				  }
				onKeyUp={e => {

					if(e.keyCode != 13){
						return;
					}
					if(isFetching){
						return
					}

					findAnswer();
				}}
				/>
			</FormControl>
			</Box>
		</Box>
	);
};

ChatGPTPage.Layout = MainLayout;

export default ChatGPTPage;
