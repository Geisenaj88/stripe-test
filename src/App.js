import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom'

import HomePage from 'components/shared/homepage';
import NotFound from 'components/not-found';
import Shop from 'components/pages/shop/shop.component';
import SingleProduct from 'components/single-product/single-product.component';
import CartPage from 'components/pages/cart-page/cart-page.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
