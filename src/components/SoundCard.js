import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const SoundCard = () => {
  // 1 -low 2-medium 3 normal
  // set default to normal
  const [quality, setQuality] = useState("2");
  const [notification, setNotification] = useState({
    quality: " ",
  });

  const handleQuality = (e) => {
    setQuality(e.target.value);
    // is exactly equal to
    if (e.target.value === "1") {
      setNotification({
        ...notification,
        quality:
          "System Notifications: Music quality is degraded. Increase quality if your connection allows it.",
      });
    } else {
      setNotification({
        ...notification,
        quality: " ",
      });
    }
  };

  return (
    <Card>
      <Box sx={{ width: 400, height: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Sound Quality
          </Typography>
          <CardActions>
            <FormControl fullWidth>
              <Select
                value={quality}
                onChange={handleQuality}
                style={{ width: 300 }}
              >
                <MenuItem value={"1"}>Low</MenuItem>
                <MenuItem value={"2"}>Normal</MenuItem>
                <MenuItem value={"3"}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
          <br />
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {notification.quality}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SoundCard;
