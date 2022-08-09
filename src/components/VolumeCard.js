import React, { useState } from 'react';
import { Card, CardContent, CardActions, Box, Typography, Slider,} from '@mui/material';
import { VolumeUp, VolumeDown } from '@mui/icons-material';

const VolumeCard = () => {
    const [volume, setVolume] = useState(" ");
    const [notification, setNotification] = useState({
        online:" ",
    });
    const handleSound = (e, changeVolume) => {
        setVolume(changeVolume)
        if (changeVolume > 80) {
          setNotification({
            ...notification,
            volume:
              "Listening to music at a high volume could cause long-term hearing loss.",
          })
        } else {
          setNotification({ ...notification, volume: " " })
        }
      };
    
return (
 
<Card>

<Box sx={{ width: 400, height: 200}}>
<CardContent>
            
<Typography variant="h5" component="div">
    
 Volume

</Typography>
<CardActions>           
<VolumeDown />
<Slider size="small" aria-label="Small" value={volume} onChange={handleSound} valueLabelDisplay="auto"/>
<VolumeUp />
</CardActions>
<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
{notification.volume}
</Typography>

</CardContent>
</Box>

</Card>

    );
}

export default VolumeCard;
