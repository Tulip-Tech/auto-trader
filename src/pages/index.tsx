import CarShowComponent from "@/components/car-show";
import { getCars, NORTHAMPTON_DEALER, SYSTON_DEALER, TCars } from '@/services/cars';

export default function Home({ data }: { data: { northampton: TCars, syston: TCars } }) {
    return <CarShowComponent data={data.northampton}/>;
}

export const getServerSideProps = async (ctx: any) => {
    const queries = Object.keys(ctx?.query)
        .map((k) => `${k}=${ctx.query[k]}`)
        .join("&");
    return {
        props: {
            data: {
                northampton: await getCars(queries, NORTHAMPTON_DEALER),
                syston: await getCars(queries, SYSTON_DEALER),
            }
        },
    };
};
