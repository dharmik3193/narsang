import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './Aboutus';
import Productpage from './Productpage';
import Contactus from './Contactus';
import Headerdemo from './components/Headerdemo';

function App() {
  return (
    <>
      <Header/>
      {/* <Headerdemo/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
