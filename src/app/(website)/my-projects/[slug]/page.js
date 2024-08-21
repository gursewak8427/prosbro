"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link';
import axiosInstance from '@/app/redux/AxiosInstance';
import { EditOutlined } from '@mui/icons-material';

const SlugDescription = dynamic(() => import('../../_components/my-projects/SlugDiscription'), { ssr: false })
const SlugFiles = dynamic(() => import('../../_components/my-projects/SlugFiles'), { ssr: false })
const SlugQuote = dynamic(() => import('../../_components/my-projects/SlugQuote'), { ssr: false })
const SlugMaterials = dynamic(() => import('../../_components/my-projects/SlugMaterials'), { ssr: false })
const SlugContract = dynamic(() => import('../../_components/my-projects/SlugContract'), { ssr: false })
const SlugInvoices = dynamic(() => import('../../_components/my-projects/SlugInvoices'), { ssr: false })
const SlugProfitAndLoss = dynamic(() => import('../../_components/my-projects/SlugProfitAndLoss'), { ssr: false })
const SlugSchedule = dynamic(() => import('../../_components/my-projects/SlugSchedule'), { ssr: false })
const SlugTasks = dynamic(() => import('../../_components/my-projects/SlugTasks'), { ssr: false })
const SlugTimeSheet = dynamic(() => import('../../_components/my-projects/SlugTimeSheet'), { ssr: false })
const SlugLogs = dynamic(() => import('../../_components/my-projects/SlugLogs'), { ssr: false })
// Import other components similarly...

function Page() {
  const [activeTab, setActiveTab] = useState('');
  const [project, setProject] = useState({})
  const router = useRouter();
  const searchParams = useSearchParams()
  const search = searchParams.get('tab')
  const pathname = usePathname();
  const updateUrl = (tab) => {
    const newUrl = `${window.location.pathname}?tab=${tab}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };
  const renderComponent = () => {
    switch (activeTab) {
      case 'description':
        return <SlugDescription client={project.client} project={project} />;
      case 'files':
        return <SlugFiles />;
      case 'materials':
        return <SlugMaterials />;
      case 'quotes':
        return <SlugQuote />;
      case 'contract':
        return <SlugContract />;
      case 'invoices':
        return <SlugInvoices />;
      case 'profitandloss':
        return <SlugProfitAndLoss />;
      case 'schedule':
        return <SlugSchedule />;
      case 'task':
        return <SlugTasks />;
      case 'timesheet':
        return <SlugTimeSheet />;
      case 'logs':
        return <SlugLogs />;
      default:
        return <SlugDescription />;
    }
  };
  useEffect(() => {
    setActiveTab(search)
  }, [search])

  useEffect(() => {
    const segments = pathname.split('/');
    const lastSegment = segments[segments.length - 1];
    const getclients = async (lastSegment) => {
      try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchproject/${lastSegment}`)
        setProject(response.data)
      } catch (error) {

      }
    }
    getclients(lastSegment);
  }, [pathname])
  return (
    <div className="w-full bg-gray-200 min-h-screen">
      <div className='flex justify-between p-4 bg-white'>
        <div className='p-4'>
          <h1 className='text-gray-500'>{project.reference}</h1>
          <div className='flex gap-4 items-center my-5'>
            <h1 className='text-3xl font-bold flex flex-row items-center'>{project.name} <span className='ml-2 text-primary cursor-pointer'><EditOutlined /></span></h1>
            <p className='px-3 py-1 bg-orange-200 font-semibold text-orange-700 bg-opacity-40 rounded-lg'>{project.status?.toLowerCase()}</p>
            <button className='text-primary flex flex-row items-center cursor-pointer hover:text-gray-600 transition duration-300'><span><AddIcon /></span> Add a tag</button>
          </div>
          <div className='flex items-center gap-4  text-primary '>
            <p className='flex items-center cursor-pointer text-sm'><span><LocationOnIcon /> </span><Link href={project.url ?? '/'}>{project.address}</Link></p>
            <p className='flex items-center cursor-pointer text-sm'><span><PersonIcon /></span> {project.client?.name}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button className='px-5 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg' onClick={() => { router.push(`${window.location.pathname}/quotes/new?template_tab=base_template&client=${project.client?.id}&project=${project.id}`) }}><span><AddIcon /></span> Send another quote</button>
          <h1 className='cursor-pointer'><span><MoreVertIcon /></span></h1>
        </div>
      </div>
      <div className='p-4 mt-3 mb-5 flex flex-col gap-4'>
        <div >
          <ul className='flex gap-6 border border-b-gray-400 '>
            <li
              className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "description"
                ? "text-indigo-500 border-primary"
                : "text-gray-600 font-normal border-transparent hover:border-gray-600"
                }`}
              onClick={() => { updateUrl('description') }} >Description</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "files"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('files') }}>Files</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "quotes"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('quotes') }}>Quotes</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "materials"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('materials') }}>Materials</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "contract"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('contract') }}>Contract</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "invoices"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('invoices') }}>Invoices</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "profitandloss"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('profitandloss') }}>Profit and loss</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "schedule"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('schedule') }}>Schedule</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "task"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('task') }}>Tasks</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "timesheet"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('timesheet') }}>Timesheet</li>
            <li className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${activeTab === "logs"
              ? "text-indigo-500 border-primary"
              : "text-gray-600 font-normal border-transparent hover:border-gray-600"
              }`} onClick={() => { updateUrl('logs') }}>Logs</li>
          </ul>
        </div>
        {renderComponent()}
      </div>
    </div>
  )
}

export default Page
