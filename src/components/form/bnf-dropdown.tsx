import React from "react";

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
            className={`flex justify-center gap-2 ${labelAlign === "top" ? "flex-col" : "flex-row"}`}
        >
            <span className="font-semibold my-auto">{fieldName}</span>
            <select
                className={` text-black/40 p-2 rounded w-full ${
                    labelAlign === "top" ? "bg-slate-200" : " bg-white"
                }`}
                value={defaultValue}
                onChange={e => {
                    e.preventDefault();
                    onChange(e.target.value)
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.key}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default BnfDropdown;
