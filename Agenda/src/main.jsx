import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTES
import NavBar from './NavBar.jsx'
import DailyTasks from './DailyTasks.jsx'
import Crud from './Crud.jsx'

// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <NavBar />

    <Crud />
    
    <DailyTasks />
    
  </React.StrictMode>,
)
