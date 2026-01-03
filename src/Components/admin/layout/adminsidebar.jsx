import React from 'react';
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, LogOut, X } from 'lucide-react';

export const AdminSidebar = ({ activeMenu, onMenuClick, isMobileOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Product Management', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

  const handleMenuClick = (menuId) => {
    onMenuClick(menuId);
    if (window.innerWidth < 1024 && onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-slate-900 to-slate-800 
        text-white z-50 transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">DecorInn</h1>
              <p className="text-sm text-slate-400 mt-1">Admin Panel</p>
            </div>
            <button onClick={onClose} className="lg:hidden hover:bg-slate-700 p-1 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-300 hover:bg-slate-700/50'
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-slate-700 space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-all"
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};