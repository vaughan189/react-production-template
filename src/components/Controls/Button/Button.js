import React from 'react';
import Button from '@material-ui/core/Button';

export const Btn = ({ text, handleClick }) => {
  return (
    <Button color="inherit" onClick={handleClick}>
      {text}
    </Button>
  );
};
