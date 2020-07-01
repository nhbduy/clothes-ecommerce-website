import React from 'react';

import data from './data.json';

import MenuItem from 'components/menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const [sections, setSections] = React.useState(data.sections);

  return (
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
