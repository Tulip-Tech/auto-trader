import ContactInfoComponent from '@/components/shared/ContactInfoCard';
import { useRouter } from 'next/router';
import React from 'react'


const NorthamptonInfoComponent = () => {
    const router = useRouter();
    const isNorthamptonRoute = router.asPath.includes("/northampton");
    
  return (
    <>
      <ContactInfoComponent
        location={isNorthamptonRoute ? "Contact Us" : "Northampton"}
        phone="0330 165 89 04"
        mobile="07864 329 740"
        email="sales@bnfcarsnorthampton.co.uk"
        address="Knightley Road, Northampton, NN2 6HQ"
      />
    </>
  );
}

export default NorthamptonInfoComponent