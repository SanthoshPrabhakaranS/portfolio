import React from "react";
import { Dot } from "../../../about-section/AboutSection.styled";
import { SpanColor } from "../../../common-styles/CommonStyles";
import { motion } from "framer-motion";
import {
  Body,
  Header,
  Points,
  Right,
} from "../../../work-section/WorkSection.styled";

const IonixxTechnologies = () => {
  return (
    <Right
      as={motion.div}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <Header>
        <p>
          React JS developer <SpanColor>@ Ionixx Technologies</SpanColor>
        </p>
        <p>October 2022 - Present</p>
      </Header>
      <Body>
        <Points>
          <Dot></Dot>
          <p>
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            React, Material UI and Github
          </p>
        </Points>
        <Points>
          <Dot></Dot>
          <p>
            Communicate with multi-disciplinary teams of engineers, designers,
            producers, and client
          </p>
        </Points>
        <Points>
          <Dot></Dot>
          <p>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </p>
        </Points>
      </Body>
    </Right>
  );
};

export default IonixxTechnologies;
