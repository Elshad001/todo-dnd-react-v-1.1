import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'


const CreateTask = ({setTasks}) => {
  
  const [task,setTask]= useState({
     id:'',
     name:'',
     status:'todo',
     date:''
  });

const handleSubmit=(e)=>
{
  e.preventDefault();

  if(task.name==='')
  {
    alert("you must write something")
  }
  else
  {
    setTasks((prev)=>
    {
      const list=[...prev,task];
      return list
    });

    setTask({
      id:'',
      name:'',
      status:'todo',
    })};
  }
 
const date=new Date();
const day=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();

const d=`${day}/${month}/${year}`
console.log(d)

  return (
    <div className='create'>
      <form onSubmit={handleSubmit} className='form'>
        <input 
           placeholder='Write your task...'
           className='create-input'
           type='text'
           value={task.name}
           onChange={(e)=>setTask({...task,id: uuidv4(),name:e.target.value,date:d})}
         />
        <button className='create-btn'>Create</button>
      </form>
    </div>
  )
}

export default CreateTask
