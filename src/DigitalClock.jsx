import React, { useState } from 'react'
const Clock = () => {
    let time = new Date().toLocaleTimeString()
    const [currentT, updatedT] = useState(time)
    const updatetime = () =>{
      updatedT(new Date().toLocaleTimeString())
    }
    setInterval(updatetime,1000)
    return (
        <>
            <div className='count'>
                <h1 className='time'>{currentT}</h1>
            </div>

        </>
    )
};
export default Clock;