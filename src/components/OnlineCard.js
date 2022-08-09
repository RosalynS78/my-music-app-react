import React, { useState } from 'react';
import { Card, CardActions, CardContent, Box, Typography, Switch } from "@mui/material";

const OnlineCard = () => {
    const [ online, setOnline ] = useState({
        isOnline: true,
        offLine: false
    });
   
    const [ notification, setNotification ] = useState({
        online: " "
});

const handleOnline = (e) => {
    // conditional statement true or false
    // Use the target. checked property on the event object to check if a checkbox is checked in React,
    // spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
    setOnline({ ...online, [e.target.name]: e.target.checked })
        if (!e.target.checked) {
            setNotification({
                ...notification,
                online:
                  "Your application is offline. You won't be able to share or stream music to other devices.",
              });
            } else {
              setNotification({ ...notification, online: " " });
            }
};
    return (
<Card>
    
<Box sx={{ width: 400, height: 300}}>
<CardContent>

<Typography variant="h5" component="div">
  
    Connection

</Typography>
<CardActions>
<Switch checked={online.isOnline} onChange={handleOnline} name="isOnline" inputProps={{ "aria-label":"secondary checkbox" }}
 />
</CardActions>
<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
{notification.online}
</Typography>

</CardContent>
</Box>

</Card>
    );
}

export default OnlineCard;
