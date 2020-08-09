import React from 'react';

import Directory from 'components/Directory/Directory.component';

import './HomePage.styles.scss';

// HomePage
const HomePage = (props) => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default HomePage;
