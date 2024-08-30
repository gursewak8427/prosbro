"use client"
import React, { useEffect, useState } from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { DeleteOutline } from '@mui/icons-material';
import { CreateQuotePaySchedule, DeleteQuotePaySchedule, FetchClientQuote, FetchQuoteAddinformation, UpdateQuoteAddinformation, UpdateQuotePaySchedule } from '@/app/redux/Project/ProjectSlice';
import { FetchDefQuotetaxes } from '@/app/redux/AuthSlice';


function Page() {
  const quote = useSelector(store => store.projectData.clientquote);
  const quoteadditionalinformation = useSelector(store => store.projectData.quoteadditionalinformation);
  const taxes = useSelector(store => store.userData.defaultquotetaxes);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter()
  const [payments, setPayments] = useState([]);
  const [paymentstatus, setPaymentStatus] = useState(false);
  const [addinfor, setAddinfo] = useState({});
  const [addinforstatus, setAddinfoStatus] = useState(false);
  const [quoteSubTotal, setQuoteSubTotal] = useState(0);
  const [totalbillamount, settotalbillamount] = useState(0)
  const pathSegments = pathname.split("/");
  const slug = pathSegments[pathSegments.length - 2];

  const addPayment = () => {
    dispatch(CreateQuotePaySchedule({ slug: slug }))
  };


  const removePayment = (id) => {
    dispatch(DeleteQuotePaySchedule({ slug: slug, id: id }))
  };

  const handleLabelChange = (id, e) => {
    let amount;

    if (e.target.name === "number") {
      const numberValue = parseFloat(e.target.value);
      if (!isNaN(numberValue)) {
        amount = (numberValue / 100) * quoteSubTotal;
      }
    }

    const updatedPayments = payments.map((payment) =>
      payment.id === id
        ? {
          ...payment,
          [e.target.name]: e.target.value,
          ...(amount !== undefined && { amount })  // Update amount only if it was calculated
        }
        : payment
    );

    const totalNumber = updatedPayments.reduce((sum, payment) => sum + parseFloat(payment.number || 0), 0);

    if (totalNumber > 100) {
      alert("The total sum of payment numbers cannot exceed 100.");
      return;
    }

    setPaymentStatus(true);
    setPayments(updatedPayments);
  };
  
  const handleAddiDetailsUpdate = () => {
    if (addinforstatus) {
      const data = addinfor;
      delete data.paymentschedule;
      dispatch(UpdateQuoteAddinformation(data))
      setAddinfoStatus((false));
    }
  }

  const handlePaymentsScheduleUpdate = (id) => {
    if (paymentstatus) {
      const data = payments.find(obj => obj.id === id);
      dispatch(UpdateQuotePaySchedule(data))
      setPaymentStatus((false));
    }
  }

  const handleAddiDetailsChange = (e) => {
    setAddinfoStatus(true)
    setAddinfo((prevaddinfo) => (
      {
        ...prevaddinfo,
        [e.target.name]: e.target.value
      }
    ))
  }

  useEffect(() => {
    if (Object.keys(quoteadditionalinformation).length > 0) {
      return
    } else {
      dispatch(FetchClientQuote(slug))
      dispatch(FetchQuoteAddinformation(slug))
      dispatch(FetchDefQuotetaxes())
    }
  }, [pathname, quoteadditionalinformation])

  useEffect(() => {
    setQuoteSubTotal(quote?.subtotalbill)
    const quoteSubTotal = quote?.subtotalbill;
    let value = 0;
    taxes.forEach(item => {
      value = value + (item.number / 100) * quoteSubTotal;
    });
    settotalbillamount(quoteSubTotal + value)
  }, [JSON.stringify(quote?.subtotalbill)])

  useEffect(() => {
    if (Object.keys(quoteadditionalinformation).length) {
      setAddinfo(quoteadditionalinformation)
      setPayments(quoteadditionalinformation.paymentschedule)
    }
  }, [quoteadditionalinformation])

  useEffect(() => {
    if (totalbillamount) {

    }
  }, [totalbillamount])
  return (
    <div className='p-8'>
      <div className='p-2 mt-5 mb-5 w-1/2'>
        <h1 className='font-bold mb-2'>Payment Schedule</h1>
      </div>

      <div className='flex gap-5 mt-5 mb-5 '>
        <div className='w-9/12'>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="bg-white p-4">
              {payments.map((payment, index) => (
                <div
                  key={index}
                  className="flex w-3/4 items-center mb-3 space-x-2 border rounded p-2 "
                >
                  <input
                    type="text"
                    value={payment.name}
                    name='name'
                    onChange={(e) => handleLabelChange(payment.id, e)}
                    className="flex-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500"
                    onBlur={() => { handlePaymentsScheduleUpdate(payment.id) }}
                  />
                  <input
                    type="number"
                    name='number'
                    value={payment.number}
                    onChange={(e) => handleLabelChange(payment.id, e)}
                    className="w-20 p-2 text-right border border-gray-300 rounded focus:ring focus:ring-blue-500"
                    onBlur={() => { handlePaymentsScheduleUpdate(payment.id) }}
                  />
                  <span className="w-28 text-right">${payment.amount.toFixed(2)}</span>
                  <button
                    onClick={() => removePayment(payment.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <DeleteOutline />
                  </button>
                </div>
              ))}
              <button
                onClick={addPayment}
                className="mt-3 p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                + Add payment
              </button>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-6">
            {/* Construction Schedule */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Construction schedule</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Give an estimate date of start and duration"
                rows="4"
                name='constructionschedule'
                value={addinfor?.constructionschedule}
                onChange={handleAddiDetailsChange}
                onBlur={handleAddiDetailsUpdate}
              />
            </div>

            {/* Quote Validity */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Quote validity</label>
              <div className="flex items-center space-x-4 mb-2">
                <input
                  type="date"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={addinfor?.quotevalidity}
                  onChange={handleAddiDetailsChange}
                  name='quotevalidity'
                  onBlur={handleAddiDetailsUpdate}
                />
                <span className="text-gray-700">Duration: {addinfor?.quotevaliditydays} days</span>
              </div>
              <p className="text-gray-500 text-sm">
                Your client will be notified by SMS and Email 2 days before and the same day it expires
              </p>
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Terms and conditions</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                value={addinfor?.tc}
                onChange={handleAddiDetailsChange}
                name='tc'
                onBlur={handleAddiDetailsUpdate}
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="save-template"
                  className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="save-template" className="ml-2 text-gray-700">Save conditions as template</label>
              </div>
            </div>

            {/* Attached Documents */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Attached documents</label>
              <input type="file" name="attachement-file" id="attachement-file-id" hidden />
              <label htmlFor='attachement-file-id' className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center text-gray-400 cursor-pointer">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <p>+ Drop new files or click to import</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className='w-3/12 bg-white py-4 px-4 rounded-lg shadow-md h-96'>
          <h2 className='font-semibold text-sm'>Markup on quote</h2>
          <h2 className='text-sm text-primary'>Edit on quote %</h2>
          <div className='mb-4 mt-4 flex justify-between'>
            <h2 className='text-gray-500 text-sm'>Subtotal</h2>
            <p className='text-gray-600 text-sm'>${quoteSubTotal?.toFixed(2)}</p>
          </div>
          {
            taxes.map((item, index) => {
              return (
                <div className='mb-4 mt-4 flex justify-between' key={index}>
                  <h2 className='text-gray-500 text-sm'>{item.name} {item.number}%</h2>
                  <p className='text-gray-600 text-sm'>${((item.number / 100) * quoteSubTotal).toFixed(2)}</p>
                </div>
              );
            })
          }
          <div className='mb-4 mt-4 flex justify-between'>
            <button className='text-sm text-primary'>Edit taxes</button>
          </div>
          <div className='mb-4 mt-4 flex justify-between'>
            <h2 className=' text-lg font-semibold'>Total</h2>
            <p className='text-lg font-semibold'>${totalbillamount?.toFixed(2)}</p>
          </div>

          <button onClick={() => {
            // dispatch(nextQuoteStepperFormIndex())
            router.push("customize")
          }} className='w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-700 mb-4'>Next - Customize</button>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-sm font-semibold text-primary'><RemoveRedEyeIcon /> Client preview - PDF</button>
          </div>
          <div className='mb-2 mt-2 flex justify-center items-center'>
            <button className='text-sm font-semibold text-primary'>Scope of work (no prices)</button>
            <button className='text-gray-400'><ErrorIcon /></button>
          </div>
        </div>

      </div >
    </div >
  )
}

export default Page;
