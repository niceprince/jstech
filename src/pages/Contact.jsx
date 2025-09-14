import React from 'react';
import PageTwoSectionView from '../components/common/PageTwoSectionView';
import ContactUs from '../components/contact/Contact';
import ContactRight from '../components/contact/ContactRight';

const Contact = () => {

  return <>
      <PageTwoSectionView RightItem={ContactRight} pageSectionClasses="order-2 sm:order-1 md:order-1 lg:order-1">
        <ContactUs />
      </PageTwoSectionView>
    </>
}

export default Contact;