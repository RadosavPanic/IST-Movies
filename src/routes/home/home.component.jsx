import { Fragment } from "react";

import MoviesPreview from "../../components/movies-preview/movies-preview.component";

import { Typography } from "@mui/material";

import { HeaderContainer } from "./home.styles";

const Home = () => {
  return (
    <Fragment>
      <main>
        <HeaderContainer maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Lights, Camera, Action!
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            Dive into the cinematic universe - travel through time and space,
            meet unforgettable characters, and immerse yourself in the art of
            storytelling like never before.
          </Typography>
        </HeaderContainer>

        <MoviesPreview />
      </main>
    </Fragment>
  );
};

export default Home;
