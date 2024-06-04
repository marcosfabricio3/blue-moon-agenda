import { useState, useEffect } from 'react'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const [count, setCount] = useState(0)

  const [activeRoute, setActiveRoute] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ul className='NavList'>
        <li><Link className={activeRoute === '/' ? 'NavItem active' : 'NavItem'} to="/">INICIO</Link></li>
        <li className='NavItem'>PAGOS</li>
        <li><Link className={activeRoute === '/Fichas' ? 'NavItem active' : 'NavItem'} to="/Fichas">FICHAS</Link></li>
        <li className='NavItem'>GESTION</li>
      </ul>
    </>
  )
}

export default NavBar
