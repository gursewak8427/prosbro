"use client"
import React, { useEffect, useState } from 'react'
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

import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { TaskItems } from '../../_components/TaskItems'
import { FetchClientQuote } from '@/app/redux/Project/ProjectSlice';
import Link from 'next/link';


function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const quote = useSelector(store => store.projectData.clientquote)
  const [quoteset, setQuoteset] = useState({ name: quote.name, description: quote.description, id: quote.id })

  const handleQuoteUpdate = (e) => {
    const { name, value } = e.target
    setQuoteset(
      (prevdata) => ({
        ...prevdata,
        [name]: value
      })
    )
  }
  useEffect(() => {
    if (Object.keys(quote).length > 0) {
      setQuoteset({ name: quote.name, description: quote.description, id: quote.id })
      return
    } else {
      const pathSegments = pathname.split("/");
      const slug = pathSegments[pathSegments.length - 2];
      dispatch(FetchClientQuote(slug))
    }
  }, [pathname, quote])
  return (
    <div className='p-8'>
      <div className='p-2 mt-5 mb-5 w-1/2'>
        <h1 className='text-3xl font-bold mb-2 '>
          <input
            type="text"
            name="name"
            id="name"
            value={quoteset.name}
            onChange={(e) => { handleQuoteUpdate(e) }}
          />
        </h1>
        <p className='text-gray-600 '>
          <input
            type="text"
            name="description"
            id="description"
            value={quoteset.description}
            onChange={(e) => { handleQuoteUpdate(e) }}
          />
        </p>
      </div>

      <div className='flex mr-2 '>
        <div className='text-indigo-600 border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><PersonIcon className='text-gray-500 mr-1' /> {quote?.client?.name}</div>
        {/* <div className='text-indigo-600 border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><LocationOnIcon className='text-gray-500 mr-1' /><Link href={'/'}>Location</Link></div> */}
        <div className='text-indigo-600 border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><EmailIcon className='text-gray-500 mr-1' /> {quote?.client?.email}</div>
        <div className='text-indigo-600 px-2 flex flex-row items-center justify-center'><CallIcon className='text-gray-500 mr-1' /> {quote?.client?.mobile} </div>
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
          <TaskItems data={quote?.tasks} isEditable={true} />
        </div>

        <div className="w-3/12 flex flex-col p-4">
          <div className='w-full bg-white py-4 px-4 rounded-lg shadow-md h-96'>
            <h2 className='font-semibold text-sm'>Markup on quote</h2>
            <h2 className='text-sm text-indigo-600 cursor-pointer'>Edit on quote %</h2>
            <div className='mb-4 mt-4 flex justify-between'>
              <h2 className='text-gray-500 text-sm'>Subtotal</h2>
              <p className='text-gray-600 text-sm'>${quote.subtotalbill}</p>
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
              <p className='text-lg font-semibold'>${quote.totalbill}</p>
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
