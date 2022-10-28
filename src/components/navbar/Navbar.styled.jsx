import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme, show }) => ({
  width: "100%",
  height: "9vh",
  padding: "1.5rem 3rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.primary.main,
  fontFamily: "monospace",
  zIndex: "1",
  position: "fixed",
  top: show,
  transition: ".3s all ease-in-out",
  backgroundColor: theme.palette.background.main,

  "& a": {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
    position: "fixed",
    backgroundColor: theme.palette.background.light,
    height: "7vh",
  },
}));

export const Logo = styled(Box)(({ theme }) => ({
  height: "2rem",
  width: "2rem",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "Center",
  border: "2.3px solid",
  borderColor: theme.palette.primary.main,
  fontSize: "1.1rem",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

export const Nav = styled(Box)(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  position: "relative",
  "& p": {
    cursor: "pointer",
  },
  "& span:hover": {
    color: theme.palette.primary.main,
    transition: ".3s all ease",
  },
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    height: "100vh",
    width: "calc(100% - 40%)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: "0",
    right: "0",
    backgroundColor: theme.palette.background.light,
    fontSize: "1rem",
    gap: "3.5rem",
    transform: open ? "translateX(0%)" : "translateX(100%)",
    transition: ".3s all ease-in-out",
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(100%)",
  },
}));

export const CloseBtn = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "3%",
  right: "4%",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const MenuWrapper = styled(Box)(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "6px",
  alignItems: "flex-end",
  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    top: "0",
  },
}));

export const Menubar = styled(Box)(({ theme }) => ({
  width: (props) => props.width,
  height: "1.9px",
  backgroundColor: theme.palette.primary.main,
}));
