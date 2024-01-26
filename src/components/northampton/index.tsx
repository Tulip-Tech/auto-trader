import { useEffect, useState } from "react";
import CarListCard from "../car-shelf/car-card/car-card";
import { SystonCarddata } from "../syston/dummy-data/data";
import { northamptonCarddata } from "./dummy-data/data";
import DropdownField from "../car-shelf/drop-down";
import FilterForm from "../form";

const NorthamtonComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://www.autotrader.co.uk/json/dealers/stock?advanced=true&advertising-location=at_cars&advertising-location=at_profile_cars&dealer=10038946&sort=price-asc";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    };

    console.dir(fetchData());
  }, []);

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
