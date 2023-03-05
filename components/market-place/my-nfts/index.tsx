import AdminLayout from "@/layout/admin";
import * as React from "react";
import { NextPageWithLayout } from "../../../models";
import { ChainId, ThirdwebProvider, ConnectWallet, useContract, useActiveListings, MediaRenderer, useAddress, useOwnedNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import { BigNumber } from "ethers";

export interface IMyNFTsProps {}

const MyNFTs: NextPageWithLayout = (props: IMyNFTsProps) => {
	const address = useAddress();
    const {contract} = useContract('0xB91e51Fc0549FC9c69cA1ac48756254eB578Ee18');
    const { data, isLoading, error } = useOwnedNFTs(
        contract,
        address,
    );

    console.log(data);
    if (!address) {
        return 'Please login web 3 your wallet';
    }

	return <div>
        <Box> List your NFT:</Box>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
        <div>
            {data?.length === 0 && 'Please buy NFT to hold'}
            {data?.map((nft) => (
            <span>
            <ThirdwebNftMedia
                key={nft.metadata.id}
                metadata={nft.metadata}
                height={'200px'}
            />
            <Typography>{nft.name}</Typography>
            </span>
            ))}
        </div>
        )}
  </div>;
};

export default MyNFTs;
