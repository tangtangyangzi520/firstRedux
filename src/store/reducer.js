/*
 * @Descripttion: 
 * @Date: 2020-12-22 13:52:24
 * @LastEditTime: 2020-12-24 11:35:06
 */

import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,DATA_LIST} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ],
    dataList:[]
}
// eslint-disable-next-line
export default (state = defaultState,action)=>{
    console.log('hhhh',action)
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    if(action.type===DATA_LIST){
        console.log('fff',action)
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.dataList=action.list
        return newState
    }
    
    return state
}