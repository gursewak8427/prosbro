"use client"
import React, { Fragment, useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
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
import { FetchCategories, FetchClientQuote, UpdateQuote } from '@/app/redux/Project/ProjectSlice';

import { Dialog, Transition } from '@headlessui/react';
import { CloseOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { FetchDefQuotetaxes, FetchProjectProfile } from '@/app/redux/AuthSlice';

function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const categorieslist = useSelector(store => store.projectData.categorieslist)
  const quote = useSelector(store => store.projectData.clientquote)
  const taxes = useSelector(store => store.userData.defaultquotetaxes);
  const profile = useSelector(store => store.userData.projectprofile);
  const [quoteset, setQuoteset] = useState({ name: quote.name, description: quote.description, id: quote.id })
  const [quotesetstatus, setQuotesetstatus] = useState(false);
  const [quoteSubTotal, setQuoteSubTotal] = useState(0);
  const [categoryPopup, setcategoryPopup] = useState(false)
  const [totalbillamount, settotalbillamount] = useState(0)

  const handleQuoteUpdate = (e) => {
    const { name, value } = e.target;
    setQuotesetstatus(true)
    setQuoteset(
      (prevdata) => ({
        ...prevdata,
        [name]: value
      })
    )
  }

  useEffect(() => {
    dispatch(FetchCategories())
  }, [])

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

  const updateQuotename = () => {
    if (quotesetstatus) {
      dispatch(UpdateQuote(quoteset))
    }
    return;
  }

  useEffect(() => {
    setQuoteSubTotal(quote?.subtotalbill)
    const quoteSubTotal = quote?.subtotalbill;
    let value = 0;
    taxes.forEach(item => {
      value = value + (item.number / 100) * quoteSubTotal;
    });
    settotalbillamount(quoteSubTotal + value)
  }, [JSON.stringify(quote?.subtotalbill)])

  useEffect(() => {
    if (!Object.keys(profile).length) {
      dispatch(FetchProjectProfile())
      dispatch(FetchDefQuotetaxes())
      return
    }
  }, [profile])
  return (
    <div className='p-8'>
      {/* Category Popup */}
      <Transition appear show={categoryPopup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setcategoryPopup(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all z-50 bg-white">
                  {/* Modal Background */}
                  <div className="">
                    {/* Modal Content */}
                    <div className="rounded-lg w-full max-w-2xl p-4">
                      {/* Modal Header */}
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Add a category</h2>
                        <button onClick={() => setcategoryPopup(false)} className="text-gray-600 hover:text-gray-900">
                          <CloseOutlined />
                        </button>
                      </div>
                      {/* Search Input */}
                      <div className="relative mb-4">
                        <input type="text" placeholder="Search category" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.392 4.393-1.414 1.414-4.392-4.393zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Category List */}
                      <div className="overflow-y-auto pr-2 max-h-[40vh]">
                        <ul className="space-y-2">
                          {/* Repeat similar structure for other categories */}
                          {categorieslist?.map((categoryData, categoryIndex) => {
                            return <li key={`category-${categoryIndex}`} className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-100">
                              <span className="flex items-center gap-3">
                                <Image src={`${process.env.NEXT_PUBLIC_BACKENDURL}${categoryData?.icon}`} width={20} height={20} />
                                <span>{categoryData?.name}</span>
                              </span>
                              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                            </li>
                          })}
                          {/* Add more categories as needed */}
                        </ul>
                      </div>
                      {/* Modal Footer */}
                      <div className="flex justify-end space-x-4 mt-6">
                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100" onClick={() => setcategoryPopup(false)}>Cancel</button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Confirm</button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className='p-2 mt-5 mb-5 w-1/2'>
        <h1 className='text-3xl font-bold mb-2'>
          <input
            className='w-full bg-transparent'
            type="text"
            name="name"
            id="name"
            value={quoteset.name}
            onChange={(e) => { handleQuoteUpdate(e) }}
            onBlur={updateQuotename}
          />
        </h1>
        <p className='text-gray-600 '>
          <input
            className='w-full bg-transparent'
            type="text"
            name="description"
            id="description"
            value={quoteset.description}
            onChange={(e) => { handleQuoteUpdate(e) }}
            onBlur={updateQuotename}
          />
        </p>
      </div>

      <div className='flex mr-2 '>
        <div className='text-primary border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><PersonIcon className='text-gray-500 mr-1' /> {quote?.client?.name}</div>
        {/* <div className='text-primary border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><LocationOnIcon className='text-gray-500 mr-1' /><Link href={'/'}>Location</Link></div> */}
        <div className='text-primary border-r-2 border-gray-400 px-2 flex flex-row items-center justify-center'><EmailIcon className='text-gray-500 mr-1' /> {quote?.client?.email}</div>
        <div className='text-primary px-2 flex flex-row items-center justify-center'><CallIcon className='text-gray-500 mr-1' /> {quote?.client?.mobile} </div>
      </div>

      <div className='flex gap-5 mt-5 mb-5 '>
        <div className='w-9/12'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-between gap-5'>
              <button onClick={() => setcategoryPopup(true)} className='px-2 py-1 border border-gray-500 rounded-lg text-sm text-gray-600 hover:bg-gray-100'><AddIcon /> Add a category</button>
              <button className='px-2 py-1 border border-gray-500 rounded-lg text-sm text-gray-600 hover:bg-gray-100'><BookIcon /> Save as new template</button>
              <button className='px-2 py-1 border border-gray-500 rounded-lg text-sm text-gray-600 hover:bg-gray-100'><PaidIcon /> Sub. price request</button>
            </div>
            <div>
              <button className='text-sm text-primary'><KeyboardArrowDownIcon />Expand all </button>
            </div>

          </div>
          <TaskItems setQuoteSubTotal={setQuoteSubTotal} quoteId={quote?.id} subtotalbill={quote?.subtotalbill} data={quote?.tasks} isEditable={true} />
        </div>

        <div className="w-3/12 flex flex-col p-4">
          <div className='w-full bg-white py-4 px-4 rounded-lg shadow-md h-96'>
            <h2 className='font-semibold text-sm'>Markup on quote</h2>
            <h2 className='text-sm text-primary'>Edit on quote %</h2>
            <div className='mb-4 mt-4 flex justify-between'>
              <h2 className='text-gray-500 text-sm'>Subtotal</h2>
              <p className='text-gray-600 text-sm'>${quoteSubTotal?.toFixed(2)}</p>
            </div>
            {
              taxes.map((item, index) => {
                return (
                  <div className='mb-4 mt-4 flex justify-between' key={index}>
                    <h2 className='text-gray-500 text-sm'>{item.name} {item.number}%</h2>
                    <p className='text-gray-600 text-sm'>${((item.number / 100) * quoteSubTotal).toFixed(2)}</p>
                  </div>
                );
              })
            }
            <div className='mb-4 mt-4 flex justify-between'>
              <button className='text-sm text-primary'>Edit taxes</button>
            </div>
            <div className='mb-4 mt-4 flex justify-between'>
              <h2 className=' text-lg font-semibold'>Total</h2>
              <p className='text-lg font-semibold'>${totalbillamount?.toFixed(2)}</p>
            </div>

            <button onClick={() => {
              // dispatch(nextQuoteStepperFormIndex())
              router.push("add-details")
            }} className='w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-700 mb-4'>Next Add Details</button>
            {/* <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-700'>Submit Payment</button> */}
            <div className='mb-2 mt-2 flex justify-center items-center'>
              <button className='text-sm font-semibold text-primary'><RemoveRedEyeIcon /> Client preview - PDF</button>
            </div>
            <div className='mb-2 mt-2 flex justify-center items-center'>
              <button className='text-sm font-semibold text-primary'>Scope of work (no prices)</button>
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
