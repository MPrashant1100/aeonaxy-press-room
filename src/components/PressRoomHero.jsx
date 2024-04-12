import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text from "./Common/Text";

const PressRoomHero = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id={id} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 items-start">
        <Text level="h4" className="text-4xl font-bold">
          Press Room
        </Text>
        <Text level="h4" className="text-md">
          All the News You Need to Know about Wix
        </Text>
      </div>
      <div className="border-t border-gray-300"></div>
      <div className="flex gap-5 justity-center items-center">
        <a href="#press-room">
          <Text level="p" className="">
            Press Room
          </Text>
        </a>
        <div className="border-l border-gray-500 h-5"></div>
        <a href="#press-release">
          <Text level="p" className="">
            Press Release
          </Text>
        </a>
        <div className="border-l border-gray-500 h-5"></div>
        <a href="#in-the-news">
          <Text level="p" className="">
            In the News
          </Text>
        </a>
      </div>
      <div className="border-t border-gray-300"></div>
      <div className="flex flex-col justify-center items-center gap-5 ">
        <h4 className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h4>
        <div className="flex justify-center items-center md:w-5/6 w-full p-2 mb-4">
          <div className="md:w-5/6 w-full">
            <Slider {...settings}>
              {/* Have to add 4 image here
                Then a slider which should slid image one by one 
                It should slide automatically also
             */}
              <img src="/hero.jpg" alt="My Image" className="w-full rounded" />
              <img src="/hero.jpg" alt="My Image" className="w-full rounded" />
              <img src="/hero.jpg" alt="My Image" className="w-full rounded" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRoomHero;
