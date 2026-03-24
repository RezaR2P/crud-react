import axios from 'axios';

export const fetchProductsApi = async () => {
  const response = await axios.get('http://127.0.0.1:3005/products');
  return response;
};

export const createProductApi = async (product) => {
  const response = await axios.post('http://127.0.0.1:3005/products', product);
  return response;
};

export const deleteProductApi = async (id) => {
  await axios.delete(`http://127.0.0.1:3005/products/${id}`);
};

export const editProductApi = async (id, data) => {
  const response = await axios.put(
    `http://127.0.0.1:3005/products/${id}`,
    data
  );
  return response;
};
