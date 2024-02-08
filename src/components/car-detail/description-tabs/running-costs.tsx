import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import ModalFromRight from "../description-modal";
import { CgDanger } from "react-icons/cg";
interface co2Emissions {
  co2Emission: number;
  unit: string;
  __typename: string;
}
interface taxData {
  standardRate: number;
  __typename: string;
}
interface FeaturesSpecSectionProps {
  title: string;
  tabTitle: string;
  taxData: taxData;
  currency: string;
  co2Emissions: co2Emissions;
  urban: string;
  extraUrban: string;
  average: string;
}

const RunningCostTab: React.FC<FeaturesSpecSectionProps> = ({
  title,
  currency,
  tabTitle,
  taxData,
  co2Emissions,
  urban,
  extraUrban,
  average,
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
        isOpen={isModalOpen}
        onClose={handleCloseFeaturesModal}
      >
        <span className=" border-b-2 pb-5">
          Get an idea of how much this car might cost to insure, tax and fuel.
        </span>
        <div className="flex flex-col space-y-5">
          <span className="pb-5 w-full text-center font-semibold text-xl">
            Tax
          </span>
          <div>
            <span>
              Tax is worked out based on when the car was first registered, the
              type of fuel it uses, and the amount of CO2 it emits per
              kilometre.
            </span>
          </div>

          <span className="border-2 p-4 shadow-lg">
            <table className="w-full ">
              <tbody>
                <tr className=" ">
                  <td className="text-left py-2 ">Tax per year</td>

                  <td className="flex-grow"></td>

                  <td className="text-right">
                    {currency}
                    {taxData.standardRate}
                  </td>
                </tr>
                <tr className="">
                  <td className="text-left py-2">CO2 Emissions</td>

                  <td className="flex-grow"></td>

                  <td className="text-right">
                    {co2Emissions.co2Emission}
                    {co2Emissions.unit}
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
          <span className="p-4 gap-2 border border-blue-500 bg-blue-100/50 flex">
            <CgDanger size={60} className="-mt-4 " />
            Diesel cars typically cost more to tax than petrol. Hybrid and
            electric cars are the cheapest to tax because they emit little (or
            no) CO2.
          </span>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="pb-5 w-full text-center font-semibold text-xl">
            Fuel
          </span>
          <div>
            <span>
              This is how many miles the car will travel per gallon of fuel
              (MPG). It will vary depending on where you usually drive it.
            </span>
          </div>

          <span className="border-2 p-4 shadow-lg">
            <table className="w-full ">
              <tbody className="">
                <tr className="">
                  <td className="text-left flex flex-col my-2">
                    Urban
                    <span className="text-sm">
                      Driving around towns and cities
                    </span>
                  </td>

                  <td className="flex-grow"></td>

                  <td className="text-right">{urban}</td>
                </tr>
                <tr className="">
                  <td className=" flex flex-col text-left  my-2">
                    Extra Urban
                    <span className=" text-sm">
                      Driving in towns and on faster A-roads
                    </span>
                  </td>

                  <td className="flex-grow"></td>

                  <td className="text-right">{extraUrban}</td>
                </tr>
                <tr className="">
                  <td className="text-left flex flex-col">
                    Average
                    <span className="text-sm">
                      Urban and extra urban combined
                    </span>
                  </td>

                  <td className="flex-grow"></td>

                  <td className="text-right">{average}</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </ModalFromRight>
    </section>
  );
};

export default RunningCostTab;
