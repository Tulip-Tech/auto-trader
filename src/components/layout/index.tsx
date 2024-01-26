import FooterComponent from "./footer/footer";
import HeaderComponent from "./header";

type Props = {
  children: React.ReactElement | React.ReactNode;
  className: string;
};
const AppLayout = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <HeaderComponent />
      <div className="max-w-[1250px] mx-auto p-2">{children}</div>
    </div>
  );
};

export default AppLayout;
