"use client"
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function page() {
  const [option, setOption] = useState({ option1: true, option2: false });
  const router = useRouter();
  const formone = useSelector(data => data.newProject.formone)
  const handlesubmit = () => {
    if (option.option1) {
      router.push('/my-projects/new/client-creation')
    } else {
      router.push('/my-projects/new/client-selection')
    }
  }
  useEffect(() => {
    setOption({ option1: true, option2: false });
  }, [])
  useEffect(() => {
    if (Object.keys(formone).length === 0) {
      router.push('/my-projects/new/project-creation')
    }
  }, [formone, router])

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
            <button className="text-indigo-600 text-sm font-semibold">
              <Link href={'/my-projects/new/project-creation'}>
                <ArrowBackIosIcon className="text-sm text-center" />Back
              </Link>
            </button>
            <h2 className="text-3xl font-bold  mt-5 mb-10 ">Client information</h2>
          </div>
          <div className="mb-4">
            <div className='flex justify-between gap-2 '>
              <button
                className={`border border-gray-600  w-1/2 py-3 rounded-md  text-sm ${option.option1 ? 'bg-indigo-200' : ''} hover:border-indigo-600`}
                onClick={() => {
                  setOption({ option1: true, option2: false });
                }}
              >
                New Client
              </button>
              <button
                className={`border border-gray-600  w-1/2 py-3 rounded-md  text-sm ${option.option2 ? 'bg-indigo-200' : ''} hover:border-indigo-600`}
                onClick={() => {
                  setOption({ option1: false, option2: true });
                }}
              >
                Existing Client
              </button>
            </div>
            <div className='text-center mt-4 mb-4'>
              <button
                className='bg-indigo-600 w-full py-3 text-white font-bold rounded-lg border-t'
                onClick={() => handlesubmit()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page