import React,{useState} from 'react'
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Mobile from './Mobile';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu =()=>{
    setOpenMenu(!openMenu)
  };
  return (
    <>
    <Mobile isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
        <div className="nav-content">
            <div className="logo">Portfolio</div>
            <ul>
                <li><a href='#Home' className='menu-item'>Home</a></li>
                <li><a href='#Education' className='menu-item'>Education</a></li>
                <li><a href='#Languages' className='menu-item'>Languages Learn</a></li>
                <li><a href='#Projects' className='menu-item'>Projects</a></li>
                <li><a href='#Contacts' className='menu-item'>Contacts</a></li> 
            </ul>
            <button className='menu-btn' onClick={toggleMenu}>{openMenu ? "×" : "≡"}
            </button>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar
