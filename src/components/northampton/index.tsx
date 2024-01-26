import { useState } from "react";
import CarListCard from "../car-shelf/car-card/car-card";

import { northamptonCarddata } from "./dummy-data/data";
import DropdownField from "../car-shelf/drop-down";

import FilterForm from "../form";

const NorthamtonComponent = () => {
  const [data, setData] = useState(northamptonCarddata);

  const [sort, setSort] = useState("");
  const sortOptions = [
    { key: "Price (Lowest)", value: "price-asc" },
    { key: "Price (Highest)", value: "price-desct" },
    { key: "Age (Newest First)", value: "year-desc" },
    { key: "Mileage", value: "mileage" },
  ];

  return (
    <div className="flex gap-5 space-y-5">
      <FilterForm />
      <div className="flex flex-col space-y-5">
        <DropdownField
          onChange={(e) => {
            setSort(e.target.value);
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
