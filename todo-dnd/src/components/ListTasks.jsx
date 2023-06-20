import React, { useState, useEffect } from 'react'
import Section from './Section'

const ListTasks = ({ tasks, setTasks,darkMode}) => {


  const [todos, setTodos] = useState([])
  const [doing, setDoing] = useState([])
  const [done, setDone] = useState([])

  useEffect(() => {

    const fTodos = tasks.filter((task) => task.status === 'todo');
    const fDoing = tasks.filter((task) => task.status === 'doing');
    const fDone = tasks.filter((task) => task.status === 'done');

    setTodos(fTodos)
    setDoing(fDoing)
    setDone(fDone)

  }, [tasks])

  const statuses = ['todo', 'doing', 'done']

  return (
    <div className='lists'>
      {statuses.map((status, index) => <Section key={index} status={status}
        tasks={tasks} setTasks={setTasks}
        todos={todos} doing={doing} done={done} darkMode={darkMode}
      />)}
    </div>
  )
}

export default ListTasks


