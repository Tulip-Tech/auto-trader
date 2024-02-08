import React from "react";
import ImageSlider from "./image-slider";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import GoogleReviewsComponent from "../car-show/google-review";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { IoCarOutline, IoDocumentTextOutline } from "react-icons/io5";
import { PiGasPump, PiEngine } from "react-icons/pi";
import DetailComponent from "./overview-card";
import UnifiedInfoComponent from "../car-show/unified-info";
import FeaturesAndSpec from "./description-tabs/features and spec";
import RunningCostTab from "./description-tabs/running-costs";
import type { TSingleCar } from "@/services/cars";

interface CarDetailsComponentProps {
  car: TSingleCar;
}

const CarDetailsComponent: React.FC<CarDetailsComponentProps> = ({ car }) => {
  return (
    <>
      <div className="grid grid-cols-2 space-x-10">
        <div>
          <ImageSlider images={car.imageList?.images.map((item) => item.url)} />
          <section className="flex flex-col space-y-3 mt-10 ">
            <span className="text-3xl font-bold">Overview</span>
            <span className="text-xl">{car.attentionGrabber}</span>
            <section className="flex flex-col">
              <div className="flex flex-wrap  gap-5 text-sm text-gray-700">
                {car.mileage && (
                  <DetailComponent
                    detail={`${
                      car.mileage.mileage
                    } ${car.mileage.unit.toLowerCase()}s`}
                    icon={<IoMdSpeedometer size={20} />}
                    title="Mileage"
                  />
                )}
                {car.dateOfRegistration && (
                  <DetailComponent
                    detail={car.dateOfRegistration}
                    icon={
                      <CiCalendar
                        size={20}
                        className="bg-white w-12 h-12 p-2"
                      />
                    }
                    title="Registration"
                  />
                )}
                {car.owners && (
                  <DetailComponent
                    detail={car.owners}
                    icon={
                      <FiUser size={20} className="bg-white w-12 h-12 p-2" />
                    }
                    title="Owners"
                  />
                )}
                {car.specification.fuel && (
                  <DetailComponent
                    detail={car.specification.fuel}
                    icon={<PiGasPump size={20} />}
                    title="Fuel type"
                  />
                )}
                {car.specification.bodyType && (
                  <DetailComponent
                    detail={car.specification.bodyType}
                    icon={<IoCarOutline size={20} />}
                    title="Body type"
                  />
                )}
                {car.specification.engine && (
                  <DetailComponent
                    detail={
                      car.specification.engine.manufacturerEngineSize.toString() +
                      "L"
                    }
                    icon={<PiEngine size={20} />}
                    title="Engine"
                  />
                )}
                {car.specification.transmission && (
                  <DetailComponent
                    detail={car.specification.transmission}
                    icon={<GiGearStickPattern size={20} />}
                    title="Gearbox"
                  />
                )}
                {car.specification.doors && (
                  <DetailComponent
                    detail={car.specification.doors.toString()}
                    icon={<GiCarDoor size={20} />}
                    title="Doors"
                  />
                )}
                {car.specification.seats && (
                  <DetailComponent
                    detail={car.specification.seats.toString()}
                    icon={<MdOutlineAirlineSeatReclineExtra size={20} />}
                    title="Seats"
                  />
                )}
                {car.serviceHistory && (
                  <DetailComponent
                    detail={car.serviceHistory}
                    icon={<IoDocumentTextOutline size={20} />}
                    title="Service history"
                  />
                )}
                {car.specification.emissionClass && (
                  <DetailComponent
                    detail={car.specification.emissionClass}
                    icon={<IoDocumentTextOutline size={20} />}
                    title="Emission Class"
                  />
                )}
              </div>
              <span className="mt-5 text-2xl font-bold">Description</span>
              <span className="h-48 overflow-y-scroll after:cont">
                {car.description}
              </span>
              <div className="mt-10 flex flex-col space-y-5">
                <FeaturesAndSpec
                  title={" Car Features and spec"}
                  techData={car.specification?.techData}
                  tabTitle={"Features and spec"}
                />
                <RunningCostTab
                  co2Emissions={car.specification?.co2Emissions}
                  title={"Running Costs"}
                  taxData={car.specification.annualTax}
                  currency={car.priceCurrency}
                  tabTitle={"Running Costs"}
                  urban={car.specification?.techData.fuelConsumptionUrban}
                  extraUrban={
                    car.specification?.techData.fuelConsumptionExtraUrban
                  }
                  average={car.specification?.techData.fuelConsumptionCombined}
                />
              </div>
            </section>
          </section>
        </div>

        <div className="flex flex-col">
          <span className="text-3xl font-semibold">{car.heading.title}</span>
          <span className="text-xl">{car.heading.subtitle}</span>
          <section className="flex flex-wrap  ">
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {`${car.mileage.mileage} ${car.mileage.unit.toLowerCase()}s `}
            </div>
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {car.dateOfRegistration.split("-")[0] + ""}
            </div>
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {car.specification?.transmission}
            </div>
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {car.specification?.fuel}
            </div>
          </section>
          <span className="my-3 text-3xl font-semibold">
            {car.priceCurrency + car.price}
          </span>
          <div className="flex flex-wrap gap-5 mx-auto place-content-center">
            <UnifiedInfoComponent />
          </div>
          <GoogleReviewsComponent />
        </div>
      </div>
    </>
  );
};

export default CarDetailsComponent;
