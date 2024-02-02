import React from 'react'
import NorthamptonInfoComponent from '../car-show/northampton-info';
import SystonInfoComponent from '../car-show/syston-info';
import OpeningHoursComponent from '../car-show/opening-hours';
import Image from 'next/image';

const AACarsStandardsComponent = () => {
  return (
    <>
      <div className="flex flex-col -mt-10">
        <div className="grid md:grid-cols-12 gap-5 mt-2">
          <div className="md:col-span-9 space-y-2 mt-[50px]">
            <Image
              priority
              src="/aa-cars-standards/AACarsStandards.png"
              alt="logo"
              width={955}
              height={1194}
              className="w-full h-full"
            />
          </div>
          <div className="md:col-span-3 mt-[50px]">
            <NorthamptonInfoComponent />
            <SystonInfoComponent />
            <OpeningHoursComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default AACarsStandardsComponent;