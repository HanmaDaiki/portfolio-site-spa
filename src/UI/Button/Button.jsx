import React from 'react';
import styled from 'styled-components';

const Button = ({children}) => {
  const SendButton = styled.button`
  border-radius: 22px;
  height: 42px;
  width: 180px;
  background-color: black;
  color: white;
  font-size: 18px;
  line-height: 22px;
  border: 0 solid black;
  
  @media(max-width: 939px){
    width: 100%;
  }
  `

  return (
    <SendButton>{children}</SendButton>
  );
}

export default Button;
