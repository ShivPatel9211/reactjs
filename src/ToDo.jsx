import React, { useState } from 'react';
import ToDoList from './ToDoList'


const ToDO = () => {
    const [current, setupdate] = useState();
    const [item, setitem] = useState([]);
    const eventItem = (event) => {
        setupdate(event.target.value);
    };
    const additem = () => {
        setitem((oldItem) =>{
            return[...oldItem, current];
        });
        setupdate("");
    };
    const deleteItem = (id) =>{
        setitem((oldItem)=>{
            return oldItem.filter((arrEle,index)=>{
                return index !==id
            })
        })
    }
    return (
        <>
            <div className='body'>
                <div className='mainbody'>
                    <h2 className='heading'>
                        ToDo List
                    </h2>
                    <div className='mainelement'>
                        <input type='text' placeholder='Add a item' value={current} onChange={eventItem} />
                        <button type='submit' className='submitbtn' onClick={additem}> + </button>
                        <ol className='listitem'>
                            {item.map((itemval, index)=>{
                              return <ToDoList
                                  text= {itemval}
                                  key ={index}
                                  id = {index}
                                  onSelect= {deleteItem}
                              />
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ToDO;