export const productService = {
  // Dashboard Stats
  getStats: () => ({
    totalProducts: 1234,
    totalOrders: 89,
    customers: 456,
    revenue: 45200000,
    productsGrowth: 20.1,
    ordersGrowth: 12.5,
    customersGrowth: 8.3,
    revenueGrowth: 15.2
  }),
  
  // Recent Activities
  getRecentActivities: () => [
    { id: 1, type: 'order', title: 'Pesanan baru #1234', time: '2 menit yang lalu' },
    { id: 2, type: 'product', title: 'Produk "Plant A" ditambahkan', time: '15 menit yang lalu' },
    { id: 3, type: 'customer', title: 'Pelanggan baru terdaftar', time: '1 jam yang lalu' }
  ],
  
  // Top Products
  getTopProducts: () => [
    { id: 1, rank: 1, name: 'Plant A', sold: 45, price: 2025 },
    { id: 2, rank: 2, name: 'Plant B', sold: 38, price: 1710 },
    { id: 3, rank: 3, name: 'Plant C', sold: 32, price: 1440 }
  ],

  // All Products (for Product Management page)
  getAllProducts: () => [
    { id: 1, name: 'Plant A', category: 'Indoor', price: 2025, stock: 45 },
    { id: 2, name: 'Plant B', category: 'Outdoor', price: 1710, stock: 38 },
    { id: 3, name: 'Plant C', category: 'Indoor', price: 1440, stock: 32 },
    { id: 4, name: 'Plant D', category: 'Outdoor', price: 1850, stock: 25 }
  ],

  // Create Product
  createProduct: (productData) => {
    console.log('Creating product:', productData);
    return { success: true, data: { id: Date.now(), ...productData } };
  },

  // Update Product
  updateProduct: (id, productData) => {
    console.log('Updating product:', id, productData);
    return { success: true, data: { id, ...productData } };
  },

  // Delete Product
  deleteProduct: (id) => {
    console.log('Deleting product:', id);
    return { success: true };
  }
};