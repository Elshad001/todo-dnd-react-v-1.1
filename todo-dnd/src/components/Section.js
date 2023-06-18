import Header from './Header'
import Task from "./Task"
import {useDrop } from 'react-dnd'


const Section = ({ status,tasks,setTasks,todos,doing,done }) => {
  
    const [{isOver},drop] = useDrop(()=>
    ({
      accept:'task',
      drop:(item)=>addItemToSection(item.id),
      collect:(monitor)=>
      ({
        isOver:!!monitor.isOver(),
      })
  
    }))
  
    let text="Todo"
    let tasksToMap=todos
  
    if(status === 'doing')
    {
      text= "Doing"
      tasksToMap=doing
    }
  
    if(status === 'done')
    {
      text= "Done"
      tasksToMap=done
    }
  
    const addItemToSection=(id)=>{
  
     setTasks((prev)=>{
  
        const mTasks=prev.map(t =>{
          if(t.id===id){
            return {...t,status:status}
          }
          return t
        })
        return mTasks;
     });
    
    }
 
    return(
       <div ref={drop} className={isOver ? "task-box-drag" : "task-box"}>
        <Header text={text} count={tasksToMap.length}/>
        {tasksToMap.length >0 && tasksToMap.map(task=> <Task 
        key={task.id}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        />)}
        </div>
    ) 
  }
  
export default Section  


// date, 