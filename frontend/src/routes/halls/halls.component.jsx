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

const hallsData = [
  {
    img: "https://live.staticflickr.com/65535/53174029458_41cea520da_z.jpg",
    hallName: "1A",
    hallType: "2D",
    capacity: 75,
    floor: 1,
  },
  {
    img: "https://live.staticflickr.com/65535/53173542226_b56ac47a30_z.jpg",
    hallName: "1B",
    hallType: "3D",
    capacity: 29,
    floor: 4,
  },
  {
    img: "https://live.staticflickr.com/65535/53174109603_24d89d74a5_z.jpg",
    hallName: "2A",
    hallType: "3D",
    capacity: 90,
    floor: 3,
  },
  {
    img: "https://live.staticflickr.com/65535/53173980415_9e8ba6da9f_z.jpg",
    hallName: "2B",
    hallType: "2D",
    capacity: 120,
    floor: 2,
  },
  {
    img: "https://live.staticflickr.com/65535/53174029063_e64704b779_z.jpg",
    hallName: "2BS",
    hallType: "3D",
    capacity: 40,
    floor: 5,
  },
  {
    img: "https://live.staticflickr.com/65535/53172949157_8115958378_z.jpg",
    hallName: "3AS",
    hallType: "3D",
    capacity: 67,
    floor: 5,
  },
  {
    img: "https://live.staticflickr.com/65535/53172949102_f06264c81c_z.jpg",
    hallName: "3B",
    hallType: "2D",
    capacity: 100,
    floor: 2,
  },
  {
    img: "https://live.staticflickr.com/65535/53173743044_680f1d9c55_z.jpg",
    hallName: "4A",
    hallType: "2D",
    capacity: 35,
    floor: 1,
  },
  {
    img: "https://live.staticflickr.com/65535/53173980095_0cbd2670fb_z.jpg",
    hallName: "4B",
    hallType: "2D",
    capacity: 70,
    floor: 2,
  },
  {
    img: "https://live.staticflickr.com/65535/53172949422_a5c94fb75f_z.jpg",
    hallName: "4C",
    hallType: "2D",
    capacity: 43,
    floor: 4,
  },
  {
    img: "https://live.staticflickr.com/65535/53174028898_038b9a4a12_z.jpg",
    hallName: "5B",
    hallType: "2D",
    capacity: 80,
    floor: 3,
  },
  {
    img: "https://live.staticflickr.com/65535/53174028818_7c98491042_z.jpg",
    hallName: "6DS",
    hallType: "3D",
    capacity: 14,
    floor: 1,
  },
];

const Halls = () => {
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
        {hallsData.map((hall) => (
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
