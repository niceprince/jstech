import Metadata from '../components/common/Metadata';
import PageTwoSectionView from '../components/common/PageTwoSectionView';
import ContactUs from '../components/contact/Contact';
import ContactRight from '../components/contact/ContactRight';

const Contact = () => {

  return <>
    <Metadata 
      title="Contact Us | JSMatrix - Get in Touch for Web & Design and Printing Solutions"
      keywords="Contact JS Matrix, Web development contact, Website design support, Software solutions, SEO services, Printing services, Graphic design contact"
      description="Contact JS Matrix for web development, website design, software solutions, SEO, printing services, and graphic design. Reach out today to discuss your project needs."
    />
    <PageTwoSectionView RightItem={ContactRight} pageSectionClasses="order-1 md:order-2 lg:order-2 contact-section">
      <ContactUs />
    </PageTwoSectionView>
    </>
}

export default Contact;