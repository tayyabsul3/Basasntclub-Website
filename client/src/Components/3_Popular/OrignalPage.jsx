import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const OrignalPage = () => {
  const imagesUrl = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/800_20240705213824298.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/114.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/100_20240307112035701.jpg",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/109_20240307111929430.jpg",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/110_20240307111920527.jpg",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/105_20240307111958408.jpg",
      alt: "Image 6",
    },
  ];

  return (
    <div className="w-[95%] mx-auto py-5">
      <div className="name flex justify-between items-center">
        <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
          Orignal
        </p>
        <Link
          to={"/original"}
          className="px-5 border-2 border-gray-400 rounded-lg text-gray-400 flex justify-center items-center gap-2 py-[5px]"
        >
          All <span className="text-green-500"> 32 </span> <PiGreaterThan />
        </Link>
      </div>
      <div className="cards flex gap-5 mt-5 flex-wrap px-2">
        {imagesUrl.map((img) => (
          <a
            href="#"
            key={img.url}
            className="flex justify-center items-center overflow-hidden"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-[130px] min-h-[200px] xl:w-[150px] object-cover rounded-xl "
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OrignalPage;
