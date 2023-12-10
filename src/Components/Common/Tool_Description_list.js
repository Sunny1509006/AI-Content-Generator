import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Tool_Description_list = ({item, description}) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
           
            <Typography variant="h5" component="div" color="#FF4A17" style={{fontWeight: 'bold'}}>
              
              {item}

            </Typography>
            <Typography color="#445658" style={{fontSize: '16px', marginTop: '20px'}}>
              {description}
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography> */}
            {/* <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};
