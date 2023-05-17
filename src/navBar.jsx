import './navBar.css';
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>SEBASTIAN ROSAS</div> 
      <div className='navbarLeft clock'>CURRENT DATE</div> 
      <div className='navbarLeft aboutButton'> <NavLink to="/">ABOUT</NavLink></div> 
    </div>
  );
}

export default NavBar;