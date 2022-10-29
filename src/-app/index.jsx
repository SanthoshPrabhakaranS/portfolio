import AboutSection from "../components/about-section";
import FooterSection from "../components/footer-section";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import ProjectsSection from "../components/projects-section";
import WorkSection from "../components/work-section";
import { Container, Line, Name, NameTip, Preloader } from "./App.styled";
import { motion } from "framer-motion";
import { useContext } from "react";
import { appContext } from "../context/Context";
import { Logo } from "../components/navbar/Navbar.styled";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const { open, setOpen } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const closeHandler = () => {
    if (open) {
      setOpen(false); 
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Preloader
        as={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2 }}
      >
        <Logo
          as={motion.div}
          initial={{ scale: 1 }}
          animate={{ scale: 2.2, rotate: 360 }}
          transition={{ duration: 1 }}
        >
          S
        </Logo>
      </Preloader>
      <Container
        as={motion.div}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        onClick={closeHandler}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <FooterSection />
        <NameTip>
          <Name
            as={motion.div}
            initial={{ x: 0 }}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#">
              <p>Santhosh@developer.com</p>
            </a>
          </Name>
          <Line></Line>
        </NameTip>
      </Container>
    </>
  );
}

export default App;
