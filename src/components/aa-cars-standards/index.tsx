import React from 'react'
import OpeningHoursComponent from '../car-show/opening-hours';
import Image from 'next/image';
import UnifiedInfoComponent from '../car-show/unified-info';

const AACarsStandardsComponent = () => {
  return (
    <>
      <div className="flex flex-col">
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
            <UnifiedInfoComponent />
            <OpeningHoursComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default AACarsStandardsComponent;