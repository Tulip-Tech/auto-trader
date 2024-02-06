import React from 'react';
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';
import type { TCars } from '@/services/cars';
import OpeningHoursComponent from "./opening-hours";
import UnifiedInfoComponent from './unified-info';

interface CarShowComponentProps {
    cars: TCars['stockResponse'];
}

const CarShowComponent: React.FC<CarShowComponentProps> = ({ cars }) => {
    return (
        <div className="flex flex-col -mt-10">
            <div className="grid md:grid-cols-12 gap-5 mt-2">
                <div className="md:col-span-3 mt-[50px]">
                    <FilterForm stockResponse={cars}/>
                </div>
                <div className="md:col-span-6 space-y-2">
                    <div className="flex justify-end -mt-3 mb-6">
                        <FilterFormSort options={cars.sortOptions}/>
                    </div>
                    <CarListCard stockResponse={cars}/>
                </div>
                <div className="md:col-span-3 mt-[50px]">
                    <UnifiedInfoComponent/>
                    <OpeningHoursComponent/>
                </div>
            </div>
        </div>
    );
};

export default CarShowComponent;
