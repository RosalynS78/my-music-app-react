import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActions,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const PlayCard = () => {
  const theme = useTheme();
  const [play, setPlay] = useState({
    isPlaying: true,
  });

  const [notification, setNotification] = useState({
    play: " ",
  });

  const handlePlay = (e) => {
    setPlay({ ...play, [e.target.name]: e.target.checked });
    if (!e.target.checked) {
      setNotification({
        ...notification,
        play: "Thriller",
      });
    } else {
      setNotification({ ...notification, play: " " });
    }
  };

  return (
    <Card>
      <Box sx={{ width: 300, height: 300 }}>
        <CardContent>
          <Typography component="div" variant="h5">
            Music
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Michael Jackson
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardActions>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>

            <IconButton
              checked={play.isPlaying}
              onClick={handlePlay}
              value={play}
              aria-label="play/pause"
            >
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>

            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </CardActions>
        </Box>
        <Typography
          m={10}
          sx={{ fontSize: 25 }}
          color="text.secondary"
          gutterBottom
        >
          {notification.play}
        </Typography>
      </Box>
    </Card>
  );
};

export default PlayCard;
