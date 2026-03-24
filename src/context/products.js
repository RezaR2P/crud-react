import { createContext, useState } from 'react';
import {
  createProductApi,
  deleteProductApi,
  editProductApi,
  fetchProductsApi,
} from '../api/productApi';

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetchProductsApi();
    setProducts(response.data);
  };

  const onCreateProduct = async (product) => {
    const response = await createProductApi(product);
    setProducts([...products, response.data]);
  };

  const onDeleteProduct = async (id) => {
    await deleteProductApi(id);
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };
  const editProductById = async (id, data) => {
    const response = await editProductApi(id, data);

    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...response.data };
      } else {
        return prod;
      }
    });
    setProducts(updatedProducts);
  };

  const valueToShare = {
    products,
    onCreateProduct,
    onDeleteProduct,
    editProductById,
    fetchProducts,
  };
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
