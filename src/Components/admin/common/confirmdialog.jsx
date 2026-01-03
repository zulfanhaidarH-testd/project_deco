import React from 'react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';

export const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p className="text-gray-600 mb-6">{message}</p>
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onClose}>
          Batal
        </Button>
        <Button onClick={handleConfirm} className="bg-red-600 hover:bg-red-700">
          Konfirmasi
        </Button>
      </div>
    </Modal>
  );
};