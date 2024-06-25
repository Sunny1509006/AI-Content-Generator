import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const HomeCard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px'}}>
            <Card >
                <CardActionArea >
                    <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                    {/* <CardMedia
                        component="img"
                        height="100"
                        width="1"
                        image="/images/wordpress-logo.png"
                        alt="green iguana"
                    /> */}
                    <img src='/images/wordpress-logo.png' style={{height: '140px'}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Auto post to WordPress
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Bulk article draft, schedule and publish options available from Faisaliteb AI to your site automatically!
                        </Typography>
                    </CardContent>
                    </div>
                </CardActionArea>
            </Card>
            <Card >
                <CardActionArea>
                <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                    {/* <CardMedia
                        component="img"
                        // height="140"
                        image=""
                        alt="green iguana"
                    /> */}
                    <img src='/images/seo.png' style={{height: '140px'}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        SEO Friendly Contents
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Strike the perfect balance by crafting content that is not only search engine optimized but also captivates human readers.
                        </Typography>
                    </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}
