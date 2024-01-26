import { useEffect, useState } from "react";
import CarListCard from "../car-shelf/car-card/car-card";
import { SystonCarddata } from "./dummy-data/data";

import DropdownField from "../car-shelf/drop-down";
import FilterForm from "../form";
const SystonComponent = () => {
  const sortOptions = [
    { key: "Price (Lowest)", value: "price-asc" },
    { key: "Price (Highest)", value: "price-desct" },
    { key: "Age (Newest First)", value: "year-desc" },
    { key: "Mileage", value: "mileage" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://www.autotrader.co.uk/json/dealers/stock?advertising-location=at_cars&advertising-location=at_profile_cars&dealer=10028885&onesearchad=Used&onesearchad=Nearly%20New&onesearchad=New&page=1&sort=price-asc&fromDealerSearchResults=%2Fretailer%2Fstock%3Fsort%3Dprice-asc%26page%3D1%26dealer%3D10028885%26onesearchad%3DUsed%26onesearchad%3DNearly%2520New%26onesearchad%3DNew%26advertising-location%3Dat_cars%26advertising-location%3Dat_profile_cars";

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

  const [data, setData] = useState(SystonCarddata);
  return (
    <div className="flex gap-5 space-y-5">
      <FilterForm />
      <div className="flex flex-col space-y-5">
        <DropdownField
          onChange={() => {}}
          options={sortOptions}
          fieldName="sort:"
        />
        <CarListCard Carddata={data} />
      </div>
    </div>
  );
};

export default SystonComponent;
