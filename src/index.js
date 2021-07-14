import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Card from './Card';
import cdata from './Cdata';
import App from './App';
import Slot from './Slots';
import Count from './count';
import Clock from './DigitalClock'
import Form from './Form'
import ToDo from './ToDo'

// import {add,duff,mul} from './Cal';

// const firstname =  "Shiv ";
// const lastname = "Chaudhary";
// const time1 = new Date(2021,4,10,20)
// const time = time1.getHours();
// const date = new Date().toLocaleDateString();
// let greeting = '';
// const colo ={};


// if (time < 12 ){
//   greeting = "Good Morning Sir ";
//   colo.color = 'Green';
//   colo.background= 'aqua;'
// }
// else if (time >= 12 && time < 20 ){
//   greeting = "Good AfterNoon Sir ";
//   colo.color = 'yellow';
//   colo.background = 'aqua;'
// } 
// else {
//   greeting = "Good night Sir ";
//   colo.color = 'black';
//    colo.background = 'aqua;';

// }

ReactDom.render(
  <>
    <ToDo/>

    {/* <Form /> */}

    {/* <Clock/> */}

    {/* <Count/> */}
    {/* 
   <Slot/> */}


    {/* {cdata.map(function card1(val){
    return(
      <Card
      imgs={val.imgs}
      title={val.title}
      link={val.link}
    />
    )
  })} */}


    {/* calculator  */}
    {/* <ul>
   <li><h1>The sum is {add(5,6)}</h1></li>
   <li><h1>The Difference is {duff(5,6)}</h1></li>
   <li><h1>The Multification is {mul(5,6)}</h1></li>
 </ul> */}
    {/* calculator */}
    {/* <h1>{`Current Time : ${time}`} </h1>
    <h1>{`Currgent Date : ${date}`} </h1> */}

    {/* <div className='heading' >
      <div>
     <h1 className='headinginner'> Hello,<span style={colo}> {greeting} </span></h1>
      </div>
    </div> */}

    {/* { `My name is ${firstname} ${lastname}`}
    <h1>List of 5 best series</h1>
    <ol>
      <li>{firstname}</li>
      <li>{lastname}</li>
      <li>Games of Thornes</li>
      <li>Pekai Blinders</li>
      <li>Sex Education</li>
    </ol> */}
  </>,
  document.getElementById('root')
);
