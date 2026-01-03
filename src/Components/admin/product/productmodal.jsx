import React from 'react';
import { Modal } from '../../ui/Modal';
import { ProductForm } from './ProductForm';

export const ProductModal = ({ isOpen, onClose, product, onSubmit }) => {
  const handleSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product ? 'Edit Produk' : 'Tambah Produk Baru'}
      className="max-w-lg"
    >
      <ProductForm
        initialData={product}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
};