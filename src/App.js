import './App.css';
import ProductList from './components/ProductList';
import { useState } from 'react';
import { Products } from './data/product';
import ProductCreate from './components/ProductCreate';

function App() {
  const [products, setProducts] = useState(Products);

  const onCreateProduct = (product) => {
    setProducts([...products, { id: crypto.randomUUID(), ...product }]);
    console.log(...products);
  };

  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };
  const onEditProduct = (id, data) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      } else {
        return prod;
      }
    });
    setProducts(updatedProducts);
  };
  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;
