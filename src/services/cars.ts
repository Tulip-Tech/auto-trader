import { ofetch } from "ofetch";

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
