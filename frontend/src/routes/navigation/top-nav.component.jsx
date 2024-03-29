import { ReactComponent as ISTMoviesIcon } from "../../assets/ist-movies.svg";

import { Toolbar, IconButton } from "@mui/material";

import { TopNavBar, TopNavBarText, LinkStack, NavLink } from "./top-nav.styles";

const TopNavigation = () => {
  return (
    <TopNavBar>
      <Toolbar>
        <IconButton edge="start" href="/" disableRipple>
          <ISTMoviesIcon />
        </IconButton>

        <TopNavBarText variant="h6">IST Movies</TopNavBarText>

        <LinkStack
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <NavLink underline="hover" href="/">
            Home
          </NavLink>

          <NavLink underline="hover" href="movies">
            All Movies
          </NavLink>

          <NavLink underline="hover" href="halls">
            Halls
          </NavLink>

          <NavLink underline="hover" href="reservations">
            Reservations
          </NavLink>

          <NavLink underline="hover" href="manipulation">
            Manipulation
          </NavLink>
        </LinkStack>
      </Toolbar>
    </TopNavBar>
  );
};

export default TopNavigation;
