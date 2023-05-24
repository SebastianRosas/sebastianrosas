
import './home.css';
import Footer from './footer';
import Menu from './Menu';
import Description from './Description';

function App() {

  return (
    <div className='homeContainer'>
      <Description />
      <Menu />
        <div className='contactContainer'>
              contact
              <br />
              <div className='email'>
              <a  href="sebastianrosasbruno@gmail.com?Su.com">sebastianrosasbruno@gmail.com</a>
              </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;