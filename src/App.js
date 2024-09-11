
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchUniversitySection from './components/SearchUniversitySection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Home/>
     
      
      <SearchUniversitySection/>
      <Footer/>
     
      
    </div>
  );
}

export default App;
