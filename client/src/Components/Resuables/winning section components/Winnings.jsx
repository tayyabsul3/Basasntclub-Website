import React from "react";
import { PiGreaterThan } from "react-icons/pi";

const Winnings = ({ profile, name, amount }) => {
  return (
    <div className="winning">
      <div className="card flex bg-white rounded-lg  gap-2 justify-around items-center py-2 px-2">
        <div className="profile flex justify-center items-center gap-2">
          <img
            src={profile}
            alt="Profile_Image"
            className="w-16 rounded-full"
          />
          <p className="text-lg">{name}</p>
        </div>
        <div className="winning_amount flex justify-center items-center gap-2">
          <div className="text-gradient  w-[100px] h-14  overflow-hidden rounded-lg">
            <img
              src="https://basantimages.com/basantclub/vendorlogo/vendorlogo_20240302124302f4r5.png"
              alt=""
              className="w-full"
            />
          </div>

          <div className="amount">
            <h2 className="font-bold text-[19px]">
              Recieved Rs<span>{amount}</span>
            </h2>
            <p className="text-center text-sm">Winning amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winnings;
