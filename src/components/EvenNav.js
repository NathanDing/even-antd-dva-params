import React, { Component, PropTypes } from 'react';

// 采用antd的UI组件
// import { Table, message, Popconfirm } from 'antd';

// 采用 stateless 的写法
const EvenNav = ({
                   navProps,
                  navapp
                  }) => {
  console.log(123)
  console.log(navProps)
  console.log(navapp)
    return (
    <div>
     <h1>{navProps.mymsg}</h1>
    </div>
  );
}

export default EvenNav;
