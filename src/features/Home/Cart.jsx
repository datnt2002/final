import React from 'react';

import { Button, Divider } from 'antd';

import CardCart from '../../components/Container/Cart/CardCart';
import repeatBg from '../../assets/imgs/repeatbg.jpg';

const Cart = () => {
  return (
    <>
      <Divider className="bg-black" />
      <div
        className="px-40 pt-10 min-h-screen"
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
      >
        <h1 className="text-4xl font-semibold">Shopping Cart</h1>
        <div className="flex">
          <div className="flex flex-col flex-1">
            <h1 className="my-4">1 Course in Cart</h1>
            <Divider className="m-2" />
            <div className="mr-10">
              <CardCart />
            </div>
          </div>
          <div className="flex basis-1/3 ml-10">
            <div class="flex flex-1 flex-col rounded-lg border p-6 shadow-xl">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Amount</p>
                <p class="text-gray-700">$129.99</p>
              </div>
              <Divider className="bg-black" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">134.98 ECoin</p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Button className="bg-black text-white mt-6 w-full rounded-md font-medium">Check out</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
