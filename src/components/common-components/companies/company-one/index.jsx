import React from "react";
import { motion } from "framer-motion";
import { Dot } from "../../../about-section/AboutSection.styled";
import { SpanColor } from "../../../common-styles/CommonStyles";
import {
  Body,
  Header,
  Points,
  Right,
} from "../../../work-section/WorkSection.styled";

const Aequalis = () => {
  return (
    <Right
      as={motion.div}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <Header>
        <p>
          React JS intern
          <SpanColor> @ Aequalis Software Solutions</SpanColor>
        </p>
        <p>July 2022 - September 2022</p>
      </Header>
      <Body>
        <Points>
          <Dot></Dot>
          <p>
            Developed and shipped highly interactive web applications for
            company's products
          </p>
        </Points>
        <Points>
          <Dot></Dot>
          <p>
            Architected and implemented the front-end of project called
            Nerkathir
          </p>
        </Points>
        <Points>
          <Dot></Dot>
          <p>
            Contributed extensively to Nerkathir dashboard and featues using
            packages like hook-form, recharts, QR-code generator
          </p>
        </Points>
      </Body>
    </Right>
  );
};

export default Aequalis;
