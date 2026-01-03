import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

/* ================= USER ================= */
import { Navbar } from './Components/user/layout/Navbar';
import { Footer } from './Components/user/layout/Footer';
import { Home } from './pages/Utama/Home';
import { CategoryPage } from './pages/Category/CategoryCard';
import { AllProducts } from './pages/Products/AllProducts';
import { CartDrawer } from './Components/user/layout/CartDrawer';

/* ================= ADMIN ================= */
import { AdminSidebar } from './components/admin/layout/AdminSidebar';
import { AdminNavbar } from './components/admin/layout/AdminNavbar';
import { Dashboard } from './pages/admin/Dashboard';
import { ProductManagement } from './pages/admin/ProductManagement';

import './App.css';

/* ================= ADMIN LAYOUT ================= */
function AdminLayout() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductManagement />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold">Coming Soon</h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        activeMenu={activeMenu}
        onMenuClick={setActiveMenu}
        isMobileOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      <div className="lg:ml-64 min-h-screen">
        <AdminNavbar onMenuToggle={() => setIsMobileSidebarOpen(true)} />
        <main className="p-6">{renderPage()}</main>
      </div>
    </div>
  );
}

/* ================= USER LAYOUT ================= */
function UserLayout() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

/* ================= ROOT APP ================= */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </Router>
  );
}
