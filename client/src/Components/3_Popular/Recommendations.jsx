import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const Recommendation = () => {
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
      url: "https://basantimages.com/basantclub/gamelogo/PG/126.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/Card365/710.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/98.png",
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
          to={"/recommendations"}
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
            className="flex justify-center items-center overflow-hidden flex-col"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-[130px] min-h-[200px] xl:w-[150px] object-cover rounded-xl "
            />
            <div className="bg-gray-300 w-full h-6 rounded-lg my-2 overflow-hidden">
              <p className="bg-green-500 w-[90%] h-full text-center font-bold text-white">
                90%
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
