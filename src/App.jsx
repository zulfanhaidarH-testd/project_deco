import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';



// Jika Anda sudah install shadcn, pastikan path ini sesuai folder shadcn Anda
// Biasanya: import { Button } from '@/components/ui/button';
// Untuk sekarang, kita gunakan path relative agar aman:

import { Navbar } from './Components/user/layout/Navbar';
import { Footer } from './Components/user/layout/Footer';
import { Home } from './pages/Utama/Home';
import { CategoryPage } from './pages/Category/CategoryCard';
import { AllProducts } from './pages/Products/AllProducts';
import { CartDrawer } from './Components/user/layout/CartDrawer';
import './App.css'


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
          </Routes>
          <Footer />
          
          {/* Drawer harus berada di luar Routes agar selalu bisa dipanggil */}
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}