import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { IoCarOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngine, PiGasPump } from "react-icons/pi";

interface CarDetailsProps {
  description: string;
}

const CarDescription: React.FC<CarDetailsProps> = ({ description }) => {
  const detail = description.split("|").map((detail) => detail.trim());

  return (
    <div className="flex flex-wrap gap-5 text-sm text-gray-700">
      {detail[2] && (
        <section className="flex gap-4">
          <IoMdSpeedometer size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-1">
            <span className="font-semibold">Mileage</span>
            {detail[2]}
          </span>
        </section>
      )}
      {detail[0] && (
        <section className="flex gap-4">
          <CiCalendar size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Registration</span>
            {detail[0]}
          </span>
        </section>
      )}
      {detail[9] ? (
        <section className="flex gap-4">
          <FiUser size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Owners</span>
            {detail[8].replace("owner", "")}
          </span>
        </section>
      ) : null}
      {detail[5] && (
        <section className="flex gap-4">
          <PiGasPump size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Fuel type</span>
            {detail[5]}
          </span>
        </section>
      )}
      {detail[1] && (
        <section className="flex gap-4">
          <IoCarOutline size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Body type</span>
            {detail[1]}
          </span>
        </section>
      )}
      {detail[3] && (
        <section className="flex gap-4">
          <PiEngine size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Engine</span>
            {detail[3]}
          </span>
        </section>
      )}
      {detail[4] && (
        <section className="flex gap-4">
          <GiGearStickPattern size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Gearbox Manual</span>
            {detail[4]}
          </span>
        </section>
      )}
      {detail[6] && (
        <section className="flex gap-4">
          <GiCarDoor size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Doors</span>
            {detail[6].replace("doors", "")}
          </span>
        </section>
      )}
      {detail[7] && (
        <section className="flex gap-4">
          <MdOutlineAirlineSeatReclineExtra
            size={20}
            className="bg-white w-12 h-12 p-2"
          />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Seats</span>
            {detail[7].replace("seats", "")}
          </span>
        </section>
      )}

      {detail[9] && (
        <section className="flex gap-4">
          <IoDocumentTextOutline size={20} className="bg-white w-12 h-12 p-2" />
          <span className="flex flex-col mt-2">
            <span className="font-semibold">Service history</span>
            {detail[9].replace("service history", "")}
          </span>
        </section>
      )}
    </div>
  );
};

export default CarDescription;
