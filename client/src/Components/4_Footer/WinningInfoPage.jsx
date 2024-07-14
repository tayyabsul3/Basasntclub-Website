import React, { Fragment } from "react";
import { PiGreaterThan } from "react-icons/pi";
import Winnings from "../Resuables/winning section components/Winnings";
import Earnings from "../Resuables/winning section components/Earnings";

const WinningInfoPage = () => {
  return (
    <Fragment>
      <div className="w-[95%] mx-auto py-5 flex flex-col xl:flex-row gap-10  ">
        <div className="w-[95%] mx-auto py-5">
          <div className="name flex justify-between items-center">
            <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
              Winning Information
            </p>
            <button className="px-5 border-2 border-gray-400 rounded-lg text-gray-400 flex justify-center items-center gap-2 py-[5px]">
              All <span className="text-green-500"> 2 </span> <PiGreaterThan />
            </button>
          </div>
          <div className="cards flex flex-col  gap-2 mt-5 w-full">
            <Winnings
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={16.0}
            />
            <Winnings
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={16.0}
            />
            <Winnings
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={16.0}
            />
            <Winnings
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={16.0}
            />
          </div>
        </div>

        <div className="w-[95%] mx-auto py-5">
          <div className="name flex justify-between items-center">
            <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
              Today's Earning ranking
            </p>
            <button className="px-5 border-2 border-gray-400 rounded-lg text-gray-400 flex justify-center items-center gap-2 py-[5px]">
              All <span className="text-green-500"> 2 </span> <PiGreaterThan />
            </button>
          </div>
          <div className="cards flex flex-col gap-2 mt-5 w-full">
            <Earnings
              ranking={1}
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={1_834962_3242.0}
            />
            <Earnings
              ranking={2}
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={1_834962_3242.0}
            />
            <Earnings
              ranking={3}
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={1_834962_3242.0}
            />
            <Earnings
              ranking={4}
              profile={"https://basantclub.net/assets/png/8-ea087ede.png"}
              name={"Muham***ab"}
              amount={1_834962_3242.0}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WinningInfoPage;
