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

          <div className="my-3">
            <Accordion>
              <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className='text-indigo-600' />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="w-1/2 flex flex-row">
                    <h1 className='mr-2'><PersonIcon className='text-indigo-600' /></h1>
                    <h1 className='mr-2'>General conditions </h1>
                    <h1><EditOutlined className='text-indigo-600' /></h1>
                  </div>
                  <div className="w-1/2 flex flex-row justify-end items-center">
                    <div className="flex flex-col justify-end items-end mr-2">
                      <p className='text-sm'>Estimate Labour time: 70h</p>
                      <p className='text-sm'>Labour Rate: $70/h <EditOutlined className='text-indigo-600' /></p>
                    </div>
                    <input placeholder='$43 ' className='w-[150px] border border-gray-400 rounded-lg px-1 py-1 text-sm'></input>
                    <DeleteOutline className='text-red-600' />
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className='w-full'>
                  <table className='w-full'>
                    <thead className='border-b border-gray-400'>
                      <td className='p-1 text-sm'>Task</td>
                      <td className='p-1 text-sm text-center'>Quantity</td>
                      <td className='p-1 text-sm text-center'>Material</td>
                      <td className='p-1 text-sm text-center'>Labour</td>
                      <td className='p-1 text-sm text-center'>Markup</td>
                      <td className='p-1 text-sm text-right'>Total</td>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='p-1'>General Admin Fees</td>
                        <td className='p-1'>
                          <div className="flex flex-row justify-center">
                            <input type="text" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' />
                            <select name="" id="" className='px-2 py-1 border rounded'>
                              <option value="">each</option>
                              <option value="">all</option>
                              <option value="">a</option>
                              <option value="">b</option>
                            </select>
                          </div>
                        </td>
                        <td className='p-1 w-[200px] py-4'>
                          <div className="flex flex-col items-center">
                            <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>Builder Cost</label>
                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' />
                            <p className='text-sm mt-2'>/each</p>
                          </div>
                        </td>
                        <td className='p-1 w-[200px] py-4'>
                          <div className="flex flex-col items-center">
                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' />
                            <p className='text-sm mt-2'>/each</p>
                          </div>
                        </td>
                        <td className='p-1 py-4'>
                          <div className="flex flex-col items-center">
                            <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>$0.00</label>
                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='0%' />
                          </div>
                        </td>
                        <td className='p-1 py-4'>
                          <div className="flex flex-col items-end">
                            <p className='font-semibold mt-2'>$5,240</p>
                            <p className='text-sm mt-2'>$5,240/each</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="border rounded py-1 m-2" placeholder='Enter description' />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='flex justify-end items-center'>
                          <BookmarkBorderOutlined className='text-indigo-600 text-[20px] mx-1' />
                          <RemoveRedEyeIcon className='text-indigo-600 text-[20px] mx-1' />
                          <ContentCopy className='text-indigo-600 text-[20px] mx-1' />
                          <DeleteOutline className='text-red-600 text-[23px] mx-1' />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="my-3">
            <Accordion>
              <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className='text-indigo-600' />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="w-1/2 flex flex-row">
                    <h1 className='mr-2'><PersonIcon className='text-indigo-600' /></h1>
                    <h1 className='mr-2'>General conditions </h1>
                    <h1><EditOutlined className='text-indigo-600' /></h1>
                  </div>
                  <div className="w-1/2 flex flex-row justify-end items-center">
                    <div className="flex flex-col justify-end items-end mr-2">
                      <p className='text-sm'>Estimate Labour time: 70h</p>
                      <p className='text-sm'>Labour Rate: $70/h <EditOutlined className='text-indigo-600' /></p>
                    </div>
                    <input placeholder='$43 ' className='w-[150px] border border-gray-400 rounded-lg px-1 py-1 text-sm'></input>
                    <DeleteOutline className='text-red-600' />
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className='w-full'>
                  <table className='w-full'>
                    <thead className='border-b border-gray-400'>
                      <td className='p-1 text-sm'>Task</td>
                      <td className='p-1 text-sm text-center'>Quantity</td>
                      <td className='p-1 text-sm text-center'>Material</td>
                      <td className='p-1 text-sm text-center'>Labour</td>
                      <td className='p-1 text-sm text-center'>Markup</td>
                      <td className='p-1 text-sm text-right'>Total</td>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='p-1'>General Admin Fees</td>
                        <td className='p-1'>
                          <div className="flex flex-row justify-center">
                            <input type="text" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' />
                            <select name="" id="" className='px-2 py-1 border rounded'>
                              <option value="">each</option>
                              <option value="">all</option>
                              <option value="">a</option>
                              <option value="">b</option>
                            </select>
                          </div>
                        </td>
                        <td className='p-1 w-[200px] py-4'>
                          <div className="flex flex-col items-center">
                            <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>Builder Cost</label>
                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' />
                            <p className='text-sm mt-2'>/each</p>
                          </div>
                        </td>
                        <td className='p-1 w-[200px] py-4'>
                          <div className="flex flex-col items-center">
                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' />
                            <p className='text-sm mt-2'>/each</p>
                          </div>
                        </td>
                        <td className='p-1 py-4'>
                          <div className="flex flex-col items-center">
                            <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>$0.00</label>
                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='0%' />
                          </div>
                        </td>
                        <td className='p-1 py-4'>
                          <div className="flex flex-col items-end">
                            <p className='font-semibold mt-2'>$5,240</p>
                            <p className='text-sm mt-2'>$5,240/each</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="border rounded py-1 m-2" placeholder='Enter description' />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='flex justify-end items-center'>
                          <BookmarkBorderOutlined className='text-indigo-600 text-[20px] mx-1' />
                          <RemoveRedEyeIcon className='text-indigo-600 text-[20px] mx-1' />
                          <ContentCopy className='text-indigo-600 text-[20px] mx-1' />
                          <DeleteOutline className='text-red-600 text-[23px] mx-1' />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* OLD Accordian */}
          {/* <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditOutlined className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditOutlined className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditOutlined className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditOutlined className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
              </div>
            </div>

          </div>
          <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditOutlined className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditOutlined className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
              </div>
            </div>

          </div>
          <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditOutlined className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditOutlined className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
              </div>
            </div>

          </div>
          <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditOutlined className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditOutlined className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
              </div>
            </div>

          </div>
          <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditOutlined className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditOutlined className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
              </div>
            </div>

          </div> */}
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
      </div>
    </div>
  )
}

export default Page;
