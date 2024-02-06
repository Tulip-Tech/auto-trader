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
export type TSingleCar = {
    "id": string,
    "stockItemId": string,
    "isAuction": boolean,
    "hoursUsed": null | any,
    "serviceHistory": null | any,
    "title": string,
    "excludePreviousOwners": boolean,
    "advertisedLocations": Array<string>,
    "dueAtSeller": null | any,
    "motExpiry": null | any,
    "motInsurance": null | any,
    "lastServiceOdometerReadingMiles": null | any,
    "lastServiceDate": null | any,
    "warrantyMonthsOnPurchase": null | any,
    "twelveMonthsMotIncluded": boolean,
    "heading": {
        "title": string,
        "subtitle": string,
        "__typename": string
    },
    "attentionGrabber": string,
    "rrp": null | any,
    "price": number,
    "priceCurrency": string,
    "priceExcludingFees": number,
    "suppliedPrice": number,
    "suppliedPriceExcludingFees": number,
    "priceOnApplication": boolean,
    "plusVatIndicated": boolean,
    "vatStatus": null | any,
    "saving": null | any,
    "noAdminFees": boolean,
    "adminFee": null | any,
    "adminFeeInfoDescription": null | any,
    "dateOfRegistration": string,
    "homeDeliveryRegionCodes": null | any,
    "deliversToMyPostcode": null | any,
    "capabilities": {
        "marketExtensionHomeDelivery": null | any,
        "marketExtensionClickAndCollect": null | any,
        "marketExtensionCentrallyHeld": null | any,
        "marketExtensionOem": null | any,
        "sellerPromise": null | any,
        "digitalRetailing": null | any,
        "__typename": "Capabilities"
    },
    "registration": string,
    "encryptedRegistration": string,
    "generation": {
        "generationId": string,
        "name": string,
        "review": {
            "ownerReviewsSummary": {
                "aggregatedRating": number,
                "countOfReviews": number,
                "__typename": "OwnerReviewsSummary"
            },
            "expertReviewSummary": {
                "rating": number,
                "reviewUrl": string,
                "__typename": "ExpertReviewSummary"
            },
            "__typename": "GenerationReviewData"
        },
        "__typename": "Generation"
    },
    "hasShowroomProductCode": boolean,
    "isPartExAvailable": boolean,
    "isFinanceAvailable": boolean,
    "isFinanceFullApplicationAvailable": boolean,
    "financeProvider": string,
    "financeDefaults": {
        "term": string,
        "mileage": string,
        "depositAmount": string,
        "__typename": "FinanceDefaults"
    },
    "retailerId": string,
    "hasClickAndCollect": boolean,
    "privateAdvertiser": null | any,
    "advertiserSegment": string,
    "dealer": {
        "dealerId": string,
        "distance": null | any,
        "stockLevels": {
            "atStockCounts": {
                "car": number,
                "van": null | any,
                "__typename": "AtStockCounts"
            },
            "__typename": "DealerStockLevels"
        },
        "assignedNumber": null | any,
        "awards": {
            "isWinner2018": boolean,
            "isWinner2019": boolean,
            "isWinner2020": boolean,
            "isWinner2021": boolean,
            "isWinner2022": boolean,
            "isWinner2023": boolean,
            "isFinalist2018": boolean,
            "isFinalist2019": boolean,
            "isFinalist2020": boolean,
            "isFinalist2021": boolean,
            "isFinalist2022": boolean,
            "isFinalist2023": boolean,
            "isHighlyRated2018": boolean,
            "isHighlyRated2019": boolean,
            "isHighlyRated2020": boolean,
            "isHighlyRated2021": boolean,
            "isHighlyRated2022": boolean,
            "isHighlyRated2023": boolean,
            "__typename": "DealerAwards"
        },
        "branding": {
            "accreditations": any[],
            "brands": any[],
            "__typename": "DealerBranding"
        },
        "capabilities": {
            "instantMessagingChat": null | any,
            "instantMessagingText": null | any,
            "__typename": "Capabilities"
        },
        "reviews": {
            "numberOfReviews": string,
            "overallReviewRating": string,
            "__typename": "Reviews"
        },
        "location": {
            "addressOne": string,
            "addressTwo": string,
            "town": string,
            "county": string,
            "postcode": string,
            "latLong": string,
            "__typename": "Location"
        },
        "marketing": {
            "profile": null | any,
            "brandingBanner": {
                "href": string,
                "__typename": "Link"
            },
            "__typename": "Marketing"
        },
        "media": {
            "email": string,
            "dealerWebsite": {
                "href": string,
                "__typename": "Link"
            },
            "phoneNumber1": string,
            "phoneNumber2": null | any,
            "protectedNumber": boolean,
            "__typename": "DealerMedia"
        },
        "name": string,
        "servicesOffered": {
            "sellerPromise": null | any,
            "services": [],
            "products": Array<string>,
            "safeSelling": {
                "bulletPoints": Array<string>,
                "paragraphs": null | any,
                "__typename": "ServiceOffered"
            },
            "homeDelivery": {
                "bulletPoints": Array<string>,
                "paragraphs": null | any,
                "deliveryCostPerMile": null | any,
                "deliveryCostFlatFee": null | any,
                "freeDeliveryRadiusInMiles": number,
                "__typename": "HomeDeliveryServiceOffered"
            },
            "videoWalkAround": null | any,
            "clickAndCollect": null | any,
            "buyOnline": null | any,
            "nccApproved": boolean,
            "isHomeDeliveryProductEnabled": boolean,
            "isPartExAvailable": boolean,
            "hasSafeSelling": boolean,
            "hasHomeDelivery": boolean,
            "hasVideoWalkAround": boolean,
            "additionalLinks": null | any,
            "__typename": "ServicesOffered"
        },
        "__typename": "Dealer"
    },
    "video": null | any,
    "spin": null | any,
    "imageList": {
        "nextCursor": null | any,
        "size": number,
        "images": Array<{
            "url": string,
            "templated": boolean,
            "autotraderAllocated": boolean,
            "__typename": "ImageUrl"
        }>,
        "__typename": "ImageList"
    },
    "priceIndicatorRating": string,
    "priceIndicatorRatingLabel": string,
    "priceDeviation": number,
    "mileageDeviation": number,
    "mileage": {
        "mileage": number,
        "unit": string,
        "__typename": "Mileage"
    },
    "plate": string,
    "year": number,
    "vehicleCheckId": string,
    "vehicleCheckStatus": string,
    "vehicleCheckSummary": {
        "type": string,
        "title": string,
        "performed": string,
        "writeOffCategory": null | any,
        "checks": Array<{
            "key": string,
            "failed": boolean,
            "advisory": boolean,
            "critical": true,
            "warning": boolean,
            "__typename": "VehicleCheck"
        }>,
        "__typename": "VehicleCheckSummary"
    },
    "sellerName": string,
    "sellerType": string,
    "sellerProducts": Array<string>,
    "sellerLocation": string,
    "sellerLocationDistance": {
        "unit": string,
        "value": number,
        "__typename": "SellerDistance"
    },
    "sellerContact": {
        "phoneNumberOne": string,
        "phoneNumberTwo": null | any,
        "protectedNumber": null | any,
        "byEmail": boolean,
        "__typename": "SellerContact"
    },
    "description": string,
    "colour": string,
    "manufacturerApproved": boolean,
    "insuranceWriteOffCategory": null | any,
    "owners": null | any,
    "vehicleCondition": null | any,
    "specification": {
        "isCrossover": boolean,
        "operatingType": null | any,
        "emissionClass": string,
        "co2Emissions": {
            "co2Emission": number,
            "unit": string,
            "__typename": "Co2Emissions"
        },
        "topSpeed": {
            "topSpeed": number,
            "__typename": "Speed"
        },
        "minimumKerbWeight": {
            "weight": null | any,
            "unit": null | any,
            "__typename": "Weight"
        },
        "endLayout": null | any,
        "trailerAxleNumber": null | any,
        "bedroomLayout": null | any,
        "grossVehicleWeight": {
            "weight": null | any,
            "unit": null | any,
            "__typename": "Weight"
        },
        "capacityWeight": {
            "weight": null | any,
            "unit": null | any,
            "__typename": "Weight"
        },
        "liftingCapacity": {
            "weight": null | any,
            "unit": null | any,
            "__typename": "LiftingCapacity"
        },
        "operatingWidth": {
            "width": null | any,
            "unit": null | any,
            "__typename": "OperatingWidth"
        },
        "maxReach": {
            "length": null | any,
            "unit": null | any,
            "__typename": "MaxReach"
        },
        "wheelbase": string,
        "berth": null | any,
        "bedrooms": null | any,
        "engine": {
            "power": {
                "enginePower": number,
                "unit": string,
                "__typename": "Power"
            },
            "sizeLitres": number,
            "sizeCC": number,
            "manufacturerEngineSize": number,
            "__typename": "Engine"
        },
        "exteriorWidth": {
            "width": number,
            "unit": string,
            "__typename": "ExteriorWidth"
        },
        "exteriorLength": {
            "length": number,
            "unit": string,
            "__typename": "ExteriorLength"
        },
        "exteriorHeight": {
            "height": number,
            "unit": string,
            "__typename": "ExteriorHeight"
        },
        "capacityWidth": {
            "width": null | any,
            "unit": null | any,
            "__typename": "CapacityWidth"
        },
        "capacityLength": {
            "length": null | any,
            "unit": null | any,
            "__typename": "CapacityLength"
        },
        "capacityHeight": {
            "height": null | any,
            "unit": null | any,
            "__typename": "CapacityHeight"
        },
        "seats": number,
        "axleConfig": null | any,
        "ulezCompliant": boolean,
        "doors": number,
        "bodyType": string,
        "cabType": string,
        "rawBodyType": string,
        "fuel": string,
        "transmission": string,
        "style": null | any,
        "subStyle": null | any,
        "make": string,
        "model": string,
        "trim": string,
        "vehicleCategory": "Car",
        "optionalFeatures": Array<{
            "description": string,
            "category": string,
            "__typename": "Feature"
        }>,
        "standardFeatures": Array<{
            "description": string,
            "category": string,
            "__typename": "Feature"
        }>,
        "driverPosition": string,
        "battery": null | any,
        "techData": {
            "co2Emissions": string,
            "fuelConsumptionCombined": string,
            "fuelConsumptionExtraUrban": string,
            "fuelConsumptionUrban": string,
            "insuranceGroup": string,
            "minimumKerbWeight": string,
            "zeroToSixtyMph": null | any,
            "zeroToSixtyTwoMph": string,
            "cylinders": string,
            "valves": string,
            "enginePower": string,
            "topSpeed": string,
            "engineTorque": string,
            "vehicleHeight": string,
            "vehicleLength": string,
            "vehicleWidth": string,
            "wheelbase": string,
            "fuelTankCapacity": string,
            "grossVehicleWeight": string,
            "luggageCapacitySeatsDown": string,
            "bootspaceSeatsUp": string,
            "vehicleWidthInclMirrors": null | any,
            "maxLoadingWeight": null | any,
            "standardFeatures": Array<{
                "description": string,
                "category": string,
                "__typename": "Feature"
            }>,
            "chargingData": null | any,
            "__typename": "TechData"
        },
        "annualTax": {
            "standardRate": number,
            "__typename": "AnnualTax"
        },
        "oemDrivetrain": null | any,
        "bikeLicenceType": null | any,
        "derivative": string,
        "derivativeId": string,
        "__typename": "Specification"
    },
    "stockType": string,
    "versionNumber": string,
    "tradeLifecycleStatus": string,
    "condition": string,
    "finance": null | any,
    "reservation": {
        "status": null | any,
        "eligibility": string,
        "feeCurrency": string,
        "feeInFractionalUnits": number,
        "__typename": "AdvertReservation"
    },
    "__typename": "Advert"
}

const getCars = async <T = TCars>(searchParams: URLSearchParams, dealer: string) => {
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

// TODO:: need to break down the graphQL query to return only needed data
const getSingleCarDetails = async <T = TSingleCar>(advertId: string) => {
    const capabilitiesLvl1 = `capabilities {
                            marketExtensionHomeDelivery {
                                enabled
                                __typename
                            }
                            marketExtensionClickAndCollect {
                                enabled
                                __typename
                            }
                            marketExtensionCentrallyHeld {
                                enabled
                                __typename
                            }
                            marketExtensionOem {
                                enabled
                                __typename
                            }
                            sellerPromise {
                                enabled
                                __typename
                            }
                            digitalRetailing {
                                enabled
                                __typename
                            }
                            __typename
                        }`
    const generationLvl1 =`generation {
                            generationId
                            name
                            review {
                                ownerReviewsSummary {
                                    aggregatedRating
                                    countOfReviews
                                    __typename
                                }
                                expertReviewSummary {
                                    rating
                                    reviewUrl
                                    __typename
                                }
                                __typename
                            }
                            __typename
                        }`
    const privateAdvertiserLvl1 = `privateAdvertiser {
                            contact {
                                protectedNumber
                                email
                                __typename
                            }
                            location {
                                town
                                county
                                postcode
                                __typename
                            }
                            tola
                            __typename
                        }`

    return ofetch('https://www.autotrader.co.uk/at-graphql?opname=FPADataQuery', {
        method: 'POST',
        body: [{
            "operationName": "FPADataQuery",
            "variables": {
                "advertId": advertId,
                "numberOfImages": 100,
            },
            "query": `query FPADataQuery($advertId: String!, $numberOfImages: Int) {
                search {
                    advert(advertId: $advertId) {
                        id
                        stockItemId
                        isAuction
                        hoursUsed
                        serviceHistory
                        title
                        excludePreviousOwners
                        advertisedLocations
                        dueAtSeller
                        motExpiry
                        motInsurance
                        lastServiceOdometerReadingMiles
                        lastServiceDate
                        warrantyMonthsOnPurchase
                        twelveMonthsMotIncluded
                        heading {
                            title
                            subtitle
                            __typename
                        }
                        attentionGrabber
                        rrp
                        price
                        priceCurrency
                        priceExcludingFees
                        suppliedPrice
                        suppliedPriceExcludingFees
                        priceOnApplication
                        plusVatIndicated
                        vatStatus
                        saving
                        noAdminFees
                        adminFee
                        adminFeeInfoDescription
                        dateOfRegistration
                        homeDeliveryRegionCodes
                        deliversToMyPostcode
                        registration
                        encryptedRegistration
                        hasShowroomProductCode
                        isPartExAvailable
                        isFinanceAvailable
                        isFinanceFullApplicationAvailable
                        financeProvider
                        financeDefaults {
                            term
                            mileage
                            depositAmount
                            __typename
                        }
                        retailerId
                        hasClickAndCollect
                        advertiserSegment
                        dealer {
                            ...DealerData
                             __typename
                        }
                        video {
                            url
                            preview
                            __typename
                        }
                        spin {
                            url
                            preview
                            __typename
                        }
                        imageList(limit: $numberOfImages) {
                            nextCursor
                            size
                            images {
                                url
                                templated
                                autotraderAllocated
                                __typename
                            }
                             __typename
                        }
                        priceIndicatorRating
                        priceIndicatorRatingLabel
                        priceDeviation
                        mileageDeviation
                        mileage {
                            mileage
                            unit
                            __typename
                        }
                        plate
                        year
                        vehicleCheckId
                        vehicleCheckStatus
                        vehicleCheckSummary {
                            type
                            title
                            performed
                            writeOffCategory
                            checks {
                                key
                                failed
                                advisory
                                critical
                                warning
                                __typename
                            }
                            __typename
                        }
                        sellerName
                        sellerType
                        sellerProducts
                        sellerLocation
                        sellerLocationDistance {
                            unit
                            value
                            __typename
                        }
                        sellerContact {
                            phoneNumberOne
                            phoneNumberTwo
                            protectedNumber
                            byEmail
                            __typename
                        }
                        description
                        colour
                        manufacturerApproved
                        insuranceWriteOffCategory
                        owners
                        vehicleCondition {
                            tyreCondition
                            interiorCondition
                            bodyCondition
                            __typename
                        }
                        specification {
                            isCrossover
                            operatingType
                            emissionClass
                            co2Emissions {
                                co2Emission
                                unit
                                __typename
                            }
                            topSpeed {
                                topSpeed
                                __typename
                            }
                            minimumKerbWeight {
                                weight
                                unit
                                __typename
                            }
                            endLayout
                            trailerAxleNumber
                            bedroomLayout
                            grossVehicleWeight {
                                weight
                                unit
                                __typename
                            }
                            capacityWeight {
                                weight
                                unit
                                __typename
                            }
                            liftingCapacity {
                                weight
                                unit
                                __typename
                            }
                            operatingWidth {
                                width
                                unit
                                __typename
                            }
                            maxReach {
                                length
                                unit
                                __typename
                            }
                            wheelbase
                            berth
                            bedrooms
                            engine { 
                                power { 
                                    enginePower
                                    unit
                                    __typename
                                } 
                                sizeLitres 
                                sizeCC 
                                manufacturerEngineSize 
                                __typename 
                            } 
                            exteriorWidth { 
                                width 
                                unit 
                                __typename 
                            } 
                            exteriorLength { 
                                length 
                                unit 
                                __typename 
                            } 
                            exteriorHeight { 
                                height 
                                unit 
                                __typename 
                            } 
                            capacityWidth { 
                                width 
                                unit 
                                __typename
                            } 
                            capacityLength { 
                                length 
                                unit 
                                __typename
                            } 
                            capacityHeight { 
                                height
                                unit 
                                __typename
                            } 
                            seats 
                            axleConfig 
                            ulezCompliant
                            doors 
                            bodyType 
                            cabType 
                            rawBodyType 
                            fuel 
                            transmission 
                            style 
                            subStyle
                            make 
                            model 
                            trim 
                            vehicleCategory 
                            optionalFeatures { 
                                description 
                                category 
                                __typename
                            } 
                            standardFeatures { 
                                description
                                category 
                                __typename 
                            } 
                            driverPosition
                            battery { 
                                capacity { 
                                    capacity 
                                    unit 
                                    __typename
                                } 
                                usableCapacity { 
                                    capacity 
                                    unit
                                    __typename
                                } 
                                range { 
                                    range
                                    unit
                                    __typename
                                } 
                                charging { 
                                    quickChargeTime 
                                    chargeTime
                                     __typename 
                                } 
                                __typename 
                            } 
                            techData { 
                                co2Emissions 
                                fuelConsumptionCombined
                                fuelConsumptionExtraUrban 
                                fuelConsumptionUrban 
                                insuranceGroup 
                                minimumKerbWeight 
                                zeroToSixtyMph 
                                zeroToSixtyTwoMph 
                                cylinders 
                                valves 
                                enginePower 
                                topSpeed 
                                engineTorque 
                                vehicleHeight 
                                vehicleLength
                                vehicleWidth 
                                wheelbase
                                fuelTankCapacity 
                                grossVehicleWeight 
                                luggageCapacitySeatsDown 
                                bootspaceSeatsUp 
                                minimumKerbWeight 
                                vehicleWidthInclMirrors 
                                maxLoadingWeight 
                                standardFeatures { 
                                    description 
                                    category 
                                    __typename 
                                } 
                                chargingData { 
                                    fastestChargingPower 
                                    fastestChargingDuration 
                                    chargers {
                                        description 
                                        fullCharge { 
                                            duration 
                                            endBatteryPercentage
                                             __typename
                                        } 
                                        topUp { 
                                            milesRange
                                            duration 
                                            __typename 
                                        } 
                                        chargerLocation 
                                        milesRangePerHourChargeTime
                                        __typename 
                                    } 
                                __typename
                            } __typename
                        } 
                        annualTax { 
                            standardRate 
                            __typename
                       } 
                       oemDrivetrain 
                       bikeLicenceType
                       derivative 
                       derivativeId 
                       __typename
                    } 
                    stockType
                    versionNumber
                    tradeLifecycleStatus 
                    condition 
                    finance { 
                        monthlyPayment 
                        representativeApr 
                        __typename 
                    } 
                    reservation { 
                        status
                        eligibility
                        feeCurrency
                        feeInFractionalUnits
                        __typename
                    }
                    __typename
                }
                __typename
             }
            }
            fragment
            DealerData 
            on Dealer { 
                dealerId 
                distance 
                stockLevels { 
                    atStockCounts { 
                        car 
                        van 
                        __typename
                    } 
                    __typename
               } 
               assignedNumber { 
                   number
                   __typename
               } 
               awards { 
                   isWinner2018 
                   isWinner2019 
                   isWinner2020 
                   isWinner2021 
                   isWinner2022 
                   isWinner2023 
                   isFinalist2018 
                   isFinalist2019 
                   isFinalist2020 
                   isFinalist2021 
                   isFinalist2022 
                   isFinalist2023 
                   isHighlyRated2018 
                   isHighlyRated2019 
                   isHighlyRated2020 
                   isHighlyRated2021 
                   isHighlyRated2022 
                   isHighlyRated2023 
                   __typename 
               } 
               branding { 
                    accreditations { 
                        name
                        __typename
                    } 
                    brands { 
                        name
                        imageUrl
                        __typename
                    }
                    __typename
               } 
               capabilities { 
                    instantMessagingChat { 
                        enabled 
                        provider
                        __typename
                    } 
                    instantMessagingText { 
                        enabled
                        provider 
                        overrideSmsNumber
                        __typename
                    }
                    __typename
               } reviews { 
                    numberOfReviews 
                    overallReviewRating 
                    __typename 
               } location { 
                    addressOne 
                    addressTwo 
                    town 
                    county 
                    postcode 
                    latLong
                    __typename
               } 
               marketing { 
                    profile 
                    brandingBanner { 
                        href 
                        __typename
                    }
                    __typename
               } 
               media { 
                    email 
                    dealerWebsite { 
                        href
                        __typename
                    } 
                    phoneNumber1 
                    phoneNumber2
                    protectedNumber 
                    __typename
               } 
               name 
               servicesOffered { 
                    sellerPromise { 
                        monthlyWarranty
                        minMOTAndService 
                        daysMoneyBackGuarantee 
                        moneyBackRemoteOnly 
                        __typename
                    } 
                    services 
                    products 
                    safeSelling { 
                        bulletPoints
                        paragraphs
                        __typename
                    } 
                    homeDelivery { 
                        bulletPoints
                        paragraphs
                        deliveryCostPerMile
                        deliveryCostFlatFee
                        freeDeliveryRadiusInMiles
                        __typename
                    } 
                    videoWalkAround { 
                        bulletPoints
                        paragraphs
                        __typename
                    } 
                    clickAndCollect { 
                        bulletPoints
                        paragraphs
                        __typename
                    } 
                    buyOnline { 
                        bulletPoints 
                        paragraphs
                        __typename
                    } 
                    nccApproved
                    isHomeDeliveryProductEnabled
                    isPartExAvailable
                    hasSafeSelling
                    hasHomeDelivery
                    hasVideoWalkAround 
                    additionalLinks { 
                        title
                        href 
                        __typename
                    }
                    __typename
               } 
               __typename
            } `
        }],
        parseResponse: r => r,
    }).catch(() => ({} as T))
}
export const singleCarDetails = async (advertId: string) => {

    const data = await getSingleCarDetails(advertId)
    console.log(JSON.stringify(data), 'nice', data);
    return {
        props: {
            title: advertId,
            car: {},
        }
    }

    /*return {
        props: {
            title: data.title,
            car: data ?? {},
        },
    };*/
}
