import React, { memo } from 'react';

const ImgComp = ({ src }) => {
  const imgStyles = {
    width: '100%',
    height: '100%',
  };

  return <img src={src} alt='slide-img' style={imgStyles} />
};

export default memo(ImgComp);