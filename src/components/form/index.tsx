import React, { useState, FormEvent } from "react";
import InputField from "./common-input";

const FilterForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [colour, setColour] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ make, model, minPrice, maxPrice, colour });
  };

  return (
    <form
      className="bg-white w-64 rounded-lg overflow-hidden h-fit"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-2 mx-auto text-center border-b p-5 bg-[#EB6B2A] text-white">
        <span className="font-semibold">70 Cars found</span>
        <span className="text-sm">Reset search criteria?</span>
      </div>
      <div className="flex flex-col space-y-2 p-2">
        <InputField
          fieldName="Make"
          placeholder="Any"
          onChange={(e) => setMake(e.target.value)}
        />
        <InputField
          fieldName="Model"
          placeholder="Any"
          onChange={(e) => setModel(e.target.value)}
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
        <InputField
          fieldName="Colour"
          placeholder="Any"
          onChange={(e) => setColour(e.target.value)}
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
