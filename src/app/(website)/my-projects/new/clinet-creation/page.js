import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
                    <div className=" mb-2" >
                        <button className="text-indigo-600 text-sm"> <ArrowBackIosIcon className="text-sm text-center" />Back </button>
                        <h2 className="text-3xl font-bold  mt-5  ">Clinet information</h2>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-sm font-semibold">
                            Email
                        </label>
                        <input placeholder="client@email.com" className="w-full h-10 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-sm font-semibold">
                            Full name
                        </label>
                        <input placeholder="John Doe" className="w-full h-10 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-sm font-semibold">
                            Phone number
                        </label>
                        <input type='number' placeholder="555-555-5555" className="w-full h-10 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-sm font-semibold">
                            Language
                        </label>
                        <input placeholder="English" className="w-full h-10 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                    </div>
                    <div className="mb-4 flex justify-between">

                        <button className="bg-gray-300 h-10 w-full text-sm font-semibold text-gray-600 px-4 py-2 rounded-xl  hover:bg-gray-400 transition-colors" >
                            Confirm and create project
                        </button>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default page; 