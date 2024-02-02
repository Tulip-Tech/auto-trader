import ContactInfoComponent from '@/components/shared/ContactInfoCard';
import { useRouter } from 'next/router';
import React from 'react'


const SystonInfoComponent = () => {
  const router = useRouter();
  const isSystonRoute = router.asPath.includes('/syston');

  return (
    <>
      <ContactInfoComponent
        location={isSystonRoute ? "Contact Us" : "Syston"}
        phone="03301 130 458"
        mobile="07498 033 553"
        email="sales@systonautosltd.co.uk"
        address="Unit 10 Mill Lane Syston, Leicester, LE7 1NS"
      />
    </>
  );
}

export default SystonInfoComponent