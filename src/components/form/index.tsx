import React, { useState, FormEvent } from "react";
import InputField from "./common-input";
import router from "next/router";
import DropdownField from "../car-shelf/drop-down";
const FilterForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [colour, setColour] = useState("");
  const makeOptionKeyValue = [
    { key: "Any", value: "" },
    { key: "Audi", value: "Audi" },
    { key: "Citroen", value: "Citroen" },
    { key: "Dacia", value: "Dacia" },
    { key: "Ford", value: "Ford" },
    { key: "Honda", value: "Honda" },
    { key: "Hyundai", value: "Hyundai" },
    { key: "Jaguar", value: "Jaguar" },
    { key: "Lexus", value: "Lexus" },
    { key: "Mazda", value: "Mazda" },
    { key: "Mercedes-Benz", value: "Mercedes-Benz" },
    { key: "MINI", value: "MINI" },
    { key: "Nissan", value: "Nissan" },
    { key: "Peugeot", value: "Peugeot" },
    { key: "Renault", value: "Renault" },
    { key: "Skoda", value: "Skoda" },
    { key: "Tesla", value: "Tesla" },
    { key: "Toyota", value: "Toyota" },
    { key: "Vauxhall", value: "Vauxhall" },
    { key: "Volkswagen", value: "Volkswagen" },
  ];
  const modelOptionKeyValue = [{ key: "Any", value: "" }];
  const colourOptionKeyValue = [
    { key: "", text: "Any" },
    { key: "Black", text: "Black" },
    { key: "Blue", text: "Blue" },
    { key: "Brown", text: "Brown" },
    { key: "Green", text: "Green" },
    { key: "Grey", text: "Grey" },
    { key: "Red", text: "Red" },
    { key: "Silver", text: "Silver" },
    { key: "White", text: "White" },
    { key: "Yellow", text: "Yellow" },
  ];
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const queryParams = new URLSearchParams();
    if (make) queryParams.append("make", make);
    if (model) queryParams.append("model", model);
    if (minPrice) queryParams.append("price-from", minPrice);
    if (maxPrice) queryParams.append("price-to", maxPrice);
    if (colour) queryParams.append("colour", colour);

    router.push({
      pathname: "",
      query: queryParams.toString(),
    });
  };
  return (
    <form
      className="bg-white w-72 mt-20 rounded-lg overflow-hidden h-fit"
      onClick={handleSubmit}
    >
      <div className="flex flex-col space-y-1 mx-auto text-center border-b p-5 bg-[#EB6B2A] text-white">
        <span className="font-semibold">70 Cars found</span>
        <span className="text-sm">Reset search criteria?</span>
      </div>
      <div className="flex flex-col space-y-2 p-2">
        <DropdownField
          labelAlign="top"
          onChange={(e) => {
            setMake(e.target.value);
          }}
          options={makeOptionKeyValue}
          fieldName="Make:"
        />
        <DropdownField
          labelAlign="top"
          onChange={(e) => {
            setModel(e.target.value);
          }}
          options={modelOptionKeyValue}
          fieldName="Model"
        />

        <section>
          <span>Price</span>
          <section className="grid grid-cols-2 gap-3">
            <InputField
              placeholder="Min (Any)"
              onChange={(e) => setMinPrice(e.target.value)}
              type="number"
            />
            <InputField
              placeholder="Max (Any)"
              onChange={(e) => setMaxPrice(e.target.value)}
              type="number"
            />
          </section>
        </section>

        <DropdownField
          labelAlign="top"
          onChange={(e) => setColour(e.target.value)}
          options={colourOptionKeyValue}
          fieldName="Colour"
        />
      </div>
      <div className="p-2">
        <button
          type="submit"
          className="w-full bg-[#EB6B2A] text-white p-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
