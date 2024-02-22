import React from "react";
import ImageSlider from "./image-slider";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import GoogleReviewsComponent from "../car-show/google-review";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import { IoMdHome, IoMdSpeedometer } from "react-icons/io";
import { IoCarOutline, IoDocumentTextOutline } from "react-icons/io5";
import { PiGasPump, PiEngine } from "react-icons/pi";
import DetailComponent from "./overview-card";
import UnifiedInfoComponent from "../car-show/unified-info";
import FeaturesAndSpec from "./description-tabs/features and spec";
import RunningCostTab from "./description-tabs/running-costs";
import type { TSingleCar } from "@/services/cars";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

interface CarDetailsComponentProps {
  car: TSingleCar;
}

const CarDetailsComponent: React.FC<CarDetailsComponentProps> = ({ car }) => {
  const router = useRouter();

  const pathSegments = router.asPath.split('?')[0].split('/').filter(v => v.length > 0);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { name, href };
  });
  return (
    <>
      <nav aria-label="Breadcrumb" className="mt-20">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" passHref className="flex gap-1 items-center">
              <IoMdHome />
              <p className="block transition hover:text-gray-700 text-xs sm:text-base">
                Home
              </p>
            </Link>
          </li>

          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.name !== "Car-details" && (
                <>
                  <li>
                    <FaChevronRight />
                  </li>
                  <li>
                    {index + 1 === breadcrumbs.length ? (
                      <span className="text-gray-500 font-semibold text-xs sm:text-base">
                        {car.heading.title}
                      </span>
                    ) : (
                      <Link href={crumb.href} passHref>
                        <p className="block transition hover:text-gray-700 text-xs sm:text-base">
                          {crumb.name}
                        </p>
                      </Link>
                    )}
                  </li>
                </>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      <div className="sm:grid grid-cols-12 gap-8 mt-6">
        <div className="col-span-7">
          <ImageSlider images={car.imageList?.images.map((item) => item.url)} />
          <div className="block sm:hidden mt-10">
            <p className="text-3xl font-semibold">{car.heading.title}</p>
            <p className="text-xl">{car.heading.subtitle}</p>

            <section className="flex flex-wrap gap-4 mt-3">
              <div className="bg-white p-2  text-sm">
                {`${car.mileage.mileage} ${car.mileage.unit.toLowerCase()}s `}
              </div>
              <div className="bg-white p-2 text-sm">
                {car.dateOfRegistration.split("-")[0] + ""}
              </div>
              <div className="bg-white p-2  text-sm">
                {car.specification?.transmission}
              </div>
              <div className="bg-white p-2 text-sm">
                {car.specification?.fuel}
              </div>
            </section>
            <p className="my-3 text-3xl font-semibold">
              {car.priceCurrency + car.price}
            </p>
          </div>
          <section className="flex flex-col space-y-3 mt-10">
            <span className="text-3xl font-bold">Overview</span>
            <span className="text-xl">{car.attentionGrabber}</span>
            <section className="flex flex-col">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm text-gray-700">
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
              <span className="mt-16 mb-5 text-2xl font-bold">Description</span>
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
        <div className="col-span-5 mt-16 sm:mt-0">
          <div className="sm:block hidden">
            <p className="text-3xl font-semibold">{car.heading.title}</p>
            <p className="text-xl">{car.heading.subtitle}</p>

            <section className="flex flex-wrap gap-4 mt-3">
              <div className="bg-white p-2  text-sm">
                {`${car.mileage.mileage} ${car.mileage.unit.toLowerCase()}s `}
              </div>
              <div className="bg-white p-2 text-sm">
                {car.dateOfRegistration.split("-")[0] + ""}
              </div>
              <div className="bg-white p-2  text-sm">
                {car.specification?.transmission}
              </div>
              <div className="bg-white p-2 text-sm">
                {car.specification?.fuel}
              </div>
            </section>
            <p className="my-3 text-3xl font-semibold">
              {car.priceCurrency + car.price}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 my-10 w-full">
            <UnifiedInfoComponent />
          </div>
          <GoogleReviewsComponent />
        </div>
      </div>
    </>
  );
};

export default CarDetailsComponent;
