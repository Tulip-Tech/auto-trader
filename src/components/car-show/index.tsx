import React from "react";
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';

const CarShowComponent = ({ data }: { data: any }) => {
    return (
        <div className="flex flex-col mt-2">
            <FilterFormSort/>
            <div className="grid grid-cols-8 gap-x-5 mt-2">
                <div className="col-span-2">
                    <FilterForm/>
                </div>
                <div className="col-span-6">
                    <CarListCard stockResponse={data?.stockResponse}/>
                </div>
            </div>
        </div>
    );
};

export default CarShowComponent;
