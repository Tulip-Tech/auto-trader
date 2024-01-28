import React, { ChangeEvent } from "react";

interface InputFieldProps {
    fieldName?: string;
    defaultValue: string
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const BnfInput = ({
                      fieldName,
                      defaultValue,
                      placeholder,
                      onChange,
                      type,
                  }: InputFieldProps) => {
    return (
        <section className="flex flex-col space-y-2">
            <span className="font-semibold">{fieldName}</span>
            <input
                type={type}
                value={defaultValue}
                placeholder={placeholder}
                className="bg-gray-200 p-2 rounded"
                onChange={onChange}
            />
        </section>
    );
};

export default BnfInput;
