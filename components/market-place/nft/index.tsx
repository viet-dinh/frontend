import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export interface INFTProps {
    nft: {
        name: any;
        src: any;
        value: any;
        description: any;
      },
    onClick: any,
    key: any
}

const NFT = (props: INFTProps) => {
    const {key, nft: {name, src, value, description}, onClick} = props;

	return  <Card key={key} sx={{ maxWidth: 345 }}>
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
