import React from 'react';

import SECTIONS_DATA from 'mock/sections.data';

import MenuItem from 'components/MenuItem/MenuItem.component';

import './Directory.styles.scss';

const Directory = (props) => {
  const [sections, setSections] = React.useState(SECTIONS_DATA);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
