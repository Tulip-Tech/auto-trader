import CarShowComponent from "@/components/car-show";
import { allBranchesCars, TCars } from '@/services/cars';

export default function Home({ cars }: { cars: TCars['stockResponse'] }) {
    return <CarShowComponent cars={cars}/>;
}

export const getServerSideProps = (ctx: any) => allBranchesCars(ctx.query)
