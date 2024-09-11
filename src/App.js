
import './App.css';
import SimpleSlider from './components/craousel';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import SearchUniversitySection from './components/SearchUniversitySection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Home/>
      {/* <Searchbar/> */}
      
      <SearchUniversitySection/>
      <Footer/>
       {/* <div className="h-96">

</div> */}
      
    </div>
  );
}

export default App;
