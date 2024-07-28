import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function SlugLogs() {
    return (
        <div className='p-4'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold mt-6 mb-4 text-gray-800'>Create a Daily Log</h1>
                <p className='mt-2 mb-4 w-2/3 text-center text-gray-600'>
                    No logs were found but they will show here once you've created them. Click "New Daily Log" to create one.
                </p>
                <p className='mt-2 mb-6 w-2/3 text-center text-gray-600'>
                    You can also invite your employees/subcontractors from the "My Team" page to have them create one.
                </p>
                <button className='flex items-center px-6 py-3 border font-semibold border-gray-600 rounded-lg bg-white hover:bg-gray-300'>
                    <AddIcon className='mr-2' /> New Daily Log
                </button>
            </div>
            <div className='flex justify-center items-center mt-10 mb-5'>
               <img src='https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fempty-logs-img.png&w=750&q=75'></img>
            </div>

        </div>
    )
}

export default SlugLogs;