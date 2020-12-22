/*
 * @Descripttion:
 * @Date: 2020-12-22 14:54:45
 * @LastEditTime: 2020-12-22 15:31:59
 */

import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM}  from './actionTypes'

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