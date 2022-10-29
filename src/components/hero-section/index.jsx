import React from "react";
import { Button } from "../common-styles/CommonStyles";
import { Container, TextContainer } from "./HeroSection.styled";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Container id="/">
        <TextContainer>
          <p>Hi, my name is sandy</p>
          <p>Santhosh Prabhakaran.</p>
          <p>I build things for the web.</p>
          <p>
            I'm a Frontend-developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building accessible,
            blockchain products at Ionixx Texhnoligoes.
          </p>
          <a href="#about">
            <Button>Know More About Me.</Button>
          </a>
        </TextContainer>
    </Container>
  );
};

export default HeroSection;
