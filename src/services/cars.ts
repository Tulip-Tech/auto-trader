export const NORTHAMPTON_DEALER = '10038946'
export const SYSTON_DEALER = '10028885'

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
        hasMoreResults: true
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

export const getCars = async (queries: string, dealer = NORTHAMPTON_DEALER) => {
    let data: TCars = {} as TCars;
    const response = await fetch(
        `https://autotrader.co.uk/json/dealers/stock?advanced=true&advertising-location=at_cars&advertising-location=at_profile_cars&dealer=${dealer}&${queries}`
    );
    if (response.ok) {
        data = await response.json();
    }
    return data
}
