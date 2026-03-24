import './App.css';
import ProductList from './components/ProductList';
import { useContext, useEffect } from 'react';
import ProductCreate from './components/ProductCreate';
import ProductContext from './context/products';

function App() {
  const { fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate />
      <ProductList />
    </>
  );
}

export default App;
