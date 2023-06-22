import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';

function App() {
  const products = [{
    price : 99999,
    name :"IPhone 10s",
    quantity : 0
  },
  {
    price : 99999,
    name :"Read mi note 10s",
    quantity : 0
  }
]
  return (
    <>
      <Navbar/>
      <ProductList products={products}/>
      <Footer/>
    </>
  );
}

export default App;
