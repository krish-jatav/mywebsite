"use client";
import Noise from "./grainEff";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import HomePage from "./home/page";
import HomeAbout from "./homeAbout/page";
import SelectedWork from "./SelectedWork/page";
import Skills from "./skills/page";
import Footer from "./footer/page";
import Skillsdata from "./skillsData/Skillsdata";
import CTASection from "@/components/CTA";
// import ImageSection from "@/components/header/ImageSection";
import ProjectCardsSection from "@/components/ProjectCard";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      {" "}
      <Noise> </Noise>
       <HomePage> </HomePage> <ProjectCardsSection></ProjectCardsSection>  <HomeAbout> </HomeAbout> 
      <SelectedWork> </SelectedWork> {" "}
      {/* <Skills> </Skills> */}
      <CTASection></CTASection>
       {/* <Footer> </Footer>{" "} */}
    </div>
  );
}
