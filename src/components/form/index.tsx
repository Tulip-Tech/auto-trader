import InputField from "./common-input";

const FilterForm = () => {
  return (
    <div className="bg-white w-64 rounded-lg overflow-hidden h-fit">
      <div className="flex flex-col space-y-2 mx-auto text-center border-b p-5 bg-[#EB6B2A] text-white">
        <span className="font-semibold">70 Cars found</span>
        <span className="text-sm">Reset search criteria?</span>
      </div>
      <div className="flex flex-col space-y-2 p-2">
        <InputField fieldName="Make" placeholder="Any" onChange={() => {}} />
        <InputField fieldName="Model" placeholder="Any" onChange={() => {}} />
        <section className="">
          <span>Price</span>
          <section className="grid grid-cols-2 gap-3">
            <InputField
              placeholder="Min (Any)"
              onChange={() => {}}
              type="number"
            />
            <InputField
              placeholder="Max (Any)"
              onChange={() => {}}
              type="number"
            />
          </section>
        </section>
        <InputField fieldName="Colour" placeholder="Any" onChange={() => {}} />
      </div>
    </div>
  );
};

export default FilterForm;
