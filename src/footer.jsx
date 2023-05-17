import React from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerButton'>
           <NavLink to="/archive">ARCHIVE</NavLink> 
        </div>
    </div>
  )
}

export default Footer