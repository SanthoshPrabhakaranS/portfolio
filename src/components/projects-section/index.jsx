import React from "react";
import {
  Body,
  Container,
  FolderBox,
  Footer,
  Header,
  Heading,
  ProjectCard,
  TextContainer,
} from "./ProjectsSection.styled";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { projectData } from "./projectData";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <Container id="work">
      <Heading>Some Things I've Built</Heading>
      <TextContainer>
        {projectData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              as={motion.div}
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
            >
              <Header>
                <FolderBox>
                  <FolderOutlinedIcon fontSize="large" />
                </FolderBox>
                <FolderBox>
                  <a href={project.url}>
                    <ArrowCircleRightOutlinedIcon />
                  </a>
                </FolderBox>
              </Header>
              <Body>
                <p>{project.heading}</p>
                <p>{project.body}</p>
              </Body>
              <Footer>
                <p>{project.toolsOne}</p>
                <p>{project.toolsTwo}</p>
              </Footer>
            </ProjectCard>
          );
        })}
      </TextContainer>
    </Container>
  );
};

export default ProjectsSection;
