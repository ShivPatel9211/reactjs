import {React , useState} from 'react';


const Form = () =>{
    const [name, updatename]=useState("")
    const [fullname, setfullname]=useState()
    const setName = (event) =>{
        updatename(event.target.value);
    };

    const dataSubmit = () =>{
        setfullname(name)
    };
    return(
        <>
        <div className="form" >
         <h1 className='heading1'>Hello, { fullname } </h1>
         <input className='inp' type='text' placeholder='Enter your name '
             onChange={setName}
             value={name}
         /> 
         <br/>
         <button className='btn' onClick={dataSubmit}>Submit</button>        
        </div>
        </>
    )
};
export default Form;