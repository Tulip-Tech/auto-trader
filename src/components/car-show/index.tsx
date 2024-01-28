import React from "react";
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';
import type { TCars } from '@/services/cars';

const CarShowComponent = ({ data }: { data: TCars }) => {
    return (
        <div className="flex flex-col mt-2">
            <FilterFormSort/>
            <div className="grid md:grid-cols-8 gap-5 mt-2">
                <div className="md:col-span-2">
                    <FilterForm stockResponse={data?.stockResponse}/>
                </div>
                <div className="md:col-span-6">
                    <CarListCard stockResponse={data?.stockResponse}/>
                </div>
            </div>
        </div>
    );
};

export default CarShowComponent;
