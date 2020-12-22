import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import { Input , Button , List } from 'antd'
import store from './store'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'

import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreatores'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
inputShow=''
constructor(props){
    super(props)
    this.state=store.getState();
    // this.changeInputValue= this.changeInputValue.bind(this)
    //----------关键代码-----------start
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    // this.clickBtn = this.clickBtn.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
    //----------关键代码-----------end
}
    render() { 
        return ( 
            <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn.bind(this)}
            deleteItem={this.deleteItem}
        />
         );
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
        // this.inputShow=e.target.value
        // const action ={
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        // store.dispatch(action)  
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction(this.inputShow)
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;