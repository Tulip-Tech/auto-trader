import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TCars } from '@/services/cars';
import RatingLabel from '@/components/car-show/car-shelf/car-card/rating';

interface Props {
    stockResponse?: TCars['stockResponse'];
}

const CarListCard = ({ stockResponse }: Props) => {
    return (
        <div className="flex flex-col space-y-5">
            {stockResponse?.results?.map((item) => (
                <Link
                    href={`https://www.autotrader.co.uk${item.targetUrl}`}
                    target="__blank"
                    key={item.id}
                    className="bg-white rounded-md p-3 shadow-lg relative"
                >
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-10 gap-2">
                            <div className="grid grid-cols-8 gap-x-5">
                                <section className="col-span-2">
                                    <Image
                                        src={item.images?.[0]?.src}
                                        alt={item.images?.[0]?.src}
                                        height={250}
                                        width={300}
                                        className="rounded-md"
                                    />
                                </section>
                                <section className="col-span-6">
                                    <div>
                                <span className="flex text-md gap-2 text-[#EA580D] font-semibold ">
                                  <span>{item.titleAndSubtitle.title}</span>
                                  <span>{item.titleAndSubtitle.subtitle}</span>
                                </span>
                                    </div>
                                    <div className="text-sm font-meduim">
                                        {item.attentionGrabber}
                                    </div>
                                    <div className=" text-[12px] mt-5">
                                        {item.description}
                                    </div>
                                    <div className=" text-[12px] mt-5">
                                        {item.summaryDescription}
                                    </div>
                                    <div className="text-[10px] text-[#A9A7A7] my-1">
                                        {item.dealer?.name}
                                    </div>
                                </section>
                            </div>
                            <div className="flex flex-row flex-wrap gap-2 mt-5">
                                {item.images.map((img, index) => (
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
                            </div>
                        </div>
                        <div className="col-span-2 border-l-2 text-2xl text-center">
                            {item.price}
                            <RatingLabel rating={item.priceIndicator.rating}/>
                            <Image
                                src={item?.dealerLogo}
                                width={120}
                                height={80}
                                alt="bnf"
                                className="absolute bottom-5 right-7"
                            />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CarListCard;
