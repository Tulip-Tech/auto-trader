import { useState } from "react";
import CarListCard from "../car-shelf/car-card/car-card";
import { northamptonCarddata } from "./dummy-data/data";
import DropdownField from "../car-shelf/drop-down";
import FilterForm from "../form";

const NorthamtonComponent = () => {
  const [data, setData] = useState(northamptonCarddata);
  return (
    <div className="flex gap-5 space-y-5">
      <FilterForm />
      <div className="flex flex-col space-y-5">
        <DropdownField
          onChange={() => {}}
          options={[
            "Price (Lowest)",
            "Price (Highest)",
            "Age (Newest First)",
            "Mileage",
          ]}
          fieldName="sort:"
        />
        <CarListCard Carddata={data} />
      </div>
    </div>
  );
};

export default NorthamtonComponent;
