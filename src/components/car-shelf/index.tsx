import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import FilterForm from "../form";

type Props = {
  children: React.ReactElement | React.ReactNode;
};
const CarComponent = ({ children }: Props) => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-4">
        <Link href="https://www.autotrader.co.uk/retailer/10038946?advertising-location=at_cars&advertising-location=at_profile_cars&dealer=10038946&page=5&sort=price-asc">
          <span className="flex gap-1 text-sm text-red-600 ">
            <GoArrowLeft size={20} />
            Back to retailer
          </span>
        </Link>
        <span className="font-bold text-lg">All Cars from B&F Cars</span>
      </div>

      {children}
    </div>
  );
};

export default CarComponent;
