'use client';

import { useState } from 'react';

import {
  Bell,
  Search,
  Calendar,
  Package,
  Factory,
  Boxes,
  AlertTriangle,
  IndianRupee,
  TrendingUp,
  Eye,
  MoreVertical,
  CheckCircle2,
  Clock3,
  Wrench,
  ClipboardList,
  Truck,
  Settings2,
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

export default function ManufacturingDashboardPage() {

  const [selectedBatch, setSelectedBatch] = useState<any>(null);
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const productionData = [
    { name: 'Completed', value: 42, color: '#22c55e' },
    { name: 'In Production', value: 28, color: '#3b82f6' },
    { name: 'Pending', value: 18, color: '#f59e0b' },
    { name: 'Maintenance', value: 6, color: '#ef4444' },
  ];

  const productionTrend = [
    { day: 'Mon', value: 12 },
    { day: 'Tue', value: 18 },
    { day: 'Wed', value: 16 },
    { day: 'Thu', value: 24 },
    { day: 'Fri', value: 28 },
    { day: 'Sat', value: 22 },
    { day: 'Sun', value: 26 },
  ];

  const stats = [
    {
      title: 'Production Orders',
      value: '156',
      growth: '+14.2%',
      icon: Factory,
    },
    {
      title: 'Active Machines',
      value: '42',
      growth: '+6.8%',
      icon: Settings2,
    },
    {
      title: 'Pending Jobs',
      value: '18',
      growth: '-4.2%',
      icon: Clock3,
    },
    {
      title: 'Monthly Output',
      value: '₹ 1.8 Cr',
      growth: '+22.5%',
      icon: IndianRupee,
    },
    {
      title: 'Raw Materials',
      value: '8,450',
      growth: '+12.4%',
      icon: Boxes,
    },
    {
      title: 'Machine Efficiency',
      value: '94%',
      growth: '+5.1%',
      icon: TrendingUp,
    },
  ];

  const [batches, setBatches] = useState<any[]>([
    {
      id: 'MF-2048',
      product: 'Thermal Rolls',
      quantity: '20,000 Rolls',
      machine: 'Machine A-12',
      operator: 'Rohit Sharma',
      status: 'Running',
      color: 'green',
    },
    {
      id: 'MF-2047',
      product: 'POS Rolls',
      quantity: '12,000 Rolls',
      machine: 'Machine B-05',
      operator: 'Amit Verma',
      status: 'Pending',
      color: 'yellow',
    },
    {
      id: 'MF-2046',
      product: 'Barcode Labels',
      quantity: '50,000 Labels',
      machine: 'Machine C-08',
      operator: 'Sneha Iyer',
      status: 'Completed',
      color: 'blue',
    },
    {
      id: 'MF-2045',
      product: 'Jumbo Rolls',
      quantity: '6,000 Rolls',
      machine: 'Machine A-03',
      operator: 'Vikram Joshi',
      status: 'Maintenance',
      color: 'red',
    },
  ]);

  const [showBatchModal, setShowBatchModal] = useState(false);
  const [batchForm, setBatchForm] = useState({
    product: '',
    quantity: '',
    machine: '',
    operator: '',
    status: 'Pending',
  });

  function handleBatchFormChange(e: any) {
    const { name, value } = e.target;
    setBatchForm((prev) => ({ ...prev, [name]: value }));
  }

  function saveBatch() {
    const built = {
      id: editingIndex !== null ? batches[editingIndex].id : `MF-${Math.floor(Math.random() * 9000) + 2000}`,
      product: batchForm.product || 'New Product',
      quantity: batchForm.quantity || '-',
      machine: batchForm.machine || '-',
      operator: batchForm.operator || '-',
      status: batchForm.status || 'Pending',
      color:
        batchForm.status === 'Running'
          ? 'green'
          : batchForm.status === 'Pending'
          ? 'yellow'
          : batchForm.status === 'Completed'
          ? 'blue'
          : batchForm.status === 'Maintenance'
          ? 'red'
          : 'green',
    };

    if (editingIndex !== null) {
      setBatches((prev) => prev.map((b, i) => (i === editingIndex ? built : b)));
    } else {
      setBatches((prev) => [built, ...prev]);
    }

    setShowBatchModal(false);
    setEditingIndex(null);
    setBatchForm({ product: '', quantity: '', machine: '', operator: '', status: 'Pending' });
  }

  function deleteBatch(index: number) {
    setBatches((prev) => prev.filter((_, i) => i !== index));
    setMenuOpenIndex(null);
  }

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

          <div className="w-[300px] h-11 rounded-2xl border bg-[#fafafa] px-4 flex items-center gap-3">

            <Search className="w-4 h-4 text-gray-400" />

            <input
              placeholder="Search batches, machines..."
              className="bg-transparent outline-none text-sm flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
              6
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
              Manufacturing Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage production batches, machines and workflow operations.
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

                    <h2 className="text-[38px] font-bold mt-3">
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

        {/* MAIN */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-8 space-y-6">

            {/* BATCH TABLE */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-[22px] font-bold">
                  Production Batches
                </h2>

                <div className="flex items-center gap-3">

                  <button className="h-11 px-5 rounded-2xl border bg-white">
                    All Machines
                  </button>

                  <button className="h-11 px-5 rounded-2xl border bg-white">
                    All Status
                  </button>

                  <button onClick={() => setShowBatchModal(true)} className="h-11 px-6 rounded-2xl bg-green-500 text-white flex items-center gap-2">

                    <ClipboardList className="w-4 h-4" />

                    Create Batch

                  </button>

                </div>

              </div>

              <table className="w-full">

                <thead>

                  <tr className="border-b text-left text-sm text-gray-500">

                    <th className="pb-4">Batch ID</th>
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Quantity</th>
                    <th className="pb-4">Machine</th>
                    <th className="pb-4">Operator</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Action</th>

                  </tr>

                </thead>

                <tbody>

                  {batches
                    .filter((b) =>
                      [b.id, b.product, b.machine, b.operator]
                        .join(' ')
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase().trim())
                    )
                    .map((batch) => {
                      const originalIndex = batches.findIndex((bb) => bb.id === batch.id);
                      return (
                        <tr
                          key={batch.id}
                          className="border-b hover:bg-gray-50 transition"
                        >

                          <td className="py-5 font-medium">{batch.id}</td>

                          <td>{batch.product}</td>

                          <td>{batch.quantity}</td>

                          <td>{batch.machine}</td>

                          <td>{batch.operator}</td>

                          <td>
                            <span className={`
                              px-3 py-1 rounded-full text-xs font-semibold
                              ${batch.color === 'green' && 'bg-green-100 text-green-700'}
                              ${batch.color === 'yellow' && 'bg-yellow-100 text-yellow-700'}
                              ${batch.color === 'blue' && 'bg-blue-100 text-blue-700'}
                              ${batch.color === 'red' && 'bg-red-100 text-red-700'}
                            `}>{batch.status}</span>
                          </td>

                          <td>
                            <div className="relative">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setSelectedBatch(batch)}
                                  className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => setMenuOpenIndex(menuOpenIndex === originalIndex ? null : originalIndex)}
                                  className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                              </div>

                              {menuOpenIndex === originalIndex && (
                                <div className="absolute right-0 mt-2 w-36 bg-white border rounded-xl shadow-lg z-50">
                                  <button
                                    onClick={() => {
                                      setEditingIndex(originalIndex);
                                      setBatchForm({
                                        product: batch.product,
                                        quantity: batch.quantity,
                                        machine: batch.machine,
                                        operator: batch.operator,
                                        status: batch.status,
                                      });
                                      setShowBatchModal(true);
                                      setMenuOpenIndex(null);
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2"
                                  >
                                    Edit
                                  </button>

                                  <button
                                    onClick={() => deleteBatch(originalIndex)}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600 flex items-center gap-2"
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>

                        </tr>
                      );
                    })}

                </tbody>

              </table>

            </div>

            {/* PRODUCTION ANALYTICS */}
            <div className="grid grid-cols-2 gap-6">

              {/* TREND */}
              <div className="bg-white rounded-[28px] border p-6 shadow-sm">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-[20px] font-bold">
                    Production Trend
                  </h2>

                  <button className="h-10 px-4 rounded-xl border text-sm">
                    This Week
                  </button>

                </div>

                <div className="h-[240px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={productionTrend}>

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

              {/* DONUT */}
              <div className="bg-white rounded-[28px] border p-6 shadow-sm">

                <h2 className="text-[20px] font-bold mb-6">
                  Production Status
                </h2>

                <div className="relative w-full h-[250px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                      <Pie
                        data={productionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                      >

                        {productionData.map((entry, index) => (

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
                      Total
                    </p>

                  </div>

                </div>

                <div className="space-y-4 mt-5">

                  {productionData.map((item, index) => (

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

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-4 space-y-6">

            {/* ALERTS */}
            <div className="bg-white rounded-[28px] border p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-[20px] font-bold">
                  Machine Alerts
                </h2>

                <button className="text-green-600 text-sm font-medium">
                  View All
                </button>

              </div>

              <div className="space-y-5">

                {[
                  'Machine A-03 requires maintenance',
                  'Low raw material stock detected',
                  'Production delay in Batch MF-2047',
                ].map((alert, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center">

                      <AlertTriangle className="w-5 h-5 text-red-600" />

                    </div>

                    <div>

                      <h3 className="font-medium text-sm">
                        {alert}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        Immediate attention required
                      </p>

                    </div>

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
                  'Create Production Batch',
                  'Assign Machine',
                  'Schedule Maintenance',
                  'Generate Production Report',
                  'Dispatch Finished Goods',
                ].map((item, index) => (

                  <button
                    key={index}
                    className="w-full h-14 rounded-2xl border hover:bg-gray-50 flex items-center px-5 gap-4 transition"
                  >

                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">

                      {index === 0 && <ClipboardList className="w-5 h-5 text-green-600" />}
                      {index === 1 && <Settings2 className="w-5 h-5 text-green-600" />}
                      {index === 2 && <Wrench className="w-5 h-5 text-green-600" />}
                      {index === 3 && <BarChart3 className="w-5 h-5 text-green-600" />}
                      {index === 4 && <Truck className="w-5 h-5 text-green-600" />}

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
      {selectedBatch && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setSelectedBatch(null)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 shadow-2xl border">

            <div className="flex items-start justify-between mb-8">

              <div>

                <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Batch Details
                </p>

                <h2 className="text-[40px] font-bold mt-2">
                  {selectedBatch.id}
                </h2>

                <p className="text-gray-500 mt-2">
                  {selectedBatch.product}
                </p>

              </div>

              <button
                onClick={() => setSelectedBatch(null)}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Quantity
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedBatch.quantity}
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Machine
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedBatch.machine}
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Operator
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedBatch.operator}
                </h3>

              </div>

              <div className="bg-gray-50 rounded-2xl p-5">

                <p className="text-sm text-gray-500">
                  Status
                </p>

                <h3 className="text-lg font-semibold mt-1">
                  {selectedBatch.status}
                </h3>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <button className="flex-1 h-14 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold">
                Start Production
              </button>

              <button
                onClick={() => setSelectedBatch(null)}
                className="flex-1 h-14 rounded-2xl border"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

      {showBatchModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setShowBatchModal(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 shadow-2xl border">

            <div className="flex items-start justify-between mb-8">

              <div>

                <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Create Batch
                </p>

                <h2 className="text-[32px] font-bold mt-2">New Production Batch</h2>

              </div>

              <button
                onClick={() => setShowBatchModal(false)}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="text-sm text-gray-500">Product</label>
                <input name="product" value={batchForm.product} onChange={handleBatchFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Quantity</label>
                <input name="quantity" value={batchForm.quantity} onChange={handleBatchFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Machine</label>
                <input name="machine" value={batchForm.machine} onChange={handleBatchFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Operator</label>
                <input name="operator" value={batchForm.operator} onChange={handleBatchFormChange} className="w-full mt-2 border rounded-2xl p-4" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Status</label>
                <select name="status" value={batchForm.status} onChange={handleBatchFormChange} className="w-full mt-2 border rounded-2xl p-4">
                  <option>Pending</option>
                  <option>Running</option>
                  <option>Completed</option>
                  <option>Maintenance</option>
                </select>
              </div>

            </div>

            <div className="flex gap-4 mt-8 justify-end">

              <button onClick={() => setShowBatchModal(false)} className="px-6 py-3 rounded-2xl border">Cancel</button>

              <button onClick={saveBatch} className="px-6 py-3 rounded-2xl bg-green-500 text-white">Save Batch</button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}