import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // <--- Penting untuk ambil slug
import { ProductCard } from '../../Components/user/products/ProductCard';
import { productServices } from '../../services/product.services';

export const CategoryPage = () => {
  // 1. useParams() ambil slug dari URL (misal: /category/living-room -> slug: 'living-room')
  const { categorySlug } = useParams();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  // 2. Fetch product berdasarkan category
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        // Panggil service filter
        const data = await productServices.getProductsByCategory(categorySlug);
        setProducts(data);
        
        // Format nama kategori agar rapi (living-room -> Living Room)
        const formattedName = categorySlug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        setCategoryName(formattedName);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categorySlug]); // Dependency array: ulangi fetch jika slug berubah

  return (
    <main className="flex-grow bg-slate-50 py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-bold text-slate-900">Category: {categoryName}</h1>
          <p className="text-slate-500 mt-2">Menampilkan barang-barang khusus untuk ruangan ini.</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[450px] bg-slate-200 animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">Produk tidak ditemukan untuk kategori ini.</p>
          </div>
        )}
      </div>
    </main>
  );
};