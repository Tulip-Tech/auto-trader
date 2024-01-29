import CarShowComponent from "@/components/car-show";
import { getCars, NORTHAMPTON_DEALER, SYSTON_DEALER, TCars } from '@/services/cars';

export default function SluggedBranch({ cars }: { cars: TCars['stockResponse'] }) {
    return <CarShowComponent cars={cars}/>;
}

export const getServerSideProps = async (ctx: any) => {
    const queries = Object.keys(ctx?.query)
        .map((k) => `${k}=${ctx.query[k]}`)
        .join("&");
    const data = await getCars(queries, ctx.query.slug === 'syston' ? SYSTON_DEALER : NORTHAMPTON_DEALER)
    return {
        props: {
            title: ctx.query.slug,
            cars: data.stockResponse ?? {},
        },
    };
};
