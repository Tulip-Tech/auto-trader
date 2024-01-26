import React from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import CarListCard from "@/components/car-show/car-shelf/car-card/car-card";
import FilterForm, { FilterFormSort } from '@/components/form';
import { TCars } from '@/services/cars';

const CarShowComponent = ({ data }: { data: TCars }) => {
    const router = useRouter()

    return (
        <div className="flex flex-col mt-2">
            <FilterFormSort/>
            <div className="grid grid-cols-8 gap-x-5 mt-2">
                <div className="col-span-2">
                    <FilterForm stockResponse={data?.stockResponse}/>
                </div>
                <div className="col-span-6">
                    <CarListCard stockResponse={data?.stockResponse}/>
                    <div className="mt-5 flex justify-center gap-5">
                        {data?.stockResponse?.currentPage > 1 && (
                            <Link className="hover:text-blue-200 bg-primary text-white p-2 rounded-md" href={{
                                pathname: router.pathname,
                                query: {
                                    ...router.query,
                                    page: data?.stockResponse?.currentPage - 1
                                }
                            }}>
                                &nbsp;Previous&nbsp;
                            </Link>
                        )}
                        {data?.stockResponse?.hasMoreResults && (
                            <Link className="hover:text-blue-200 bg-primary text-white p-2 rounded-md" href={{
                                pathname: router.pathname,
                                query: {
                                    ...router.query,
                                    page: data?.stockResponse?.currentPage + 1
                                }
                            }}>
                                &emsp;Next&emsp;
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarShowComponent;
