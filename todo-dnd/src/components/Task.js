import { useDrag} from 'react-dnd'
import { FaRegTimesCircle} from 'react-icons/fa'
import {FcClock, FcSettings} from 'react-icons/fc'
import {MdDownloadDone} from 'react-icons/md'

const Task = ({task,tasks,setTasks}) => {

    const [{isDragging},drag] = useDrag(()=>
    ({
      type:'task',
      item:{id:task.id},
      collect:(monitor)=>
      ({
        isDragging:!!monitor.isDragging(),
      })
  
    }))
  
  const handleRemove=(id)=>
  {
    const fTasks = tasks.filter(t=>t.id!==id)
    setTasks(fTasks)
  }
  
    return (
    <div className={isDragging ? "task-drag" : "task"} ref={drag}>
      <div className='task-content'>
          <p>{task.name}</p>
          <div className='task-date'><FcClock className='clock-icon'/><p>{task.date}</p></div>
        </div>
      <div className='task-icons'>
        {task.status==='doing' ? <FcSettings className='doing-icon'/> : task.status==='done'? <MdDownloadDone className='done-icon'/> : ''}
        <FaRegTimesCircle className='del-icon' onClick={()=>handleRemove(task.id)}/>
      </div>
    </div>
    )
  }

  export default Task