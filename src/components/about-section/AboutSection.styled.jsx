import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../../fonts/fonts";

export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "Center",
  flexDirection: "column",
  
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  maxWidth: "50rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "1.5rem",
}));

export const TechWrapper = styled(Box)(({ theme }) => ({
  height: "inherit",
  width: "inherit",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));

export const Dot = styled(Box)(({ theme }) => ({
  width: "6px",
  height: "6px",
  border: ".5px solid",
  borderColor: theme.palette.primary.main,
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
}));

export const Tech = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  fontSize: ".8rem",
  fontFamily: font.secondary,
}));

export const Left = styled(Box)(({ theme }) => ({
  color: theme.palette.text.light,
  fontSize: ".9rem",
  flex: 1.5,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  lineHeight: "1.5",
}));

export const Right = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const BodyWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "3rem"
  },
}));

export const ImgContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "80%",
  border: "2px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "5px",
  padding: ".5rem",
  position: "relative",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    height: "260px",
  },
}));

export const ProfileImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  position: "absolute",
  top: "-5%",
  left: "-5%",
}));
