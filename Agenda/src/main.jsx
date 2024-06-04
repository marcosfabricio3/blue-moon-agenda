import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// COMPONENTES
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Pages/Home.jsx'
import Fichas from './components/Pages/Fichas.jsx'

// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>

      <NavBar />

      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path='fichas' element={<Fichas />}/>

      </Routes> 

    </Router>
  </React.StrictMode>,
)
