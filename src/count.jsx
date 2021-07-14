import React,{useState} from 'react';

const Count = () => {
    let time = new Date().toLocaleTimeString()
    const [current, update] = useState(time)
    const IntNum = () =>{
        update(new Date().toLocaleTimeString())
    }
    return (
        <><div className="count">
            <h1 className= 'count_heading'>{current}</h1>
            <button className='count_button' onClick={IntNum}>Get Time</button>
        </div>
        </>
    );
};
export default Count;