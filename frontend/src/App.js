
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
import FixedNav from './components/FixedNav';
import search from './components/search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Navbar} from 'react-bootstrap';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <SlideShow/>
        <FixedNav/>
          <Switch>
            <Route path='home' component={Home}/>
            <Route path='recipies' component={Recipies}/>
            <Route path='members' component={Members}/>
            <Route path='post' component={Post}/>
            <Route path='code' component={Code}/>
            <Route path='layouts' component={Layouts}/>
            <Route path='blog' component={Blog}/>
            <Route path='contact' component={Contact}/>
            <Route path='search' component={search} />
          </Switch>
      </header>
      <Body/>
    </div>
    </Router>
  );
}

export default App;
