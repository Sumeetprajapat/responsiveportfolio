import React from 'react'
import "./Mobile.css"

const Mobile = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
            <div className="mobile-logo">Portfolio</div>
            <ul>
                <li><a href='#Home' className='menu-item'>Home</a></li>
                <li><a href='#Education' className='menu-item'>Education</a></li>
                <li><a href='#Languages' className='menu-item'>Languages Learn</a></li>
                <li><a href='#Projects' className='menu-item'>Projects</a></li>
                <li><a href='#Contacts' className='menu-item'>Contacts</a></li> 
            </ul>
            </div>

        </div>
    </>
  )
}

export default Mobile
