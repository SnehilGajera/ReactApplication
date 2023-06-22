import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';

function App() {
  const productList = [{
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
      <main className='container mt-5'>
      <ProductList productList={productList}/>
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
