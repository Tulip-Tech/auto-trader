import { IoIosArrowUp } from "react-icons/io";
import AutoTraderGroupComponent from "./auto-trader-group";
import ProductServicesComponent from "./product-services";
import MyFooterLinksComponent from "./footer-links-component";

const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" bg-white ">
      <div
        className="cursor-pointer py-5 border-b text-center "
        onClick={scrollToTop}
      >
        <span className="inline-flex justify-center items-center border  rounded-full p-2 border-slate-300 ">
          <IoIosArrowUp size={25} className="text-sky-500" />
        </span>
        <p className="pt-2 text-sky-600 text-xs">back to top</p>
      </div>
      <div className="p-5 flex justify-between">
        <AutoTraderGroupComponent />
        <ProductServicesComponent />
      </div>
    </div>
  );
};

export default FooterComponent;
