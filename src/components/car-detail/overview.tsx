import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { IoCarOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngine, PiGasPump } from "react-icons/pi";
import DetailComponent from "./overview-card";

interface CarDetailsProps {
  description: string;
}

const CarDescription: React.FC<CarDetailsProps> = ({ description }) => {
  const detail = description.split("|").map((detail) => detail.trim());

  return (
    <div className="flex flex-wrap  gap-5 text-sm text-gray-700">
      {detail[2] && (
        <DetailComponent
          detail={detail[2]}
          icon={<IoMdSpeedometer size={20} />}
          title="Mileage"
        />
      )}
      {detail[0] && (
        <DetailComponent
          detail={detail[0]}
          icon={<CiCalendar size={20} className="bg-white w-12 h-12 p-2" />}
          title="Registration"
        />
      )}
      {detail[9] ? (
        <DetailComponent
          detail={detail[8].replace("owner", "")}
          icon={<FiUser size={20} className="bg-white w-12 h-12 p-2" />}
          title="Owners"
        />
      ) : null}
      {detail[5] && (
        <DetailComponent
          detail={detail[5]}
          icon={<PiGasPump size={20} />}
          title="Fuel type"
        />
      )}
      {detail[1] && (
        <DetailComponent
          detail={detail[1]}
          icon={<IoCarOutline size={20} />}
          title="Body type"
        />
      )}
      {detail[3] && (
        <DetailComponent
          detail={detail[3]}
          icon={<PiEngine size={20} />}
          title="Engine"
        />
      )}
      {detail[4] && (
        <DetailComponent
          detail={detail[4]}
          icon={<GiGearStickPattern size={20} />}
          title="Gearbox"
        />
      )}
      {detail[6] && (
        <DetailComponent
          detail={detail[6].replace("doors", "").trim()}
          icon={<GiCarDoor size={20} />}
          title="Doors"
        />
      )}
      {detail[7] && (
        <DetailComponent
          detail={detail[7].replace("seats", "").trim()}
          icon={<MdOutlineAirlineSeatReclineExtra size={20} />}
          title="Seats"
        />
      )}

      {detail[9] && (
        <DetailComponent
          detail={detail[9].replace("service history", "").trim()}
          icon={<IoDocumentTextOutline size={20} />}
          title="Service history"
        />
      )}
    </div>
  );
};

export default CarDescription;
