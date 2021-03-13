import React, { memo } from 'react';

const TextComp = ({ text, title = null }) => {
  const textStyles = {
    div: {
      display: 'flex',
      jistifyContent: 'center',
      flexDirection: 'column',
      background: 'rgba(77, 219, 255,0.3)',
      height: '100%',
    },
    h1: {
      textAlign: 'center',
      padding: `20px 0 30px 0`,
    },
    p: {
      margin: `0 50px 30px 50px`,
      padding: `10px 10px`,
      borderRadius: '10px',
      fontSize: '20px',
      boxShadow: `5px 5px 15px 5px rgba(0,0,0,0.06)`,
      background: 'rgba(102, 102, 255,0.2)',

    }
  }

  return (
    <div style={textStyles.div}>
      <h1 style={textStyles.h1}>
        {title}
      </h1>
      <p style={textStyles.p}>
        {text}
      </p>
    </div>
  )
}

export default memo(TextComp);