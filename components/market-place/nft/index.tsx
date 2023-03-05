import { NextPageWithLayout } from "../../../models";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface NFT {
    name: string;
    src: string;
    value: number;
    description: string;
  }

export interface INFTProps {
    nft: NFT,
    onClick: any,
}

const NFT: NextPageWithLayout = (props: INFTProps) => {
    const {nft: {name, src, value, description}, onClick} = props;

	return  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        image={src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button onClick={onClick} size="small" color="primary">
        Buy Now
      </Button>
    </CardActions>
  </Card>
};

export default NFT;
