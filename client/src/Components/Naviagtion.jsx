import React from "react";
import Card from "./Resuables/Card";
import Card2 from "./Resuables/Card2";
import { Link } from "react-router-dom";

const Naviagtion = () => {
  return (
    <div className="w-[95%] xl:w-[80%] mx-auto flex flex-col justify-center items-center py-5 2xl:flex-row xl:flex-col lg:flex-col sm:flex-col ">
      <div className="cards_main flex   2xl:flex-col  xl:flex-row lg:flex-row sm:flex-row gap-5">
        <a className="card " href="#lottery">
          <Card
            background={"./card_1_bg.png"}
            img={"./card_1_img.png"}
            text={"Popular"}
          />
        </a>
        <a className="card" href="#fishing">
          <Card
            background={"./card_1_bg_copy.png"}
            img={"./card_2_img.png"}
            text={"Fishing"}
          />
        </a>
      </div>
      <div className="cards_sub flex flex-wrap items-center justify-center">
        <Link to={"/slots"} className="card">
          <Card2
            background={"./card_3_bg.png"}
            img={"./card_3_img.png"}
            text={"Slots"}
          />
        </Link>
        <Link to={"/lottery"} className="card">
          <Card2
            background={"./card_2_bg.png"}
            img={"./card_4_img.png"}
            text={"Lottery"}
          />
        </Link>
        <Link to={"/original"} className="card">
          <Card2
            background={"./card_5_bg.png"}
            img={"./card_5_img.png"}
            text={"Original"}
          />
        </Link>
        <Link to={"/casino"} className="card">
          <Card2
            background={"./card_6_bg.png"}
            img={"./card_6_img.png"}
            text={"Casino"}
          />
        </Link>
        <Link to={"/sports"} className="card">
          <Card2
            background={"./card_7_bg.png"}
            img={"./card_7_img.png"}
            text={"Sports"}
          />
        </Link>
        <Link to={"/rummy"} className="card">
          <Card2
            background={"./card_8_bg.png"}
            img={"./card_8_img.png"}
            text={"Rummy"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Naviagtion;
