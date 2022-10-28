import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../../fonts/fonts";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  width: "100%",
  color: theme.palette.text.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "2rem",
  padding: "1rem",
  paddingTop: "3rem",
  [theme.breakpoints.down("md")]: {
    height: "100vh",
  },
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  width: "60rem",
  height: "80%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    height: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
}));

export const Heading = styled("h3")(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: "600",
}));

export const ProjectCard = styled(Box)(({ theme }) => ({
  flex: "1",
  minHeight: "270px",
  backgroundColor: theme.palette.background.light,
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  justifyContent: "space-between",
  cursor: "pointer",
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Body = styled(Box)(({ theme }) => ({
  lineHeight: "1.5",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",

  "& p:nth-of-type(1)": {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  "& p:nth-of-type(2)": {
    fontSize: ".9rem",
    fontWeight: "400",
    color: theme.palette.text.light,
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  fontSize: ".8rem",
  fontFamily: font.secondary,
  color: theme.palette.text.dark,
}));

export const FolderBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  "&: nth-of-type(1)": {
    color: theme.palette.primary.main,
  },
  "&: nth-of-type(2)": {
    color: theme.palette.text.light,
  },
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.dark,
    "&:hover": {
      color: theme.palette.primary.main,
      transition: ".3s all ease",
    },
  },
}));
