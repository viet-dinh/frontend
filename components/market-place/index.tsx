import AdminLayout from "@/layout/admin";
import * as React from "react";
import { NextPageWithLayout } from "../../models";
import { ChainId, ThirdwebProvider, ConnectWallet, useContract, useActiveListings, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import { BigNumber } from "ethers";
import MyNFTs from "./my-nfts";
import NFT from "./nft";

export interface IMarketPlaceProps {}

const MarketPlace: NextPageWithLayout = (props: IMarketPlaceProps) => {
	const {contract: marketPlaceContract} = useContract('0x69988BD908e5de40D7b1A9f0974b4F99E26952C7', 'marketplace');
	const {data, isLoading} = useActiveListings(marketPlaceContract);
	const address = useAddress();

	return	<Box>
			<Typography variant="h6">My NFTs</Typography>
			<MyNFTs></MyNFTs>
			<Typography variant="h6">Market</Typography>
			{isLoading ? <CircularProgress /> :
				<Box sx={{
					display: 'grid',  
					gap: '10px',
					gridTemplateColumns: 'repeat(4, 1fr)',
					}}>
					{data && data.map((nft, index) => {
						return <NFT nft={{
							name: nft.asset.name,
							src: nft.asset.image,
							value: 'Price: ' + nft.buyoutCurrencyValuePerToken.displayValue,
							description: 'hihi'
						}} 
						onClick={async () => {
							try {
								await marketPlaceContract?.buyoutListing(BigNumber.from(nft.id), 1)
							} catch (error) {
								alert(error?.message)
							}
						}}/>
					})}
				</Box>
				}
				
		</Box>;
};

export default MarketPlace;
