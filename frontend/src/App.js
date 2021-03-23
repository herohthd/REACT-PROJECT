
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom';
import SlideShow from './components/SlideShow'
import FixedNav from './components/FixedNav'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <SlideShow/>
        {/* <FixedNav/> */}
      </header>
    </div>
    </Router>
  );
}

export default App;
