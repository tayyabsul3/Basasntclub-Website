import React from "react";

const ImageCard = ({ img }) => {
  return (
    <a
      href="#"
      key={img.url}
      className="flex justify-center items-center overflow-hidden"
    >
      <img
        src={img.url}
        alt={img.alt}
        className="w-[130px] min-h-[200px] xl:w-[150px] object-cover rounded-xl "
      />
    </a>
  );
};

export default ImageCard;
