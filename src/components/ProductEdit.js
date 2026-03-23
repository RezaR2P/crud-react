import React, { useState } from 'react';

function ProductEdit({ product, onEditProduct, cancelEdit }) {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };

  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, formData);
  };

  const onCancelEdit = (e) => {
    e.preventDefault();
    cancelEdit();
  };
  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            className="edit-input-text"
            type="text"
            placeholder="Nama Product"
            name="nama"
            value={nama}
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            className="edit-input-text"
            type="text"
            placeholder="Deskripsi Product"
            name="deskripsi"
            value={deskripsi}
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            className="edit-input-text"
            type="text"
            placeholder="Image URL Product"
            name="imageURL"
            value={imageURL}
          ></input>
        </div>
        <input
          type="submit"
          className="edit-input-submit save"
          value="Save"
        ></input>
        <button onClick={onCancelEdit} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
