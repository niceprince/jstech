import React from 'react';
import PageTwoSectionView from '../components/common/PageTwoSectionView';
import ContactUs from '../components/contact/Contact';
import ContactRight from '../components/contact/ContactRight';

const Contact = () => {

  return <>
      <PageTwoSectionView RightItem={ContactRight}>
        <ContactUs />
      </PageTwoSectionView>
    </>
}

export default Contact;