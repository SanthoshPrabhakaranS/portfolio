import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../../fonts/fonts";

export const NavSpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.main,
}));

export const SpanColor = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const SpanNumber = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: font.secondary,
  fontSize: "1.1rem",
  fontWeight: "400"
}));

export const Button = styled("button")(({ theme }) => ({
  border: "1px solid",
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  backgroundColor: "transparent",
  padding: "10px",
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: font.secondary,

  "&:hover": {
    backgroundColor: "#64ffdb27",
    transition: ".5s all ease",
  },
}));

export const Heading = styled(Box)(({ theme }) => ({
  color: theme.palette.text.main,
  width: "100%",
  fontSize: "1.5rem",
  fontWeight: "600",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".5rem",
}));

export const HeadingLine = styled(Box)(({ theme }) => ({
  height: ".1px",
  width: "35%",
  backgroundColor: theme.palette.text.dark,
  opacity: ".7",
  [theme.breakpoints.down("sm")]: {
    width: "20%"
  },
}));
