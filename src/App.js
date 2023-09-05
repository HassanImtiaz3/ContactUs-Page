import Navbar from "./components/Nav/Navbar";
import './App.css'
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  );
}

export default App;
