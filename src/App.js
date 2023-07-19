import React from "react";
import Navbar from "./Components/Navbar";
import LeftBar from "./Components/LeftBar";
import CardSection from "./Components/CardSection";
import Features from "./Components/Features";
import { Container } from "@mui/material";
import Powered from "./Components/PoweredBy/Powered";
import ImageSection from "./Components/ImageSection";
import SecondCards from "./Components/SecondCards";
import SliderSection from "./Components/SliderSection";
import UIComp from "./Components/UIComp";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <Container sx={{}}>
        <Navbar />
        <LeftBar />
        <CardSection />
        <Features />
        <Powered />
        <ImageSection />
        <SecondCards />
        <SliderSection />
        <UIComp />
        <Footer />
      </Container>
    </>
  );
};

export default App;
