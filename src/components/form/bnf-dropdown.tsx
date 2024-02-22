import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownOption {
    key: string;
    value?: string;
}

interface DropdownFieldProps {
    fieldName: string;
    defaultValue: string
    options: DropdownOption[];
    onChange: (value: string) => void;
    labelAlign?: "top" | "left";
}

const BnfDropdown = ({
                         fieldName,
                         defaultValue,
                         options,
                         onChange,
                         labelAlign,
                     }: DropdownFieldProps) => {
    return (
      <section
        className={`flex justify-center gap-2 ${
          labelAlign === "top" ? "flex-col" : "flex-row"
        } relative`}
      >
        <label className="font-semibold my-auto" htmlFor={fieldName}>
          {fieldName}
        </label>
        <div className="relative w-full">
          <select
            aria-label={fieldName}
            className={`text-darkgray p-3 rounded w-full bg-lightgray ${
              labelAlign === "top" ? "bg-slate-200" : "bg-white"
            } appearance-none pr-10`}
            value={defaultValue}
            onChange={(e) => {
              e.preventDefault();
              onChange(e.target.value);
            }}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.key}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray1">
            <IoIosArrowDown />
          </div>
        </div>
      </section>
    );
};

export default BnfDropdown;
