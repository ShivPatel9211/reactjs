import React from 'react';

const ToDoList = (props) =>{
    return (
        <><li>
        <i className="fa fa-times icon" aria-hidden="true" 
        onClick={()=>{
            props.onSelect(props.id)
        }}
         ></i>
        {props.text}
        </li>
        </>
    )
    
}
export default ToDoList;