import React, { useState } from "react";
import Image from "next/image";
// Updated interfaces to match the provided image structure
interface Image {
  src: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string>(images[0].src);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
  return (
    <div className="flex flex-col items-center space-y-4 max-w-[600px]">
      <div className="relative w-full max-w-[600px] ">
        <Image
          width={600}
          height={560}
          src={images[selectedIndex].src}
          alt="Selected"
          className="max-w-[600px] h-auto "
        />

        <button
          onClick={() => navigate("left")}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-[#EA580D]  text-white px-3 py-1"
        >
          &lt;
        </button>
        <button
          onClick={() => navigate("right")}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-[#EA580D]  text-white px-3 py-1 rounded-sm"
        >
          &gt;
        </button>
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={`Thumbnail ${index}`}
            width={56}
            height={40}
            onClick={() => setSelectedIndex(index)}
            className={`w-14 h-10 object-cover cursor-pointer rounded-sm ${
              selectedIndex === index ? "  border-[3px]  border-[#EA580D]" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
