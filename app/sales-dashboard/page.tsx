'use client';

import { useState } from 'react';

import {
  Bell,
  MessageSquare,
  Search,
  Calendar,
  Plus,
  Eye,
  MoreVertical,
  FileText,
  Download,
  Send,
  CheckCircle2,
  Truck,
  Factory,
  
  ShoppingCart,
  Clock3,
  PackageCheck,
  BarChart3,
} from 'lucide-react';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default function SalesDashboardPage() {

  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [orders, setOrders] = useState<any[]>([
    {
      id: 'ORD-1048',
      customer: 'Retail Mart',
      product: 'Thermal Rolls',
      quantity: '500 Rolls',
      amount: '₹ 2,45,000',
      status: 'Confirmed',
      color: 'green',
    },
    {
      id: 'ORD-1047',
      customer: 'QuickPOS Solutions',
      product: 'POS Rolls',
      quantity: '300 Rolls',
      amount: '₹ 1,80,000',
      status: 'In Production',
      color: 'blue',
    },
    {
      id: 'ORD-1046',
      customer: 'City Super Store',
      product: 'Barcode Printers',
      quantity: '5 Units',
      amount: '₹ 3,25,000',
      status: 'Pending',
      color: 'yellow',
    },
    {
      id: 'ORD-1045',
      customer: 'Apollo',
      product: 'Thermal Rolls',
      quantity: '1000 Rolls',
      amount: '₹ 4,50,000',
      status: 'Completed',
      color: 'purple',
    },
  ]);

  const [orderForm, setOrderForm] = useState({
    customer: '',
    product: '',
    quantity: '',
    amount: '',
    status: 'Pending',
  });

  function handleOrderFormChange(e: any) {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  }

  function saveOrder() {
    const built = {
      id: editingIndex !== null ? orders[editingIndex].id : `ORD-${Math.floor(Math.random() * 9000) + 1000}`,
      customer: orderForm.customer || 'Unnamed Customer',
      product: orderForm.product || 'Product',
      quantity: orderForm.quantity || '-',
      amount: orderForm.amount || '-',
      status: orderForm.status || 'Pending',
      color:
        orderForm.status === 'Confirmed'
          ? 'green'
          : orderForm.status === 'In Production'
          ? 'blue'
          : orderForm.status === 'Completed'
          ? 'purple'
          : orderForm.status === 'Pending'
          ? 'yellow'
          : 'green',
    };

    if (editingIndex !== null) {
      setOrders((prev) => prev.map((o, i) => (i === editingIndex ? built : o)));
    } else {
      setOrders((prev) => [built, ...prev]);
    }

    setShowOrderModal(false);
    setEditingIndex(null);
    setOrderForm({ customer: '', product: '', quantity: '', amount: '', status: 'Pending' });
  }

  function deleteOrder(index: number) {
    setOrders((prev) => prev.filter((_, i) => i !== index));
    setMenuOpenIndex(null);
  }

  const salesChartData = [
    { name: 'Pending', value: 28, color: '#f59e0b' },
    { name: 'Confirmed', value: 45, color: '#22c55e' },
    { name: 'In Production', value: 18, color: '#3b82f6' },
    { name: 'Completed', value: 34, color: '#8b5cf6' },
    { name: 'Dispatched', value: 6, color: '#06b6d4' },
  ];

  const stats = [
    {
      title: 'Total Orders',
      value: '125',
      growth: '+16.4%',
      icon: ShoppingCart,
    },
    {
      title: 'Pending Orders',
      value: '28',
      growth: '-8.5%',
      icon: Clock3,
    },
    {
      title: 'Completed Orders',
      value: '82',
      growth: '+21.4%',
      icon: PackageCheck,
    },
    {
      title: 'Total Revenue',
      value: '₹ 48.6 L',
      growth: '+18.6%',
      icon: ShoppingCart,
    },
    {
      title: 'Orders In Production',
      value: '18',
      growth: '+12.7%',
      icon: Factory,
    },
    {
      title: 'Monthly Growth',
      value: '22.3%',
      growth: '+6.2%',
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f7] overflow-x-hidden">

      {/* TOPBAR */}
      <header className="h-auto sm:h-[72px] bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 py-3 sm:py-0">

        <div className="flex items-center gap-5 flex-1 min-w-0">

          <button className="w-11 h-11 rounded-2xl border bg-white flex items-center justify-center">
            <div className="space-y-1">
              <div className="w-4 h-[2px] bg-black rounded-full" />
              <div className="w-4 h-[2px] bg-black rounded-full" />
              <div className="w-4 h-[2px] bg-black rounded-full" />
            </div>
          </button>

          <div className="w-full sm:w-[280px] h-11 rounded-2xl border bg-[#fafafa] px-4 flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-400" />

            <input
              placeholder="Search orders, customers, products..."
              className="bg-transparent outline-none text-sm flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            
          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="relative">
            <Bell className="w-5 h-5" />

            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">
              8
            </div>
          </div>

          <div className="relative">
            <MessageSquare className="w-5 h-5" />

            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">
              5
            </div>
          </div>

          <div className="w-px h-8 bg-gray-200" />

          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold text-sm">
              Admin User
            </h3>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>

        </div>

      </header>

      {/* CONTENT */}
      <div className="p-4 sm:p-6 lg:p-7 space-y-6">

        {/* TITLE */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

          <div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black">
              Sales Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage sales orders, invoices and send orders to manufacturing.
            </p>

          </div>

          <div className="h-14 px-5 rounded-2xl bg-white border flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">

            <Calendar className="w-5 h-5" />

            <span className="font-medium">
              May 20 – May 26, 2024
            </span>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[24px] border p-5 shadow-sm hover:shadow-md transition-all"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <h2 className="text-[40px] font-bold mt-3">
                      {item.value}
                    </h2>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <Icon className="w-6 h-6 text-green-600" />

                  </div>

                </div>

                <p className="text-green-600 text-sm font-medium mt-5">
                  ↑ {item.growth} from last week
                </p>

              </div>
            );
          })}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-12 lg:col-span-9 space-y-6">

            {/* TABLE */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm overflow-x-auto">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-[20px] font-bold">
                  Sales Orders
                </h2>

                <div className="flex flex-wrap items-center gap-3">

                  <button className="h-11 px-5 rounded-2xl border bg-white w-full sm:w-auto">
                    All Status
                  </button>

                  <button className="h-11 px-5 rounded-2xl border bg-white w-full sm:w-auto">
                    All Customers
                  </button>

                  <button onClick={() => setShowOrderModal(true)} className="h-11 px-6 rounded-2xl bg-green-500 text-white flex items-center gap-2 w-full sm:w-auto">
                    <Plus className="w-4 h-4" />
                    Create New Order
                  </button>

                </div>

              </div>

              <table className="w-full min-w-[980px]">

                <thead>

                  <tr className="border-b text-left text-sm text-gray-500">

                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Quantity</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Order Date</th>
                    <th className="pb-4">Action</th>

                  </tr>

                </thead>

                <tbody>

                  {orders
                    .filter((o) =>
                      o.customer
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase().trim())
                    )
                    .map((order, index) => (

                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition"
                    >

                      <td className="py-5 font-medium">
                        {order.id}
                      </td>

                      <td>{order.customer}</td>

                      <td>{order.product}</td>

                      <td>{order.quantity}</td>

                      <td>{order.amount}</td>

                      <td>

                        <span className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${order.color === 'green' && 'bg-green-100 text-green-700'}
                          ${order.color === 'blue' && 'bg-blue-100 text-blue-700'}
                          ${order.color === 'yellow' && 'bg-yellow-100 text-yellow-700'}
                          ${order.color === 'purple' && 'bg-purple-100 text-purple-700'}
                        `}>
                          {order.status}
                        </span>

                      </td>

                      <td>20 May 2024</td>

                      <td>

                        <div className="relative">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => setMenuOpenIndex(menuOpenIndex === index ? null : index)}
                              className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>

                          {menuOpenIndex === index && (
                            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-xl shadow-lg z-50">
                              <button
                                onClick={() => {
                                  setEditingIndex(index);
                                  setOrderForm({
                                    customer: order.customer,
                                    product: order.product,
                                    quantity: order.quantity,
                                    amount: order.amount,
                                    status: order.status,
                                  });
                                  setShowOrderModal(true);
                                  setMenuOpenIndex(null);
                                }}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2"
                              >
                                Edit
                              </button>

                              <button
                                onClick={() => deleteOrder(index)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600 flex items-center gap-2"
                              >
                                Delete
                              </button>
                            </div>
                          )}

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* FLOW */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <h2 className="text-[20px] font-bold mb-6">
                Sales Flow (Order to Delivery)
              </h2>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {[
                  'Lead Converted',
                  'Order Created',
                  'Sent to Manufacturing',
                  'Dispatched',
                  'Completed',
                ].map((step, index) => (

                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center gap-5"
                  >

                    <div className="flex flex-col items-center">

                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                        {index === 0 && <CheckCircle2 className="w-7 h-7 text-green-600" />}
                        {index === 1 && <FileText className="w-7 h-7 text-green-600" />}
                        {index === 2 && <Factory className="w-7 h-7 text-green-600" />}
                        {index === 3 && <Truck className="w-7 h-7 text-green-600" />}
                        {index === 4 && <PackageCheck className="w-7 h-7 text-green-600" />}

                      </div>

                      <p className="text-sm font-medium mt-3 text-center">
                        {step}
                      </p>

                    </div>

                    {index !== 4 && (
                      <div className="w-12 h-[2px] bg-gray-300 hidden sm:block" />
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-3 space-y-6">

            {/* DONUT */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <h2 className="text-[20px] font-bold mb-6">
                Order Status Overview
              </h2>

              <div className="relative w-full h-[280px]">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={salesChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={3}
                      dataKey="value"
                    >

                      {salesChartData.map((entry, index) => (

                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                        />

                      ))}

                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <h2 className="text-[42px] font-bold">
                    125
                  </h2>

                  <p className="text-gray-500">
                    Total
                  </p>

                </div>

              </div>

              <div className="space-y-4 mt-5">

                {salesChartData.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <span className="text-sm text-gray-500">
                        {item.name}
                      </span>

                    </div>

                    <span className="font-semibold text-sm">
                      {item.value}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <h2 className="text-[20px] font-bold mb-6">
                Quick Actions
              </h2>

              <div className="space-y-4">

                {[
                  'Create New Order',
                  'Generate Invoice',
                  'Send Quotation',
                  'Approve Order',
                  'Export Report',
                ].map((item, index) => (

                  <button
                    key={index}
                    className="w-full h-14 rounded-2xl border hover:bg-gray-50 flex items-center px-5 gap-4 transition"
                  >

                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">

                      {index === 0 && <Plus className="w-5 h-5 text-green-600" />}
                      {index === 1 && <FileText className="w-5 h-5 text-green-600" />}
                      {index === 2 && <Send className="w-5 h-5 text-green-600" />}
                      {index === 3 && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      {index === 4 && <Download className="w-5 h-5 text-green-600" />}

                    </div>

                    <span className="font-medium">
                      {item}
                    </span>

                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {showOrderModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setShowOrderModal(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-6 sm:p-8 shadow-2xl border max-h-[90vh] overflow-y-auto">

            <div className="flex items-start justify-between mb-8">

              <div>

                <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Create Order
                </p>

                <h2 className="text-[32px] font-bold mt-2">New Sales Order</h2>

              </div>

              <button
                onClick={() => setShowOrderModal(false)}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <label className="text-sm text-gray-500">Customer</label>
                <input name="customer" value={orderForm.customer} onChange={handleOrderFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Product</label>
                <input name="product" value={orderForm.product} onChange={handleOrderFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Quantity</label>
                <input name="quantity" value={orderForm.quantity} onChange={handleOrderFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Amount</label>
                <input name="amount" value={orderForm.amount} onChange={handleOrderFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Status</label>
                <select name="status" value={orderForm.status} onChange={handleOrderFormChange} className="w-full mt-2 border rounded-2xl p-4">
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>In Production</option>
                  <option>Completed</option>
                </select>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-end">

              <button onClick={() => setShowOrderModal(false)} className="px-6 py-3 rounded-2xl border">Cancel</button>

              <button onClick={saveOrder} className="px-6 py-3 rounded-2xl bg-green-500 text-white">Save Order</button>

            </div>

          </div>

        </div>

      )}
      {selectedOrder && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setSelectedOrder(null)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-6 sm:p-8 shadow-2xl border max-h-[90vh] overflow-y-auto">

            <div className="flex items-start justify-between mb-8">

              <div>

                <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Sales Order Details
                </p>

                <h2 className="text-[42px] font-bold mt-2">
                  {selectedOrder.id}
                </h2>

                <p className="text-gray-500 mt-2">
                  {selectedOrder.customer}
                </p>

              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Product
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedOrder.product}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Quantity
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedOrder.quantity}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Amount
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedOrder.amount}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-500">
                  Status
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedOrder.status}
                </h3>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="flex-1 h-14 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold">
                Send to Manufacturing
              </button>

              <button
                onClick={() => setSelectedOrder(null)}
                className="flex-1 h-14 rounded-2xl border"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}