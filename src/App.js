import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Classes from './Component/Classes';
import Gallery from './Component/Gallery';
import Blog from './Component/Blog';
import Contect from './Component/Contect';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/Yoga-heath'>
<Navbar/>
<Routes>

  <Route path="/" exact element={<Home />} />

  <Route path="/About" exact element={
    <About/>


  } />
    <Route path="/Classes" exact element={
    <Classes/>


  } />
    <Route path="/Gallery" exact element={
    <Gallery/>

  } />
    <Route path="/Blog" exact element={
    <Blog/>


  } />
   <Route path="/Contect" exact element={
    <Contect/>


  } />
  </Routes>
  </BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
