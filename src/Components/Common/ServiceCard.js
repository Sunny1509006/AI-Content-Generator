// import React from 'react'
// import "./ServiceCard.css"

// export const ServiceCard = () => {
//     return (
//         <div className="card">
//           <img src="/images/no_image.jpg" alt="Card" />
//           <div className="card-content">
//             <h2>Card Header</h2>
//             <p>This is a sample paragraph for the card.</p>
//           </div>
//         </div>
//       );
//     };

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ServiceCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/no_image.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}