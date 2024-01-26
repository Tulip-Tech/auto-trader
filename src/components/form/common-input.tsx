import React, { ChangeEvent } from "react";

interface InputFieldProps {
  fieldName?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  fieldName,
  placeholder,
  onChange,
  type,
}) => {
  return (
    <section className="flex flex-col space-y-2">
      <span className="font-semibold">{fieldName}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-200 p-2 rounded"
        onChange={onChange}
      />
    </section>
  );
};

export default InputField;
