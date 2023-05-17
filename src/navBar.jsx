import './navBar.css';

function NavBar() {
  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>SEBASTIAN ROSAS</div> 
      <div className='navbarLeft clock'>CURRENT DATE</div> 
      <div className='navbarLeft aboutButton'>ABOUT</div> 
    </div>
  );
}

export default NavBar;