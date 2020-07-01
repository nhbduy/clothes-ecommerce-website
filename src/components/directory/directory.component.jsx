import React from 'react';

import data from './data.json';

import MenuItem from 'components/menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = (props) => {
  const [sections, setSections] = React.useState(data.sections);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
