"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import RatingLabel from "./rating";
import Link from "next/link";
import DropdownField from "../drop-down";
interface CardItem {
  advertType: string;
  id: string;
  sellerType: string;
  titleAndSubtitle: {
    title: string;
    subtitle: string;
  };
  title: string;
  attentionGrabber: string;
  price: string;
  noAdminFees: boolean;
  valueRatingKey: string;
  priceIndicator: {
    rating: string;
  };
  town: string;
  images: Array<{
    src: string;
  }>;
  totalImages: number;
  targetUrl: string;
  description: string;
  capabilities: Array<any>;
  vehicle: {
    condition: string;
    writeOffCategory: string;
    mileage: string;
    yearText: string;
    manufacturerApproved: boolean;
    franchiseApproved: boolean;
    colour: string;
  };
  hasVideo: boolean;
  hasSpin: boolean;
  hasFinanceQuotesAvailable: boolean;
  hasWarrantyDirect: boolean;
  dealerReviewValue: number;
  numberOfDealerReviews: number;
  dealer: {
    id: string;
    name: string;
    url: string;
    address: {
      town: string;
    };
    latLong: string;
  };
  dealerLogo: string;
  summaryDescription: string;
  isAllocatedStockAdvert: boolean;
  isNetworkStockAdvert: boolean;
  isGroupStockAdvert: boolean;
  isGroupStockMultiLocationAdvert: boolean;
  isCustomVan: boolean;
  shouldShowVehicleLocation: boolean;
  hasGuaranteedPartExchange: boolean;
  shouldShowNearestCollectionLocation: boolean;
}

interface Props {
  Carddata?: CardItem[];
}

const CarListCard = ({ Carddata }: Props) => {
  const initialLoadMoreState = Carddata?.reduce((acc: any, item: any) => {
    acc[item.id] = 6;
    return acc;
  }, {});

  const [loadMoreState, setLoadMoreState] = useState(initialLoadMoreState);

  const handleLoadMore = (itemId: any) => {
    setLoadMoreState((prevState: any) => ({
      ...prevState,
      [itemId]: prevState[itemId] + 6,
    }));
  };

  return (
    <div className="flex flex-col space-y-5">
      {Carddata?.map((item) => (
        <Link
          href={`https://www.autotrader.co.uk${item.targetUrl}`}
          key={item.id}
          className="bg-white rounded-md p-3 shadow-lg relative"
        >
          <div className="flex gap-2 ">
            <section>
              <Image
                src={item.images[0].src}
                alt="test"
                height={250}
                width={300}
                className="rounded-md"
              />
            </section>
            <div className="w-[500px]">
              <section>
                <span className="flex text-md gap-2 text-[#EA580D] font-semibold ">
                  <span>{item.titleAndSubtitle.title}</span>
                  <span>{item.titleAndSubtitle.subtitle}</span>
                </span>
              </section>
              <span className="text-sm font-meduim">
                {item.attentionGrabber}
              </span>
              <section className=" text-[12px] mt-5">
                {item.description}
              </section>
              <section className=" text-[12px] mt-5">
                {item.summaryDescription}
              </section>
              <section className="text-[10px] text-[#A9A7A7] my-1">
                {item.dealer?.name}
              </section>
            </div>
            <div className="border-l-2 w-48 text-2xl text-center">
              {item.price}
              <RatingLabel rating={item.priceIndicator.rating} />
              <Image
                src="/header/B&F-03.svg"
                width={120}
                height={80}
                alt="bnf"
                className="absolute bottom-0 right-10"
              />
            </div>
          </div>
          <div className="flex mt-5 gap-3 w-fit relative ">
            {item.images.slice(0, loadMoreState[item.id]).map((img, index) => (
              <section key={index}>
                <Image
                  src={img.src}
                  width={80}
                  height={60}
                  alt={`${item.id}-image-${index}`}
                  className="rounded-lg overflow-hidden"
                />
              </section>
            ))}
            {item.images.length > loadMoreState[item.id] && (
              <span
                className="text-xs m-5 cursor-pointer absolute -right-32 z-10 "
                onClick={() => handleLoadMore(item.id)}
              >
                more photos
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarListCard;
