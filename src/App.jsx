import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import Provider
import { Navbar } from './Components/user/layout/Navbar';
import { Footer } from './Components/user/layout/Footer';
import { Home } from './pages/Utama/Home';
import { CategoryPage } from './pages/Category/CategoryCard';
import { AllProducts } from './pages/Products/AllProducts';
import { CartDrawer } from './Components/user/layout/CartDrawer'; // Import Drawer Baru

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/products" element={<AllProducts />} />
            {/* Hapus Route /cart karena sekarang pakai Drawer */}
          </Routes>
          <Footer />
          
          {/* Letakkan Drawer di sini agar selalu ada di atas Footer */}
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}