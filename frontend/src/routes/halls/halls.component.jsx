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
  const [selectedHall, setSelectedHall] = useState(null);

  const handleOpen = (event, hall) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
    setSelectedHall(hall);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
    setSelectedHall(null);
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
                  onClick={(event) => handleOpen(event, hall)}
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
              {selectedHall && (
                <Container>
                  <Typography>Name: {selectedHall.hallName}</Typography>
                  <Typography>Type: {selectedHall.hallType}</Typography>
                  <Typography>Capacity: {selectedHall.capacity}</Typography>
                  <Typography>Floor: {selectedHall.floor}</Typography>
                </Container>
              )}
            </Popover>
          </ImageItem>
        ))}
      </ImageGroup>
    </BaseContainer>
  );
};

export default Halls;
