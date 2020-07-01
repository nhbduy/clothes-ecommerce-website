import React from 'react';

import SECTIONS_DATA from 'mock/sections.data';

import MenuItem from 'components/menu-item/menu-item.component';

import './directory.styles.scss';

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
