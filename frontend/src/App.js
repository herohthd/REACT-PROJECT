
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom';
import SlideShow from './components/SlideShow'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
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
