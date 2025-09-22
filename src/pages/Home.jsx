import React from "react";
import Hero from "../components/hero/Hero";
import Features from "../components/Features/Features";
import ReadyToHelp from "../components/ReadyToHelp/ReadyToHelp";
import Focus from "../components/OurFocus/Focus";
import Metadata from "../components/common/Metadata";
const keywords = "Web development, Website design, Software development, SEO, Web page performance, Page ranking, Emailer design, Graphic Designs, Book designs, card designs, banner designs, Print, Printing services, Print solutions, Book Printing, Poster Printing, Stationary, Computer Hardwares"

const Home = () => {
  return (
    <>
      <Metadata 
        title="JS Matrix | Web Development, Software & Design and Printing Solutions"
        keywords={keywords}
        description="Expert services in web development, website design, software development, SEO, and web page performance. We also provide emailer design, graphic designs, book and card designs, banner designs, printing solutions, poster and book printing, stationery, and computer hardware services."
      />
      <Hero />
      <Focus />
      <Features />
      <ReadyToHelp />
        
    </>
  )
}

export default Home;