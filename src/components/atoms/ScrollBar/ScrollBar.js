import React, { useCallback, useContext, memo } from 'react';
import { Context } from '../../../context/context';

import './ScrollBar.css';

const ScrollBar = ({ props: handleOnClick }) => {
  const { slides, size, counter } = useContext(Context);

  const handleOnClickBar = useCallback((index) => {
    const newSizeWidth = size.current.offsetWidth;
    handleOnClick(index, newSizeWidth)
  }, []);

  return (
    <ul>
      {slides.map((_, index) => (
        <li key={index} onClick={() => handleOnClickBar(index)} className={counter === index ? 'active' : null}></li>
      ))}
    </ul>
  )
}

export default memo(ScrollBar);