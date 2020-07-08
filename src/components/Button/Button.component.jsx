import React from 'react';

import './Button.styles.scss';

const Button = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button className='button' {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
