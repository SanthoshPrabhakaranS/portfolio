import React, { useContext, useEffect, useState } from "react";
import { Button, NavSpan } from "../common-styles/CommonStyles";
import {
  CloseBtn,
  Container,
  Logo,
  Menubar,
  MenuWrapper,
  Nav,
} from "./Navbar.styled";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { appContext } from "../../context/Context";

const NavBar = () => {
  const { open, setOpen } = useContext(appContext)
  const [show, setShow] = useState(true);

  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;

    window.addEventListener("scroll", function (e) {
      newValue = window.pageYOffset;

      if (oldValue - newValue < 0) {
        setShow(false);
        setOpen(false)
      } else if (oldValue - newValue > 0) {
        setShow(true);
        setOpen(false)
      }

      oldValue = newValue;
    });
  }, []);

  return (
    <Container
      show={show ? "0" : "-9vh"}
    >
      <a href="#/">
        <Logo as={motion.div} whileHover={{ rotate: 360 }} transition={{ duration: .5 }}>
          S
        </Logo>
      </a>
      <Nav open={open ? 1 : 0}>
        <CloseBtn onClick={() => setOpen(false)}>
          <CloseIcon fontSize="large" />
        </CloseBtn>
        <a href="#about">
          <p onClick={() => setOpen(false)}>
            01. <NavSpan>About</NavSpan>
          </p>
        </a>
        <a href="#experience">
          <p onClick={() => setOpen(false)}>
            02. <NavSpan>Experience</NavSpan>
          </p>
        </a>
        <a href="#work">
          <p onClick={() => setOpen(false)}>
            03. <NavSpan>Work</NavSpan>
          </p>
        </a>
        <a href="#contact">
          <p onClick={() => setOpen(false)}>
            04. <NavSpan>Contact</NavSpan>
          </p>
        </a>
        <a href="">
          <Button onClick={() => setOpen(false)}>Resume</Button>
        </a>
      </Nav>
      <MenuWrapper onClick={() => setOpen(true)}>
        <Menubar width="29px"></Menubar>
        <Menubar width="25px"></Menubar>
        <Menubar width="21px"></Menubar>
      </MenuWrapper>
    </Container>
  );
};

export default NavBar;
