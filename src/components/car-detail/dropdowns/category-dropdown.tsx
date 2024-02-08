import React, { useState } from "react";

interface Feature {
  description: string;
  category: string;
  __typename: string;
}

interface CategoryDropdownsProps {
  standardFeatures: Feature[];
}

const FeaturesDropdowns: React.FC<CategoryDropdownsProps> = ({
  standardFeatures,
}) => {
  const groupedFeatures = standardFeatures.reduce<Record<string, string[]>>(
    (acc, feature) => {
      const { __typename, description } = feature;
      if (!acc[__typename]) {
        acc[__typename] = [];
      }
      acc[__typename].push(description);
      return acc;
    },
    {}
  );

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    if (openDropdown === category) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(category);
    }
  };

  return (
    <div>
      {Object.keys(groupedFeatures).map((category, index) => (
        <div key={index}>
          <button
            onClick={() => toggleDropdown(category)}
            className="mb-5 flex justify-between w-full text-[#EA580D] border-y-2 py-4 mt-5"
          >
            {category} {openDropdown === category ? "▲" : "▼"}
          </button>
          {openDropdown === category && (
            <ul className="border-2 p-4 shadow-lg">
              {groupedFeatures[category]
                .slice(0, 6)
                .map((description, descIndex) => (
                  <li key={descIndex}>{description}</li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturesDropdowns;
