'use client';

import { useState } from 'react';

import {
  Bell,
  Search,
  Calendar,
  Boxes,
  Package,
  AlertTriangle,
  IndianRupee,
  TrendingUp,
  Eye,
  MoreVertical,
  Truck,
  CheckCircle2,
  Download,
  ArrowRight,
  Plus,
  FileText,
  BarChart3,
} from 'lucide-react';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts';

export default function WarehouseDashboardPage() {

  const [selectedStock, setSelectedStock] = useState<any>(null);

  const stockDistribution = [
    { name: 'Paper Rolls', value: 72, color: '#22c55e' },
    { name: 'Printers', value: 28, color: '#3b82f6' },
    { name: 'Consumables', value: 24, color: '#f59e0b' },
    { name: 'Packaging', value: 17, color: '#8b5cf6' },
    { name: 'Others', value: 15, color: '#94a3b8' },
  ];

  const inventoryTrend = [
    { day: 'Mon', value: 12 },
    { day: 'Tue', value: 18 },
    { day: 'Wed', value: 15 },
    { day: 'Thu', value: 26 },
    { day: 'Fri', value: 22 },
    { day: 'Sat', value: 31 },
    { day: 'Sun', value: 28 },
  ];

  const stats = [
    {
      title: 'Total Inventory Items',
      value: '156',
      growth: '+12.3%',
      icon: Boxes,
      color: 'green',
    },
    {
      title: 'Available Stock',
      value: '45,680',
      growth: '+15.6%',
      icon: Package,
      color: 'blue',
    },
    {
      title: 'Low Stock Alerts',
      value: '12',
      growth: '-7.7%',
      icon: AlertTriangle,
      color: 'red',
    },
    {
      title: 'Warehouse Value',
      value: '₹ 1.86 Cr',
      growth: '+17.8%',
      icon: IndianRupee,
      color: 'green',
    },
    {
      title: 'Incoming Stock',
      value: '8,250',
      growth: '+11.2%',
      icon: Download,
      color: 'purple',
    },
    {
      title: 'Outgoing Dispatches',
      value: '6,480',
      growth: '+13.4%',
      icon: Truck,
      color: 'yellow',
    },
  ];

  const inventory = [
    {
      product: 'Thermal Rolls',
      category: 'Paper Rolls',
      quantity: '20,000 Rolls',
      reserved: '2,500 Rolls',
      available: '17,500 Rolls',
      location: 'Rack A - 01',
      status: 'Available',
      color: 'green',
    },
    {
      product: 'POS Rolls',
      category: 'Paper Rolls',
      quantity: '12,500 Rolls',
      reserved: '1,800 Rolls',
      available: '10,700 Rolls',
      location: 'Rack A - 02',
      status: 'Available',
      color: 'green',
    },
    {
      product: 'Jumbo Rolls',
      category: 'Paper Rolls',
      quantity: '6,000 Rolls',
      reserved: '1,000 Rolls',
      available: '5,000 Rolls',
      location: 'Rack B - 01',
      status: 'Low Stock',
      color: 'yellow',
    },
    {
      product: 'Barcode Printers',
      category: 'Printers',
      quantity: '850 Units',
      reserved: '120 Units',
      available: '730 Units',
      location: 'Rack C - 01',
      status: 'Low Stock',
      color: 'yellow',
    },
    {
      product: 'Thermal Printers',
      category: 'Printers',
      quantity: '420 Units',
      reserved: '80 Units',
      available: '340 Units',
      location: 'Rack C - 02',
      status: 'Available',
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f7]">

      {/* HEADER */}
      <header className="h-[72px] bg-white border-b border-gray-200 px-8 flex items-center justify-between">

        <div className="flex items-center gap-5">

          <button className="w-11 h-11 rounded-2xl border bg-white flex items-center justify-center">

            <div className="space-y-1">
              <div className="w-4 h-[2px] bg-black rounded-full" />
              <div className="w-4 h-[2px] bg-black rounded-full" />
              <div className="w-4 h-[2px] bg-black rounded-full" />
            </div>

          </button>

          <div className="w-[300px] h-11 rounded-2xl border bg-[#fafafa] px-4 flex items-center gap-3">

            <Search className="w-4 h-4 text-gray-400" />

            <input
              placeholder="Search products, SKUs..."
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
      <div className="p-6 space-y-6">

        {/* TITLE */}
        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-[42px] font-bold text-black">
              Warehouse Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Track inventory, stock movement and dispatch operations.
            </p>

          </div>

          <div className="h-14 px-5 rounded-2xl bg-white border flex items-center gap-3">

            <Calendar className="w-5 h-5" />

            <span className="font-medium">
              May 20 – May 26, 2024
            </span>

          </div>

        </div>

        {/* KPI */}
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

                    <h2 className="text-[34px] font-bold mt-3">
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

        {/* FLOW */}
        <div className="bg-white rounded-[28px] border p-5 shadow-sm flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

              <CheckCircle2 className="w-7 h-7 text-green-600" />

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Inventory Updated Automatically
              </h3>

              <p className="text-gray-500 text-sm">
                2,000 Rolls received from Manufacturing
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="bg-green-100 text-green-700 px-5 py-2 rounded-xl font-semibold">
              + 2,000 Rolls
            </div>

            <button className="h-11 px-5 rounded-2xl border flex items-center gap-2">
              View Stock Movement
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* MAIN */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-8 space-y-6">

            {/* TABLE */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-[22px] font-bold">
                  Inventory Overview
                </h2>

                <div className="flex items-center gap-3">

                  <button className="h-11 px-5 rounded-2xl border">
                    All Categories
                  </button>

                  <button className="h-11 px-5 rounded-2xl border">
                    All Locations
                  </button>

                  <button className="h-11 px-5 rounded-2xl bg-green-500 text-white flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Inventory
                  </button>

                </div>

              </div>

              <table className="w-full">

                <thead>

                  <tr className="border-b text-left text-sm text-gray-500">

                    <th className="pb-4">Product Name</th>
                    <th className="pb-4">Category</th>
                    <th className="pb-4">Quantity</th>
                    <th className="pb-4">Reserved</th>
                    <th className="pb-4">Available</th>
                    <th className="pb-4">Location</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Action</th>

                  </tr>

                </thead>

                <tbody>

                  {inventory.map((item, index) => (

                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition"
                    >

                      <td className="py-5 font-medium">
                        {item.product}
                      </td>

                      <td>{item.category}</td>

                      <td>{item.quantity}</td>

                      <td>{item.reserved}</td>

                      <td>{item.available}</td>

                      <td>{item.location}</td>

                      <td>

                        <span className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${item.color === 'green' && 'bg-green-100 text-green-700'}
                          ${item.color === 'yellow' && 'bg-yellow-100 text-yellow-700'}
                        `}>
                          {item.status}
                        </span>

                      </td>

                      <td>

                        <div className="flex items-center gap-2">

                          <button
                            onClick={() => setSelectedStock(item)}
                            className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                          >
                            <Eye className="w-4 h-4" />
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

            {/* BOTTOM */}
            <div className="grid grid-cols-2 gap-6">

              {/* TREND */}
              <div className="bg-white rounded-[28px] border p-6 shadow-sm">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-[20px] font-bold">
                    Inventory Analytics
                  </h2>

                  <button className="h-10 px-4 rounded-xl border text-sm">
                    This Week
                  </button>

                </div>

                <div className="h-[240px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={inventoryTrend}>

                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />

                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#22c55e"
                        strokeWidth={4}
                      />

                    </LineChart>

                  </ResponsiveContainer>

                </div>

              </div>

              {/* PIE */}
              <div className="bg-white rounded-[28px] border p-6 shadow-sm">

                <h2 className="text-[20px] font-bold mb-6">
                  Stock Distribution
                </h2>

                <div className="relative w-full h-[250px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                      <Pie
                        data={stockDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                      >

                        {stockDistribution.map((entry, index) => (

                          <Cell
                            key={index}
                            fill={entry.color}
                          />

                        ))}

                      </Pie>

                    </PieChart>

                  </ResponsiveContainer>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <h2 className="text-[42px] font-bold">
                      156
                    </h2>

                    <p className="text-gray-500">
                      Total Items
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-4 space-y-6">

            {/* ALERTS */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-[20px] font-bold">
                  Low Stock Alerts
                </h2>

                <button className="text-green-600 text-sm font-medium">
                  View All
                </button>

              </div>

              <div className="space-y-5">

                {[
                  'Barcode Printers',
                  'Jumbo Rolls',
                  'Thermal Printers',
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center">

                      <AlertTriangle className="w-5 h-5 text-red-600" />

                    </div>

                    <div className="flex-1">

                      <h3 className="font-medium text-sm">
                        {item}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        Only few units left
                      </p>

                    </div>

                    <button className="text-green-600 text-sm font-medium">
                      Reorder
                    </button>

                  </div>

                ))}

              </div>

            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <h2 className="text-[20px] font-bold mb-6">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-4">

                {[
                  'Add Inventory',
                  'Dispatch Product',
                  'Generate Report',
                  'Export Inventory',
                ].map((item, index) => (

                  <button
                    key={index}
                    className="h-16 rounded-2xl border hover:bg-gray-50 transition flex items-center justify-center text-sm font-medium"
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {selectedStock && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setSelectedStock(null)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 shadow-2xl border">

            <div className="flex items-start justify-between mb-8">

              <div>

                <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Inventory Details
                </p>

                <h2 className="text-[40px] font-bold mt-2">
                  {selectedStock.product}
                </h2>

                <p className="text-gray-500 mt-2">
                  {selectedStock.category}
                </p>

              </div>

              <button
                onClick={() => setSelectedStock(null)}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Total Quantity
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedStock.quantity}
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Reserved
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedStock.reserved}
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Available Stock
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedStock.available}
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Warehouse Location
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedStock.location}
                </h3>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <button className="flex-1 h-14 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold">
                Update Inventory
              </button>

              <button
                onClick={() => setSelectedStock(null)}
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