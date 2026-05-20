'use client'

import { useState } from 'react'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import {
  Bell,
  MessageSquare,
  Calendar,
  Search,
  Plus,
  MoreVertical,
  Eye,
  ChevronDown,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CRMDashboardPage() {

const [selectedLead, setSelectedLead] = useState<any>(null);
const [showAddModal, setShowAddModal] = useState<boolean>(false);

const [leads, setLeads] = useState<any[]>([
  {
    name: 'Rahul Sharma',
    company: 'Retail Mart',
    product: 'Thermal Rolls',
    quantity: '500 Rolls',
    source: 'Website',
    status: 'New',
    assigned: 'Ankit Verma',
    date: '20 May 2024',
    email: 'rahul@retailmart.com',
    phone: '+91 9876543210',
    notes: 'Customer interested in monthly bulk thermal roll supply.',
  },
  {
    name: 'Priya Mehta',
    company: 'QuickPOS Solutions',
    product: 'POS Rolls',
    quantity: '300 Rolls',
    source: 'Referral',
    status: 'Contacted',
    assigned: 'Sneha Iyer',
    date: '20 May 2024',
    email: 'priya@quickpos.com',
    phone: '+91 9123456780',
    notes: 'Contacted via referral; waiting on response.',
  },
  {
    name: 'Amit Verma',
    company: 'City Super Store',
    product: 'Barcode Printer',
    quantity: '5 Units',
    source: 'Website',
    status: 'Qualified',
    assigned: 'Rohit Singh',
    date: '19 May 2024',
    email: 'amit@citysuper.com',
    phone: '+91 9234567890',
    notes: 'Qualified after product demo.',
  },
  {
    name: 'Neha Kapoor',
    company: 'HealthCare Plus',
    product: 'Thermal Rolls',
    quantity: '1000 Rolls',
    source: 'Exhibition',
    status: 'Proposal Sent',
    assigned: 'Sneha Iyer',
    date: '19 May 2024',
    email: 'neha@healthcareplus.com',
    phone: '+91 9345678123',
    notes: 'Received proposal at exhibition booth.',
  },
  {
    name: 'Vikram Joshi',
    company: 'Reliance Fresh',
    product: 'Jumbo Rolls',
    quantity: '2000 Rolls',
    source: 'Call',
    status: 'Converted',
    assigned: 'Ankit Verma',
    date: '18 May 2024',
    email: 'vikram@reliancefresh.com',
    phone: '+91 9456781230',
    notes: 'Converted lead; sales order created.',
  },
]);

const [addForm, setAddForm] = useState<any>({
  name: '',
  company: '',
  product: '',
  quantity: '',
  source: '',
  status: '',
  assigned: '',
  date: '',
  email: '',
  phone: '',
  notes: '',
});

const [editingIndex, setEditingIndex] = useState<number | null>(null);
const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);

function handleAddChange(e: any) {
  const { name, value } = e.target;
  setAddForm((s: any) => ({ ...s, [name]: value }));
}

function saveNewLead() {
  const newLead = {
    ...addForm,
    date: addForm.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
  };
  if (editingIndex !== null && editingIndex >= 0 && editingIndex < leads.length) {
    setLeads((s) => s.map((l, i) => (i === editingIndex ? newLead : l)));
  } else {
    setLeads((s) => [newLead, ...s]);
  }
  setShowAddModal(false);
  setEditingIndex(null);
  setAddForm({ name: '', company: '', product: '', quantity: '', source: '', status: '', assigned: '', date: '', email: '', phone: '', notes: '' });
}

function handleDelete(index: number) {
  setLeads((s) => s.filter((_, i) => i !== index));
  setMenuOpenIndex(null);
}

function handleEdit(index: number) {
  const lead = leads[index];
  setAddForm({ ...lead });
  setEditingIndex(index);
  setShowAddModal(true);
  setMenuOpenIndex(null);
}



  const leadStatusData = [
    {
      name: 'New Leads',
      value: 68,
      color: '#22c55e',
    },
    {
      name: 'Qualified',
      value: 45,
      color: '#3b82f6',
    },
    {
      name: 'Proposal Sent',
      value: 28,
      color: '#f59e0b',
    },
    {
      name: 'Converted',
      value: 32,
      color: '#8b5cf6',
    },
    {
      name: 'Contacted',
      value: 83,
      color: '#06b6d4',
    },
  ]

  const kpiCards = [
    {
      title: 'Total Leads',
      value: '256',
      growth: '+18.2%',
      details:
        'Total leads generated from website, referrals, exhibitions and direct inquiries.',

      leads: [
        {
          name: 'Retail Mart',
          product: 'Thermal Rolls',
          status: 'Interested',
        },
        {
          name: 'QuickPOS Solutions',
          product: 'POS Billing Rolls',
          status: 'Follow-up Pending',
        },
        {
          name: 'Apollo Pharmacy',
          product: 'Barcode Printers',
          status: 'Proposal Requested',
        },
      ],
    },

    {
      title: 'New Leads',
      value: '68',
      growth: '+12.5%',
      details:
        'Recently added customer inquiries requiring follow-up by sales team.',

      leads: [
        {
          name: 'FreshBasket',
          product: 'Thermal Paper Rolls',
          status: 'New Inquiry',
        },
        {
          name: 'D-Mart Express',
          product: 'POS Machines',
          status: 'Waiting for Call',
        },
        {
          name: 'MediCare Plus',
          product: 'Barcode Scanner',
          status: 'Requested Pricing',
        },
      ],
    },

    {
      title: 'Qualified Leads',
      value: '45',
      growth: '+15.7%',
      details:
        'Leads verified and marked ready for proposal or sales conversion.',

      leads: [
        {
          name: 'Reliance Fresh',
          product: 'Thermal Rolls Bulk Order',
          status: 'Qualified',
        },
        {
          name: 'BigBasket Warehouse',
          product: 'Label Printers',
          status: 'Meeting Completed',
        },
        {
          name: 'Apollo Hospitals',
          product: 'Barcode Labels',
          status: 'Approved',
        },
      ],
    },

    {
      title: 'Proposal Sent',
      value: '28',
      growth: '+11.3%',
      details:
        'Customers who received quotations and proposals from CRM.',

      leads: [
        {
          name: 'Metro Cash & Carry',
          product: 'POS Rolls',
          status: 'Proposal Sent',
        },
        {
          name: 'EasyDay Retail',
          product: 'Barcode Printer',
          status: 'Waiting Approval',
        },
        {
          name: 'Smart Mart',
          product: 'Thermal Roll Bundle',
          status: 'Negotiation',
        },
      ],
    },

    {
      title: 'Converted Leads',
      value: '32',
      growth: '+20.3%',
      details:
        'Successfully converted leads moved into Sales Dashboard.',

      leads: [
        {
          name: 'V-Mart',
          product: 'Thermal Rolls',
          status: 'Sales Order Created',
        },
        {
          name: 'Max Hypermarket',
          product: 'POS Billing Setup',
          status: 'Moved to Sales',
        },
        {
          name: 'RetailOne',
          product: 'Barcode Solution',
          status: 'Converted',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#f6f7f4] w-full overflow-x-hidden">

      {/* TOP NAVBAR */}
      <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-5">

        <div className="flex items-center gap-4">

          <button className="h-11 w-11 rounded-2xl border bg-white flex items-center justify-center hover:bg-gray-50 transition">
            ☰
          </button>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

            <Input
              placeholder="Search leads, customers, companies..."
              className="w-[380px] h-11 rounded-2xl border-gray-200 pl-11 pr-20 text-sm bg-[#fafafa]"
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs border rounded-lg px-2 py-1 text-gray-500 bg-white">
              Ctrl + K
            </div>
          </div>

        </div>

        <div className="flex items-center gap-6">

          <div className="relative">
            <Bell className="w-5 h-5 text-gray-700" />

            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">
              8
            </div>
          </div>

          <div className="relative">
            <MessageSquare className="w-5 h-5 text-gray-700" />

            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">
              3
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100"
              alt="admin"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="text-sm font-semibold text-black">
                Admin User
              </h4>

              <p className="text-xs text-gray-500">
                Super Admin
              </p>
            </div>

            <ChevronDown className="w-4 h-4 text-gray-500" />

          </div>

        </div>

      </header>

      {/* MAIN */}
      <main className="p-5 space-y-5">

        {/* HEADER */}
        <div className="flex items-start justify-between">

          <div>
            <h1 className="text-[56px] leading-none font-bold tracking-tight text-black">
              CRM Dashboard
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Manage your leads, track activities and grow your customer relationships.
            </p>
          </div>

          <div className="h-14 px-6 rounded-2xl border bg-white flex items-center gap-3 shadow-sm">
            <Calendar className="w-5 h-5" />

            <span className="font-medium">
              May 20 – May 26, 2024
            </span>

            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-5 gap-4">

          {kpiCards.map((card, index) => (
            <button
              key={index}
              onClick={() => setSelectedLead(card)}
              className="bg-white rounded-3xl border p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {card.title}
                  </p>

                  <h2 className="text-5xl font-bold mt-3">
                    {card.value}
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-green-100" />
              </div>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-sm text-green-600 font-medium">
                  ↑ {card.growth} from last week
                </p>

                <div className="h-10 w-20 rounded-xl bg-gradient-to-r from-green-100 to-transparent" />
              </div>

            </button>
          ))}

        </div>

        {/* TABLE + CHART */}
        <div className="grid grid-cols-12 gap-4">

          {/* TABLE */}
          <div className="col-span-9 bg-white rounded-3xl border shadow-sm p-5">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-3xl font-bold">
                All Leads
              </h2>

              <div className="flex items-center gap-3">

                <Button
                  variant="outline"
                  className="rounded-xl h-11"
                >
                  All Status
                </Button>

                <Button
                  variant="outline"
                  className="rounded-xl h-11"
                >
                  All Sources
                </Button>

                <Button onClick={() => setShowAddModal(true)} className="rounded-xl h-11 bg-green-500 hover:bg-green-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Lead
                </Button>

              </div>

            </div>

            <table className="w-full">

  <thead>
    <tr className="border-b text-left text-sm text-gray-500">
      <th className="pb-4">Lead Name</th>
      <th className="pb-4">Company</th>
      <th className="pb-4">Product Interest</th>
      <th className="pb-4">Quantity</th>
      <th className="pb-4">Source</th>
      <th className="pb-4">Status</th>
      <th className="pb-4">Assigned To</th>
      <th className="pb-4">Date</th>
      <th className="pb-4">Action</th>
    </tr>
  </thead>

  <tbody>
              {leads.map((lead, idx) => (
                <tr key={idx} className="border-b hover:bg-[#fafafa] transition">

                  <td className="py-5 font-medium">{lead.name}</td>

                  <td>{lead.company}</td>

                  <td>{lead.product}</td>

                  <td>{lead.quantity}</td>

                  <td>{lead.source}</td>

                  <td>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-semibold">
                      {lead.status}
                    </span>
                  </td>

                  <td>{lead.assigned}</td>

                  <td>{lead.date}</td>

                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <div className="relative">
                        <button
                          onClick={() => setMenuOpenIndex(menuOpenIndex === idx ? null : idx)}
                          className="w-9 h-9 rounded-xl border hover:bg-gray-50 flex items-center justify-center"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {menuOpenIndex === idx && (
                          <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-50">
                            <button
                              onClick={() => handleEdit(idx)}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(idx)}
                              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-3">

            {/* PIE CHART */}
            <div className="bg-white rounded-3xl border p-5 shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                Lead Status Overview
              </h2>

              <div className="flex items-center justify-between gap-6">

                <div className="relative w-[260px] h-[260px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                      <Pie
                        data={leadStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={115}
                        paddingAngle={3}
                        dataKey="value"
                      >

                        {leadStatusData.map((entry, index) => (

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

                    <h3 className="text-5xl font-bold text-black">
                      256
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Total Leads
                    </p>

                  </div>

                </div>

                {/* LEGENDS */}
                <div className="flex-1 space-y-5">

                  {leadStatusData.map((item, index) => (

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

                        <span className="text-sm text-gray-600">
                          {item.name}
                        </span>

                      </div>

                      <span className="text-sm font-semibold text-black">
                        {item.value}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* MODAL */}
      {selectedLead?.leads && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelectedLead(null)}
          />

          <div className="relative z-10 w-[600px] rounded-3xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm text-green-600 font-semibold uppercase tracking-wider">
                  CRM Analytics
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {selectedLead.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="h-10 w-10 rounded-xl hover:bg-gray-100 text-xl"
              >
                ×
              </button>

            </div>

            <div className="mt-8">

              <h3 className="text-6xl font-bold text-black">
                {selectedLead.value}
              </h3>

              <p className="text-green-600 font-medium mt-2">
                ↑ {selectedLead.growth} from last week
              </p>

              <div className="mt-6 p-5 rounded-2xl bg-[#f7f8f5] border">

                <p className="text-gray-600 leading-relaxed">
                  {selectedLead.details}
                </p>

                <div className="mt-6 space-y-4">

                  {selectedLead?.leads?.length > 0 &&
                    selectedLead.leads.map((lead: any, index: number) => (

                      <div
                        key={index}
                        className="bg-white border rounded-2xl p-4 hover:shadow-md transition-all"
                      >

                        <div className="flex items-center justify-between">

                          <div>
                            <h4 className="font-semibold text-black">
                              {lead.name}
                            </h4>

                            <p className="text-sm text-gray-500 mt-1">
                              Product: {lead.product}
                            </p>
                          </div>

                          <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                            {lead.status}
                          </div>

                        </div>

                      </div>

                    ))}

                </div>

              </div>

            </div>

            <div className="mt-8 flex gap-3">

              <button className="flex-1 h-12 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold transition">
                View Full Report
              </button>

              <button
                onClick={() => setSelectedLead(null)}
                className="flex-1 h-12 rounded-2xl border hover:bg-gray-50 font-semibold transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}
      {selectedLead?.name && (

  <div className="fixed inset-0 z-50 flex items-center justify-center">

    <div
      className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      onClick={() => setSelectedLead(null)}
    />

    <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 shadow-2xl border border-border">

      <div className="flex items-start justify-between mb-8">

        <div>

          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Lead Details
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {selectedLead.name}
          </h2>

          <p className="text-gray-500 mt-2">
            {selectedLead.company}
          </p>

        </div>

        <button
          onClick={() => setSelectedLead(null)}
          className="text-3xl"
        >
          ×
        </button>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-gray-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Product Interest
          </p>

          <h3 className="font-semibold text-lg">
            {selectedLead.product}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Quantity
          </p>

          <h3 className="font-semibold text-lg">
            {selectedLead.quantity}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Status
          </p>

          <h3 className="font-semibold text-lg">
            {selectedLead.status}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500">
            Assigned To
          </p>

          <h3 className="font-semibold text-lg">
            {selectedLead.assigned}
          </h3>
        </div>

      </div>

      <div className="mt-5 bg-gray-50 rounded-2xl p-5">

        <p className="text-sm text-gray-500 mb-2">
          Contact Information
        </p>

        <p className="font-medium">
          {selectedLead.email}
        </p>

        <p className="font-medium mt-1">
          {selectedLead.phone}
        </p>

      </div>

      <div className="mt-5 bg-gray-50 rounded-2xl p-5">

        <p className="text-sm text-gray-500 mb-2">
          Notes
        </p>

        <p className="text-gray-700">
          {selectedLead.notes}
        </p>

      </div>

      <div className="flex gap-4 mt-8">

        <button className="flex-1 h-14 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold">
          Convert to Sales Order
        </button>

        <button
          onClick={() => setSelectedLead(null)}
          className="flex-1 h-14 rounded-2xl border"
        >
          Close
        </button>

      </div>

    </div>

  </div>

)}

      {/* ADD LEAD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />

          <div className="relative z-10 w-[720px] rounded-3xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-green-600 font-semibold text-sm uppercase tracking-widest">Add Lead</p>
                <h2 className="text-2xl font-bold mt-2">Create a new lead</h2>
              </div>

              <button onClick={() => setShowAddModal(false)} className="text-2xl">×</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Lead Name</label>
                <input name="name" value={addForm.name} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Company</label>
                <input name="company" value={addForm.company} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Product Interest</label>
                <input name="product" value={addForm.product} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Quantity</label>
                <input name="quantity" value={addForm.quantity} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Source</label>
                <input name="source" value={addForm.source} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Status</label>
                <input name="status" value={addForm.status} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Assigned To</label>
                <input name="assigned" value={addForm.assigned} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div>
                <label className="text-sm text-gray-500">Date</label>
                <input name="date" value={addForm.date} onChange={handleAddChange} placeholder="e.g. 21 May 2024" className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-500">Contact Email</label>
                <input name="email" value={addForm.email} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-500">Phone</label>
                <input name="phone" value={addForm.phone} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-500">Notes</label>
                <textarea name="notes" value={addForm.notes} onChange={handleAddChange} className="w-full mt-2 p-3 rounded-xl border bg-gray-50" rows={4} />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={saveNewLead} className="flex-1 h-12 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold">Save Lead</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 h-12 rounded-2xl border">Cancel</button>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

      