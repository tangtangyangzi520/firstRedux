/*
 * @Descripttion: 
 * @Date: 2020-12-22 13:51:57
 * @LastEditTime: 2020-12-24 11:50:19
 */

import { createStore,applyMiddleware , compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
// import thunk from 'redux-thunk'//引入插件redux-trunk
import createSagaMiddleware from 'redux-saga'   //引入saga
import mySagas from './sagas' 

const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
//创建链式函数
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer,enhancer) // 创建数据存储仓库
sagaMiddleware.run(mySagas)
export default store   //暴露出去