import React, { useState } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
}

interface ImageSliderProps {
  images: ImageType[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = (direction: "left" | "right") => {
    if (direction === "left") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    } else {
      setSelectedIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="relative w-full">
        <Image
          width={600}
          height={560}
          src={images[selectedIndex].src}
          alt="Selected"
          className="w-full h-auto"
          onClick={toggleModal}
        />

        <button
          onClick={() => navigate("left")}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-[#EA580D] text-white px-3 py-1"
        >
          &lt;
        </button>
        <button
          onClick={() => navigate("right")}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-[#EA580D] text-white px-3 py-1 rounded-sm"
        >
          &gt;
        </button>
      </div>

      <div className="flex space-x-2 overflow-x-auto justify-between">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={`Thumbnail ${index}`}
            width={56}
            height={40}
            onClick={() => setSelectedIndex(index)}
            className={`w-14 h-10 object-cover cursor-pointer rounded-sm ${
              selectedIndex === index ? "border-[3px] border-[#EA580D]" : ""
            }`}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 z-[9999] w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative max-w-screen-xl w-full h-full">
            <button
              onClick={toggleModal}
              className="absolute top-0  right-0 m-4 text-white text-2xl cursor-pointer px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image
              width={1000}
              height={1000}
              src={images[selectedIndex].src}
              alt="Gallery View"
              className="object-contain w-3/4  h-full mx-auto"
            />
          </div>
          <section className=" absolute flex gap-10 bottom-5">
            <button
              onClick={() => navigate("left")}
              className=" transform -translate-y-1/2 bg-[#EA580D] text-white px-3 py-1"
            >
              &lt;
            </button>
            <button
              onClick={() => navigate("right")}
              className="   transform -translate-y-1/2 bg-[#EA580D] text-white px-3 py-1 rounded-sm"
            >
              &gt;
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
