import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const Runmmy = () => {
  const imagesUrl = [
    {
      url: "https://basantimages.com/basantclub/vendorlogo/vendorlogo_20240302124129qai9.png",
      alt: "Image 1",
    },
  ];
  return (
    <div className="w-[95%] mx-auto py-5">
      <div className="name flex justify-between items-center">
        <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
          Rummy
        </p>
        <Link
          to={"/rummy"}
          className="px-5 border-2 border-gray-400 rounded-lg text-gray-400 flex justify-center items-center gap-2 py-[5px]"
        >
          All <span className="text-green-500"> 2 </span> <PiGreaterThan />
        </Link>
      </div>
      <div className="cards flex  gap-5 mt-5">
        {imagesUrl.map((img) => (
          <a href="#" key={img.url} className="text-gradient rounded-xl ">
            <img
              src={img.url}
              alt={img.alt}
              className="w-[130px] xl:w-[150px] object-cover rounded-xl "
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Runmmy;
