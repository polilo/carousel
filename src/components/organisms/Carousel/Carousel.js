import React, { useState, useRef, useCallback, memo } from 'react';
import arrowLeft from '../../../img/arrow_left.svg';
import arrowRight from '../../../img/arrow_right.svg';
import { swipeStart, swipeMove } from '../../../utils/swipe';
import { nextClick, prevClick } from '../../../utils/arrow';
import store from '../../../store';
import Slide from '../../molecules/Slide';
import { Context } from '../../../utils/context';

import './Carousel.css';

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
    <Context.Provider value={{ store, size, sizeWidth, counter }}>
      <h1 className='titleCarousel'>Carousel</h1>
      <section className='slider'
        onTouchStart={swipeStart}
        onTouchMove={handleTouchMove}
      >
        <img className='arrowPrev' src={arrowLeft} onClick={handlePrevClick} />
        <img className='arrowNext' src={arrowRight} onClick={handleNextClick} />
        <Slide />
      </section>
    </Context.Provider>
  )
};

export default memo(Carousel);