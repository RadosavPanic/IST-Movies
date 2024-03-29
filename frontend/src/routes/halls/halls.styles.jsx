import styled from "styled-components";
import {
  ImageList,
  Container,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

export const BaseContainer = styled(Container)`
  margin: 40px 0;
  height: 100%;
`;

export const HeaderContainer = styled(Container)`
  margin-top: 40px;
`;

export const ImageGroup = styled(ImageList)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr !important;
  grid-template-rows: 1fr 1fr 1fr !important;
  -webkit-user-drag: none;
  user-select: none;
`;

export const ImageItem = styled(ImageListItem)`
  padding: 10px 20px;
`;

export const Image = styled.img`
  border-radius: 25% 5% 0 0;
  -webkit-user-drag: none;
  user-select: none;
  width: 100%;
  height: 250px;
`;

export const ImageDescription = styled(ImageListItemBar)`
  width: 60%;
  margin-left: 20%;
  border-radius: 20% 0% 20% 0%;
  background-color: rgba(255, 50, 0, 1) !important;
  user-select: none;
`;
