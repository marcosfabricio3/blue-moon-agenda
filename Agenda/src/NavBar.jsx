import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul className='NavList'>
        <li className='NavItem'>INICIO</li>
        <li className='NavItem'>AGENDA</li>
        <li className='NavItem'>PAGOS</li>
        <li className='NavItem'>FICHAS</li>
        <li className='NavItem'>GESTION</li>
      </ul>
    </>
  )
}

export default NavBar
