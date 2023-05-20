import './navBar.css';
import {NavLink} from "react-router-dom"
import HoverDate from './HoverDate';

function NavBar() {
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>SEBASTIAN ROSAS</div> 
      <div className='navbarLeft clock'><HoverDate/></div> 
      <div className='navbarLeft aboutButton'> <NavLink to="/">ABOUT</NavLink></div> 
    </div>
  );
}

export default NavBar;