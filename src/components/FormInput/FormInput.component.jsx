import React from 'react';

import './FormInput.styles.scss';

const FormInput = (props) => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label && (
        <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}
    </div>
  );
};

export default FormInput;
