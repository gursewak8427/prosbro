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
      <div className='p-2 mt-5 mb-5 w-1/2'>
        <h1 className='font-bold mb-2'>Payment Schedule</h1>
      </div>

      <div className='flex gap-5 mt-5 mb-5 '>
        <div className='w-9/12'>
          <div className="bg-gray-100 p-4 rounded-lg">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center mb-3 space-x-2 border rounded p-2 bg-white"
              >
                <input
                  type="text"
                  value={payment.label}
                  onChange={(e) => handleLabelChange(payment.id, e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500"
                />
                <input
                  type="number"
                  value={payment.percentage}
                  onChange={(e) => null}
                  className="w-20 p-2 text-right border border-gray-300 rounded focus:ring focus:ring-blue-500"
                />
                <span className="w-28 text-right">{payment.amount.toFixed(2)}</span>
                <button
                  onClick={() => removePayment(payment.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <button
              onClick={addPayment}
              className="mt-3 p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              + Add payment
            </button>
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
            router.push("customize")
          }} className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 mb-4'>Next - Customize</button>
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
