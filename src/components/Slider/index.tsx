import React from 'react';
import Slider from 'react-slick';
import { ISlider } from '../../libs/apis/sliders/types';

export interface ISliders {
  sliders: ISlider[];
}

export const CustomSlider: React.FC<ISliders> = React.memo(({ sliders }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {sliders.map((item, idx) => {
        return (
          <img
            src={item.image}
            alt="no picture"
            width="100%"
            height="500px"
            key={idx}
          />
        );
      })}
    </Slider>
  );
});

export default CustomSlider;
