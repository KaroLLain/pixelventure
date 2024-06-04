import './index.css';
import Nav from './PixelVenturesContainer/Nav/Nav';
import Header from './PixelVenturesContainer/Header/Header';
import Tech from './PixelVenturesContainer/Tech/Tech';
import Portfolio from './PixelVenturesContainer/Portfolio/Portfolio';
import About from './PixelVenturesContainer/About/About';
import Contact from './PixelVenturesContainer/Contact/Contact'
import Footer from './PixelVenturesContainer/Footer/Footer';

export default function App() {
  return (
    <div className="app">
        <Nav/>
        <Header/>
        <Tech/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}
