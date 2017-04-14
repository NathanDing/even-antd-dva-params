import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import EvenNav from '../../components/EvenNav';
// 引入对应的样式
// 可以暂时新建一个空的
import styles from './AppRoute.less';


const navProps = {
  mymsg: 'test msg',
};
function App(app) {
  const { navapp } = app
  console.log('App(popop) ')
  console.log(navapp); // 来自model
  console.log(app)
  return (
    <div className={styles.normal}>
      {/* 导航 */}
        <EvenNav {...app} /> {/* EvenNav 是一个展示组件../../components/EvenNav */}
    </div>
  );
}


function mapStateToProps (app) {
  console.log('mapStateToProps')
  console.log(navProps)
  return {
    ...app,
    navProps: navProps,
  };
}

export default connect(mapStateToProps)(App); { /* 将app容器传递到 function App(app) */ }

// export default App;
