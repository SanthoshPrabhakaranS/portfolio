import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../../fonts/fonts";

export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "inherit",
    padding: "1rem",
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  width: "50rem",
  minHeight: "23rem",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "2rem",
}));

export const BodyWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const Left = styled(Box)(({ theme }) => ({
  flex: "1",
  width: "100%",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  color: theme.palette.text.light,
  fontFamily: font.secondary,
  fontSize: ".9rem",
  borderLeft: "1px solid",
  borderColor: theme.palette.text.dark,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    gap: "1rem",
    width: "100%",
    borderBottom: ".05px solid",
    borderColor: theme.palette.text.dark,
    borderLeft: "none",
  },
}));

export const Right = styled(Box)(({ theme }) => ({
  flex: "3",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
}));

export const Company = styled(Box)(({ theme, showworkone, showworktwo }) => ({
  width: "100%",
  padding: ".6rem",
  cursor: "pointer",
  backgroundColor:
    showworkone || showworktwo ? theme.palette.background.light : "none",
  color: showworkone || showworktwo ? theme.palette.primary.main : "none",

  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.light,
    transition: ".3s all ease",
  },
}));

export const Body = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: theme.palette.text.light,
}));

export const Header = styled(Box)(({ theme }) => ({
  color: theme.palette.text.main,
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  fontWeight: "500",
  "& p:nth-of-type(1)": {
    fontSize: "1rem",
  },
  "& p:nth-of-type(2)": {
    fontSize: ".8rem",
    fontFamily: font.secondary,
    color: theme.palette.text.light,
  },
}));

export const Points = styled(Box)(({ theme }) => ({
  color: theme.palette.text.light,
  fontSize: ".9rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  lineHeight: "1.5",
}));
