import CarDetailsComponent from "@/components/car-detail";
import { singleCarDetails, type TSingleCar } from "@/services/cars";

export default function CarDetailsById({ car }: { car: TSingleCar }) {
  console.log(car);
  return <CarDetailsComponent />;
}

export const getServerSideProps = (ctx: any) =>
  singleCarDetails(ctx.query?.advertId);
