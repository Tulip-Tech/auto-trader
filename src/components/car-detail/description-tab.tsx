import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import ModalFromRight from "./description-modal";
import FeaturesDropdowns from "./dropdowns/category-dropdown";
import { TechData } from "@/interface/techData";
import SpecsDropdowns from "./dropdowns/specs-dropdown";

interface FeaturesSpecSectionProps {
  title: string;
  tabTitle: string;
  techData: TechData;
}

const DescriptionTab: React.FC<FeaturesSpecSectionProps> = ({
  title,

  tabTitle,
  techData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenFeaturesModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseFeaturesModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="pt-3 border-y-2 text-xl flex justify-between cursor-pointer"
      onClick={handleOpenFeaturesModal}
    >
      {tabTitle}
      <MdArrowRightAlt className="text-[#EA580D]" size={40} />
      <ModalFromRight
        title={title}
        techData={techData}
        isOpen={isModalOpen}
        onClose={handleCloseFeaturesModal}
      >
        <FeaturesDropdowns standardFeatures={techData.standardFeatures} />
        <SpecsDropdowns techData={techData} />
      </ModalFromRight>
    </section>
  );
};

export default DescriptionTab;
