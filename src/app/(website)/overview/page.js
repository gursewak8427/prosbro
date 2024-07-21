import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReportIcon from '@mui/icons-material/Report';

function Page() {
  return (
    <div className="p-6 flex-1 bg-gray-200 shadow-md">
      <div>
        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <div className='flex justify-between mt-5 mb-5'>
          <h2 className='text-xl font-semibold'>Sales pipeline <ReportIcon className='text-gray-400' /> </h2>
          <button className='text-indigo-600 text-xl font-semibold'>See my projects <KeyboardArrowRightIcon /></button>
        </div>
      </div>

      <div className='bg-white rounded-lg p-4 '>
        <div className='flex justify-between p-4 gap-4'>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3 text-center bg-red-200 p-1 rounded-md mt-2 mb-2 font-semibold text-red-600'>To bid</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>
            <p className='text-xs' >2 projects</p>
          </div>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3  text-center bg-orange-200 p-1 rounded-md mt-2 mb-2 font-semibold text-orange-600'>Quote sent</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>
            <p className='text-xs' >No projects</p>
          </div>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3 text-center bg-indigo-200 p-1 rounded-md mt-2 mb-2 font-semibold text-indigo-600'>In construction</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>
            <p className='text-xs' >No projects</p>
          </div>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3 text-center bg-green-200 p-1 rounded-md mt-2 mb-2 font-semibold text-green-600'>Completed</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>
            <p className='text-xs' >No projects</p>
          </div>
        </div>
      </div>
      <div className='mt-5 mb-5'>
        <h2 className='text-xl font-semibold mt-2 mb-2'>Invoices <ReportIcon className='text-gray-400' /> </h2>
        <div className=" flex gap-4">
          <select className="p-2 border rounded-lg">
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-4-weeks">Last 4 Weeks</option>
            <option value="last-3-months">Last 3 Months</option>
            <option value="last-12-months">Last 12 Months</option>
            <option value="month-to-date">Month to Date</option>
            <option value="quarter-to-date">Quarter to Date</option>
            <option value="year-to-date">Year to Date</option>
            <option value="last-year">Last Year</option>
          </select>
          <input type="date" id="date" className="p-2 border rounded-lg " />
        </div>
      </div>
      <div className='bg-white rounded-lg p-4 '>
        <div className='flex justify-between p-4 gap-4'>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3 text-center bg-red-200 p-1 rounded-md mt-2 mb-2 font-semibold text-red-600'>Bill not paid</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>

          </div>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3  text-center bg-orange-200 p-1 rounded-md mt-2 mb-2 font-semibold text-orange-600'>Processing</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>

          </div>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3 text-center bg-indigo-200 p-1 rounded-md mt-2 mb-2 font-semibold text-indigo-600'>Total paid</h2>
            <p className='text-xs' ><span className='font-semibold text-2xl'>$0</span> Tax excl</p>

          </div>
          <div className='w-1/4 p-2'>
            <h2 className='w-2/3 text-center bg-green-200 p-1 rounded-md mt-2 mb-2 font-semibold text-green-600'>Not billed yet</h2>
            <p className='text-xs'><span className='font-semibold text-2xl'>$0</span> Tax excl</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page