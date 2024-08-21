import React from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';

function SlugInvoices() {
    const data = [
        {
            ref: '# 42345',
            discription: 'first...',
            status: 'Draft',
            amount: '$20,000',
            taxes: "$5000",
            total: '$25,000'
        },
        {
            ref: '# 42345',
            discription: '',
            status: 'Draft',
            amount: '$20,000',
            taxes: "$5000",
            total: '$25,000'
        },
        {
            ref: '# 42345',
            discription: '',
            status: 'Draft',
            amount: '$20,000',
            taxes: "$5000",
            total: '$25,000'
        },


    ];
    return (
        <div className='p-4'>
            <div className="flex items-center justify-between">
                <div className='flex justify-start gap-4'>
                    <div className='min-w-[250px] bg-white  px-5 py-3 rounded-lg border-2 border-l-primary'>
                        <p className='text-gray-500'>CONTRACT VALUE</p>
                        <h1 className='text-lg font-semibold '>$280,608.33</h1>
                    </div>
                    <div className='min-w-[250px] bg-white  px-5 py-3 rounded-lg border-2 border-l-orange-600'>
                        <p className='text-gray-500'>PAID TO DATE</p>
                        <h1 className='text-lg font-semibold '>$0</h1>
                    </div>
                    <div className='min-w-[250px] bg-white  px-5 py-3 rounded-lg border-2 border-l-green-600'>
                        <p className='text-gray-500'>BALANCE</p>
                        <h1 className='text-lg font-semibold '>$280,608.33</h1>
                    </div>
                </div>

                <div className='flex items-center gap-4 my-2 justify-end'>
                    {/* <div className='text-primary mt-5 mb-5'>
                        <h1 className='flex items-center gap-2 hover:text-gray-500 cursor-pointer'><span><SummarizeIcon /> </span> View invoices</h1>
                    </div> */}
                    <div>
                        <button className='font-semibold px-4 py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-200'><span><AddIcon /> </span>Create invoices</button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg mt-5 ">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Ref #</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Discription</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Amount</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Taxes</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.ref}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.discription}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.status}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.amount}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.taxes}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.total}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="py-4 text-center text-gray-500 ">
                                    No change order to display yet
                                </td>
                            </tr>
                        )}

                        <tr>
                            <td colSpan="6" className="py-2 px-4 text-center border-t border-gray-200">
                                <div className="flex justify-between">
                                    <span className='font-semibold text-gray-500'>Last update at 00:47</span>
                                    <span className='font-semibold text-gray-500'>1/1</span>
                                    <span className='font-semibold text-gray-500'>Results per page: 20</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SlugInvoices;