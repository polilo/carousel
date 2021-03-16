import React, { memo } from 'react';

import './ImgComp.css';

const ImgComp = ({ src }) => {
  return <img src={src} alt='slide-img' className='imgComp'/>
};

export default memo(ImgComp);