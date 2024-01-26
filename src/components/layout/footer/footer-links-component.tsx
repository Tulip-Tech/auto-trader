import Link from "next/link";

interface LinkItem {
  type: string;
  url: string;
}

interface MyFooterLinksComponentProps {
  title: string;
  links: LinkItem[];
}

const MyFooterLinksComponent: React.FC<MyFooterLinksComponentProps> = ({
  title,
  links,
}) => {
  return (
    <div className="max-w-[1224px] mx-auto">
      <span>{title}</span>
      <ul className="flex flex-col gap-3 text-xs font-semibold text-[#666] mt-3">
        {links.map((item, index) => (
          <li key={index} role="menuitem">
            <Link href={item.url}>
              <a className="">{item.type}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFooterLinksComponent;
