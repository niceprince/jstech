import AboutSectionOne from "../components/about/AboutSectionOne";
import PageTwoSectionView from "../components/common/PageTwoSectionView";
import Animate from "../components/about/ImageBox/Animate";

const About = () => {
    return (
        <>
          <PageTwoSectionView RightItem={Animate}>
            <AboutSectionOne />
          </PageTwoSectionView>
        </>
    )
}

export default About;