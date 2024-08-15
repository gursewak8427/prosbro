"use client"
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import { useDispatch } from 'react-redux';
import { nextQuoteStepperFormIndex } from '@/app/redux/CommonSlice';
import { useRouter } from 'next/navigation';
import { TaskItems } from '../_components/TaskItems';


function Page() {
  const dispatch = useDispatch();
  const router = useRouter()


  return (
    <div className='p-8'>
      <div className='p-2 mt-5 mb-5 w-1/2'>
        <h1 className='text-3xl font-bold mb-2 '>New Build</h1>
        <p className='text-gray-600 '>Contemporary wood frame house on a concrete foundation</p>
      </div>

      <div className='flex mr-2 '>
        <div className='text-indigo-600 border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><PersonIcon className='text-gray-500 mr-1' /> Test</div>
        <div className='text-indigo-600 border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><LocationOnIcon className='text-gray-500 mr-1' />Location</div>
        <div className='text-indigo-600 border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><EmailIcon className='text-gray-500 mr-1' /> garry@email.com</div>
        <div className='text-indigo-600 px-2 flex flex-row items-center justify-center'><CallIcon className='text-gray-500 mr-1' /> 234-324-576 </div>
      </div>

      <div className='flex gap-5 mt-5 mb-5 '>
        <div className='w-9/12'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-between gap-5'>
              <button className='px-2 py-1 border border-gray-500 rounded-lg text-sm text-gray-600 hover:bg-gray-100'><AddIcon /> Add a category</button>
              <button className='px-2 py-1 border border-gray-500 rounded-lg text-sm text-gray-600 hover:bg-gray-100'><BookIcon /> Save as new template</button>
              <button className='px-2 py-1 border border-gray-500 rounded-lg text-sm text-gray-600 hover:bg-gray-100'><PaidIcon /> Sub. price request</button>
            </div>
            <div>
              <button className='text-sm text-indigo-600'><KeyboardArrowDownIcon />Expand all </button>
            </div>

          </div>

          <TaskItems />

        </div>

        <div className="w-3/12 flex flex-col p-4">
          <div className='w-full bg-white py-4 px-4 rounded-lg shadow-md h-96'>
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
              router.push("add-details")
            }} className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 mb-4'>Next Add Details</button>
            {/* <button className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700'>Submit Payment</button> */}
            <div className='mb-2 mt-2 flex justify-center items-center'>
              <button className='text-sm font-semibold text-indigo-600'><RemoveRedEyeIcon /> Clint preview - PDF</button>
            </div>
            <div className='mb-2 mt-2 flex justify-center items-center'>
              <button className='text-sm font-semibold text-indigo-600'>Scope of work (no prices)</button>
              <button className='text-gray-400'><ErrorIcon /></button>
            </div>
          </div>
          <div className="bg-white py-4 px-4 p-4 rounded-lg shadow-md w-full mt-4">
            <div className="text-gray-600 font-medium mb-2">Costs breakdown</div>
            <div className="border-t border-gray-200 mb-2"></div>
            <div className="text-sm text-gray-700">
              <div className="flex justify-between mb-1">
                <span>Material cost</span>
                <span>$14,106.73</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Material markup</span>
                <span>$323.20</span>
              </div>
              <div className="flex justify-between font-semibold mb-2">
                <span>Material total</span>
                <span>$14,429.93</span>
              </div>
              <div className="border-t border-gray-200 mb-2"></div>
              <div className="flex justify-between mb-1">
                <span>Labor cost</span>
                <span>$21,018.41</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Labor markup</span>
                <span>$525.00</span>
              </div>
              <div className="flex justify-between font-semibold mb-2">
                <span>Labor total: 245.6h</span>
                <span>$21,543.41</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Page;
