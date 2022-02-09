import Slider from "react-slick";
import React from "react";
import { IAnalyticsChart } from "./AnalyticsHelpers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/AnalyticsSlider.scss";

const AnalyticsSlider: React.FC<IAnalyticsChart> = ({ chartData }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    dots: false,
    infinite: false,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {chartData.map((cdItem) => (
        <div className="slider__item" key={cdItem.day}>
          <ul>
            <li>Day: {cdItem.day}</li>
            <li>Visitors: {cdItem.visitors}</li>
          </ul>
        </div>
      ))}
    </Slider>
  );
};

export default AnalyticsSlider;
