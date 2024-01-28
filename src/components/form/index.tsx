import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import BnfInput from "./bnf-input";
import BnfDropdown from "@/components/form/bnf-dropdown";
import { TCars } from '@/services/cars';

const makeOptionKeyValue: Array<{ key: string, value: string }> = [
    { key: "Any", value: "" },
    { key: "Audi", value: "Audi" },
    { key: "Citroen", value: "Citroen" },
    { key: "Dacia", value: "Dacia" },
    { key: "Ford", value: "Ford" },
    { key: "Honda", value: "Honda" },
    { key: "Hyundai", value: "Hyundai" },
    { key: "Jaguar", value: "Jaguar" },
    { key: "Lexus", value: "Lexus" },
    { key: "Mazda", value: "Mazda" },
    { key: "Mercedes-Benz", value: "Mercedes-Benz" },
    { key: "MINI", value: "MINI" },
    { key: "Nissan", value: "Nissan" },
    { key: "Peugeot", value: "Peugeot" },
    { key: "Renault", value: "Renault" },
    { key: "Skoda", value: "Skoda" },
    { key: "Tesla", value: "Tesla" },
    { key: "Toyota", value: "Toyota" },
    { key: "Vauxhall", value: "Vauxhall" },
    { key: "Volkswagen", value: "Volkswagen" },
];
const modelOptionKeyValue: Array<{ key: string, value: string }> = [{ key: "Any", value: "" }];
const colourOptionKeyValue: Array<{ key: string, value: string }> = [
    { key: "Any", value: "" },
    { key: "Black", value: "Black" },
    { key: "Blue", value: "Blue" },
    { key: "Brown", value: "Brown" },
    { key: "Green", value: "Green" },
    { key: "Grey", value: "Grey" },
    { key: "Red", value: "Red" },
    { key: "Silver", value: "Silver" },
    { key: "White", value: "White" },
    { key: "Yellow", value: "Yellow" },
];
const sortOptions = [
    { key: "Price (Lowest)", value: "price-asc" },
    { key: "Price (Highest)", value: "price-desc" },
    { key: "Age (Newest First)", value: "year-desc" },
    { key: "Mileage", value: "mileage" },
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

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        router.query['page'] = String(1)

        if (make) router.query['make'] = make
        else delete router.query['make']

        if (model) router.query['model'] = make
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
                    onChange={(e) => {
                        // @ts-ignore
                        setMake(e.target.value);
                    }}
                    defaultValue={make || router.query['make'] as string}
                    options={makeOptionKeyValue}
                    fieldName="Make:"
                />
                <BnfDropdown
                    labelAlign="top"
                    onChange={(e) => {
                        // @ts-ignore
                        setModel(e.target.value);
                    }}
                    defaultValue={model || router.query['model'] as string}
                    options={modelOptionKeyValue}
                    fieldName="Model"
                />

                <section>
                    <span>Price</span>
                    <section className="grid md:grid-cols-2 gap-3">
                        <BnfInput
                            defaultValue={maxPrice || router.query['price-from'] as string}
                            placeholder="Min (Any)"
                            onChange={(e) => setMinPrice(e.target.value)}
                            type="number"
                        />
                        <BnfInput
                            defaultValue={maxPrice || router.query['price-to'] as string}
                            placeholder="Max (Any)"
                            onChange={(e) => setMaxPrice(e.target.value)}
                            type="number"
                        />
                    </section>
                </section>

                <BnfDropdown
                    labelAlign="top"
                    onChange={(e) => {
                        // @ts-ignore
                        setColour(e.target.value)
                    }}
                    defaultValue={colour || router.query['colour'] as string}
                    options={colourOptionKeyValue}
                    fieldName="Colour"
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

export const FilterFormSort = () => {
    const router = useRouter()
    const handleSort = (e: React.FormEvent<HTMLElement>) => {
        router.query['page'] = String(1)
        // @ts-ignore
        const sort = e.currentTarget.value;
        if (sort) router.query['sort'] = sort
        else delete router.query['sort']
        router.push(router);
    };

    return <BnfDropdown
        defaultValue={router.query['sort'] as string}
        onChange={handleSort}
        options={sortOptions}
        fieldName="Sort:"
    />
}

export default FilterForm;
