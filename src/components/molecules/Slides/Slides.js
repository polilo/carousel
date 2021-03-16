import React, { useContext, memo } from 'react';
import ImgComp from '../../atoms/ImgComp';
import VideoComp from '../../atoms/VideoComp';
import TextComp from '../../atoms/TextComp';
import { Context } from '../../../context/context';
import SLIDES_TYPES from '../../../slidesData/constans/constans';

import './Slides.css';

const SlideMap = {
  [SLIDES_TYPES.img]: ImgComp,
  [SLIDES_TYPES.video]: VideoComp,
  [SLIDES_TYPES.text]: TextComp
}

const Slides = () => {
  const { slides, size, sizeWidth, counter } = useContext(Context);

  return (
    slides.map((item, index) => {
      const Slide = SlideMap[item.type];

      return (
        <div
          className='slide'
          ref={size}
          key={index}
          style={{
            transform: `translateX(${-sizeWidth * counter}px)`,
          }}
        >
          <Slide {...item} />
        </div>
      )
    })
  )
}

export default memo(Slides);