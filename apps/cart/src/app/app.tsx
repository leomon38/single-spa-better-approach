import React from 'react';
import { Route } from 'react-router-dom';

import '@nx-example/shared/header';
import { assetUrl } from '../single-spa/asset-url';
import { CartCartPage } from '@nx-example/cart/cart-page';

export const App = () => {
  assetUrl("./images/home-picture.jpg")
  return (
    <>
      <nx-example-header />
      <Route path="/cart" exact component={CartCartPage} />
    </>
  );
};

export default App;
