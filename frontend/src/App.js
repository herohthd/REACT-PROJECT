
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SlideShow from './components/SlideShow'
import Body from './components/Body'
import Home from './components/Home'
import Recipies from './components/Recipies'
import Members from './components/Members';
import Post from './components/Post';
import Code from './components/Code';
import Layouts from './components/Layouts';
import Blog from './components/Blog';
import Contact from './components/ContactUs';
import search from './components/search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Navbar} from 'react-bootstrap';
import Footer from './components/Footer'
import FixedNav from './components/FixedNav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <SlideShow/>
        <FixedNav/>
      </header>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
