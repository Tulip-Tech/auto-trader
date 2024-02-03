import React from 'react';
import { useRouter } from 'next/router';
import ContactInfoComponent from '@/components/shared/ContactInfoCard';
import branchContactInformation from '@/services/branchContactInformation';
 
const UnifiedInfoComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
 
  const branches: Array<keyof typeof branchContactInformation> = slug && branchContactInformation[slug as keyof typeof branchContactInformation] ? [slug as keyof typeof branchContactInformation] : Object.keys(branchContactInformation) as Array<keyof typeof branchContactInformation>;
 
  return (
    <>
      {branches.map((branchKey) => {
        const locationInfo = branchContactInformation[branchKey];
        return (
          <ContactInfoComponent
            key={branchKey}
            location={slug ? "Contact Us" : locationInfo.location}
            phone={locationInfo.phone}
            mobile={locationInfo.mobile}
            email={locationInfo.email}
            address={locationInfo.address}
          />
        );
      })}
    </>
  );
};
 
export default UnifiedInfoComponent;