import React from "react";
import ImageCard from "../Resuables/ImageCard/ImageCard";
import ImageCardSection from "../Resuables/ImageCard/ImageCardSection";

const Slots = () => {
  const JILI = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/236.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/224.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/229.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/1.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/200.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JILI/197.png",
      alt: "Image 6",
    },
  ];
  const MG = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG/SMG_10000Wishes.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG/SMG_auroraWilds.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG/SMG_777MegaDeluxe.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG/SMG_25000Talons.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG/SMG_4DiamondBlues.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG/SMG_15Tridents.png",
      alt: "Image 6",
    },
  ];
  const PG = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/126.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/98.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/100.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/103.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/108.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PG/1312883.png",
      alt: "Image 6",
    },
  ];
  const JDB = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/JDB/14006.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JDB/14021.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JDB/14010.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JDB/14016.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JDB/14003.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/JDB/14022.png",
      alt: "Image 6",
    },
  ];
  const EVO_Electronic = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/EVO_Electronic/777strike0000000.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/EVO_Electronic/turnyourfortune0.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/EVO_Electronic/24hourgrandprix0.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/EVO_Electronic/alibabasluck0000.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/EVO_Electronic/grandwheel000000.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/EVO_Electronic/80sspins00000000.png",
      alt: "Image 6",
    },
  ];
  const PP = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/PP/rla.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PP/vs50juicyfr.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PP/vs1money.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PP/scgoldrushai.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PP/vs1024dtiger.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/PP/vs20olympgate.png",
      alt: "Image 6",
    },
  ];
  const MG_Fish = [
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG_Fish/SFG_WDFuWaFishing.png",
      alt: "Image 1",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG_Fish/SFG_WDGoldenTyrantFishing.png",
      alt: "Image 2",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG_Fish/SFG_WDMerryIslandFishing.png",
      alt: "Image 3",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG_Fish/SFG_WDGoldBlastFishing.png",
      alt: "Image 4",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG_Fish/SFG_WDGoldenFortuneFishing.png",
      alt: "Image 5",
    },
    {
      url: "https://basantimages.com/basantclub/gamelogo/MG_Fish/SFG_WDGoldenFuwaFishing.png",
      alt: "Image 6",
    },
  ];

  return (
    <div className="w-[95%] mx-auto py-5 ">
      <ImageCardSection title={"JILI"} imagesUrl={JILI} />
      <ImageCardSection title={"MG"} imagesUrl={MG} />
      <ImageCardSection title={"PG"} imagesUrl={PG} />
      <ImageCardSection title={"JDB"} imagesUrl={JDB} />
      <ImageCardSection title={"EVO Electronic"} imagesUrl={EVO_Electronic} />
      <ImageCardSection title={"PP"} imagesUrl={PP} />
      <ImageCardSection title={"MG Fish"} imagesUrl={MG_Fish} />
    </div>
  );
};

export default Slots;
