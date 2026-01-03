import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ProductTable } from '../../components/admin/product/ProductTable';
import { ProductModal } from '../../components/admin/product/ProductModal';
import { ConfirmDialog } from '../../components/admin/common/ConfirmDialog';
import { productService } from '../../services/productservice';

export const ProductManagement = () => {
  const [products, setProducts] = useState(productService.getAllProducts());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmitProduct = (data) => {
    if (selectedProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === selectedProduct.id ? { ...selectedProduct, ...data } : p
      ));
    } else {
      // Add new product
      const newProduct = { 
        id: Date.now(), 
        ...data 
      };
      setProducts([...products, newProduct]);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      setProducts(products.filter(p => p.id !== selectedProduct.id));
      setSelectedProduct(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-1">Kelola produk DecorInn Anda</p>
        </div>
        <Button onClick={handleAddProduct}>
          <Plus className="w-5 h-5 mr-2" />
          Tambah Produk
        </Button>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Semua Produk ({products.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ProductTable
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </CardContent>
      </Card>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onSubmit={handleSubmitProduct}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedProduct(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Hapus Produk"
        message={`Apakah Anda yakin ingin menghapus produk "${selectedProduct?.name}"? Tindakan ini tidak dapat dibatalkan.`}
      />
    </div>
  );
};