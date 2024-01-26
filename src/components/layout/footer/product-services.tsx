import Link from "next/link";
const ProductServicesComponent = () => {
  const link = [
    {
      title: "Car valuations",
      url: "/cars/valuation",
    },
    {
      title: "Sell my car",
      url: "/cars/sell",
    },
    {
      title: "Vehicle check",
      url: "/vehiclecheck",
    },
    {
      title: "Car finance",
      url: "/cars/finance",
    },
    {
      title: "Car insurance",
      url: "/cars/insurance",
    },
    {
      title: "Part exchange",
      url: "/part-exchange",
    },
    {
      title: "Finance calculator",
      url: "/cars/finance/calculator",
    },
  ];

  return (
    <div className="max-w-[1224px] mx-auto">
      <span>Products & services</span>
      <ul className="flex flex-col gap-3 text-xs font-semibold text-[#666] mt-3">
        {link.map((item, index) => (
          <li key={index} role="menuitem" className="">
            <Link href={item.url} className="">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductServicesComponent;
