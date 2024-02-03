
import './App.css';
import Features from './Component/Features';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Network from './Component/Network';
import Plans from './Component/Plans';
import Temsi from './Component/Temsi';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
        <Features/>
        <Plans/>
        <Network/>
        <Temsi/>
      <Footer/>
    </div>
  );
}

export default App;
