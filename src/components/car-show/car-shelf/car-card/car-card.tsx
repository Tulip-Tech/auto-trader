import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TCars } from '@/services/cars';
import RatingLabel from '@/components/car-show/car-shelf/car-card/rating';
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";

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
    }, [router.query])

    React.useEffect(() => {
        // TODO:: need to fix this infinite scrolling in respect to dynamic pages with page query change
        const nextObserver = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && stockResponse.hasMoreResults) {
                setTimeout(() => {
                    router.query['page'] = String(+((router.query?.['page'] as string) || 1) + 1)
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
    }, [router, stockResponse.hasMoreResults]);

    return (
      <div className="flex flex-col space-y-5">
        {/*className="flex flex-col space-y-5 h-[80vh] overflow-x-auto">*/}
        {!results.length && (
          <div className="flex justify-center mt-5">No Results Found!</div>
        )}
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
                  <section className="col-span-3">
                    <Image
                      priority
                      src={item.images?.[0]?.src}
                      alt={item.images?.[0]?.src}
                      height={182}
                      width={198}
                      className="rounded-md"
                    />
                  </section>
                  <section className="col-span-5 grid gap-2">
                    <div>
                      <span className="flex text-xl gap-2 text-primary font-bold">
                        <span>
                          {item.titleAndSubtitle.title}{" "}
                          {item.titleAndSubtitle.subtitle}
                        </span>
                      </span>
                    </div>
                    <div className="text-base font-normal text-slate">
                      {item.attentionGrabber}
                    </div>
                    <div className="text-xs text-slate font-light">
                      {item.description}
                    </div>
                    <div className="text-xs text-slate font-light">
                      {item.summaryDescription}
                    </div>
                    <div className="text-xs opacity-50 font-medium">
                      {item.dealer?.name}
                    </div>
                  </section>
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-4">
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
              <div className="col-span-2 border-l-2 text-2xl text-center grid content-between p-2">
                <div>
                  {item.price}
                  <RatingLabel rating={item.priceIndicator.rating} />
                </div>
                <Image
                  src={item?.dealerLogo}
                  width={80}
                  height={60}
                  alt="bnf"
                />
              </div>
            </div>
          </Link>
        ))}
        {stockResponse.hasMoreResults && results.length && (
          <div ref={nextRef} className="flex justify-center w-full">
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded relative flex items-center justify-center"
              >
                <span className="relative flex items-center font-bold">
                  <FaSpinner className="animate-spin mr-2" />
                  <span className="font-bold">Load More . . .</span>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default CarListCard;
