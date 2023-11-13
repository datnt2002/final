import React from 'react';
import { ApartmentOutlined } from '@ant-design/icons';
const CategoryTotal = () => {
  return (
    <div className="rounded-xl bg-gray-100/50 border border-black shadow-2xl">
      <div className="flex justify-between p-6">
        <div>
          <h1 className="text-xl text-gray-500 font-medium">Categories</h1>
          <h4 className="text-2xl font-bold text-black ">3.456</h4>
        </div>
        <div className="bg-gray-200 h-12 w-12 p-4 rounded-full flex items-center justify-center">
          <ApartmentOutlined className="text-xl " />
        </div>
      </div>

      <h1 className="text-right pb-2 pr-4 -mt-4 text-base text-gray-500 font-bold">Since last month</h1>
    </div>
  );
};

export default CategoryTotal;
