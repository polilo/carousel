import React, { useState, useRef, useCallback, memo } from 'react';
import arrowLeft from '../../../img/arrow_left.svg';
import arrowRight from '../../../img/arrow_right.svg';
import { swipeStart, swipeMove } from '../../../utils/swipe';
import { nextClick, prevClick } from '../../../utils/arrow';
import Slides from '../../molecules/Slides';
import { CarouselContext } from '../../../carouselContext/carouselContext';
import ScrollBar from '../../atoms/ScrollBar';

import './Carousel.css';

const Carousel = ({ slides }) => {
  const size = useRef(null);
  const [counter, setCounter] = useState(0);
  const [sizeWidth, setSizeWidth] = useState(0);

  const handlePrevClick = useCallback(() => {
    const { newSizeWidth, newCounter } = prevClick(size, counter, slides.length);
    setSizeWidth(newSizeWidth);
    setCounter(newCounter);
  }, [sizeWidth, counter]);

  const handleNextClick = useCallback(() => {
    const { newSizeWidth, newCounter } = nextClick(size, counter, slides.length);
    setSizeWidth(newSizeWidth);
    setCounter(newCounter);
  }, [sizeWidth, counter]);

  const handleTouchMove = useCallback((event) => {
    swipeMove(event, handlePrevClick, handleNextClick);
  }, [handleNextClick, handlePrevClick]);

  const handleOnClick = useCallback((index, newSizeWidth) => {
    setCounter(index)
    setSizeWidth(newSizeWidth)
  }, []);

  return (
    <CarouselContext.Provider value={{ slides, size, sizeWidth, counter }}>
      <h1 className='titleCarousel'>Carousel</h1>
      <section className='slider'
        onTouchStart={swipeStart}
        onTouchMove={handleTouchMove}
      >
        <img className='arrowPrev' src={arrowLeft} onClick={handlePrevClick} />
        <img className='arrowNext' src={arrowRight} onClick={handleNextClick} />
        <Slides />
      </section>
      <ScrollBar props={handleOnClick} />
    </CarouselContext.Provider>
  )
};

export default memo(Carousel);