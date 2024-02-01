import ContactInfoComponent from '@/components/shared/ContactInfoCard';
import React from 'react'


const SystonInfoComponent = () => {
  return (
    <>
      <ContactInfoComponent
        location="Syston"
        phone="03301 130 458"
        mobile="07498 033 553"
        email="sales@systonautosltd.co.uk"
        address="Unit 10 Mill Lane Syston, Leicester, LE7 1NS"
      />
    </>
  );
}

export default SystonInfoComponent