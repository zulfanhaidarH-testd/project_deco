import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { useCart } from '/src/context/CartContext.jsx';
import { Plus, Minus } from 'lucide-react'; // Import icon kecil

export const ProductCard = ({ product }) => {
  const { getItemQuantity, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0
  }).format(product.price);

  // Cek berapa jumlah produk ini di cart
  const quantity = getItemQuantity(product.id);

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border-slate-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-slate-900 mb-2 truncate">{product.name}</h3>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-slate-600 font-medium">{formattedPrice}</span>
          
          {/* LOGIKA BUY <-> ADD/REMOVE */}
          {quantity === 0 ? (
            <Button className="h-9 px-4 text-sm" onClick={() => addToCart(product)}>
              Buy
            </Button>
          ) : (
            // Jika sudah ada di cart, tampilkan tombol Add/Remove
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <button 
                onClick={() => decreaseQuantity(product.id)} 
                className="w-8 h-8 flex items-center justify-center bg-white rounded hover:bg-slate-200 transition"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-medium text-sm">{quantity}</span>
              <button 
                onClick={() => increaseQuantity(product.id)} 
                className="w-8 h-8 flex items-center justify-center bg-white rounded hover:bg-slate-200 transition"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};