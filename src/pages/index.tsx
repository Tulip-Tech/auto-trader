import CarShowComponent from "@/components/car-show";
import { getCars, NORTHAMPTON_DEALER, SYSTON_DEALER, TCars } from '@/services/cars';

export default function Home({ cars }: { cars: TCars['stockResponse'] }) {
    return <CarShowComponent cars={cars}/>;
}

export const getServerSideProps = async (ctx: any) => {
    const queries = Object.keys(ctx?.query)
        .map((k) => `${k}=${ctx.query[k]}`)
        .join("&");
    const [northampton, syston] = await Promise.all([getCars(queries, NORTHAMPTON_DEALER), getCars(queries, SYSTON_DEALER)])

    const cars: TCars['stockResponse'] = {
        hasMoreResults: northampton?.stockResponse?.hasMoreResults || syston?.stockResponse?.hasMoreResults,
        currentPage: northampton?.stockResponse?.currentPage,
        totalResults: +northampton?.stockResponse?.totalResults + +syston?.stockResponse?.totalResults,
        totalPages: Math.max(northampton?.stockResponse?.totalPages, syston?.stockResponse?.totalPages),
        isPostcodeValid: northampton?.stockResponse?.isPostcodeValid || syston?.stockResponse?.isPostcodeValid,

        // TODO:: need to apply sorting which is active, which can be found in sortOptions result
        // grab the sort option and sort the final results
        results: northampton?.stockResponse?.results?.concat(syston?.stockResponse?.results),

        // TODO:: only picking the northampton, if this info needs in ui, please try to overcome what to do
        csFinanceProductInfoText: northampton?.stockResponse?.csFinanceProductInfoText,
        csFinanceProductInfoPageLocation: northampton?.stockResponse?.csFinanceProductInfoPageLocation,
        hpFinanceProductInfoText: northampton?.stockResponse?.hpFinanceProductInfoText,
        hpFinanceProductInfoPageLocation: northampton?.stockResponse?.hpFinanceProductInfoPageLocation,
        pcpFinanceProductInfoText: northampton?.stockResponse?.pcpFinanceProductInfoText,
        pcpFinanceProductInfoPageLocation: northampton?.stockResponse?.pcpFinanceProductInfoPageLocation,

        // TODO:: sort is global and no count is returned, so picking from one of them is fine
        sortOptions: northampton?.stockResponse?.sortOptions,

        searchOptions: {
            resultCount: String(+northampton?.stockResponse?.searchOptions?.resultCount + +syston?.stockResponse?.searchOptions?.resultCount),
            options: Object.keys(northampton?.stockResponse?.searchOptions?.options)?.reduce((acc, key) => {
                acc[key] = northampton?.stockResponse?.searchOptions?.options?.[key]?.map(op => {
                    if (syston?.stockResponse?.searchOptions?.options?.[key]) {
                        const systonFind = syston?.stockResponse?.searchOptions?.options?.[key]?.find(sf => sf.displayName === op.displayName);
                        if (systonFind) {
                            op.count = String(+op.count + +systonFind?.count)
                        }
                    }
                    return op;
                })
                return acc;
            }, {} as TCars['stockResponse']['searchOptions']['options'])
        }
    }
    return {
        props: {
            cars
        },
    };
};
