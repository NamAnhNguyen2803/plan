import React from 'react'
import { useState } from 'react'
export default function App() {
  const [toDo, setToDo] =useState(' ');
  const [submittedToDo,setSubmittedToDO] =useState([]);
  const handleSubmit = (event) => {
    console.log(event.target); // In ra giá trị toDo khi nhấn nút Submit
  };


  return (
    <div className=' container'>
      <h1 className='text-center'>To do list</h1>
      <div className="form  ">
      <form action="">
     <input type="checkbox" id='1'/>
     <label htmlFor="1">Làm việc ở công ty</label><br />
     <input type="checkbox" id='2'/>
     <label htmlFor="2">Làm thứ muốn làm trong lập trình</label><br />
     <input type="checkbox" id='3'/>
     <label htmlFor="3">Đi bơi</label>
      </form></div>
    </div>
  )
}
