import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '/src/context/CartContext.jsx';

export const Navbar = () => {
  const { cart, openCart } = useCart(); // Import openCart
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
          DecorInn
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-slate-900 transition-colors">Products</Link>
        </div>

        <div className="flex items-center gap-6">
          {/* TRIGGER DRAWER: Ganti Link menjadi Button/Div dengan onClick */}
          <button 
            onClick={openCart} 
            className="relative hover:text-slate-900 text-slate-500 transition-colors focus:outline-none"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-[10px] text-white flex items-center justify-center font-bold animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
          
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden cursor-pointer border border-slate-300">
             <img src="https://picsum.photos/seed/user123/100/100" alt="User" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </nav>
  );
};