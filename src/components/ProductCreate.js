import React, { useContext } from 'react';
import { useState } from 'react';
import ProductContext from '../context/products';

function ProductCreate() {
  const initialState = {
    nama: '',
    deskripsi: '',
    imageURL: '',
  };
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShow = () => {
    setShowForm(!showForm);
  };
  const { onCreateProduct } = useContext(ProductContext);
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toggle">
          {showForm ? 'Close Form' : 'Add Product'}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-add-title">Add Product</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              placeholder="Nama Product"
              name="nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              placeholder="Deskripsi Product"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageURL"
              placeholder="imageURL Product"
              value={imageURL}
              onChange={handleChange}
            />
            <input type="submit" className="edit-input-submit add" />
          </div>
        </form>
      )}
    </div>
  );
}

export default ProductCreate;
