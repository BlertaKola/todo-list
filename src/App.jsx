import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import TaskList from './components/TaskList'


function App() {
  
  const [Tasks, setTasks] = useState([])

  return (
    <>
      <Task Tasks={Tasks} setTasks={setTasks}></Task>
      <TaskList Tasks={Tasks} setTasks={setTasks}></TaskList>
    </>
  )
}

export default App
