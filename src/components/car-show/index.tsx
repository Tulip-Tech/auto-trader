import React from 'react';
import { useRouter } from 'next/router';
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';
import type { TCars } from '@/services/cars';
import NorthamptonInfoComponent from "./northampton-info";
import SystonInfoComponent from "./syston-info";
import OpeningHoursComponent from "./opening-hours";

interface CarShowComponentProps {
  cars: TCars['stockResponse'];
}

const CarShowComponent: React.FC<CarShowComponentProps> = ({ cars }) => {
  const router = useRouter();

  const isNorthamptonRoute = router.asPath.includes("/northampton");
  const isSystonRoute = router.asPath.includes('/syston');

  return (
    <div className="flex flex-col -mt-10">
      <div className="grid md:grid-cols-12 gap-5 mt-2">
        <div className="md:col-span-3 mt-[50px]">
          <FilterForm stockResponse={cars} />
        </div>
        <div className="md:col-span-6 space-y-2">
          <div className="flex justify-end -mt-3 mb-6">
            <FilterFormSort />
          </div>
          <CarListCard stockResponse={cars} />
        </div>
        <div className="md:col-span-3 mt-[50px]">
          {!isSystonRoute && <NorthamptonInfoComponent />}
          {!isNorthamptonRoute && <SystonInfoComponent />}
          <OpeningHoursComponent />
        </div>
      </div>
    </div>
  );
};

export default CarShowComponent;
