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
    <div className="min-h-screen bg-[#f6f8f7]">

      {/* TOPBAR */}
      <header className="h-[72px] bg-white border-b border-gray-200 px-8 flex items-center justify-between">

        <div className="flex items-center gap-5">

          <button className="w-11 h-11 rounded-2xl border bg-white flex items-center justify-center">
            <div className="space-y-1">
              <div className="w-4 h-[2px] bg-black rounded-full" />
              <div className="w-4 h-[2px] bg-black rounded-full" />
              <div className="w-4 h-[2px] bg-black rounded-full" />
            </div>
          </button>

          <div className="w-[280px] h-11 rounded-2xl border bg-[#fafafa] px-4 flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-400" />

            <input
              placeholder="Search orders, customers, products..."
              className="bg-transparent outline-none text-sm flex-1"
            />

            <span className="text-xs text-gray-400 border rounded-lg px-2 py-1">
              Ctrl + K
            </span>
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
      <div className="p-7 space-y-6">

        {/* TITLE */}
        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-[42px] font-bold text-black">
              Sales Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage sales orders, invoices and send orders to manufacturing.
            </p>

          </div>

          <div className="h-14 px-5 rounded-2xl bg-white border flex items-center gap-3">

            <Calendar className="w-5 h-5" />

            <span className="font-medium">
              May 20 – May 26, 2024
            </span>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-6 gap-4">

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
          <div className="col-span-9 space-y-6">

            {/* TABLE */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-[20px] font-bold">
                  Sales Orders
                </h2>

                <div className="flex items-center gap-3">

                  <button className="h-11 px-5 rounded-2xl border bg-white">
                    All Status
                  </button>

                  <button className="h-11 px-5 rounded-2xl border bg-white">
                    All Customers
                  </button>

                  <button className="h-11 px-6 rounded-2xl bg-green-500 text-white flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create New Order
                  </button>

                </div>

              </div>

              <table className="w-full">

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

                  {[
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
                  ].map((order, index) => (

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

                        <div className="flex items-center gap-2">

                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center">
                            <FileText className="w-4 h-4" />
                          </button>

                          <button className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center">
                            <MoreVertical className="w-4 h-4" />
                          </button>

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

              <div className="flex items-center justify-between">

                {[
                  'Lead Converted',
                  'Order Created',
                  'Sent to Manufacturing',
                  'Dispatched',
                  'Completed',
                ].map((step, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-5"
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
                      <div className="w-12 h-[2px] bg-gray-300" />
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-3 space-y-6">

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
      {selectedOrder && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setSelectedOrder(null)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 shadow-2xl border">

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

            <div className="grid grid-cols-2 gap-5">

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

            <div className="flex gap-4 mt-8">

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