import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";
import LotteryCard from "../Resuables/LotteryCard";

const Lottery = () => {
  return (
    <section className="w-[95%] mx-auto py-5" id="lottery">
      <div className="name flex justify-between items-center">
        <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
          Lottery
        </p>
        <Link
          to={"/lottery"}
          className="px-5 border-2 border-gray-400 rounded-lg text-gray-400 flex justify-center items-center gap-2 py-[5px]"
        >
          All <span className="text-green-500"> 4 </span> <PiGreaterThan />
        </Link>
      </div>
      <div className="cards flex  gap-2 xl:gap-5 flex-wrap px-2">
        <div className="lotterycard w-[max-content]">
          <LotteryCard
            background={"./card_1_bg.png"}
            img={"./lottery_img_1.webp"}
            text={"Win Go"}
          />
        </div>
        <div className="lotterycard w-[max-content]">
          <LotteryCard
            background={"./card_1_bg.png"}
            img={"./lottery_img_2.webp"}
            text={"K3"}
          />
        </div>
        <div className="lotterycard  w-[max-content]">
          <LotteryCard
            background={"./card_1_bg.png"}
            img={"./lottery_img_3.webp"}
            text={"5D"}
          />
        </div>
        <div className="lotterycard w-[max-content]">
          <LotteryCard
            background={"./card_1_bg.png"}
            img={"./lottery_img_4.webp"}
            text={"TRX Win Go"}
          />
        </div>
      </div>
    </section>
  );
};

export default Lottery;
