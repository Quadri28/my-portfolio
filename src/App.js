
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header'
import Testimonial from './Components/Testimonial/Testimonial'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    
    <div className="App">
     <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
