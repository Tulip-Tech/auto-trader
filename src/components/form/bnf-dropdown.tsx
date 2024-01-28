import React from "react";

interface DropdownOption {
    key: string;
    value?: string;
}

interface DropdownFieldProps {
    fieldName: string;
    defaultValue: string
    options: DropdownOption[];
    onChange: (e: React.FormEvent<HTMLElement>) => void;
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
            className={`${
                labelAlign === "top" ? "grid  self-left" : " flex gap-2 self-end"
            }`}
        >
            <span className="font-semibold my-auto">{fieldName}</span>
            <select
                className={` text-black/40 p-2 rounded ${
                    labelAlign === "top" ? "bg-slate-200" : " bg-white"
                }`}
                onChange={e => {
                    e.preventDefault();
                    onChange(e)
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value} selected={option.value === defaultValue}>
                        {option.key}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default BnfDropdown;
