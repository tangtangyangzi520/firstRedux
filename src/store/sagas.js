/*
 * @Descripttion: saga插件
 * @Date: 2020-12-24 11:46:56
 * @LastEditTime: 2020-12-24 14:02:13
 */
import { takeEvery ,put } from 'redux-saga/effects'    
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreatores'

function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList(){
    // const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const data=['hello','hi','nice','good']
    const action = getListAction(data)
    yield put(action)
}
export default mySaga;