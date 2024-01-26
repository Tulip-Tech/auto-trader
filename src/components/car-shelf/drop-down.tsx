import { ChangeEvent } from "react";

interface DropdownFieldProps {
  fieldName?: string;
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  fieldName,
  options,
  onChange,
}) => {
  return (
    <section className="flex self-end gap-2">
      <span className="font-semibold my-auto">{fieldName}</span>
      <select
        className="bg-white text-black/40 p-2 rounded"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </section>
  );
};

export default DropdownField;
