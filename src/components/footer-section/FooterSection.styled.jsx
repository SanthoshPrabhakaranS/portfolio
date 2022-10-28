import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../../fonts/fonts";

export const Container = styled(Box)(({ theme }) => ({
  height: "50vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "1.5rem",
  padding: "1rem",
}));

export const Heading = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1rem",
  fontFamily: font.secondary,
}));

export const Body = styled(Box)(({ theme }) => ({
  width: "30%",
  lineHeight: "1.5",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& p:nth-of-type(1)": {
    color: theme.palette.text.main,
    fontSize: "2.5rem",
    fontWeight: "600",
  },
  "& p:nth-of-type(2)": {
    color: theme.palette.text.light,
    textAlign: "center",
    fontSize: ".9rem",
    fontWeight: "500",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  color: theme.palette.text.light,
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
}));

export const FooterIcons = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.light,
  },
  "& :hover": {
    color: theme.palette.primary.main,
    transition: ".3s all ease",
  },
}));
