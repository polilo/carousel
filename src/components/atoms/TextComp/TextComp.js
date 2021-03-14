import React, { memo } from 'react';

import './TextComp.css';

const TextComp = ({ text, title = null }) => {
  return (
    <div >
      <h1>
        {title}
      </h1>
      <p>
        {text}
      </p>
    </div>
  )
}

export default memo(TextComp);