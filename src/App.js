import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import PopularProduct from './Components/PopularProduct/PopularProduct';


function App() {
  return (
    <div style={{backgroundColor: '#F8FBFF'}}>
      <NavBar/>
      <Banner/>
      <PopularProduct/>
      
    </div>
  );
}

export default App;
