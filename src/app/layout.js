"use client"
import "./globals.css";
// import { Inter  } from "next/font/google";
import Header from "../components/header";
import Noise from "./grainEff";
// const inter = Inter({ subsets: ["latin"] });
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";



export default function RootLayout({ children }) {
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
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Noise></Noise>
      </body>
    </html>
  );
}
