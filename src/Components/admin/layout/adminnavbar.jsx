import React from 'react';
import { Bell, Settings, Menu } from 'lucide-react';
import { Button } from '../../ui/Button';

export const AdminNavbar = ({ onMenuToggle }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">DecorInn Admin</h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold ml-2">
            A
          </div>
        </div>
      </div>
    </header>
  );
};
