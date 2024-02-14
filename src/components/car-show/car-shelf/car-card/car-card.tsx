import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TCars } from "@/services/cars";
import RatingLabel from "@/components/car-show/car-shelf/car-card/rating";
import { useRouter } from "next/router";
import { FaSpinner } from "react-icons/fa";
import { ofetch } from "ofetch";
import getBranchesInfo from '@/services/getBranchesInfo';
import ImageSlider from "@/components/car-detail/image-slider";

interface TCarListCard {
  stockResponse: TCars["stockResponse"];
}

const CarListCard = ({ stockResponse }: TCarListCard) => {
  const router = useRouter();
  const branches = getBranchesInfo()

  const [loadMoreLoading, setLoadMoreLoading] = React.useState<boolean>(false)
  const [hasMoreResults, setHasMoreResults] =
    React.useState<TCars["stockResponse"]["hasMoreResults"]>(false);
  const [results, setResults] = React.useState<
    TCars["stockResponse"]["results"]
  >([]);

  React.useEffect(() => {
    setResults(stockResponse.results ?? []);
    setHasMoreResults(!!stockResponse?.hasMoreResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const getBranchNameByDealerId = React.useCallback((item: TCars['stockResponse']['results'][number]) => {
    return Object.keys(branches).find(branch => {
      if(branches[branch]?.dealerId === item?.dealer?.id) {
        return branch;
      }
    })
  }, [branches])

  const loadMore = React.useCallback(() => {
    setLoadMoreLoading(true)
    ofetch(
        `/api/cars?${new URLSearchParams(router.query as any).toString()}`
    ).then((response: TCars["stockResponse"]) => {
      setResults((p) => [...p, ...response.results]);
      setHasMoreResults(response.hasMoreResults);
    }).finally(() => {
      setLoadMoreLoading(false)
    });
  }, [router.query])

  return (
    <div className="flex flex-col space-y-5">
      {/*className="flex flex-col space-y-5 h-[80vh] overflow-x-auto">*/}
      {!results.length && (
        <div className="flex justify-center mt-5">No Results Found!</div>
      )}
      {results?.map((item) => (
        <Link
          key={item.id}
          href={`/${getBranchNameByDealerId(item)}/car-details/${item.id}`}
          target="__blank"
          className="bg-white rounded-md p-3 shadow-lg relative"
        >
          <div className="sm:grid grid-cols-12 gap-2 px-5">
            <div className="sm:col-span-10 col-span-9 gap-2">
              <div className="sm:grid grid-cols-8 gap-x-5">
                <section className="col-span-3 py-2 sm:py-0 hidden sm:block">
                  <Image
                    priority
                    src={item.images?.[0]?.src}
                    alt={item.images?.[0]?.src || 'car-logo'}
                    height={182}
                    width={198}
                    className="rounded-md w-full"
                  />
                </section>
                <div className="sm:hidden block">
                  <div className="flex flex-row flex-wrap gap-2 mt-4">
                    <ImageSlider
                      images={item.images?.map((item) => item.src)}
                    />
                  </div>
                </div>
                <section className="col-span-5 grid gap-2 py-3 sm:py-0">
                  <div>
                    <span className="flex text-lg lg:text-xl gap-2 text-primary font-bold">
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
              <div className="hidden sm:block">
                {" "}
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
            </div>
            <div className="col-span-3 sm:col-span-2 sm:border-l-2 sm:border-t-0 border-t-2  text-lg sm:text-xl lg:text-2xl text-center sm:grid content-between p-1 sm:p-2 sm:justify-center flex justify-between py-2 sm:py-0">
              <div>
                {item.price}
                <RatingLabel rating={item.priceIndicator.rating} />
              </div>
              <Image src={item?.dealerLogo} width={80} height={60} alt="bnf" />
            </div>
          </div>
        </Link>
      ))}
      {hasMoreResults && results.length && (
        <div className="flex justify-center w-full">
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded relative flex items-center justify-center"
              onClick={loadMore}
            >
              <span className="relative flex items-center font-bold">
                {loadMoreLoading &&<FaSpinner className="animate-spin mr-2" />}
                <span>Load More</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarListCard;
