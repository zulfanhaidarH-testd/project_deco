import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export const ProductForm = ({ initialData = null, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert to numbers
    const submitData = {
      ...formData,
      price: parseFloat(formData.price) || 0,
      stock: parseInt(formData.stock) || 0
    };
    
    onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nama Produk
        </label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama produk"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Kategori
        </label>
        <Input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Masukkan kategori"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Harga
        </label>
        <Input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Masukkan harga"
          required
          min="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Stok
        </label>
        <Input
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Masukkan jumlah stok"
          required
          min="0"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Batal
        </Button>
        <Button type="submit">
          {initialData ? 'Update' : 'Tambah'} Produk
        </Button>
      </div>
    </form>
  );
};
