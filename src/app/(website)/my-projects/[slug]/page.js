"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SlugDescription = dynamic(() => import('../../_components/my-projects/SlugDiscription'), { ssr: false })
const SlugFiles = dynamic(() => import('../../_components/my-projects/SlugFiles'), { ssr: false })
const SlugQuote = dynamic(() => import('../../_components/my-projects/SlugQuote'), { ssr: false })
const SlugContract = dynamic(() => import('../../_components/my-projects/SlugContract'), { ssr: false })
const SlugProfitAndLoss = dynamic(() => import('../../_components/my-projects/SlugProfitAndLoss'), { ssr: false })
// Import other components similarly...

function Page() {
  const [activeTab, setActiveTab] = useState('Description');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Description':
        return <SlugDescription />;
      case 'Files':
        return <SlugFiles />;
      case 'Quotes':
        return <SlugQuote />;
      case 'Contract':
        return <SlugContract />;
      case 'Invoices':
        return <SlugInvoices />;
      case 'ProfitAndLoss':
        return <SlugProfitAndLoss />;
      default:
        return <SlugDescription />;
    }
  };

  return (
    <div className="w-full bg-gray-200 min-h-screen">
      <div className='flex justify-between p-4 bg-white'>
        <div className='p-4'>
          <h1 className='text-gray-500'>P24_0017</h1>
          <div className='flex gap-4 items-center mt-5 mb-5'>
            <h1 className='text-3xl font-bold'>Project-Home <span className='text-indigo-600'><EditIcon /></span></h1>
            <p className='px-3 py-1 bg-orange-200 font-semibold text-orange-700 rounded-lg'>To bid</p>
            <button className='text-indigo-600'><span><AddIcon /></span> Add a tag</button>
          </div>
          <div className='flex gap-4 items-center text-indigo-600'>
            <p><span><LocationOnIcon /> </span> Toronto, ON, Canada</p>
            <p><span><PersonIcon /></span> Gurjeet Singh</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg'><span><AddIcon /></span> New quote</button>
          <h1><span><MoreVertIcon /></span></h1>
        </div>
      </div>

      <div className='p-4 mt-3 mb-5'>
        <div >
          <ul className='flex gap-8 border border-b-gray-400 w-9/12'>
            <li className={`text-gray-600 text-sm ${activeTab === 'Description' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Description')}>Description</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'Files' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Files')}>Files</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'Quotes' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Quotes')}>Quotes</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'Materials' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Materials')}>Materials</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'Contact' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Contract')}>Contract</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'Invoices' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Invoices')}>Invoices</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'ProfitAndLoss' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('ProfitAndLoss')}>Profit and loss</li>
            <li className={`text-gray-600 text-sm ${activeTab === 'Schedule' ? 'border-2 border-b-indigo-600' : ''}`} onClick={() => setActiveTab('Schedule')}>Schedule</li>
          </ul>
        </div>

        {renderComponent()}

      </div>

    </div>
  )
}

export default Page
