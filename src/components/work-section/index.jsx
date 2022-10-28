import React from "react";
import { useState } from "react";
import Aequalis from "../common-components/companies/company-one";
import IonixxTechnologies from "../common-components/companies/company-two";
import {
  Heading,
  HeadingLine,
  SpanNumber,
} from "../common-styles/CommonStyles";
import {
  BodyWrapper,
  Company,
  Container,
  Left,
  TextWrapper,
} from "./WorkSection.styled";

const WorkSection = () => {
  const [showWorkOne, setShowWorkOne] = useState(true)
  const [showWorkTwo, setShowWorkTwo] = useState(false)

  const showWorkOneHandler = () => {
    setShowWorkOne(true)
    setShowWorkTwo(false)
  }
  const showWorkTwoHandler = () => {
    setShowWorkTwo(true)
    setShowWorkOne(false)
  }
  return (
    <Container id="experience">
      <TextWrapper>
        <Heading>
          <p>
            <SpanNumber>02.</SpanNumber> Where I've Worked
          </p>
          <HeadingLine></HeadingLine>
        </Heading>
        <BodyWrapper>
          <Left>
            <Company showworkone={+showWorkOne} onClick={showWorkOneHandler}>Ionixx</Company>
            <Company showworktwo={+showWorkTwo} onClick={showWorkTwoHandler}> Aequalis</Company>
          </Left>
          { showWorkOne && <IonixxTechnologies /> }
          { showWorkTwo && <Aequalis />}
        </BodyWrapper>
      </TextWrapper>
    </Container>
  );
};

export default WorkSection;
