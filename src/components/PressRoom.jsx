import React from "react";
import PressRoomHero from "./PressRoomHero";
import PressReleaseContainer from "./PressReleaseContainer";
import InTheNews from "./InTheNews";
import AboutCardContainer from "./AboutCardContainer";
import Footer from "./Common/Footer";
import Contact from "./Common/Contact";

const PressRoom = () => {
  return (
    <div className="m-5">
      <div className="p-8 flex flex-col gap-14 ">
        <PressRoomHero id="press-room-hero" />
        <PressReleaseContainer id="press-release" />
        <InTheNews id="in-the-news" />
        <AboutCardContainer />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default PressRoom;
