
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom';
import SlideShow from './components/SlideShow'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <SlideShow/>
      </header>
    </div>
    </Router>
  );
}

export default App;
