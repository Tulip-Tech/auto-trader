import React from "react";
import { data } from "./dummy";
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

const CarDetailsComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 space-x-10">
        <div>
          <ImageSlider
            images={data[0].data.search.advert.imageList.images.map(
              (item) => item.url
            )}
          />
          <section className="flex flex-col space-y-3 mt-10 ">
            <span className="text-3xl font-bold">Overview</span>
            <span className="text-xl">
              {data[0].data.search.advert.attentionGrabber}
            </span>
            <section className="flex flex-col">
              <div className="flex flex-wrap  gap-5 text-sm text-gray-700">
                {data[0].data.search.advert.mileage && (
                  <DetailComponent
                    detail={`${
                      data[0].data.search.advert.mileage.mileage
                    } ${data[0].data.search.advert.mileage.unit.toLowerCase()}s`}
                    icon={<IoMdSpeedometer size={20} />}
                    title="Mileage"
                  />
                )}
                {data[0].data.search.advert.dateOfRegistration && (
                  <DetailComponent
                    detail={data[0].data.search.advert.dateOfRegistration}
                    icon={
                      <CiCalendar
                        size={20}
                        className="bg-white w-12 h-12 p-2"
                      />
                    }
                    title="Registration"
                  />
                )}
                {data[0].data.search.advert.owners && (
                  <DetailComponent
                    detail={data[0].data.search.advert.owners}
                    icon={
                      <FiUser size={20} className="bg-white w-12 h-12 p-2" />
                    }
                    title="Owners"
                  />
                )}
                {data[0].data.search.advert.specification.fuel && (
                  <DetailComponent
                    detail={data[0].data.search.advert.specification.fuel}
                    icon={<PiGasPump size={20} />}
                    title="Fuel type"
                  />
                )}
                {data[0].data.search.advert.specification.bodyType && (
                  <DetailComponent
                    detail={data[0].data.search.advert.specification.bodyType}
                    icon={<IoCarOutline size={20} />}
                    title="Body type"
                  />
                )}
                {data[0].data.search.advert.specification.engine && (
                  <DetailComponent
                    detail={
                      data[0].data.search.advert.specification.engine.manufacturerEngineSize.toString() +
                      "L"
                    }
                    icon={<PiEngine size={20} />}
                    title="Engine"
                  />
                )}
                {data[0].data.search.advert.specification.transmission && (
                  <DetailComponent
                    detail={
                      data[0].data.search.advert.specification.transmission
                    }
                    icon={<GiGearStickPattern size={20} />}
                    title="Gearbox"
                  />
                )}
                {data[0].data.search.advert.specification.transmission && (
                  <DetailComponent
                    detail={data[0].data.search.advert.specification.doors.toString()}
                    icon={<GiCarDoor size={20} />}
                    title="Doors"
                  />
                )}
                {data[0].data.search.advert.specification.seats && (
                  <DetailComponent
                    detail={data[0].data.search.advert.specification.seats.toString()}
                    icon={<MdOutlineAirlineSeatReclineExtra size={20} />}
                    title="Seats"
                  />
                )}
                {data[0].data.search.advert.serviceHistory && (
                  <DetailComponent
                    detail={data[0].data.search.advert.serviceHistory}
                    icon={<IoDocumentTextOutline size={20} />}
                    title="Service history"
                  />
                )}
                {data[0].data.search.advert.specification.emissionClass && (
                  <DetailComponent
                    detail={
                      data[0].data.search.advert.specification.emissionClass
                    }
                    icon={<IoDocumentTextOutline size={20} />}
                    title="Emission Class"
                  />
                )}
              </div>
              <span className="mt-5 text-2xl font-bold">Description</span>
              <span className="h-48 overflow-y-scroll after:cont">
                {data[0].data.search.advert.description}
              </span>
              <div className="mt-10 flex flex-col space-y-5">
                <FeaturesAndSpec
                  title={" Car Features and spec"}
                  techData={data[0].data.search.advert.specification.techData}
                  tabTitle={"Features and spec"}
                />
                <RunningCostTab
                  co2Emissions={
                    data[0].data.search.advert.specification.co2Emissions
                  }
                  title={"Running Costs"}
                  taxData={data[0].data.search.advert.specification.annualTax}
                  currency={data[0].data.search.advert.priceCurrency}
                  tabTitle={"Running Costs"}
                  urban={
                    data[0].data.search.advert.specification.techData
                      .fuelConsumptionUrban
                  }
                  extraUrban={
                    data[0].data.search.advert.specification.techData
                      .fuelConsumptionExtraUrban
                  }
                  average={
                    data[0].data.search.advert.specification.techData
                      .fuelConsumptionCombined
                  }
                />
              </div>
            </section>
          </section>
        </div>

        <div className="flex flex-col">
          <span className="text-3xl font-semibold">
            {data[0].data.search.advert.heading.title}
          </span>
          <span className="text-xl">
            {data[0].data.search.advert.heading.subtitle}
          </span>
          <section className="flex flex-wrap  ">
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {`${
                data[0].data.search.advert.mileage.mileage
              } ${data[0].data.search.advert.mileage.unit.toLowerCase()}s `}
            </div>
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {data[0].data.search.advert.dateOfRegistration.split("-")[0] + ""}
            </div>
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {data[0].data.search.advert.specification.transmission}
            </div>
            <div className="bg-white p-2 mr-4 mt-2 text-sm">
              {data[0].data.search.advert.specification.fuel}
            </div>
          </section>
          <span className="my-3 text-3xl font-semibold">
            {data[0].data.search.advert.priceCurrency +
              data[0].data.search.advert.price}
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
