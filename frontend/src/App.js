
import Nav from './components/Nav'
import SlideShow from './components/SlideShow'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <SlideShow/>
        {/* <FixedNav/> */}
      </header>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
