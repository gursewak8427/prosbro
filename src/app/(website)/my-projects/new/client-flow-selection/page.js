import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';

function page() {
  return (
    <div className="w-full bg-gray-200 min-h-screen">
      <div className="max-w-screen mx-auto p-6 bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
        <div className="w-2/3 h-full">
          <img
            src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
            alt="Sign Up Step"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-10 " >
            <button className="text-indigo-600 text-sm font-semibold"> <ArrowBackIosIcon className="text-sm text-center" />Back </button>
            <h2 className="text-3xl font-bold  mt-5 mb-10 ">Client information</h2>
          </div>

          <div className="mb-4">

            <div className='flex justify-between gap-2 '>
              <button className='border border-gray-600  w-1/2 py-3 rounded-md  text-sm  hover:bg-indigo-200 hover:border-indigo-600'>New Client</button>
              <button className='border border-gray-600  w-1/2 py-3 rounded-md  text-sm hover:bg-indigo-200 hover:border-indigo-600'>Existing Client</button>
            </div>
            <div className='text-center mt-4 mb-4'>
              <Link href={'/my-projects/new/clinet-creation'}>
                <button className='bg-indigo-600 w-full py-3 text-white font-bold rounded-lg border-t'>Confirm</button>
              </Link>

            </div>

          </div>


        </div>


      </div>
    </div>
  )
}

export default page