import React from "react";
import {
  BodyWrapper,
  Container,
  Dot,
  ImgContainer,
  Left,
  ProfileImg,
  Right,
  Tech,
  TechWrapper,
  TextContainer,
} from "./AboutSection.styled";
import Profile from "../../assets/Profile.jpg";
import {
  Heading,
  HeadingLine,
  SpanColor,
  SpanNumber,
} from "../common-styles/CommonStyles";
import { Technologies } from "../common-components/Technologies";
import { motion } from "framer-motion";

const AboutSection = () => {

  return (
    <Container id="about">
      <TextContainer>
        <Heading>
          <p>
            <SpanNumber>01.</SpanNumber> About Me
          </p>
          <HeadingLine></HeadingLine>
        </Heading>
        <BodyWrapper>
          <Left>
            <p>
              Hello! My name is Santhosh Prabhakaran. I'm from Coimbatore,
              India. I enjoy creating things that live on the internet. My
              interest in web development started back in 2020 when I decided to
              learn it by creating an webpage — turns out creating more taught
              me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working as an
              intern at an I a start-up, a huge corporation, and a student-led
              design studio called{" "}
              <SpanColor>Aequalis Software Solutions</SpanColor>, Where I learnt
              a lot. Then I joined as an React JS developer in an reputed agency
              called <SpanColor>Ionixx Technologies</SpanColor>. My main focus
              these days is building accessible, inclusive products and digital
              experiences at Ionixx Texhnologies for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <TechWrapper>
              {Technologies.map((item) => {
                return (
                  <Tech key={item.id}>
                    <Dot></Dot>
                    <p>{item.name}</p>
                  </Tech>
                );
              })}
            </TechWrapper>
          </Left>
          <Right>
            <ImgContainer>
              <ProfileImg
                src={Profile}
                alt="profile"
                as={motion.img}
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              />
            </ImgContainer>
          </Right>
        </BodyWrapper>
      </TextContainer>
    </Container>
  );
};

export default AboutSection;
