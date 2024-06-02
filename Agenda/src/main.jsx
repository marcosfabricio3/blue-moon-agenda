import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTES
import NavBar from './components/NavBar/NavBar.jsx'
import DailyTasks from './components/DailyTasks/DailyTasks.jsx'
import DataModifier from './components/DataModifier/DataModifier.jsx';

// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <NavBar />

    <DataModifier />
    
    <DailyTasks />
    
  </React.StrictMode>,
)
