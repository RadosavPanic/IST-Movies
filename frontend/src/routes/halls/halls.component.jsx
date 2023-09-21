import { IconButton, Typography, Popover, Container } from "@mui/material";
import {
  BaseContainer,
  Image,
  ImageDescription,
  ImageGroup,
  ImageItem,
  HeaderContainer,
} from "./halls.styles";
import InfoIcon from "@mui/icons-material/Info";

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectHalls } from "../../store/halls/halls.selector";

const Halls = () => {
  const halls = useSelector(selectHalls);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
  };

  return (
    <BaseContainer>
      <HeaderContainer>
        <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
          Halls
        </Typography>
      </HeaderContainer>
      <ImageGroup>
        {halls.map((hall) => (
          <ImageItem key={hall.img}>
            <Image
              src={hall.img}
              srcSet={hall.img}
              alt={hall.hallName}
              loading="lazy"
            />
            <ImageDescription
              title={`Hall: ${hall.hallName}`}
              subtitle={`Number of seats: ${hall.capacity}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${hall.title}`}
                  onClick={handleOpen}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
            <Popover
              open={popoverOpen}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: "center", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Container>
                <Typography>Name: {hall.hallName}</Typography>
                <Typography>Type: {hall.hallType}</Typography>
                <Typography>Capacity: {hall.capacity}</Typography>
                <Typography>Floor: {hall.floor}</Typography>
              </Container>
            </Popover>
          </ImageItem>
        ))}
      </ImageGroup>
    </BaseContainer>
  );
};

export default Halls;
