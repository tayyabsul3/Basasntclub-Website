import React from "react";
import ImageCard from "../Resuables/ImageCard/ImageCard";

const Original = () => {
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
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/109_20240307111929430.jpg",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/110_20240307111920527.jpg",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/105_20240307111958408.jpg",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/900_20240307111907500.jpg",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/107_20240307111940128.jpg",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/102_20240307112015421.jpg",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/112_20240330123515356.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/902_20240530132032897.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/103_20240307112007103.jpg",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/101_20240307112023189.jpg",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/104_20240330123523080.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/111.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/TB_Chess/106_20240307111949001.jpg",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/224.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/236.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/229.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/197.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/200.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/232.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/235.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/233.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22002.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22003.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22004.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22005.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22008.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22006.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/SPRIBE/22007.png",
      alt: "Image 2",
    },
  ];
  return (
    <div className="w-[95%] mx-auto py-5">
      <div className="name flex justify-between items-center">
        <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
          Orignal
        </p>
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

export default Original;
