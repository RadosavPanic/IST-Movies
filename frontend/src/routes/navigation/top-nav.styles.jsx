import { AppBar, Stack, Typography, Link } from "@mui/material";
import styled from "styled-components";

export const TopNavBar = styled(AppBar)`
  position: sticky !important;
  background-color: #e5e7e9 !important;
`;

export const TopNavBarText = styled(Typography)`
  margin-left: 16px !important; // ml={2} je 2*8px = 16px

  font-family: "Roboto", monospace !important;
  font-weight: 700 !important;
  letter-spacing: 0.2rem !important;

  white-space: nowrap; // kao noWrap u MUI
  text-decoration: none;
  color: #d32f2f; // isto kao i error.main iz palete
`;

export const LinkStack = styled(Stack)`
  margin-left: auto;
  display: flex;
  flex-direction: row !important;
  gap: 16px;

  & > * {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 700 !important;
  font-size: 18px !important;
  color: #d32f2f !important;
`;
