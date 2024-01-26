import CarShowComponent from "@/components/car-show";
import { getCars, NORTHAMPTON_DEALER, SYSTON_DEALER, TCars } from '@/services/cars';

export default function Home({ data }: { data: TCars }) {
    return <CarShowComponent data={data}/>;
}

export const getServerSideProps = async (ctx: any) => {
    const queries = Object.keys(ctx?.query)
        .map((k) => `${k}=${ctx.query[k]}`)
        .join("&");
    return {
        props: {
            title: 'B&F - ' + ctx.query.slug,
            data: await getCars(queries, ctx.query.slug === 'syston' ? SYSTON_DEALER : NORTHAMPTON_DEALER),
        },
    };
};
