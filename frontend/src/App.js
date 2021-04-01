
import Nav from './components/Nav'
import SlideShow from './components/SlideShow'
import Body from './components/Body'
import Footer from './components/Footer'
import Login from './components/Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Switch>
          <Route path="/Register" exact component ={Login}/> 
          <Route path="/Login" exact component ={Login}/> 
          <Route path="/Submit" exact component ={Login}/> 
        </Switch>
        <SlideShow/>
        {/* <FixedNav/> */}
      </header>
      <Body/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
