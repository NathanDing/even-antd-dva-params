import dva from 'dva';
import './index.css';

// 1. Initialize,初始化一个名为app的全局对象容器a
const app = dva();


// 2. Plugins
// app.use({});

// 3. Model 加载models对象到全局对象容器，后期可以改成/models/app加载所有models
app.model(require('./models/app'));

// 4. Router 全局对象容器app上注册路由
app.router(require('./router'));

// 5. Start
app.start('#root');
