import './App.css';
import { Categories } from './components/categories/Categories';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Shipping } from './components/shippingData/Shipping';
import { MasVendidos } from './components/vitrinaMasVendida/MasVendidos';
import { Tendencias } from './components/vitrinaTendencias/Tendencias';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Tendencias/>
      <Categories/>
      <MasVendidos/>
      <Shipping/>
      <Footer/>
    </div>
  );
}

export default App;
