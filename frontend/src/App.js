
import Nav from './components/Nav'
import SlideShow from './components/SlideShow'
import Body from './components/Body'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
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
