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
      <div className="max-w-screen mx-auto bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
        <div className="relative z-10 hidden h-full sm:flex md:w-full lg:w-[65%]">
          <img
            src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
            alt="Sign Up Step"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full px-12 md:w-full lg:w-[35%] tablet:px-6">
          <div class="flex h-20 w-full items-center justify-between">
            <button
              className="rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row text-base justify-center bg-transparent text-primary hover:text-secondary p-0 flex cursor-pointer items-center gap-1"
              type="button"
              data-headlessui-state=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path></svg>
              <Link href={'/my-projects'}>Back</Link>
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 cursor-pointer"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>
          </div>
          <div className="flex h-5/6 flex-col">
            <h2 className="text-3xl font-bold mt-5 mb-10">Client information</h2>
            <div className="flex h-full flex-col justify-center">
              <div className="grid grid-cols-2 gap-3">
                <button
                  className={`flex w-full cursor-pointer flex-col space-y-2 rounded-lg border p-5 text-center ${option.option1 ? 'border-primary bg-primary-soft' : ''}`}
                  onClick={() => {
                    setOption({ option1: true, option2: false });
                  }}
                >
                  New Client
                </button>
                <button
                  className={`flex w-full cursor-pointer flex-col space-y-2 rounded-lg border p-5 text-center ${option.option2 ? 'border-primary bg-primary-soft' : ''}`}
                  onClick={() => {
                    setOption({ option1: false, option2: true });
                  }}
                >
                  Existing Client
                </button>
              </div>
              <div className='text-center mt-4 mb-4'>
                <button
                  className='bg-primary w-full py-3 text-white font-bold rounded-lg border-t'
                  onClick={() => handlesubmit()}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page