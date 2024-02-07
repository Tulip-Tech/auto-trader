import React, { ReactNode, useEffect, useRef } from "react";
import CategoryDropdowns from "./dropdowns/category-dropdown";
import { TechData } from "@/interface/techData";

interface ModalProps {
  title: string;
  techData: TechData;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalFromRight: React.FC<ModalProps> = ({
  title,
  techData,
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

  // Adjust the transform property based on the isOpen state to animate the modal
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
        {/* <button className="text-black close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}
        <h2 className="text-lg font-semibold mb-5">{title}</h2>

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
