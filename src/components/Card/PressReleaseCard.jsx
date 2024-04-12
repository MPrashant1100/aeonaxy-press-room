import React from "react";
import Text from "../Common/Text";

const PressReleaseCard = ({ date, title, link }) => {
  return (
    <div className="container p-2 flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col justify-start items-start gap-1">
          <Text level="h4" className="font-bold">
            {date}
          </Text>
          <Text level="p">{title}</Text>
        </div>
        <div>
          <button>
            <a href={link} target="_blank" rel="noreferrer">
              Read more
            </a>
          </button>
        </div>
      </div>
      <div className="border-t border-gray-500"></div>
    </div>
  );
};

export default PressReleaseCard;
