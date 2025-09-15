import React from 'react';
import PageTwoSectionView from '../components/common/PageTwoSectionView';
import ContactUs from '../components/contact/Contact';
import ContactRight from '../components/contact/ContactRight';

const Contact = () => {

  return <>
      <PageTwoSectionView RightItem={ContactRight} pageSectionClasses="order-1 md:order-2 lg:order-2 contact-section">
        <ContactUs />
      </PageTwoSectionView>
    </>
}

export default Contact;