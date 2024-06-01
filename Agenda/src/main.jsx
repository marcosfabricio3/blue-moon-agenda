import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.jsx'
import TaskItem from './TaskItem.jsx'
import Crud from './Crud.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <NavBar />
    <Crud />
    <div className='DailyTaskContainer'><TaskItem /></div>
    
  </React.StrictMode>,
)
