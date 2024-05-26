import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.jsx'
import TaskItem from './TaskItem.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <NavBar />
    <div className='DailyTaskContainer'><TaskItem /><TaskItem /><TaskItem /><TaskItem /><TaskItem /><TaskItem /><TaskItem /><TaskItem /></div>
    
  </React.StrictMode>,
)
