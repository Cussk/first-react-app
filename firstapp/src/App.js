import Header from './components/Header';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Card from './components/Card';
import Btn from "./components/Btn";
import ModeToggler from "./components/ModeToggler"
import RandomNumBtn from './components/RandomNumBtn';
import './index.css';
import {Routes, Route, Link} from "react-router-dom"
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';

function App() {
  return (<div>
    <Header name="Bob" color="purple"/>
    <Nav />
    <ModeToggler />
    <Btn />
    <Promo />
    <Intro1 />
    <Intro2 />
    <Intro3 />
    <Footer />
    <Card h2="First Card's h2" h3="First card's h3" />
    <Card h2="Second Card's h2" h3="Second card's h3" />
    <Card h2="Third Card's h2" h3="Third card's h3" />
    <RandomNumBtn />
    
    <Link to="/" className="nav-item">Homepage</Link>
    <Link to="/about-me" className="nav-item">About Me</Link>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about-me" element={<AboutMe />} />
    </Routes>
    </div>)
}

export default App;
