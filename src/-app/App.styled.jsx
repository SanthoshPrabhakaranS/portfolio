import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../fonts/fonts";

export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  background: theme.palette.background.main,
  fontFamily: font.Primary,
  position: "relative",
}));

export const NameTip = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  bottom: "18%",
  right: "-5%",
  transform: "rotate(90deg)",
  fontSize: ".8rem",
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
}));

export const Name = styled(Box)(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.main,
    fontFamily: font.secondary,
    fontWeight: "400",
    letterSpacing: ".5px",
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

export const Line = styled(Box)(({ theme }) => ({
  width: "100px",
  height: ".5px",
  backgroundColor: theme.palette.text.main
}));

export const Preloader = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.background.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "0",
  left: "0",
}));
