import ContactInfoComponent from '@/components/shared/ContactInfoCard';
import React from 'react'


const NorthamptonInfoComponent = () => {
  return (
    <>
      <ContactInfoComponent
        location="Northampton"
        phone="0330 165 89 04"
        mobile="07864 329 740"
        email="sales@bnfcarsnorthampton.co.uk"
        address="Knightley Road, Northampton, NN2 6HQ"
      />
    </>
  );
}

export default NorthamptonInfoComponent