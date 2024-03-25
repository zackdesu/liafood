import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = () => {
  const image = ["/1.jpg", "/2.jpg", "/3.jpg"];

  const [i, setI] = useState(0);
  const imageNow = image[i];

  const prevSlide = () => {
    const newIndex = i === 0 ? image.length - 1 : i - 1;
    setI(newIndex);
  };

  const nextSlide = () => {
    const newIndex = i === image.length - 1 ? 0 : i + 1;
    setI(newIndex);
  };

  return (
    <div className="aspect-[3/1] w-11/12 relative mx-auto my-5">
      <img
        src={imageNow}
        alt="contoh"
        className="object-cover object-top w-full h-full"
      />
      <button
        className="absolute left-4 top-1/2 text-gray-500"
        onClick={prevSlide}
      >
        <FaAngleLeft size={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 text-gray-500"
        onClick={nextSlide}
      >
        <FaAngleRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;
