import React from 'react';

const Button = ({name, onDelete}) => {


  return(
      <button onClick={onDelete}>{name}</button>
  )};

export default Button;