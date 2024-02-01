import React from "react";
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';
import type { TCars } from '@/services/cars';
import NorthamptonInfoComponent from "./northampton-info";
import SystonInfoComponent from "./syston-info";
import OpeningHoursComponent from "./opening-hours";


const CarShowComponent = ({ cars }: { cars: TCars['stockResponse'] }) => {
  
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
            <NorthamptonInfoComponent />
            <SystonInfoComponent />
            <OpeningHoursComponent />
          </div>
        </div>
      </div>
    );
};

export default CarShowComponent;
