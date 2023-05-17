import React from 'react'
import Menu from './Menu'
import Lenguaje from './lenguaje'
import './contact.css'

const Contact = () => {
    return (
        <div>
   
        <div className='contactContainer'>
        <Lenguaje />
            <div className='contactContentContainer'> For work or inquiries please at ---> <a href=""> 28866studio@gmail.com</a></div>
            
        <Menu />
        </div>
        </div>

    )
}

export default Contact