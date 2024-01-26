import { useState, FormEvent } from "react";
import CarListCard from "../car-shelf/car-card/car-card";
import { northamptonCarddata } from "./dummy-data/data";
import DropdownField from "../car-shelf/drop-down";

import FilterForm from "../form";
import router from "next/router";

const NorthamtonComponent = () => {
  const [data, setData] = useState(northamptonCarddata);

  const [sort, setSort] = useState("");
  const sortOptions = [
    { key: "Price (Lowest)", value: "price-asc" },
    { key: "Price (Highest)", value: "price-desc" },
    { key: "Age (Newest First)", value: "year-desc" },
    { key: "Mileage", value: "mileage" },
  ];
  const handleSort = (event: string) => {
    const queryParams = new URLSearchParams(
      router.query as Record<string, string>
    );
    if (sort) {
      queryParams.set("sort", event);
    } else {
      queryParams.delete("sort");
    }

    router.push({
      pathname: router.pathname,
      query: queryParams.toString(),
    });
  };
  return (
    <div className="flex gap-5 space-y-5">
      <FilterForm />
      <div className="flex flex-col space-y-5">
        <DropdownField
          onChange={(e) => {
            setSort(e.currentTarget.value);
            handleSort(e.target.value);
          }}
          options={sortOptions}
          fieldName="sort:"
        />

        <CarListCard Carddata={data} />
      </div>
    </div>
  );
};

export default NorthamtonComponent;
