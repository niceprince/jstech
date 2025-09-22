import AboutSectionOne from "../components/about/AboutSectionOne";
import PageTwoSectionView from "../components/common/PageTwoSectionView";
import Animate from "../components/about/ImageBox/Animate";

const About = () => {
    return (
        <>
          <Metadata 
            title="About Us | JS Matrix - Web Development, Design & Printing Solutions"
            keywords="About JS Matrix, Web development company, Website design agency, Software solutions provider, SEO services, Graphic design, Printing services"
            description="Learn about JS Matrix, a trusted provider of web development, website design, software solutions, SEO, graphic design, and printing services. Discover our mission to deliver complete digital and print solutions for businesses."
          />
          <PageTwoSectionView RightItem={Animate}>
            <AboutSectionOne />
          </PageTwoSectionView>
        </>
    )
}

export default About;