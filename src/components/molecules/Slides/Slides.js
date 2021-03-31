import React, { useContext, memo } from 'react';
import { CarouselContext } from '../../../carouselContext/carouselContext';

import './Slides.css';

const Slides = () => {
  const { slides, size, sizeWidth, counter} = useContext(CarouselContext);

  return (
    slides.map((props, index) => {
      const overflow = props.item.props.className === 'textItem' ? 'scroll' : null;

      return (
        <div
          className='slide'
          ref={size}
          key={index}
          style={{
            overflowY: `${overflow}`,
            transform: `translateX(${-sizeWidth * counter}px)`,
          }}
        >
          {props.item}
        </div>)
    })

  )
}

export default memo(Slides);