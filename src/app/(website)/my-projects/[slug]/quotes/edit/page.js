import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Page() {
  return (
    <div className='p-2 bg-gray-100'>
      <div className='flex justify-between items-center p-4'>
        <div className='text-indigo-600'>
          <button className='text-lg font-semibold'><ArrowBackIosIcon /> Back</button>
        </div>
        <div className='flex gap-16'>
          <div className='flex flex-col items-center'>
            <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
              <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
            </button>
            <span className='mt-2 text-sm text-gray-600'>Edit</span>
          </div>
          <div className='flex flex-col items-center'>
            <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
              <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
            </button>
            <span className='mt-2 text-sm text-gray-600'>Add details</span>
          </div>
          <div className='flex flex-col items-center'>
            <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
              <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
            </button>
            <span className='mt-2 text-sm text-gray-600'>Customize</span>
          </div>
          <div className='flex flex-col items-center'>
            <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
              <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
            </button>
            <span className='mt-2 text-sm text-gray-600'>Send</span>
          </div>
        </div>
        <div className='text-indigo-600'>
          <button className='text-lg font-semibold'>Save and exit</button>
        </div>
      </div>
      <hr className='mt-4' />

      <div className='p-2 mt-5 mb-5 w-1/2'>
        <h1 className='text-3xl font-bold mb-2 '>New Build</h1>
        <p className='text-gray-600 '>Contemporary wood frame house on a concrete foundation</p>
      </div>

      <div className='flex justify-between w-8/12'>
        <div className='text-indigo-600'><PersonIcon className='text-gray-500' /> Test</div><span className='text-gray-500'>|</span>
        <div className='text-indigo-600'><LocationOnIcon className='text-gray-500' />Location</div><span className='text-gray-500'>|</span>
        <div className='text-indigo-600'><EmailIcon className='text-gray-500' /> garry@email.com</div><span className='text-gray-500'>|</span>
        <div className='text-indigo-600'><CallIcon className='text-gray-500' /> 234-324-576 </div>
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

          <div className='mt-5 mb-5 bg-white py-4 px-4 rounded-lg'>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-5'>
                <button><KeyboardArrowDownIcon className='text-indigo-600' /></button>
                <h1><PersonIcon className='text-indigo-600' /></h1>
                <h1>General conditions </h1>
                <h1><EditIcon className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditIcon className='text-indigo-600 text-sm' /></p>
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
                <h1><EditIcon className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditIcon className='text-indigo-600 text-sm' /></p>
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
                <h1><EditIcon className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditIcon className='text-indigo-600 text-sm' /></p>
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
                <h1><EditIcon className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditIcon className='text-indigo-600 text-sm' /></p>
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
                <h1><EditIcon className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditIcon className='text-indigo-600 text-sm' /></p>
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
                <h1><EditIcon className='text-indigo-600' /></h1>
              </div>

              <div className='flex  justify-between gap-5'>
                <div>
                  <p className='text-xs text-gray-500'>Estimated labor time: 112h <EditIcon className='text-indigo-600 text-sm' /></p>
                </div>
                <div className='flex gap-2'>
                  <input placeholder='$43 ' className='w-10 border border-gray-400 rounded-lg px-1'></input>
                  <DeleteIcon className='text-red-600' />
                </div>
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

          <button className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700'>Submit Payment</button>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-sm font-semibold text-indigo-600'><RemoveRedEyeIcon /> Clint preview - PDF</button>
          </div>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-sm font-semibold text-indigo-600'>Scope of work (no prices)</button>
          </div>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-gray-400'><ErrorIcon /></button>
          </div>
        </div>

       

      </div>
    </div>
  )
}

export default Page;
