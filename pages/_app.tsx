import MainLayout from "@/layout/main";
import { axiosClient } from "@/request";
import { SWRConfig } from "swr";
import { AppPropsWithLayout } from "../models";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { createEmotionCache, theme } from "@/mui-style";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ChainId } from "@thirdweb-dev/sdk";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const CURRENT_CHAIN_ID = ChainId.Polygon; 

function MyApp({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? MainLayout;

	return (
		<SessionProvider
			// Provider options are not required but can be useful in situations where
			// you have a short session maxAge time. Shown here with default values.
			session={pageProps.session}
		>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>

					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />

					<SWRConfig
						value={{
							fetcher: (url) => axiosClient.get(url),
							shouldRetryOnError: false,
						}}
					>
						<ThirdwebProvider 
							desiredChainId={CURRENT_CHAIN_ID}
							dAppMeta={{
								name: "Viet Tech",
								isDarkMode: false,
							  }}
							>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</ThirdwebProvider>;
		
					</SWRConfig>
				</ThemeProvider>
			</CacheProvider>
		</SessionProvider>
	);
}

export default MyApp;
