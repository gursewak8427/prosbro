import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function page() {
  return (
    <div className="w-full bg-gray-200 min-h-screen">
       <div className='flex justify-between p-4 bg-white'>
          <div className='p-4'>
            <h1 className='text-gray-500'>P24_0017</h1>
              <div className='flex gap-4 items-center mt-5 mb-5'>
                <h1 className='text-3xl font-bold'>Project-Home <span className='text-indigo-600'><EditIcon/></span></h1>
                <p className='px-3 py-1 bg-orange-200 font-semibold text-orange-700 rounded-lg'>To bid</p>
                <button className='text-indigo-600'><span><AddIcon/></span> Add a tag</button>
              </div>
              <div className='flex gap-4 items-center text-indigo-600'>
                <p><span><LocationOnIcon/> </span> Toronto, ON, Canada</p>
                <p><span><PersonIcon/></span> Gurjeet Singh</p>
              </div>
          </div>
          <div className='flex items-center gap-2'>
            <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg'><span><AddIcon/></span> New quote</button>
            <h1><span><MoreVertIcon/></span></h1>
          </div>
       </div>

       <div className='p-4 mt-3 mb-5'>
           <div >
             <ul className='flex gap-8 border border-b-gray-400 w-9/12'>
              <li className='text-gray-600 text-sm border-2 border-b-indigo-600'>Description</li>
              <li className='text-gray-600 text-sm'>Files</li>
              <li className='text-gray-600 text-sm'>Quotea</li>
              <li className='text-gray-600 text-sm'>Materials</li>
              <li className='text-gray-600 text-sm'>Contact</li>
              <li className='text-gray-600 text-sm'>Invoices</li>
              <li className='text-gray-600 text-sm'>Profit and loss</li>
              <li className='text-gray-600 text-sm'>Schedule</li>
             </ul>
           </div>
            {/* from here there should be more pages  */}
           <div className='mt-5 mb-5 bg-white p-4 rounded-lg'>
             <h1 className='flex items-center text-xl font-bold'>Client contact<span className='ml-5 text-indigo-600'> <EditIcon/></span></h1>
             <div className='flex gap-5 mt-3 mb-3 text-indigo-600'>
              <p><span className='text-gray-500'><PersonIcon/></span> Grujeet Singh</p>
              <p className='text-gray-500'>|</p>
              <p><span className='text-gray-500'><LocalPhoneIcon/> </span>5555-555-555</p>
              <p className='text-gray-500'>|</p>
              <p><span className='text-gray-500'><EmailIcon/> </span> Gurjeet@gmail.com</p>
             </div>
           </div>
       </div>

    </div>
  )
}

export default page