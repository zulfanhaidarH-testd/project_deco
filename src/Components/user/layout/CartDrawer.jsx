import { useCart } from '/src/context/CartContext.jsx';
import { Button } from '../../ui/Button';
import { Trash2, ShoppingBag, X } from 'lucide-react';

export const CartDrawer = () => {
  const { cart, removeFromCart, closeCart, isOpen } = useCart();
  
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const formattedTotal = new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0
  }).format(cartTotal);

  // Jika tidak dibuka, jangan render apa-apa (atau return null)
  if (!isOpen) return null;

  return (
    <>
      {/* 1. Overlay (Background Gelap) */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart} // Klik luar untuk menutup
      ></div>

      {/* 2. Drawer Panel (Meluncur dari Kanan) */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col`}>
        
        {/* Header Drawer */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <h2 className="text-xl font-bold text-slate-900">Your Cart ({cart.length})</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* List Item (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBag size={64} className="text-slate-300 mb-4"/>
              <p className="text-slate-500 text-lg">Keranjang Anda kosong.</p>
              <button onClick={closeCart} className="text-primary font-medium mt-4 hover:underline">
                Lanjut Belanja
              </button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-slate-50 pb-4 last:border-0">
                  <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-slate-500">{new Intl.NumberFormat('id-ID').format(item.price)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm text-slate-700">Qty: {item.quantity}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1"
                      >
                        <Trash2 size={14} /> Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Drawer (Checkout) */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between mb-2 text-slate-600 text-sm">
              <span>Subtotal</span>
              <span>{formattedTotal}</span>
            </div>
            <div className="flex justify-between mb-4 text-slate-600 text-sm">
              <span>Pajak</span>
              <span>Dihitung di checkout</span>
            </div>
            <div className="flex justify-between mb-6 text-xl font-bold text-slate-900">
              <span>Total</span>
              <span>{formattedTotal}</span>
            </div>
            <Button className="w-full py-4 text-base">Checkout</Button>
            <button 
              onClick={closeCart} 
              className="w-full mt-3 py-2 text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors"
            >
              Lanjut Belanja
            </button>
          </div>
        )}
      </div>
    </>
  );
};