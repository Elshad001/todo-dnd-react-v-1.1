import React,{useState} from 'react'
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks'
import './index.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {FaRegLightbulb} from 'react-icons/fa'

const App = () => {
  const[tasks,setTasks]=useState([]);
  const [darkMode,setDarkMode] = useState(false)

const handleDarkMode=()=>
{
  setDarkMode(!darkMode)
  console.log('click')
}


  return (
    
        <DndProvider backend={HTML5Backend}>
          <div className={darkMode ? 'todo-app-dark' : 'todo-app'}>
            {
              darkMode ? <FaRegLightbulb className='light'  onClick={handleDarkMode}/>
               :
              <BsFillMoonStarsFill className='moon' onClick={handleDarkMode}/>
            }
           
            <h1 className={darkMode ? 'todo-title-dark' : 'todo-title'}>TODO LİST</h1>
            <CreateTask tasks={tasks} setTasks={setTasks} darkMode={darkMode}/>
            <ListTasks tasks={tasks} setTasks={setTasks} darkMode={darkMode}/>
          </div>
        </DndProvider>
  )
}

export default App
