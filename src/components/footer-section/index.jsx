import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Body,
  Container,
  Footer,
  FooterIcons,
  Heading,
} from "./FooterSection.styled";

const FooterSection = () => {
  return (
    <Container id="contact">
      <Heading>04. What's Next ?</Heading>
      <Body>
        <p>Get In Touch</p>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
      </Body>
      <Footer>
        <FooterIcons>
          <a href="https://github.com/SanthoshPrabhakaranS">
            <GitHubIcon />
          </a>
        </FooterIcons>
        <FooterIcons>
          <a href="https://www.linkedin.com/in/santhosh-s-96442b230">
            <LinkedInIcon />
          </a>
        </FooterIcons>
        <FooterIcons>
          <a href="https://www.instagram.com/_the_.santhosh/">
            <InstagramIcon />
          </a>
        </FooterIcons>
      </Footer>
    </Container>
  );
};

export default FooterSection;
