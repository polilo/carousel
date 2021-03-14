import React, { useContext, memo } from 'react';
import ImgComp from '../../atoms/ImgComp';
import VideoComp from '../../atoms/VideoComp';
import TextComp from '../../atoms/TextComp';
import { Context } from '../../../utils/context';

import './Slide.css';

const Slide = () => {
  const { store, size, sizeWidth, counter } = useContext(Context);

  return (
      store.map((item, index) => (
        <div
          className='slide'
          ref={size}
          key={index}
          style={{
            transform: `translateX(${-sizeWidth * counter}px)`,
          }}
        >
          {item.img && <ImgComp src={item.img} />}
          {item.video && <VideoComp src={item.video} type={item.type} />}
          {item.text && <TextComp title={item.title} text={item.text} />}
        </div>
      ))
  )
}

export default memo(Slide);