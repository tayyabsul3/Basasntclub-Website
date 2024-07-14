import React, { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Carousel = ({ children }) => {
  //3
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurr((curr) => (curr + 1) % 3);
    }, 10000);

    return () => clearInterval(intervalId);
    // Cleanup function to clear interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden  ">
      <div
        className="flex  transition-transform duration-1000 ease-out  rounded-lg"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
