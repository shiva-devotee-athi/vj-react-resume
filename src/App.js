import About from './About';
import './App.css';
import ContactForm from './ContactForm';
import DropDown from './DropDown';
import Footer from './Footer';
import Home from './Header/Home';
import Quote from './Quote';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <DropDown/>
      <Skills/>
      <Quote/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
