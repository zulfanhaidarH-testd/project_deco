import React from 'react';
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { productService } from '../../services/productservice';

const StatCard = ({ title, value, growth, icon: Icon, iconBg }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-600 font-medium">+{growth}%</span>
              <span className="text-gray-500">dari bulan lalu</span>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${iconBg}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Dashboard = () => {
  const stats = productService.getStats();
  const activities = productService.getRecentActivities();
  const topProducts = productService.getTopProducts();

  const formatCurrency = (amount) => {
    return `Rp ${(amount / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Selamat datang kembali, Admin!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Produk"
          value={stats.totalProducts.toLocaleString()}
          growth={stats.productsGrowth}
          icon={Package}
          iconBg="bg-blue-500"
        />
        <StatCard
          title="Total Pesanan"
          value={stats.totalOrders}
          growth={stats.ordersGrowth}
          icon={ShoppingCart}
          iconBg="bg-green-500"
        />
        <StatCard
          title="Pelanggan"
          value={stats.customers}
          growth={stats.customersGrowth}
          icon={Users}
          iconBg="bg-purple-500"
        />
        <StatCard
          title="Pendapatan"
          value={formatCurrency(stats.revenue)}
          growth={stats.revenueGrowth}
          icon={TrendingUp}
          iconBg="bg-orange-500"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    {activity.type === 'order' && <ShoppingCart className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'product' && <Package className="w-5 h-5 text-green-600" />}
                    {activity.type === 'customer' && <Users className="w-5 h-5 text-purple-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produk Terpopuler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-700 flex-shrink-0">
                    {product.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sold} terjual</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Rp {product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};