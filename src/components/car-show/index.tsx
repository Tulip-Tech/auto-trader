import React from "react";
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';

const CarShowComponent = ({ data }: { data: any }) => {
    return (
        <div className="flex flex-col mt-2">
            <FilterFormSort/>
            <div className="flex gap-x-5 mt-2">
                <FilterForm/>
                <CarListCard results={data?.stockResponse?.results ?? []}/>
            </div>
        </div>
    );
};

export default CarShowComponent;
