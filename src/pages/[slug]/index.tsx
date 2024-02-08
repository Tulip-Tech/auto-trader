import CarShowComponent from "@/components/car-show";
import { specificBranchCars, TCars } from '@/services/cars';

export default function SluggedBranch({ cars }: { cars: TCars['stockResponse'] }) {
    return <CarShowComponent cars={cars}/>;
}

export const getServerSideProps = (ctx: any) => specificBranchCars(ctx.query);
