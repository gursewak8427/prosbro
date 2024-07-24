import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';

function page() {
    return (
        <div>
            <div className="max-w-screen mx-auto p-6 bg-white shadow-md rounded-lg w-full h-screen flex justify-between">

                <div className="w-2/3 h-full">
                    <img
                        src="	https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fbathroom_1.png&w=3840&q=75"
                        alt="Sign Up Step"
                        className="w-full h-full object-cover "
                    />
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-10 " >
                        <button className="text-indigo-600 text-sm font-semibold"> <ArrowBackIosIcon className="text-sm text-center" />Back </button>
                        <h2 className="text-3xl font-bold  mt-5 mb-10 ">Select a new invoice</h2>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold">
                            Select a project
                        </label>
                        <input placeholder="select..." className="w-full h-14 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                    </div>
                   
                    <div className="mb-4 flex justify-between ">
                        <Link className='w-full flex items-center justify-center text-white  text-sm font-semibold bg-indigo-600 px-4 py-2 rounded-xl h-14 hover:bg-gray-400 transition-colors' href={''}>
                            <button className="" >
                                Continue and enter client details
                            </button>
                        </Link>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default page