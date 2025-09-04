import React from "react";
import Hero from "../components/hero/Hero";
import Features from "../components/Features/Features";
import ReadyToHelp from "../components/ReadyToHelp/ReadyToHelp";
import Focus from "../components/OurFocus/Focus";

const Home = () => {
    return (
        <>
            <Hero />
            <Focus />
            <Features />
            <ReadyToHelp />
            
        </>
    )
}

export default Home;