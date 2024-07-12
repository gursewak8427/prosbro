import React from 'react'
import ReportIcon from '@mui/icons-material/Report';



const createData = (ref, description, status, amount, taxes, total) => {
  return { ref, description, status, amount, taxes, total };
};

const rows = [
  createData('#13639', 'Gurvinder Test', 'Draft', '$20,000.00', '$1,000.00', '$21,000.00')
];

function page() {
  return (
    <div className='p-6 flex-1 bg-gray-200 shadow-md>'>
      <div className="mt-5 flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="flex items-center justify-center text-xs p-2 bg-gray-300 text-center rounded-lg">1 invoice</p>
        </div>
        <button className="text-white px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 duration-200">
          + New invoice
        </button>
      </div>

      <div className='mt-10 mb-5 flex justify-between gap-4'>
        <div className='flex justify-between bg-white w-1/2 p-4 rounded-2xl border-4 border-l-green-500'>
          <div>
            <h1 className='text-gray-400'>TOTAL PAID</h1>
            <p className='font-semibold'>$0 </p>
          </div>
          <ReportIcon className='text-gray-400' />
        </div>
        <div className='flex justify-between bg-white w-1/2 p-4 rounded-2xl border-4 border-l-indigo-500'>
          <div>
            <h1 className='text-gray-400'>TOTAL OUTSTANDING</h1>
            <p className='font-semibold'>$0 </p>
          </div>
          <ReportIcon className='text-gray-400' />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='mt-5 mb-5'>
          <h2 className='text-xl font-semibold mt-2 mb-2'>Clients</h2>
          <div className=" flex gap-4">
            <select className="p-2 border rounded-lg">
              <option value="All clients">All clients</option>
              <option value="Gurvinder Singh">Gurvinder Singh</option>
            </select>
          </div>
        </div>
        <div className='mt-5 mb-5'>
          <h2 className='text-xl font-semibold mt-2 mb-2'>Payments status</h2>
          <div className=" flex gap-4">
            <select className="p-2 border rounded-lg">
              <option value="All status">All status</option>
              <option value="Drafts">Drafts</option>
              <option value="Submitted">Submitted</option>
              <option value="Processing">Processing</option>
              <option value="Pending Transfer">Pending Transfer</option>
              <option value="Rejected">Rejected</option>
              <option value="Paid">Paid</option>
              <option value="Manual payment pending">Manual payment pending</option>
            </select>
          </div>

        </div>

      </div>

      <div>
        <table className="min-w-full bg-white rounded-2xl mb-5 mt-5">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Ref #</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Taxes</th>
              <th className="py-2 px-4 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.ref}>
                <td className="py-2 px-4 border text-center">{row.ref}</td>
                <td className="py-2 px-4 border text-center">{row.description}</td>
                <td className="py-2 px-4 border text-center">{row.status}</td>
                <td className="py-2 px-4 border text-center">{row.amount}</td>
                <td className="py-2 px-4 border text-center">{row.taxes}</td>
                <td className="py-2 px-4 border text-center font-semibold">{row.total}</td>

              </tr>
            ))}
          </tbody>

        </table>
        <div className='p-4 bg-white rounded-xl mt-4 mb-5 flex justify-between w-full'>
          <h1>last update</h1>
          <p>1/1</p>
          <p>Results per page: 20</p>
        </div>

      </div>



    </div>
  )
}

export default page