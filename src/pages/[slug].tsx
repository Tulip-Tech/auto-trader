import CarShowComponent from "@/components/car-show";
import { getCars, TCars } from '@/services/cars';
import getBranchesInfo from '@/services/getBranchesInfo';

export default function SluggedBranch({ cars }: { cars: TCars['stockResponse'] }) {
    return <CarShowComponent cars={cars}/>;
}

export const getServerSideProps = async (ctx: any) => {
    const searchParams = new URLSearchParams()
    Object.keys(ctx?.query)
        .forEach((k) => {
            searchParams.append(k, ctx.query[k])
        })
    const BRANCHES = getBranchesInfo()
    const dealerId = BRANCHES[ctx.query.slug]?.dealerId
    if (!dealerId) {
        return {
            props: {
                title: ctx.query.slug,
                cars: {},
            }
        }
    }
    const data = await getCars(searchParams, dealerId)
    return {
        props: {
            title: ctx.query.slug,
            cars: data.stockResponse ?? {},
        },
    };
};
