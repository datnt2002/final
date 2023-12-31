import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, Space } from 'antd';

import CardInCart from './CardInCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCartAction } from '../../../redux/slice/authenticationSlice';
import { USER_ROUTE } from '../../../constants';

const CartHoverDropDown = ({ icon, buttonTitle }) => {
  const cart = useSelector((state) => state.authentication.cart);
  console.log(cart);
  let noOfItems = 0;
  if (cart?.cartItems) {
    noOfItems = cart?.cartItems.length;
  }
  const items = [
    {
      key: '1',
      label: `${noOfItems} courses in cart`,
    },
    {
      type: 'divider',
    },
    {
      key: 'button',
      label: <Link to={USER_ROUTE.USER_CART}>{buttonTitle}</Link>,
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAction({}));
  }, []);
  return (
    <Dropdown
      placement="bottom"
      menu={{
        items,
      }}
    >
      <Space>{icon}</Space>
    </Dropdown>
  );
};

export default CartHoverDropDown;
