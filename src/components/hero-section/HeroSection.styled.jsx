import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { font } from "../../fonts/fonts";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& p:nth-of-type(1)": {
    fontFamily: font.secondary,
    color: theme.palette.primary.main,
    fontSize: ".9rem",
  },
  "& p:nth-of-type(2)": {
    fontFamily: font.Primary,
    color: theme.palette.text.main,
    fontSize: "3.8rem",
    fontWeight: "700",
  },
  "& p:nth-of-type(3)": {
    fontFamily: font.Primary,
    color: theme.palette.text.light,
    fontSize: "3.8rem",
    fontWeight: "700",
  },
  "& p:nth-of-type(4)": {
    fontFamily: font.Primary,
    color: theme.palette.text.light,
    fontSize: ".9rem",
    width: "calc(100% - 40%)",
    lineHeight: "1.5",
    marginTop: "1rem",
  },
  "& :nth-of-type(1)": {
    marginTop: "1.5rem",
    padding: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2rem",

    "& p:nth-of-type(4)": {
      width: "calc(100%)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "110vh",
    padding: "1rem",

    "& p:nth-of-type(4)": {
      width: "calc(100%)",
    },
    "& p:nth-of-type(2)": {
      fontSize: "3rem",
    },
    "& p:nth-of-type(3)": {
      fontSize: "3rem",
    },
  },
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  maxWidth: "52rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "1.5rem",
}));
