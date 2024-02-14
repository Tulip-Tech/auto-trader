import React from 'react';
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';
import type { TCars } from '@/services/cars';
import OpeningHoursComponent from "./opening-hours";
import UnifiedInfoComponent from './unified-info';
import GoogleReviewsComponent from './google-review';
import { useRouter } from 'next/router';

interface CarShowComponentProps {
    cars: TCars['stockResponse'];
}

const CarShowComponent: React.FC<CarShowComponentProps> = ({ cars }) => {
    const router = useRouter();
    const { slug } = router.query;

    let heading;
    if (slug?.includes("northampton")) {
        heading = "All Cars from B&F Cars Northampton";
    } else if (slug?.includes("syston")) {
        heading = "All Cars from Syston Autos Ltd.";
    } else {
        heading = "All Cars from B&F Cars";
    }
    return (
        <div className="flex flex-col -mt-10">
            <h2 className="text-slate text-3xl font-bold mt-16 -mb-8">{heading}</h2>
            <div className="grid md:grid-cols-12 gap-5 mt-2">
                <div className="md:col-span-3 mt-[50px]">
                    <FilterForm stockResponse={cars}/>
                    <div className="hidden sm:block">
                        <GoogleReviewsComponent/>
                    </div>
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
                <div className="block sm:hidden">
                    <GoogleReviewsComponent/>
                </div>
            </div>
        </div>
    );
};

export default CarShowComponent;
