import React, { ReactElement } from "react";

interface DetailComponentProps {
  detail: string;
  icon: ReactElement;
  title: string;
}

const DetailComponent: React.FC<DetailComponentProps> = ({
  detail,
  icon,
  title,
}) => {
  return (
    <section className="flex gap-4">
      <div className="bg-white w-12 h-12 p-2 flex justify-center items-center">
        {icon}
      </div>
      <span className="flex flex-col mt-2">
        <span className="font-semibold">{title}</span>
        {detail}
      </span>
    </section>
  );
};

export default DetailComponent;
