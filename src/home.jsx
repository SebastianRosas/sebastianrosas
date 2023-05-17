
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
              <a href="sebastianrosasbruno@gmai.com?Subject=Query for:">sebastianrosasbruno@gmai.com</a>
        </div>
      <Footer />
    </div>
  );
}

export default App;