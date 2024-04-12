import React from "react";
import PressReleaseCard from "./Card/PressReleaseCard";
import { pressRelease } from "../constant/global";
import Text from "./Common/Text";

const PressReleaseContainer = ({ id }) => {
  return (
    <div id={id} className="flex flex-col gap-10 p-4">
      <div className="flex flex-col justify-center items-start">
        <Text level="h3" className="text-4xl font-bold">
          Press Release
        </Text>
      </div>
      <div>
        {pressRelease.map((release, index) => (
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

export default PressReleaseContainer;
