import { TechData } from "@/interface/techData";
import React, { useState } from "react";

interface SpecDropdownsProps {
  techData: TechData;
}

const SpecsDropdowns: React.FC<SpecDropdownsProps> = ({ techData }) => {
  const [openPerformanceDropdown, setOpenPerformanceDropdown] = useState(false);
  const [openSizeDropdown, setOpenSizeDropdown] = useState(false);
  return (
    <div>
      <span> Specs</span>
      <button
        onClick={() => setOpenPerformanceDropdown(!openPerformanceDropdown)}
        className="mb-5 flex justify-between w-full text-[#EA580D] border-y-2 py-4 mt-5 "
      >
        + Performance
        {openPerformanceDropdown ? "▲" : "▼"}
      </button>

      {openPerformanceDropdown && (
        <div className="border-2 p-4 shadow-lg">
          <table className="w-full ">
            <tbody>
              {techData.zeroToSixtyMph && (
                <tr className="">
                  <td className="text-left">0-60mph</td>

                  <td className="flex-grow"></td>

                  <td className="text-right">{techData.zeroToSixtyMph}</td>
                </tr>
              )}
              {techData.zeroToSixtyTwoMph && (
                <tr className="">
                  <td className="text-left">0-62mph</td>

                  <td className="flex-grow"></td>

                  <td className="text-right">{techData.zeroToSixtyTwoMph}</td>
                </tr>
              )}

              <tr>
                <td className="text-left">Top Speed</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.topSpeed}</td>
              </tr>
              <tr>
                <td className="text-left">Cylinders</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.cylinders}</td>
              </tr>
              <tr>
                <td className="text-left">Valves</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.valves}</td>
              </tr>
              <tr>
                <td className="text-left">Engine power</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.enginePower}</td>
              </tr>
              <tr>
                <td className="text-left">Engine torque</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.engineTorque}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={() => setOpenSizeDropdown(!openSizeDropdown)}
        className="mb-5 flex justify-between w-full text-[#EA580D] border-y-2 py-4 mt-5 "
      >
        + Size and dimensions
        {openSizeDropdown ? "▲" : "▼"}
      </button>

      {openSizeDropdown && (
        <div className="border-2 p-4 shadow-lg">
          <table className="w-full ">
            <tbody>
              <tr>
                <td className="text-left">Height</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.vehicleHeight}</td>
              </tr>
              <tr>
                <td className="text-left">Length</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.vehicleLength}</td>
              </tr>
              <tr>
                <td className="text-left">Wheelbase</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.wheelbase}</td>
              </tr>
              <tr>
                <td className="text-left">Width</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.vehicleWidth}</td>
              </tr>
              <tr>
                <td className="text-left">Fuel tank capacity</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.fuelTankCapacity}</td>
              </tr>
              <tr>
                <td className="text-left">Boot space (seats down)</td>

                <td className="flex-grow"></td>

                <td className="text-right">
                  {techData.luggageCapacitySeatsDown}
                </td>
              </tr>
              <tr>
                <td className="text-left">Boot space (seats up)</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.bootspaceSeatsUp}</td>
              </tr>
              <tr>
                <td className="text-left">Minimum kerb weight</td>

                <td className="flex-grow"></td>

                <td className="text-right">{techData.minimumKerbWeight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SpecsDropdowns;
