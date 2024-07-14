import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { WiSmoke } from "react-icons/wi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

const ImageSlider = () => {
  const imagesarray = [
    "https://basantimages.com/basantclub/banner/Banner_20240314161939rmxn.png",
    "https://basantimages.com/basantclub/banner/Banner_20240311204758w5xb.jpg",
    "https://basantimages.com/basantclub/banner/Banner_20240314162342ubwr.png",
    "https://basantimages.com/basantclub/banner/Banner_20240314162556314f.png",
    "https://basantimages.com/basantclub/banner/Banner_20240314141051854s.png",
  ];

  return (
    <div className="flex justify-center items-center mt-6 w-full flex-col gap-[10px] ">
      <div>
        {/* <Carousel>
          {imagesarray.map((s) => (
            <img src={s} key={s} className="rounded-2xl object-center w-full" />
          ))}
        </Carousel> */}
        <div className="max-w-full ">
          <Carousel className=" w-[80%] mx-auto">
            <CarouselContent>
              {imagesarray.map((s) => (
                <CarouselItem>
                  <img
                    src={s}
                    alt="img"
                    className="w-full mx-auto  rounded-3xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="detail bg-white w-[95%] 2xl:w-[80%] rounded-[20px] flex justify-between items-center gap-5 px-5 py-5 ">
        <div className="speaker_icon">
          <HiSpeakerWave
            style={{ fontSize: "25px" }}
            className="text-green-700"
          />
        </div>
        <div className="para text-md flex-[0.8]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque
        </div>
        <button className="bg-green-500 flex rounded-3xl flex-[0.2] px-2 text-xl text-white py-2 justify-center gap-2 items-center text-gradient border-green-600 border-2">
          <FaFire style={{ fontSize: "20px" }} className="text-white" />
          <p className="font-semibold ">Details</p>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
