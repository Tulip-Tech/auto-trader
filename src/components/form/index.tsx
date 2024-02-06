import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import BnfDropdown from "@/components/form/bnf-dropdown";
import { TCars } from '@/services/cars';

const anyOptions: Array<{ key: string, value: string }> = [
    { key: "Any", value: "" }
];

type TFilterForm = {
    stockResponse: TCars['stockResponse']
}

const FilterForm = ({ stockResponse }: TFilterForm) => {
    const router = useRouter()
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [colour, setColour] = useState("");

    React.useEffect(() => {
        if (router.query['make']) {
            setMake(router.query['make'] as string)
        }
        if (router.query['model']) {
            setModel(router.query['model'] as string)
        }
        if (router.query['price-from']) {
            setMinPrice(router.query['price-from'] as string)
        }
        if (router.query['price-to']) {
            setMaxPrice(router.query['price-to'] as string)
        }
        if (router.query['colour']) {
            setColour(router.query['colour'] as string)
        }
    }, [router.query])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        router.query['page'] = String(1)

        if (make) router.query['make'] = make
        else delete router.query['make']

        if (model) router.query['model'] = model
        else delete router.query['model']

        if (minPrice) router.query['price-from'] = minPrice
        else delete router.query['price-from']

        if (maxPrice) router.query['price-to'] = maxPrice
        else delete router.query['price-to']

        if (colour) router.query['colour'] = colour
        else delete router.query['colour']

        router.push(router);
    };
    const handleReset = () => {
        setMake('')
        setModel('')
        setMinPrice('')
        setMaxPrice('')
        setColour('')
        router.push({
            pathname: router.pathname,
            query: {
                slug: router.query?.slug || undefined
            }
        })
    }
    return (
        <form
            className="bg-white rounded-lg overflow-hidden flex flex-col gap-5 h-fit pb-5"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col space-y-1 text-center border-b p-5 bg-primary text-white">
                <span className="font-semibold">{stockResponse?.totalResults} Cars found</span>
                <button className="text-sm hover:text-blue-200" onClick={handleReset}>Reset search criteria</button>
            </div>
            <div className="flex flex-col gap-5 px-5">
                <BnfDropdown
                    labelAlign="top"
                    onChange={setMake}
                    fieldName="Make"
                    defaultValue={make}
                    options={anyOptions.concat(stockResponse?.searchOptions?.options?.['make']?.map(k => ({
                        key: `${k.displayName}(${k.count})`,
                        value: k.uriValue
                    }))).filter(Boolean)}
                />
                <BnfDropdown
                    labelAlign="top"
                    onChange={setModel}
                    fieldName="Model"
                    defaultValue={model}
                    options={anyOptions.concat(stockResponse?.searchOptions?.options?.['model']?.map(k => ({
                        key: `${k.displayName}(${k.count})`,
                        value: k.uriValue
                    }))).filter(Boolean)}
                />

                <section className="flex flex-row gap-3">
                    <BnfDropdown
                        labelAlign="top"
                        onChange={setMinPrice}
                        fieldName="Price: From"
                        defaultValue={minPrice}
                        options={anyOptions.concat(stockResponse?.searchOptions?.options?.['price-from']?.map(k => ({
                            key: `${k.displayName}(${k.count})`,
                            value: k.uriValue
                        }))).filter(Boolean)}
                    />
                    <BnfDropdown
                        labelAlign="top"
                        onChange={setMaxPrice}
                        fieldName="To"
                        defaultValue={maxPrice}
                        options={anyOptions.concat(stockResponse?.searchOptions?.options?.['price-to']?.map(k => ({
                            key: `${k.displayName}(${k.count})`,
                            value: k.uriValue
                        }))).filter(Boolean)}
                    />
                </section>

                <BnfDropdown
                    labelAlign="top"
                    onChange={setColour}
                    fieldName="Colour"
                    defaultValue={colour}
                    options={anyOptions.concat(stockResponse?.searchOptions?.options?.['colour']?.map(k => ({
                        key: `${k.displayName}(${k.count})`,
                        value: k.uriValue
                    }))).filter(Boolean)}
                />
            </div>
            <div className="px-5">
                <button
                    type="submit"
                    className="w-full bg-primary text-white p-2 rounded"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export const FilterFormSort = ({ options }: { options: TCars['stockResponse']['sortOptions'] }) => {
    const router = useRouter()
    const handleSort = (sort: string) => {
        router.query['page'] = String(1)
        if (sort) router.query['sort'] = sort
        else delete router.query['sort']
        router.push(router);
    };

    return <BnfDropdown
        defaultValue={options.find(f => f.isPreselected || f.isSelected)?.value || router.query['sort'] as string}
        onChange={handleSort}
        options={options.map(k => ({ key: k.name, value: k.value }))}
        fieldName="Sort:"
    />
}

export default FilterForm;
