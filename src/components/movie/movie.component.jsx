import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Grid,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";

import { RatingBoxContainer, MovieInfoBox } from "./movie.styles";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

const Movie = ({
  nameOfMovie,
  director,
  rating,
  yearOfRelease,
  lengthOfMovie,
  is3D,
  genres,
  image,
}) => {
  return (
    <Grid>
      <Card
        sx={{
          width: 320,
          height: 500,
          border: "1px solid black",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            height: 350,
            objectFit: "cover",
          }}
          image={image}
          alt={nameOfMovie}
        />
        <CardContent
          sx={{
            backgroundColor: "#1A2E3B",
            color: "white",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{nameOfMovie}</Typography>
          <Typography variant="p" fontSize={12} color="primary.light">
            {director}
          </Typography>

          <RatingBoxContainer>
            <Rating
              name={nameOfMovie}
              max={1}
              value={rating}
              precision={0.5}
              readOnly
            />

            <Typography
              mt={0.5}
              variant="p"
              color={"secondary.light"}
              sx={{ fontWeight: "400" }}
            >
              {Number(rating).toFixed(1)}
            </Typography>

            <Typography ml={1} component="div">
              {is3D === true ? (
                <Avatar sx={{ backgroundColor: "#1A2E3B" }}>
                  <ThreeDRotationIcon sx={{ fontSize: 30, color: "#FFD700" }} />
                </Avatar>
              ) : null}
            </Typography>
            <Stack spacing={1} direction="row">
              {genres.slice(0, 3).map((zanr) => (
                <Chip
                  sx={{ backgroundColor: "black", color: "#FFD700" }}
                  key={zanr}
                  label={zanr}
                />
              ))}
            </Stack>
          </RatingBoxContainer>

          <MovieInfoBox mt={1}>
            <Typography>{yearOfRelease}</Typography>
            <Typography>{`${Math.trunc(lengthOfMovie / 60)}h ${String(
              lengthOfMovie % 60
            ).padStart(2, "0")}m`}</Typography>
          </MovieInfoBox>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Movie;
