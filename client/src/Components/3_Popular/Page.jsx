import React from "react";
import OrignalPage from "./OrignalPage";
import SlotsPage from "./SlotsPage";
import Sports from "./Sports";
import CasinoPage from "./CasinoPage";
import FishingPage from "./FishingPage";
import Recommendation from "./Recommendations";
import Runmmy from "./Runmmy";
import Lottery from "./Lottery";

const Page = () => {
  return (
    <div>
      <Lottery />
      <OrignalPage />
      <SlotsPage />
      <Sports />
      <CasinoPage />
      <FishingPage />
      <Recommendation />
      <Runmmy />
    </div>
  );
};

export default Page;
