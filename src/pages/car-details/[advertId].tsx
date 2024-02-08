import CarDetailsComponent from "@/components/car-detail";
import { singleCarDetails, type TSingleCar } from "@/services/cars";

export default function CarDetailsById({ car }: { car: TSingleCar }) {
  return <CarDetailsComponent car={car} />;
}

export const getServerSideProps = (ctx: any) =>
  singleCarDetails(ctx.query?.advertId);
