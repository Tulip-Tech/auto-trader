import React from 'react';
import HeaderComponent from '@/components/layout/header';
import FooterComponent from './footer/footer';
import UsedVehicleComponent from './used-vehicle';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
    children: React.ReactElement | React.ReactNode;
    className: string;
};
const AppLayout = ({ children, className }: Props) => {
  const router = useRouter();
  const { slug } = router.query;

  let heading;

  if (slug === 'northampton') {
    heading = 'All Cars from B&F Cars Northampton';
  } else if (slug === 'syston') {
    heading = 'All Cars from Syston Autos Ltd.';
  } else {
    heading = 'All Cars from B&F Cars';
  }
  return (
    <div className={`w-full h-full ${className}`}>
      <HeaderComponent />
      <h2 className="text-slate text-3xl font-bold mb-3 px-20 mt-20">
        {heading}
      </h2>
      <div className="px-20 mb-20">{children}</div>
      <div className="px-20 py-16">
        <Image
          priority
          src="/footer/hc-bdc-large.gif"
          alt="logo"
          width={850}
          height={160}
          className="w-full"
        />
      </div>
      <UsedVehicleComponent />
      <FooterComponent />
    </div>
  );
};

export default AppLayout;
