import './menu.css';

function Menu() {
    return (
        <div className='menuContainer'>
            <div className="optionsContainer">
                <div className='opcionMenuContainerTitulo'>Services</div>
                <div className='opcionMenuContainer'>WEB DEVELOPEMENT</div>
                <div className='opcionMenuContainer'>WEB DESIGNE</div>
                <div className='opcionMenuContainer'>BRAND IDENTITY</div>
                <div className='opcionMenuContainer'>POSTER DESIGN</div>
                <div className='opcionMenuContainer'>MAINTENANCE</div>
            </div>
            <div className="optionsContainer">
                <div className='opcionMenuContainerTitulo'>Technologies</div>
                <div className='opcionMenuContainer'>ReactJs</div>
                <div className='opcionMenuContainer'>ThreeJs</div>
                <div className='opcionMenuContainer'>P5js</div>
                <div className='opcionMenuContainer'>Cargo.site</div>
                <div className='opcionMenuContainer'>blender</div>
            </div>
        </div>
    );
}

export default Menu;