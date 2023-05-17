// import logo from './Assets/home/logoGraffiti.png';
import './App.css';
import Home from './home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Archive from './Archive';
import NavBar from './navBar';


function App() {
  return (
    <BrowserRouter>    
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='archive' element={<Archive/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

