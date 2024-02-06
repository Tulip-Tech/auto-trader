import { ofetch } from "ofetch";
import getBranchesInfo from '@/services/getBranchesInfo';
import { parseNumber } from '@/services/parseNumber';

type TText = {
    paragraphs: Array<{
        mainText: string
        bulletPoints: string[]
    }>
}

export type TCars = {
    breadcrumbs: {
        links: Array<{
            href: string,
            title: string
        }>
        schema: {
            '@context': string
            '@type': string
            itemListElement: Array<{
                '@type': string
                'position': number
                item: {
                    '@id': string
                    '@type': string
                    'name': string
                }
            }>
        }
    }
    pageData: {
        metadata: Array<{
            content: string, name: string
        }>
        tracking: {
            channel: string
            dealer_id: string
            environment: string
            page_name: string
            page_name_granular: string
            platform: string
        }
    }
    stockResponse: {
        hasMoreResults: boolean
        currentPage: number
        totalPages: number
        totalResults: number
        results: Array<{
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
        }>
        searchOptions: {
            resultCount: string,
            options: Record<string, Array<{ displayName: string, uriValue: string, count: string }>>
        }
        sortOptions: Array<{
            isPreselected: boolean
            isSelected: boolean
            name: string
            value: string
        }>
        pcpFinanceProductInfoText: TText
        pcpFinanceProductInfoPageLocation: string
        isPostcodeValid: boolean
        hpFinanceProductInfoText: TText
        hpFinanceProductInfoPageLocation: string
        csFinanceProductInfoText: TText
        csFinanceProductInfoPageLocation: string
    }
}

export const getCars = async <T = TCars>(searchParams: URLSearchParams, dealer: string) => {
    if (!searchParams.has('sort')) {
        searchParams.append('sort', 'price-asc')
    }
    if (searchParams.has('slug')) {
        searchParams.delete('slug')
    }
    const url = `https://autotrader.co.uk/json/dealers/stock?advanced=true&advertising-location=at_cars&advertising-location=at_profile_cars&dealer=${dealer}${searchParams.size ? `&${searchParams.toString()}` : ''}`
    console.log(url);
    return ofetch<T>(url).catch(() => ({} as T))
}

export const specificBranchCars = async (query: Record<string, any>) => {
    const searchParams = new URLSearchParams()
    Object.keys(query)
        .forEach((k) => {
            searchParams.append(k, query[k])
        })
    const BRANCHES = getBranchesInfo()
    const dealerId = BRANCHES[query.slug]?.dealerId
    if (!dealerId) {
        return {
            props: {
                title: query.slug,
                cars: {},
            }
        }
    }
    const data = await getCars(searchParams, dealerId)
    return {
        props: {
            title: query.slug,
            cars: data.stockResponse ?? {},
        },
    };
}

export const allBranchesCars = async (query: Record<string, any>) => {
    const searchParams = new URLSearchParams()
    Object.keys(query)
        .forEach((k) => {
            searchParams.append(k, query[k])
        })

    const BRANCHES = getBranchesInfo()
    const branchPromises = Object.values(BRANCHES).map(branch => getCars(searchParams, branch.dealerId));
    const branchResults = await Promise.all(branchPromises);

    const initialResponse: TCars['stockResponse'] = {
        hasMoreResults: false,
        currentPage: 0,
        totalResults: 0,
        totalPages: 0,
        isPostcodeValid: false,

        results: [],
        searchOptions: { resultCount: '0', options: {} },

        // TODO:: only picking the northampton, if this info needs in ui, please try to overcome what to do
        // assuming first one is northampton
        sortOptions: branchResults?.[0]?.stockResponse?.sortOptions,
        csFinanceProductInfoText: branchResults?.[0]?.stockResponse?.csFinanceProductInfoText,
        csFinanceProductInfoPageLocation: branchResults?.[0]?.stockResponse?.csFinanceProductInfoPageLocation,
        hpFinanceProductInfoText: branchResults?.[0]?.stockResponse?.hpFinanceProductInfoText,
        hpFinanceProductInfoPageLocation: branchResults?.[0]?.stockResponse?.hpFinanceProductInfoPageLocation,
        pcpFinanceProductInfoText: branchResults?.[0]?.stockResponse?.pcpFinanceProductInfoText,
        pcpFinanceProductInfoPageLocation: branchResults?.[0]?.stockResponse?.pcpFinanceProductInfoPageLocation,
    }
    const cars = branchResults.reduce((acc, branchResponse) => {
        acc.hasMoreResults = acc.hasMoreResults || branchResponse?.stockResponse?.hasMoreResults;
        acc.currentPage = branchResponse?.stockResponse?.currentPage || acc.currentPage;
        acc.totalResults += +branchResponse?.stockResponse?.totalResults;
        acc.totalPages = Math.max(acc.totalPages, branchResponse?.stockResponse?.totalPages);
        acc.isPostcodeValid = acc.isPostcodeValid || branchResponse?.stockResponse?.isPostcodeValid;
        acc.results = acc.results.concat(branchResponse?.stockResponse?.results);
        return acc;
    }, initialResponse);

    cars.searchOptions = branchResults.map(br => br.stockResponse.searchOptions).reduce((mergedResult, currentOptions) => {
        const allKeys = new Set<string>([...Object.keys(mergedResult.options), ...Object.keys(currentOptions.options)]);
        allKeys.forEach((key) => {
            const combinedOptions = (mergedResult.options[key] || []).concat(currentOptions.options[key] || []);
            const optionsMap: Map<string, { displayName: string, uriValue: string, count: string }> = new Map();

            combinedOptions.forEach(option => {
                const existingOption = optionsMap.get(option.uriValue);
                if (existingOption) {
                    const updatedCount = parseInt(existingOption.count) + parseInt(option.count);
                    optionsMap.set(option.uriValue, { ...option, count: updatedCount.toString() });
                } else {
                    optionsMap.set(option.uriValue, option);
                }
            });
            mergedResult.options[key] = Array.from(optionsMap.values());
        });
        mergedResult.resultCount = (parseInt(mergedResult.resultCount) + parseInt(currentOptions.resultCount)).toString();
        return mergedResult;
    }, {
        resultCount: '0', // Initial result count
        options: {} // Initial options
    });

    const activeSort = cars?.sortOptions?.find(f => f.isSelected || f.isPreselected);
    if (activeSort) {
        cars.results = cars.results?.sort((a, b) => {
            if (activeSort?.value?.startsWith('price-') && activeSort?.value?.endsWith('-asc')) {
                return parseNumber(a.price, ['en-us']) - parseNumber(b.price, ['en-us'])
            } else if (activeSort?.value?.startsWith('price-') && activeSort?.value?.endsWith('-desc')) {
                return parseNumber(b.price, ['en-us']) - parseNumber(a.price, ['en-us'])
            } else if (activeSort?.value?.startsWith('year-') && activeSort?.value?.endsWith('-asc')) {
                return +a.vehicle.yearText.slice(0, 4) - +b.vehicle.yearText.slice(0, 4)
            } else if (activeSort?.value?.startsWith('year-') && activeSort?.value?.endsWith('-desc')) {
                return +b.vehicle.yearText.slice(0, 4) - +a.vehicle.yearText.slice(0, 4)
            } else if (activeSort?.value === 'mileage') {
                return parseNumber(a.vehicle.mileage, ['en-us']) - parseNumber(b.vehicle.mileage, ['en-us'])
            }
            return 0
        })
    }
    return {
        props: {
            cars
        },
    };
}
