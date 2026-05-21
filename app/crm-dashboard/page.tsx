'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import {
  Bell,
  Search,
  Plus,
  MoreVertical,
  Eye,
  ArrowRight,
  Edit,
  Trash2,
  CalendarIcon,
  X,
  MessageSquare,
  ChevronDown,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Calendar } from '@/components/ui/calendar'

interface Lead {
  id: string
  name: string
  company: string
  product: string
  quantity: string
  source: string
  status:
    | 'New'
    | 'Contacted'
    | 'Qualified'
    | 'Proposal Sent'
    | 'Converted'
    | 'Declined'
  assigned: string
  date: string
  email: string
  phone: string
  notes: string
}

export default function CRMDashboardPage() {
  /* =======================================================
     STATES
  ======================================================= */

  const [showAddModal, setShowAddModal] =
    useState(false)

  const [selectedLead, setSelectedLead] =
    useState<any>(null)

  const [selectedCard, setSelectedCard] =
    useState<any>(null)

  const [calendarOpen, setCalendarOpen] =
    useState(false)

  const [selectedDate, setSelectedDate] =
    useState<Date>()

  const [menuOpenIndex, setMenuOpenIndex] =
    useState<number | null>(null)

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null)

  /* =======================================================
     FORM
  ======================================================= */

  const [addForm, setAddForm] = useState({
    name: '',
    company: '',
    product: '',
    quantity: '',
    source: '',
    status: 'New',
    assigned: '',
    date: '',
    email: '',
    phone: '',
    notes: '',
  })

  /* =======================================================
     LEADS
  ======================================================= */

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 'L001',
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
      notes:
        'Interested in thermal rolls for supermarkets.',
    },

    {
      id: 'L002',
      name: 'Priya Mehta',
      company: 'QuickPOS',
      product: 'POS Rolls',
      quantity: '300 Rolls',
      source: 'Referral',
      status: 'Qualified',
      assigned: 'Sneha Iyer',
      date: '18 May 2024',
      email: 'priya@quickpos.com',
      phone: '+91 9876543220',
      notes:
        'Looking for long-term POS roll supplier.',
    },

    {
      id: 'L003',
      name: 'Amit Verma',
      company: 'Apollo',
      product: 'Barcode Printer',
      quantity: '5 Units',
      source: 'Website',
      status: 'Proposal Sent',
      assigned: 'Rohit Singh',
      date: '17 May 2024',
      email: 'amit@apollo.com',
      phone: '+91 9876543230',
      notes:
        'Proposal already shared with procurement team.',
    },
  ])

  /* =======================================================
     KPI CARDS
  ======================================================= */

  const kpiCards = [
    {
      title: 'Total Leads',
      value: '256',
      growth: '+18.2%',
      details:
        'Total leads generated from website, referrals and inquiries.',

      leads: [
        'Website Leads - 120',
        'Referral Leads - 64',
        'Exhibition Leads - 38',
        'Direct Inquiry Leads - 34',
      ],
    },

    {
      title: 'Approved Leads',
      value: '68',
      growth: '+12.5%',
      details:
        'Leads approved and transferred to sales workflow.',

      leads: [
        'Retail Clients',
        'Wholesale Orders',
        'Manufacturing Clients',
      ],
    },

    {
      title: 'Sales Orders',
      value: '45',
      growth: '+8.3%',
      details:
        'Sales orders confirmed and processing.',

      leads: [
        'Thermal Rolls',
        'POS Rolls',
        'Barcode Printers',
      ],
    },

    {
      title: 'Production Orders',
      value: '28',
      growth: '+5.2%',
      details:
        'Production orders currently in manufacturing.',

      leads: [
        'Cutting',
        'Printing',
        'Packaging',
      ],
    },

    {
      title: 'Completed Orders',
      value: '32',
      growth: '+20.3%',
      details:
        'Orders completed and delivered successfully.',

      leads: [
        'Delivered Orders',
        'Warehouse Dispatch',
        'Inventory Updated',
      ],
    },
  ]

  /* =======================================================
     PIE DATA
  ======================================================= */

  const leadStatusData = [
    {
      name: 'New',
      value: 68,
      color: '#22c55e',
    },

    {
      name: 'Qualified',
      value: 45,
      color: '#3b82f6',
    },

    {
      name: 'Proposal',
      value: 28,
      color: '#f59e0b',
    },

    {
      name: 'Converted',
      value: 32,
      color: '#8b5cf6',
    },

    {
      name: 'Declined',
      value: 12,
      color: '#ef4444',
    },
  ]

  /* =======================================================
     HELPERS
  ======================================================= */

  function formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  function getStatusStyles(status: string) {
    switch (status) {
      case 'New':
        return 'bg-green-100 text-green-700'

      case 'Contacted':
        return 'bg-blue-100 text-blue-700'

      case 'Qualified':
        return 'bg-purple-100 text-purple-700'

      case 'Proposal Sent':
        return 'bg-orange-100 text-orange-700'

      case 'Converted':
        return 'bg-emerald-100 text-emerald-700'

      case 'Declined':
        return 'bg-red-100 text-red-700'

      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  function handleAddChange(e: any) {
    const { name, value } = e.target

    setAddForm((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  function saveLead() {
    const newLead: Lead = {
      id: `L${String(leads.length + 1).padStart(
        3,
        '0'
      )}`,
      ...addForm,
    } as Lead

    if (editingIndex !== null) {
      const updated = [...leads]

      updated[editingIndex] = newLead

      setLeads(updated)
    } else {
      setLeads([newLead, ...leads])
    }

    setShowAddModal(false)

    setEditingIndex(null)

    setAddForm({
      name: '',
      company: '',
      product: '',
      quantity: '',
      source: '',
      status: 'New',
      assigned: '',
      date: '',
      email: '',
      phone: '',
      notes: '',
    })
  }

  function handleEdit(index: number) {
    setEditingIndex(index)

    setAddForm(leads[index])

    setShowAddModal(true)
  }

  function handleDelete(index: number) {
    const updated = leads.filter(
      (_, i) => i !== index
    )

    setLeads(updated)
  }

  

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#f7f8f5]">

      {/* ===================================================
         NAVBAR
      =================================================== */}

      <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-5 sticky top-0 z-40">

        <div className="flex items-center gap-4">

          <button className="h-11 w-11 rounded-2xl border bg-white flex items-center justify-center">

            ☰

          </button>

          <div className="relative">

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

            <Input
              placeholder="Search..."
              className="w-[340px] h-11 rounded-2xl border-gray-200 pl-11"
            />

          </div>

        </div>

        <div className="flex items-center gap-6">

          <Bell className="w-5 h-5 text-gray-700" />

          <MessageSquare className="w-5 h-5 text-gray-700" />

          <div className="h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100"
              className="w-12 h-12 rounded-full"
            />

            <div>

              <h4 className="text-sm font-semibold">
                Admin User
              </h4>

              <p className="text-xs text-gray-500">
                Super Admin
              </p>

            </div>

            <ChevronDown className="w-4 h-4" />

          </div>

        </div>

      </header>

      {/* ===================================================
         MAIN
      =================================================== */}

      <main className="p-5 space-y-5">

        {/* HEADER */}

        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-5xl font-bold">
              CRM Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all leads and customer pipeline
            </p>

          </div>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          {kpiCards.map((card, index) => (

            <motion.div
              key={index}
              onClick={() =>
                setSelectedCard(card)
              }
              whileHover={{ y: -4 }}
              className="cursor-pointer bg-white rounded-3xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-3">

                <div>

                  <h3 className="text-3xl font-black text-black">
                    {card.value}
                  </h3>

                  <p className="text-sm font-medium text-gray-500 mt-1">
                    {card.title}
                  </p>

                </div>

                <div className="w-12 h-12 rounded-2xl bg-green-100" />

              </div>

              <div className="flex items-center gap-2 mt-4">

                <span className="text-green-600 text-sm font-semibold">
                  ↑ {card.growth}
                </span>

                <span className="text-gray-400 text-xs">
                  from last week
                </span>

              </div>

            </motion.div>

          ))}

        </div>

       

        {/* MAIN GRID */}

        <div className="grid grid-cols-12 gap-5">

          {/* LEADS TABLE */}

          <div className="col-span-9 bg-white rounded-3xl border shadow-sm p-5 overflow-x-auto">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold">
                All Leads
              </h2>

              <Button
                onClick={() => {
                  setEditingIndex(null)
                  setShowAddModal(true)
                }}
                className="rounded-2xl bg-green-500 hover:bg-green-600"
              >

                <Plus className="w-4 h-4 mr-2" />

                Add Lead

              </Button>

            </div>

            <table className="w-full">

              <thead>

                <tr className="border-b text-left">

                  <th className="py-4 text-sm text-gray-500">
                    Name
                  </th>

                  <th className="py-4 text-sm text-gray-500">
                    Company
                  </th>

                  <th className="py-4 text-sm text-gray-500">
                    Product
                  </th>

                  <th className="py-4 text-sm text-gray-500">
                    Status
                  </th>

                  <th className="py-4 text-sm text-gray-500">
                    Assigned
                  </th>

                  <th className="py-4 text-sm text-gray-500">
                    Date
                  </th>

                  <th className="py-4 text-sm text-gray-500">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {leads.map((lead, idx) => (

                  <tr
                    key={idx}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="py-4 font-medium">
                      {lead.name}
                    </td>

                    <td className="py-4">
                      {lead.company}
                    </td>

                    <td className="py-4">
                      {lead.product}
                    </td>

                    <td className="py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold ${getStatusStyles(
                          lead.status
                        )}`}
                      >

                        {lead.status}

                      </span>

                    </td>

                    <td className="py-4">
                      {lead.assigned}
                    </td>

                    <td className="py-4">
                      {lead.date}
                    </td>

                    <td className="py-4">

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() =>
                            setSelectedLead(lead)
                          }
                          className="w-9 h-9 rounded-xl border flex items-center justify-center hover:bg-gray-100 transition"
                        >

                          <Eye className="w-4 h-4" />

                        </button>

                        <div className="relative">

                          <button
                            onClick={() =>
                              setMenuOpenIndex(
                                menuOpenIndex === idx
                                  ? null
                                  : idx
                              )
                            }
                            className="w-9 h-9 rounded-xl border flex items-center justify-center hover:bg-gray-100 transition"
                          >

                            <MoreVertical className="w-4 h-4" />

                          </button>

                          {menuOpenIndex === idx && (

                            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-xl shadow-lg z-50">

                              <button
                                onClick={() =>
                                  handleEdit(idx)
                                }
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2"
                              >

                                <Edit className="w-4 h-4" />

                                Edit

                              </button>

                              <button
                                onClick={() =>
                                  handleDelete(idx)
                                }
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600 flex items-center gap-2"
                              >

                                <Trash2 className="w-4 h-4" />

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

          {/* PIE CHART */}

          <div className="col-span-3">

            <div className="bg-white rounded-3xl border p-5 shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                Lead Status Overview
              </h2>

              <div className="relative w-[190px] h-[190px] mx-auto">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <PieChart>

                    <Pie
                      data={leadStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={78}
                      paddingAngle={3}
                      dataKey="value"
                    >

                      {leadStatusData.map(
                        (entry, index) => (

                          <Cell
                            key={index}
                            fill={entry.color}
                          />

                        )
                      )}

                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <h3 className="text-3xl font-bold">
                    256
                  </h3>

                  <p className="text-sm text-gray-500">
                    Total Leads
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* ===================================================
         KPI MODAL
      =================================================== */}

      {selectedCard && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() =>
              setSelectedCard(null)
            }
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl z-10"
          >

            <button
              onClick={() =>
                setSelectedCard(null)
              }
              className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl"
            >

              ×

            </button>

            <h2 className="text-3xl font-black mb-2">

              {selectedCard.title}

            </h2>

            <p className="text-gray-500 mb-6">

              {selectedCard.details}

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {selectedCard?.leads?.map(
                (
                  lead: string,
                  idx: number
                ) => (

                  <div
                    key={idx}
                    className="bg-green-50 border border-green-100 rounded-2xl p-4"
                  >

                    <p className="font-semibold text-gray-700">

                      {lead}

                    </p>

                  </div>

                )
              )}

            </div>

          </motion.div>

        </div>

      )}

      {/* ===================================================
         ADD MODAL
      =================================================== */}

      {showAddModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-[760px] rounded-3xl bg-white p-8 shadow-2xl">

            <button
              onClick={() =>
                setShowAddModal(false)
              }
              className="absolute right-6 top-6 w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
            >

              <X className="w-5 h-5" />

            </button>

            <div className="mb-8">

              <p className="text-green-600 font-semibold uppercase tracking-[3px] text-sm">
                ADD LEAD
              </p>

              <h2 className="text-3xl font-bold mt-3">
                Create a new lead
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div>

                <label className="text-sm text-gray-500">
                  Lead Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={addForm.name}
                  onChange={handleAddChange}
                  className="w-full mt-2 border rounded-2xl p-4"
                />

              </div>

              <div>

                <label className="text-sm text-gray-500">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={addForm.company}
                  onChange={handleAddChange}
                  className="w-full mt-2 border rounded-2xl p-4"
                />

              </div>

              <div>

                <label className="text-sm text-gray-500">
                  Status
                </label>

                <select
                  name="status"
                  value={addForm.status}
                  onChange={handleAddChange}
                  className="w-full mt-2 border rounded-2xl p-4"
                >

                  <option value="New">
                    New
                  </option>

                  <option value="Contacted">
                    Contacted
                  </option>

                  <option value="Qualified">
                    Qualified
                  </option>

                  <option value="Proposal Sent">
                    Proposal Sent
                  </option>

                  <option value="Converted">
                    Converted
                  </option>

                  <option value="Declined">
                    Declined
                  </option>

                </select>

              </div>

              {/* DATE */}

              <div>

                <label className="text-sm text-gray-500 mb-2 block">
                  Date
                </label>

                <Popover
                  open={calendarOpen}
                  onOpenChange={setCalendarOpen}
                >

                  <PopoverTrigger asChild>

                    <button
                      type="button"
                      className="w-full px-4 py-4 rounded-2xl border bg-white flex items-center justify-between"
                    >

                      <span className="text-sm text-gray-700">

                        {addForm.date ||
                          'Select Date'}

                      </span>

                      <CalendarIcon className="w-5 h-5 text-gray-500" />

                    </button>

                  </PopoverTrigger>

                  <PopoverContent
                    align="start"
                    className="w-auto p-3 rounded-2xl border bg-white shadow-2xl z-[9999]"
                  >

                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {

                        if (date) {

                          setSelectedDate(date)

                          setAddForm(
                            (prev: any) => ({
                              ...prev,
                              date: formatDate(
                                date
                              ),
                            })
                          )

                          setCalendarOpen(
                            false
                          )
                        }
                      }}
                    />

                  </PopoverContent>

                </Popover>

              </div>

            </div>

            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={() =>
                  setShowAddModal(false)
                }
                className="px-5 py-3 rounded-2xl border font-medium"
              >
                Cancel
              </button>

              <button
                onClick={saveLead}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-medium"
              >
                Save Lead
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ===================================================
         VIEW LEAD MODAL
      =================================================== */}

      {selectedLead && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="bg-white rounded-3xl p-8 w-[500px] relative">

            <button
              onClick={() =>
                setSelectedLead(null)
              }
              className="absolute top-5 right-5"
            >

              <X />

            </button>

            <h2 className="text-3xl font-bold mb-6">

              {selectedLead.name}

            </h2>

            <div className="space-y-4">

              <div>

                <p className="text-sm text-gray-500">
                  Company
                </p>

                <p className="font-semibold">
                  {selectedLead.company}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Product
                </p>

                <p className="font-semibold">
                  {selectedLead.product}
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Notes
                </p>

                <p className="font-semibold">
                  {selectedLead.notes}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}