import React from 'react';
const Slotmachine = (props) => {
    // var x = "😙";
    // var y = "😙";
    // var z = "😙";
    if (props.x == props.y && props.y == props.z) {
        return (
            <>
                <div className='slotbody'>
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1> This is matching </h1>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className='slotbody'>
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1> This is not matching </h1>
                    <hr />
                </div>
            </>
        )
    }

};


const Slot = () => {
    return (
        <>
            <h1 className='heading'>🤑 Welcome to Slots machine 🤑 </h1>

            <Slotmachine
                x="😙"
                 y = "😙"
                 z = "😙"

         />
            <Slotmachine
                 x="👮"
                 y = "😙"
                 z = "👮"

         />
            <Slotmachine
                 x="👮"
                 y = "👮"
                 z = "👮"

         />
        </>
    );
};
export default Slot;
 
