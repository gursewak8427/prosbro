import React from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';

function SlugQuote() {
    const data = [
        {
            title: 'Project Alpha',
            lastEditedDate: '2024-07-24',
            status: 'Completed',
            amount: '$10,000',
        },
        {
            title: 'Project Beta',
            lastEditedDate: '2024-07-23',
            status: 'In Progress',
            amount: '$8,000',
        },
    ];
    return (
        <div className='flex flex-col gap-5 p-4'>
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
                        <h1 className='flex items-center gap-2 hover:text-gray-500 cursor-pointer'><span><SummarizeIcon /> </span> View contract</h1>
                    </div> */}
                    <div>
                        <button className='font-semibold px-4 py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-200'><span><AddIcon /> </span>Create Quote</button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Title</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Last Edited Date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 text-center px-4 border-b border-gray-200">{item.title}</td>
                                <td className="py-2 text-center px-4 border-b border-gray-200">{item.lastEditedDate}</td>
                                <td className="py-2 text-center px-4 border-b border-gray-200">{item.status}</td>
                                <td className="py-2 text-center px-4 border-b border-gray-200">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SlugQuote;