"use client"
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
import { nextQuoteStepperFormIndex } from '@/app/redux/CommonSlice';
import { useRouter } from 'next/navigation';
import { Bookmark, BookmarkAdd, BookmarkBorderOutlined, BookmarkOutlined, ContentCopy, CopyAll, DeleteOutline, EditOutlined } from '@mui/icons-material';


function Page() {
  const dispatch = useDispatch();
  const router = useRouter()
  const [payments, setPayments] = useState([
    { id: 1, label: "Beginning of project", percentage: 40, amount: 13212.42 },
    { id: 2, label: "Middle of project", percentage: 40, amount: 13212.42 },
    { id: 3, label: "End of project", percentage: 20, amount: 6606.21 },
  ]);

  const addPayment = () => {
    setPayments([
      ...payments,
      { id: Date.now(), label: "", percentage: 0, amount: 0 },
    ]);
  };

  const removePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  const handleLabelChange = (id, newLabel) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, label: newLabel } : payment
      )
    );
  };

  return (
    <div className='p-8'>
      <div className='flex gap-5 mt-5 mb-5 '>
        <div className='w-9/12'>
          <div className="bg-gray-100 rounded-lg">
            {/* Cover image and title section */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src="https://via.placeholder.com/1200x400" // Replace with your image URL
                alt="Cover"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
                <h1 className="text-white text-2xl md:text-3xl font-bold">
                  Kitchen Remodel - Standard
                </h1>
                <p className="text-gray-200">Renovation of a standard low to mid-end kitchen</p>
                <button className="mt-4 bg-white text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-gray-100">
                  Edit title
                </button>
              </div>
              <button className="absolute top-4 right-4 bg-white text-gray-800 py-1 px-3 rounded-lg shadow hover:bg-gray-100">
                Edit cover image
              </button>
            </div>

            {/* Company and Project details section */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-between">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-xl font-semibold mb-2">AGH Renovation Limited</h2>
                <p>2016 Redwood Crescent SE, Calgary, Alberta, T2B 1R7, Canada</p>
                <p className="mt-2">Gurvinder Singh</p>
                <p>aghreno@gmail.com</p>
                <p>587-899-3252</p>
                <button className="mt-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
                  Personal information
                </button>
              </div>
              <div className="flex-1 md:flex-grow-0 mb-6 md:mb-0">
                <p>GST: 733658314RT0001</p>
                <p>https://www.aghrenovation.ca</p>
                <button className="mt-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
                  Business
                </button>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start">
                <img
                  src="https://via.placeholder.com/150" // Replace with your logo URL
                  alt="Company Logo"
                  className="h-48 w-48 object-contain mb-2"
                />
                <button className="ml-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
                  Change logo
                </button>
              </div>
            </div>

            {/* Client, Project Address, and Billing Address section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">Client</h3>
                <p>test</p>
                <p>garry94556@gmail.com</p>
                <p>123-456-7890</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">Project address</h3>
                <p>Calgary, AB, Canada, Calgary</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">Billing address</h3>
                <p>Calgary, AB, Canada, Calgary</p>
                <button className="mt-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
                  Edit billing address
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-3/12 bg-white py-4 px-4 rounded-lg shadow-md h-96'>
          <h2 className='font-semibold text-sm'>Markup on quote</h2>
          <h2 className='text-sm text-indigo-600'>Edit on quote %</h2>
          <div className='mb-4 mt-4 flex justify-between'>
            <h2 className='text-gray-500 text-sm'>Subtotal</h2>
            <p className='text-gray-600 text-sm'>$7865.00</p>
          </div>
          <div className='mb-4 mt-4 flex justify-between'>
            <h2 className='text-gray-500 text-sm'>GST</h2>
            <p className='text-gray-600 text-sm'>$65.00</p>
          </div>
          <div className='mb-4 mt-4 flex justify-between'>
            <button className='text-sm text-indigo-600'>Edit taxes</button>
          </div>
          <div className='mb-4 mt-4 flex justify-between'>
            <h2 className=' text-lg font-semibold'>Total</h2>
            <p className='text-lg font-semibold'>$75445.00</p>
          </div>

          <button onClick={() => {
            // dispatch(nextQuoteStepperFormIndex())
            router.push("preview")
          }} className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 mb-4'>Next - Preview</button>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-sm font-semibold text-indigo-600'><RemoveRedEyeIcon /> Clint preview - PDF</button>
          </div>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-sm font-semibold text-indigo-600'>Scope of work (no prices)</button>
            <button className='text-gray-400'><ErrorIcon /></button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Page;
