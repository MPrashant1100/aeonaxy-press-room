import React from "react";
import PressReleaseCard from "./Card/PressReleaseCard";
import { inTheNews } from "../constant/global";
import Text from "./Common/Text";

const InTheNews = ({ id }) => {
  return (
    <div id={id} className="flex flex-col gap-10 p-4">
      <div className="flex flex-col justify-center items-start">
        <Text level="h3" className="text-4xl font-bold">
          In The News
        </Text>
      </div>
      <div>
        {inTheNews.map((release, index) => (
          <PressReleaseCard
            key={index}
            date={release.date}
            title={release.title}
            link={release.link}
          />
        ))}
      </div>
    </div>
  );
};

export default InTheNews;
