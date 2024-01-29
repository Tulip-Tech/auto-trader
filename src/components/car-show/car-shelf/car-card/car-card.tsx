import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TCars } from '@/services/cars';
import RatingLabel from '@/components/car-show/car-shelf/car-card/rating';
import { useRouter } from 'next/router';

interface TCarListCard {
    stockResponse: TCars['stockResponse'];
}

const CarListCard = ({ stockResponse }: TCarListCard) => {
    const router = useRouter()
    const nextRef = React.useRef<HTMLDivElement>(null);

    const [results, setResults] = React.useState<TCars['stockResponse']['results']>([])

    React.useEffect(() => {
        setResults(stockResponse.results ?? [])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query?.slug])

    React.useEffect(() => {
        const nextObserver = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && stockResponse.hasMoreResults) {
                setTimeout(() => {
                    router.query['page'] = String(stockResponse?.currentPage + 1)
                    router.push(router, undefined, {
                        scroll: false
                    }).then(() => {
                        setResults(p => ([...p, ...stockResponse.results]))
                    })
                }, 500)
            }
        });
        if (nextRef.current) {
            nextObserver.observe(nextRef.current);
        }

        return () => {
            if (nextRef.current) {
                nextObserver.unobserve(nextRef?.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, nextRef, stockResponse.hasMoreResults, stockResponse?.currentPage]);

    return (
        <div
            className="flex flex-col space-y-5">
            {/*className="flex flex-col space-y-5 h-[80vh] overflow-x-auto">*/}
            {!results.length && <div className="flex justify-center mt-5">No Results Found!</div>}
            {results?.map((item) => (
                <Link
                    key={item.id}
                    href={`https://www.autotrader.co.uk${item.targetUrl}`}
                    target="__blank"
                    className="bg-white rounded-md p-3 shadow-lg relative"
                >
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-10 gap-2">
                            <div className="grid grid-cols-8 gap-x-5">
                                <section className="col-span-2">
                                    <Image
                                        priority
                                        src={item.images?.[0]?.src}
                                        alt={item.images?.[0]?.src}
                                        height={250}
                                        width={300}
                                        className="rounded-md"
                                    />
                                </section>
                                <section className="col-span-6 grid gap-2">
                                    <div>
                                        <span className="flex text-md gap-2 text-[#EA580D] font-semibold ">
                                          <span>{item.titleAndSubtitle.title}</span>
                                          <span>{item.titleAndSubtitle.subtitle}</span>
                                        </span>
                                    </div>
                                    <div className="text-sm font-meduim">
                                        {item.attentionGrabber}
                                    </div>
                                    <div className="text-[12px]">
                                        {item.description}
                                    </div>
                                    <div className="text-[12px]">
                                        {item.summaryDescription}
                                    </div>
                                    <div className="text-[10px] opacity-50">
                                        {item.dealer?.name}
                                    </div>
                                </section>
                            </div>
                            <div className="flex flex-row flex-wrap gap-2 mt-2">
                                {item.images.map((img, index) => (
                                    <section key={index}>
                                        <Image
                                            priority
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
                                width={80}
                                height={60}
                                alt="bnf"
                                className="absolute bottom-5 right-5"
                            />
                        </div>
                    </div>
                </Link>

            ))}
            {
                stockResponse.hasMoreResults && results.length &&
				<div ref={nextRef} className="flex justify-center">Loading...</div>
            }
        </div>
    );
};

export default CarListCard;
