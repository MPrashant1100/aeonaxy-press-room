import React from "react";
import Text from "../Common/Text";

const AboutCard = ({ image, title, description }) => {
  return (
    <div className="p-2 flex flex-col gap-10 md:w-1/4 w-11/12">
      {/* Image */}
      <div>
        <img src={image} alt={title} className="w-full" />
      </div>
      {/* Title */}
      <div className="flex flex-col gap-3 justify-center">
        <Text level="h3" className="font-bold">
          {title}
        </Text>
        {/* Description */}
        <Text level="p">{description}</Text>
      </div>
    </div>
  );
};

export default AboutCard;
