"use client"
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Cards from './Cards';
import axiosInstance from '@/app/redux/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { showToastPromise, updateToast } from '@/app/redux/toastSlice';
import { clientQuoteAction } from '@/app/redux/Project/ProjectSlice';

function page() {
  const dispatch = useDispatch();
  const toastId = useSelector((state) => state.toast.toastId);
  const [activeTab, setActiveTab] = useState('base_template')
  const [btnstatus, setBtnstatus] = useState(false)
  const [data, setData] = useState([])
  const [selectedtempletes, setSelectedtempletes] = useState([])
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const template_tab = searchParams.get('template_tab')
  const updateUrl = (tab) => {
    const newUrl = `${window.location.pathname}?template_tab=${tab}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };
  const fetchdata = async (activeTab) => {
    const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/fetchtemplatesandquotes/?tab=${activeTab}`)
    setData(response.data)
  }
  const renderComponent = () => {

    switch (activeTab) {
      case 'base_template':
        return <Cards data={data} setSelectedtempletes={setSelectedtempletes} selectedtempletes={selectedtempletes} />;
      case 'contractor_template':
        return <Cards data={data} setSelectedtempletes={setSelectedtempletes} selectedtempletes={selectedtempletes} />;
      case 'contractor_quote':
        return <Cards data={data} setSelectedtempletes={setSelectedtempletes} selectedtempletes={selectedtempletes} />;
      default:
        return <Cards data={data} setSelectedtempletes={setSelectedtempletes} selectedtempletes={selectedtempletes} />;
    }
  };

  const handleselected = (template) => {
    console.log(template);
    const isSelected = selectedtempletes.some(item => item.id === template.id);

    if (isSelected) {
      // If the card is already selected, deselect it
      setSelectedtempletes(selectedtempletes.filter(item => item.id !== template.id));
    } else {
      // If the card is not selected, select it
      setSelectedtempletes([...selectedtempletes, { id: template.id, name: template.name }]);
    }
  }

  // to send request to create quote for new template for client project
  const handleQuotecreation = async () => {
    const client = searchParams.get('client')
    const project = searchParams.get('project')
    const templateIds = selectedtempletes.map(template => template.id);
    const data = {
      template_ids: templateIds,
      client: client,
      quote: 'quote 1',
      project: project
    }
    const requestPromise = axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/createquoteforproject/`, data);

    dispatch(showToastPromise({
      promise: requestPromise,
      messages: {
        pending: 'Creating quote...',
        success: 'Quote successfully created!',
        error: 'Failed to create Quote please contact service team!!!',
      }
    }));

    try {
      const response = await requestPromise;
      dispatch(clientQuoteAction(response.data))
      // Optionally update the toast
      dispatch(updateToast({
        toastId,
        options: { render: 'Data loaded!', type: 'success', isLoading: false }
      }));
      const newPathname = pathname.replace('/new', `/${response.data.slug}/edit`);
      router.push(newPathname)
    } catch (error) {
      console.error('Error:', error);
      dispatch(updateToast({
        toastId,
        options: { render: 'Failed to load data!', type: 'error', isLoading: false }
      }));
    }
  };

  useEffect(() => {
    if (selectedtempletes.length > 0) {
      setBtnstatus(true)
    } else {
      setBtnstatus(false)
    }
  }, [selectedtempletes])

  useEffect(() => {
    fetchdata(template_tab);
    setActiveTab(template_tab)
  }, [template_tab])

  return (
    <>
      <div className='p-6 flex-1 min-h-[85vh] max-h-[85vh] overflow-auto bg-gray-200 shadow-md'>
        <div className='flex justify-between' >
          <div className='p-2 '>
            <h1 className='text-2xl font-semibold mt-2 mb-5'>Choose a template to start your quote</h1>
            <div className='flex items-center gap-2'>
              <p className='text-gray-700'>{selectedtempletes.length ? `${selectedtempletes.length} template selected` : 'No template selected'}</p>
              <div class="flex flex-grow-0 flex-wrap gap-4">
                <div class="flex w-full flex-wrap gap-2">
                  {selectedtempletes.map((item, index) => (
                    <div class="flex items-center justify-center gap-3 rounded-lg bg-neutral-300 p-2 text-sm" key={index}>
                      <span class="overflow-ellipsis whitespace-nowrap text-center">{item.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 cursor-pointer" onClick={() => { handleselected(item) }}><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <button><CloseIcon /></button>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className='flex flex-col gap-5 rounded-r-md mt-5 mb-5'>
            <div className={`bg-white px-5 py-4 border-l-4 ${template_tab === 'base_template' ? 'border-primary' : ''} rounded-r-md shadow-sm cursor-pointer`} onClick={() => { updateUrl('base_template') }}>
              <h1 className="text-lg font-medium">Prosbro templates</h1>
            </div>
            <div className={`bg-white px-5 py-4 border-l-4 ${template_tab === 'contractor_template' ? 'border-primary' : ''} rounded-r-md shadow-sm cursor-pointer`} onClick={() => { updateUrl('contractor_template') }}>
              <h1 className="text-lg font-medium">My templates</h1>
            </div>
            <div className={`bg-white px-5 py-4 border-l-4 ${template_tab === 'contractor_quote' ? 'border-primary' : ''} rounded-r-md shadow-sm cursor-pointer`} onClick={() => { updateUrl('contractor_quote') }}>
              <h1 className="text-lg font-medium">Previous quotes</h1>
            </div>

            <div className='bg-white hover:bg-gray-100 cursor-pointer px-5 py-4 border-2 border-primary rounded-md text-primary font-semibold '>
              <button><AddIcon /> Blank quote</button>
            </div>

          </div>
          <div className='flex-1 mt-5 mb-5'>
            {renderComponent()}
          </div>
        </div>



      </div>
      <div className='flex justify-center items-center py-5 bg-gray-100 fixed w-full bottom-0'>
        <button
          className={`px-4 py-2 font-semibold rounded-xl bg-primary text-white ${btnstatus ? 'cursor-pointer hover:bg-primary-dark' : 'cursor-not-allowed'}`}
          disabled={!btnstatus}
          onClick={handleQuotecreation}
        >
          Confirm & create a quote
        </button>
      </div>
    </>

  )
}

export default page;