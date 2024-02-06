import React from 'react';
import { useRouter } from 'next/router';
import ContactInfoComponent from '@/components/shared/contact-Info-card';

const UnifiedInfoComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const branchContactInfoFromEnv = process.env.NEXT_PUBLIC_BRANCHES? JSON.parse(process.env.NEXT_PUBLIC_BRANCHES) : {};

  const branches: Array<keyof typeof branchContactInfoFromEnv> = slug && branchContactInfoFromEnv[slug as keyof typeof branchContactInfoFromEnv] ? [slug as keyof typeof branchContactInfoFromEnv] : Object.keys(branchContactInfoFromEnv) as Array<keyof typeof branchContactInfoFromEnv>;

  return (
    <>
      {branches.map((branchKey) => {
        const locationInfo = branchContactInfoFromEnv[branchKey];
        return (
          <ContactInfoComponent
            key={branchKey.toLocaleString()}
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
