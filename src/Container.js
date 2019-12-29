import React, {Component} from 'react';
function Container({ style, className, onClick, onMouseEnter, onMouseLeave, id, children }) {

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
      className={className}
      style={{
        fontFamily: 'Mansalva',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default Container