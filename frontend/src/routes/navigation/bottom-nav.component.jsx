import { Typography } from "@mui/material";
import { Footer } from "./bottom-nav.styles";

const BottomNavigation = () => {
  return (
    <Footer component="footer">
      <Typography variant="h6" gutterBottom>
        IST Movies
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        <strong>&copy;</strong> 2023 Radosav Panic. All rights reserved.
      </Typography>
    </Footer>
  );
};

export default BottomNavigation;
