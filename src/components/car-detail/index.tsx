import React, { useState } from "react";
import OpeningHoursComponent from "../car-show/opening-hours";
import Image from "next/image";
import UnifiedInfoComponent from "../car-show/unified-info";
import { data } from "./dummy";
import ImageSlider from "./image-slider";
import { IoMdSpeedometer } from "react-icons/io";
import CarDescription from "./overview";
const CarDetailsComponent = () => {
  const [selectedImg, setSelectedImg] = useState<string>(data.images[0].src);
  return (
    <>
      <div className="flex space-x-10">
        <div>
          <ImageSlider images={data.images} />
          <section className="flex flex-col space-y-3 mt-10 ">
            <span className="text-3xl font-bold">Overview</span>
            <span className="text-xl">{data.attentionGrabber}</span>
            <section>
              <CarDescription description={data.description} />
            </section>
          </section>
        </div>

        <div className="flex flex-col">
          <span className="text-3xl font-semibold">
            {data.titleAndSubtitle.title}
          </span>
          <span className="text-xl">{data.titleAndSubtitle.subtitle}</span>
          <section className="flex flex-wrap  ">
            {data.description.split("|").map((item: string) => (
              <div key={item} className="bg-white p-2 mr-4 mt-2 text-sm">
                {item}
              </div>
            ))}
          </section>
          <span className="mt-3 text-3xl font-semibold">{data.price}</span>
        </div>
      </div>
    </>
  );
};

export default CarDetailsComponent;
