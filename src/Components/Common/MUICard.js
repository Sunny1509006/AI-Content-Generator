import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ imglocation, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{minWidth: '30%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imglocation}
          alt="green iguana"
          style={{padding: '30px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
