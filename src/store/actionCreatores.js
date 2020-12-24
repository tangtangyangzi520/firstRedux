/*
 * @Descripttion:
 * @Date: 2020-12-22 14:54:45
 * @LastEditTime: 2020-12-24 14:04:04
 */
// eslint-disable-next-line
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,DATA_LIST,GET_MY_LIST,Get_LIST_ACTION}  from './actionTypes'
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = (value)=>({
    type:ADD_ITEM,
    value
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})
// 以前的action是对象，现在的action可以是函数了，这就是redux-thunk带来的好处
// export const getTodoList = () =>{
//     return (dispatch)=>{
//         const data=['hello','hi','nice','good']
//         const action = getListAction(data)
//         dispatch(action)
// axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
//     const data = res.data
//     console.log(data)
// })
//     }
// }
// export const getListAction = (value) =>({
//     type:DATA_LIST,
//     list:value
// })

// redux-saga相关方法
export const getMyListAction = ()=>({
    type:GET_MY_LIST
})
export const getListAction=(value)=>({
    type:Get_LIST_ACTION,
    value
})