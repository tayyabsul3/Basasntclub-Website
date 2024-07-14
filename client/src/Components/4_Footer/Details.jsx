import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbRating18Plus } from "react-icons/tb";

const Details = () => {
  return (
    <div className="bg-white w-[95%] mx-auto pb-10">
      <div className="logo p-5 flex items-center justify-around gap-10">
        <div className="logo w-[150px] xl:w-[250px]">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="icons flex gap-5 justify-around flex-[0.7]">
          <TbRating18Plus fontSize={"60px"} className="text-red-500" />
          <PiPhoneCallFill fontSize={"60px"} className="text-red-500" />
        </div>
      </div>
      <div className="details my-5">
        <ul>
          <li className="flex  items-center gap-2 mt-5 px-5">
            <svg
              data-v-a3117ed9=""
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-a3117ed9=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
            <p>
              The platform advocates fairness, justice, and openness. We mainly
              operate fair lottery, blockchain games, live casinos, and slot
              machine games.
            </p>
          </li>
          <li className="flex  items-center gap-2 mt-5 px-5">
            <svg
              data-v-a3117ed9=""
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-a3117ed9=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
            <p>
              Basantclub works with more than 10,000 online live game dealers
              and slot games, all of which are verified fair games.
            </p>
          </li>
          <li className="flex  items-center gap-2 mt-5 px-5">
            <svg
              data-v-a3117ed9=""
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-a3117ed9=""
                x="5.65625"
                width="8"
                height="8"
                rx="1"
                transform="rotate(45 5.65625 0)"
                fill="currentColor"
              ></rect>
            </svg>
            <p>
              Basantclub supports fast deposit and withdrawal, and looks forward
              to your visit.
            </p>
          </li>
        </ul>
      </div>
      <div className="disclaimer px-3">
        <p className="text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          repellat animi eos incidunt cumque natus cupiditate, reiciendis nam
        </p>
      </div>
    </div>
  );
};

export default Details;
