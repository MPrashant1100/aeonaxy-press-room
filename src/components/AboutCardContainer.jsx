import React from "react";
import AboutCard from "./Card/AboutCard";
import { aboutPage } from "../constant/global";

const AboutCardContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-4">
      {aboutPage.map((content, index) => (
        <AboutCard
          key={index}
          image={content.image}
          title={content.title}
          description={content.description}
        />
      ))}
    </div>
  );
};

export default AboutCardContainer;
