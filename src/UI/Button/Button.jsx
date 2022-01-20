import React from 'react';

const Button = ({children}) => {
  let styleButton = {
    borderRadius: '22px',
    height: '42px',
    width: '180px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '18px',
    lineHeight: '22px',
    borderColor: 'black'
  }

  return (
    <button style={styleButton}>
      {children}
    </button>
  );
}

export default Button;
