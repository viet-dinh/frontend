import * as React from "react";
import { NextPageWithLayout } from "../models";
import { ChainId, ThirdwebProvider, ConnectWallet, useContract, useActiveListings, MediaRenderer } from "@thirdweb-dev/react";
import { Box } from "@mui/system";
import MarketPlace from "@/components/market-place";

export interface IMarketPlacePageProps {}

const CURRENT_CHAIN_ID = ChainId.Polygon; 

const MarketPlacePage: NextPageWithLayout = (props: IMarketPlacePageProps) => {
	return <Box>
		<MarketPlace/>
  </Box>;
};

export default MarketPlacePage;
