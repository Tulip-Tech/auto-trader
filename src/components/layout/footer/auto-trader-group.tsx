import Link from "next/link";
const AutoTraderGroupComponent = () => {
  const link = [
    {
      type: "Contact us",
      url: "/contact-us",
    },
    {
      type: "About Auto Trader",
      url: "https://plc.autotrader.co.uk/",
    },
    {
      type: "Careers",
      url: "https://careers.autotrader.co.uk",
    },
    {
      type: "Investor information",
      url: "https://plc.autotrader.co.uk/investors",
    },
    {
      type: "Privacy policies and terms",
      url: "/privacy-policy",
    },
    {
      type: "Terms & conditions",
      url: "/terms-and-conditions/advertising",
    },
    {
      type: "Brand advertising on Auto Trader",
      url: "https://brand-solutions.autotrader.co.uk",
    },
    {
      type: "Manage cookies",
      url: "/",
    },
  ];

  return (
    <div className="max-w-[1224px] mx-auto">
      <span>Auto Trader Group</span>
      <ul className="flex flex-col gap-3 text-xs font-semibold text-[#666] mt-3">
        {link.map((item, index) => (
          <li key={index} role="menuitem" className="">
            <Link href={item.url} className="">
              {item.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoTraderGroupComponent;
