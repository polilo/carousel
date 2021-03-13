import React, { useState, useRef, useCallback, memo } from 'react';
import arrowLeft from '../../img/arrow_left.svg';
import arrowRight from '../../img/arrow_right.svg';
import { swipeStart, swipeMove } from '../../utils/swipe';
import { nextClick, prevClick } from '../../utils/arrow';
import ImgComp from '../atoms/ImgComp';
import VideoComp from '../atoms/VideoComp';
import TextComp from '../atoms/TextComp';
import store from '../../store';

import '../../styles/Carousel.css';

const Carousel = () => {
  const size = useRef();
  const [counter, setCounter] = useState(0);
  const [sizeWidth, setSizeWidth] = useState(0);

  const handlePrevClick = useCallback(() => {
    const { newSizeWidth, newCounter } = prevClick(size, counter, store.length);
    setSizeWidth(newSizeWidth);
    setCounter(newCounter);
  }, [sizeWidth, counter]);

  const handleNextClick = useCallback(() => {
    const { newSizeWidth, newCounter } = nextClick(size, counter, store.length);
    setSizeWidth(newSizeWidth);
    setCounter(newCounter);
  }, [sizeWidth, counter]);

  const handleTouchMove = useCallback((event) => {
    swipeMove(event, handlePrevClick, handleNextClick);
  }, [handleNextClick, handlePrevClick]);

  return (
    <>
      <h1 className='titleCarousel'>Carousel</h1>
      <section className='slider'>
        <img className='arrowPrev' src={arrowLeft} onClick={handlePrevClick} />
        <img className='arrowNext' src={arrowRight} onClick={handleNextClick} />
        {store.map((item, index) => (
          <div
            className='slide'
            ref={size}
            key={index}
            style={{
              transform: `translateX(${-sizeWidth * counter}px)`,
            }}
            onTouchStart={swipeStart}
            onTouchMove={handleTouchMove}
          >
            {item.img && <ImgComp src={item.img} />}
            {item.video && <VideoComp src={item.video} type={item.type} />}
            {item.text && <TextComp title={item.title} text={item.text} />}
          </div>
        ))}
      </section>
    </>
  )
};

export default memo(Carousel);