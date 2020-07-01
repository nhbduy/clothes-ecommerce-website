import React from 'react';

import CollectionPreview from 'components/collection-preview/collection-preview.component';

import SHOP_DATA from 'mock/shop.data';

const ShopPage = () => {
  const [collections, setCollections] = React.useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
