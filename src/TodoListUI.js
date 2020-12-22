import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUI = (props)=>{
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input  
                    style={{ width:'250px', marginRight:'10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item onClick={()=>{props.deleteItem(index)}}>
                                {item}
                            </List.Item>
                        )
                    }
                />    
            </div>
        </div>
    )

}

// export default TodoListUI;
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         console.log('fff',props)
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//                 <div>
//                     <Input 
//                     placeholder={this.props.inputValue} 
//                     style={{ width:'250px', marginRight:'10px'}}
//                     onChange={this.props.changeInputValue}
//                     />
//                     <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                 </div>
//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List
//                         bordered
//                         //关键代码-----------start
//                         dataSource={this.props.list}
//                         //关键代码-----------end
//                         renderItem={(item,index) => (<List.Item onClick={this.props.deleteItem.bind(this,index)}>{item}</List.Item>)}
//                     />    
//                 </div>
//             </div>
//          );
//     }
// }
 
export default TodoListUI;