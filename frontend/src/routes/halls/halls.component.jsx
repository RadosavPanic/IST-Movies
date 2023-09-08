import { IconButton, Typography } from "@mui/material";
import {
  BaseContainer,
  Image,
  ImageDescription,
  ImageGroup,
  ImageItem,
  HeaderContainer,
} from "./halls.styles";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
  {
    img: "https://live.staticflickr.com/65535/53174029458_41cea520da_z.jpg",
    hallNumber: "1A",
    hallType: "3D",
  },
  {
    img: "https://live.staticflickr.com/65535/53173542226_b56ac47a30_z.jpg",
    hallNumber: "1B",
    hallType: "3D",
  },
  {
    img: "https://live.staticflickr.com/65535/53174109603_24d89d74a5_z.jpg",
    hallNumber: "2A",
    hallType: "6D",
  },
  {
    img: "https://live.staticflickr.com/65535/53173980415_9e8ba6da9f_z.jpg",
    hallNumber: "2B",
    hallType: "4D",
  },
  {
    img: "https://live.staticflickr.com/65535/53174029063_e64704b779_z.jpg",
    hallNumber: "2BS",
    hallType: "6D",
  },
  {
    img: "https://live.staticflickr.com/65535/53172949157_8115958378_z.jpg",
    hallNumber: "3AS",
    hallType: "6D",
  },
  {
    img: "https://live.staticflickr.com/65535/53172949102_f06264c81c_z.jpg",
    hallNumber: "3B",
    hallType: "2D",
  },
  {
    img: "https://live.staticflickr.com/65535/53173743044_680f1d9c55_z.jpg",
    hallNumber: "4A",
    hallType: "3D",
  },
  {
    img: "https://live.staticflickr.com/65535/53173980095_0cbd2670fb_z.jpg",
    hallNumber: "4B",
    hallType: "3D",
  },
  {
    img: "https://live.staticflickr.com/65535/53172949422_a5c94fb75f_z.jpg",
    hallNumber: "4C",
    hallType: "3D",
  },
  {
    img: "https://live.staticflickr.com/65535/53174028898_038b9a4a12_z.jpg",
    hallNumber: "5B",
    hallType: "3D",
  },
  {
    img: "https://live.staticflickr.com/65535/53174028818_7c98491042_z.jpg",
    hallNumber: "6DS",
    hallType: "6D",
  },
];

const Halls = () => {
  return (
    <BaseContainer>
      <HeaderContainer>
        <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
          Halls
        </Typography>
      </HeaderContainer>
      <ImageGroup>
        {itemData.map((item) => (
          <ImageItem key={item.img}>
            <Image
              src={item.img}
              srcSet={item.img}
              alt={item.hallNumber}
              loading="lazy"
            />
            <ImageDescription
              title={`Hall: ${item.hallNumber}`}
              subtitle={`Projection: ${item.hallType}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageItem>
        ))}
      </ImageGroup>
    </BaseContainer>
  );
};

export default Halls;
