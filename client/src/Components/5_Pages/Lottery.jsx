import React from "react";
import LotteryCard2 from "../Resuables/LotteryCard2";

const Lottery = () => {
  const cards = [
    {
      title: "Win Go",
      img_url:
        "https://basantimages.com/basantclub/lotterycategory/lotterycategory_20240223183107rg72.png",
      text: "Through the platform WIN GO Hash lottery seed as the result of the lottery",
    },
    {
      title: "5D",
      img_url:
        "https://basantimages.com/basantclub/lotterycategory/lotterycategory_20240223183146owmo.png",
      text: "The player predicts 3 DICE numbers, the winning rate is high, the gameplay is simple, and it is easy to win",
    },
    {
      title: "K3",
      img_url:
        "https://basantimages.com/basantclub/lotterycategory/lotterycategory_20240223183132wbbx.png",
      text: "5 numbers are used as the result of the lottery, and the playing methods are flexible and diverse",
    },
    {
      title: "Trx Win Go",
      img_url:
        "https://basantimages.com/basantclub/lotterycategory/lotterycategory_20240223183228dj93.png",
      text: "By obtaining the real-time hash value of the TRX blockchain as the result of the lottery",
    },
  ];
  return (
    <section className="w-[95%] mx-auto py-5" id="lottery">
      <div className="name flex justify-between items-center">
        <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
          Lottery
        </p>
      </div>
      <div className="cards flex  gap-2 xl:gap-5 flex-wrap px-2 justify-items-start ">
        {cards.map((card, index) => (
          <LotteryCard2
            key={index}
            title={card.title}
            img={card.img_url}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Lottery;
