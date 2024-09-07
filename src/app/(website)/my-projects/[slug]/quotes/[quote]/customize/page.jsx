"use client"
import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { nextQuoteStepperFormIndex } from '@/app/redux/CommonSlice';
import { usePathname, useRouter } from 'next/navigation';
import { Bookmark, BookmarkAdd, BookmarkBorderOutlined, BookmarkOutlined, ContentCopy, CopyAll, DeleteOutline, Edit, EditOutlined } from '@mui/icons-material';
import { Switch } from '@mui/material';
import { CostSummary } from '../../_components/CostSummary';
import { BusinessModel } from './models/BusinessModel';
import { BillingAddressModel } from './models/BillingAddressModel';
import { PersonalModel } from './models/PersonalModel';
import { ChangeLogoModel } from './models/ChangeLogoModel';
import { TitleEditModel } from './models/TitleEditModel';
import { CoverImageModel } from './models/CoverImageModel';
import { FetchClientQuoteOptions } from '@/app/redux/Project/ProjectSlice';



const amountDisplayTypeOptions = [{
  label: "Per categories",
  value: "perCategories"
}, {
  label: "Per categories + Task",
  value: "perCategoriesPlusTask"
},
{
  label: "Subtotal Only",
  value: "subTotalOnly"
}]

function Page() {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const quote = useSelector(store => store.projectData.clientquote);
  const taxes = useSelector(store => store.userData.defaultquotetaxes);

  const pathSegments = pathname.split("/");
  const slug = pathSegments[pathSegments.length - 2];

  const [amountDisplayType, setAmountDisplayType] = useState(amountDisplayTypeOptions[0]?.value)
  const [displayColumns, setDisplayColumns] = useState({
    quantity: false,
    materialLabour: false,
    markup: false,
  })

  // models
  const [businessModel, setBusinessModel] = useState(false)
  const [personalModel, setPersonalModel] = useState(false)
  const [changeLogoModel, setChangeLogoModel] = useState(false)
  const [coverImageModel, setCoverImageModel] = useState(false)
  const [billingAddressModel, setBillingAddressModel] = useState(false)
  const [titleEditModel, setTitleEditModel] = useState(false)

  const router = useRouter()
  const [payments, setPayments] = useState([
    { id: 1, label: "Beginning of project", percentage: 40, amount: 13212.42 },
    { id: 2, label: "Middle of project", percentage: 40, amount: 13212.42 },
    { id: 3, label: "End of project", percentage: 20, amount: 6606.21 },
  ]);

  const addPayment = () => {
    setPayments([
      ...payments,
      { id: Date.now(), label: "", percentage: 0, amount: 0 },
    ]);
  };

  const removePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  const handleLabelChange = (id, newLabel) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, label: newLabel } : payment
      )
    );
  };

  const handleChange = e => {
    setDisplayColumns({
      ...displayColumns,
      [e.target.name]: e.target.checked
    })
  }

  useEffect(()=>{
    dispatch(FetchClientQuoteOptions(slug))
  },[])

  return (
    <div className='p-8'>
      <div className='flex gap-5 mt-5 mb-5 relative items-start justify-start'>
        <div className='w-9/12'>
          <div className="bg-gray-100 rounded-lg">
            {/* Cover image and title section */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src="https://via.placeholder.com/1200x400" // Replace with your image URL
                alt="Cover"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
                <h1 className="text-white text-2xl md:text-3xl font-bold">
                  Kitchen Remodel - Standard
                </h1>
                <p className="text-gray-200">Renovation of a standard low to mid-end kitchen</p>
                <button className="mt-4 bg-white text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-gray-100" onClick={() => {
                  setTitleEditModel(!titleEditModel)
                }}>
                  <EditOutlined />
                  Edit title
                </button>
              </div>
              <button className="absolute top-4 right-4 bg-white text-gray-800 py-1 px-3 rounded-lg shadow hover:bg-gray-100" onClick={() => {
                setCoverImageModel(!coverImageModel)
              }}>
                <EditOutlined />
                Edit cover image
              </button>
            </div>

            {/* Company and Project details section */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-between">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-xl font-semibold mb-2">AGH Renovation Limited</h2>
                <p>2016 Redwood Crescent SE, Calgary, Alberta, T2B 1R7, Canada</p>
                <p className="mt-2">Gurvinder Singh</p>
                <p>aghreno@gmail.com</p>
                <p>587-899-3252</p>
                <button className="mt-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300" onClick={() => {
                  setPersonalModel(!personalModel)
                }}>
                  <EditOutlined />
                  Personal information
                </button>
              </div>
              <div className="flex-1 md:flex-grow-0 mb-6 md:mb-0">
                <p>GST: 733658314RT0001</p>
                <p>https://www.aghrenovation.ca</p>
                <button className="mt-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300" onClick={() => {
                  setBusinessModel(!businessModel)
                }}>
                  <EditOutlined />
                  Business
                </button>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start">
                <img
                  src="https://via.placeholder.com/150" // Replace with your logo URL
                  alt="Company Logo"
                  className="h-48 w-48 object-contain mb-2"
                />
                <button className="ml-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300" onClick={() => {
                  setChangeLogoModel(!changeLogoModel)
                }}>
                  <EditOutlined />
                  Change logo
                </button>
              </div>
            </div>

            {/* Client, Project Address, and Billing Address section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">Client</h3>
                <p>test</p>
                <p>garry94556@gmail.com</p>
                <p>123-456-7890</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">Project address</h3>
                <p>Calgary, AB, Canada, Calgary</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">Billing address</h3>
                <p>Calgary, AB, Canada, Calgary</p>
                <button className="mt-4 bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300" onClick={() => {
                  setBillingAddressModel(!billingAddressModel)
                }}>
                  <EditOutlined />
                  Edit billing address
                </button>
              </div>
            </div>

            {/* cost summary */}
            <CostSummary amountDisplayType={amountDisplayType} displayColumns={displayColumns} />
          </div>
        </div>

        <div className='w-3/12 sticky top-5'>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full mb-4">
            <h3 className="font-semibold mb-4">Display options</h3>
            {/* Amount Dropdown */}
            <div className="mb-4 flex flex-row items-center justify-between">
              <label htmlFor="amount" className="block text-gray-700">Amount</label>
              <select
                value={amountDisplayType}
                name='amountDisplayType'
                onChange={e => setAmountDisplayType(e.target.value)}
                id="amount"
                className="mt-1 block bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {
                  amountDisplayTypeOptions?.map(option => {
                    return <option value={option?.value}>{option?.label}</option>
                  })
                }
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Toggle Buttons */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Quantities</span>
                <Switch name='quantity' defaultChecked={displayColumns?.quantity} onChange={handleChange} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Material + labor cost</span>
                <Switch name='materialLabour' defaultChecked={displayColumns?.materialLabour} onChange={handleChange} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Markup amount</span>
                <Switch name='markup' defaultChecked={displayColumns?.markup} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-full mb-4">
            <div className="flex flex-row justify-between">
              <div>
                <h2 className='font-semibold text-sm'>Markup on quote</h2>
                <h2 className='text-sm text-primary'>Edit on quote %</h2>
              </div>
              <div>
                $848
              </div>
            </div>
            <div className='mb-4 mt-4 flex justify-between'>
              <h2 className='text-gray-500 text-sm'>Subtotal</h2>
              <p className='text-gray-600 text-sm'>$7865.00</p>
            </div>
            <div className='mb-4 mt-4 flex justify-between'>
              <h2 className='text-gray-500 text-sm'>GST</h2>
              <p className='text-gray-600 text-sm'>$65.00</p>
            </div>
            <div className='mb-4 mt-4 flex justify-between'>
              <h2 className=' text-lg font-semibold'>Total</h2>
              <p className='text-lg font-semibold'>$75445.00</p>
            </div>

            <button onClick={() => {
              // dispatch(nextQuoteStepperFormIndex())
              router.push("preview")
            }} className='w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-700 mb-4'>Next - Preview</button>
            <div className='mb-2 mt-2 flex justify-center items-center'>
              <button className='text-sm font-semibold text-primary'><RemoveRedEyeIcon /> Client preview - PDF</button>
            </div>
            <div className='mb-2 mt-2 flex justify-center items-center'>
              <button className='text-sm font-semibold text-primary'>Scope of work (no prices)</button>
              <button className='text-gray-400'><ErrorIcon /></button>
            </div>
          </div>
        </div>
      </div>
      <BusinessModel isModalOpen={businessModel} setIsModalOpen={setBusinessModel} />
      <BillingAddressModel isModalOpen={billingAddressModel} setIsModalOpen={setBillingAddressModel} />
      <PersonalModel isModalOpen={personalModel} setIsModalOpen={setPersonalModel} />
      <ChangeLogoModel isModalOpen={changeLogoModel} setIsModalOpen={setChangeLogoModel} />
      <TitleEditModel isModalOpen={titleEditModel} setIsModalOpen={setTitleEditModel} />
      <CoverImageModel isModalOpen={coverImageModel} setIsModalOpen={setCoverImageModel} />
    </div>
  )
}

export default Page;
