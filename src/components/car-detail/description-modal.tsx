import { TechData } from "@/interface/techData";
import React, { ReactNode, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md"; 

interface ModalProps {
  title: string;
  isOpen: boolean;
  techData?: TechData;
  onClose: () => void;
  children?: ReactNode;
}

const ModalFromRight: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const modalTransformClass = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 overflow-auto transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={modalRef}
        className={`flex flex-col space-y-5 fixed top-0 right-0 pt-20 w-[600px] h-full bg-white shadow-lg p-4 overflow-auto transition-transform transform ${modalTransformClass} ease-out duration-500`}
      >
        <button
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          className="ml-auto mb-5 pointer"
          aria-label="Close"
        >
          <MdClose size={24} />
        </button>

        <h2 className="text-lg font-semibold mb-5 w-full text-center">
          {title}
        </h2>

        {children}
        <span className="text-sm ">
          <b>Please note</b> The data displayed above details the usual
          specification of the most recent model of this vehicle. It is not the
          exact data for the actual vehicle being offered for sale and data for
          older models may vary slightly. We recommend that you always check the
          details with the seller prior to purchase. Auto Trader Limited, or its
          data supplier, will not accept liability for any information provided.
        </span>
      </div>
    </div>
  );
};

export default ModalFromRight;
