import React from "react";

const Earnings = ({ ranking, profile, name, amount }) => {
  return (
    <div className="today_ranking">
      <div className="card flex bg-white rounded-lg  gap-2 justify-around items-center py-2 px-2">
        <div>
          <p className="font-bold text-2xl text-gray-400 px-5">{ranking}</p>
        </div>
        <div className="profile flex justify-center items-center gap-2">
          <img
            src={profile}
            alt="Profile_Image"
            className="w-16 rounded-full"
          />
          <p className="text-lg">{name}</p>
        </div>
        <div className="winning_amount flex justify-center items-center gap-2">
          <div className="text-gradient    overflow-hidden rounded-3xl">
            <p className="font-bold text-white px-5 py-2 text-xl">Rs{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
