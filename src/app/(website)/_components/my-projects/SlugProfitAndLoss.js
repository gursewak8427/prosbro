import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ErrorIcon from '@mui/icons-material/Error';

function SlugProfitAndLoss() {
    const data = [
        {
            category: 'Project Alpha',
            contract: '$24,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Beta',
            contract: '$32,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Gamma',
            contract: '$50,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Delta',
            contract: '$22,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Epsilon',
            contract: '$60,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Zeta',
            contract: '$40,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Eta',
            contract: '$28,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Theta',
            contract: '$52,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Iota',
            contract: '$30,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Kappa',
            contract: '$44,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
        {
            category: 'Project Lambda',
            contract: '$20,000',
            income: '$0.00',
            expenses: '$0.00',
            profit: '$0.00',
        },
    ];

    const sumValues = (key) => {
        return data.reduce((total, item) => total + parseFloat(item[key].replace(/[$,]/g, '')), 0).toFixed(2);
    };

    const contractTotal = sumValues('contract');
    const incomeTotal = sumValues('income');
    const expensesTotal = sumValues('expenses');
    const profitTotal = sumValues('profit');


    return (
        <div className='p-4'>


            <div className="flex justify-between items-center">
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
                
                <div className='flex bg-white p-2 rounded-lg items-center gap-2'>
                    <div className='p-2 bg-gray-300 rounded-lg'>
                        <button><MultipleStopIcon /> Summary</button>
                    </div>
                    <div className='p-2 rounded-lg hover:bg-gray-300'>
                        <button><ArrowUpwardIcon /> Income</button>
                    </div>
                    <div className='p-2 rounded-lg hover:bg-gray-300'>
                        <button><ArrowDownwardIcon /> Expenses</button>
                    </div>

                </div>
            </div>

            <div className="overflow-x-auto rounded-lg mt-5">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100"></th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Forecast</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100"></th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Actual</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100"></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Categories</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Contract</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Income <ErrorIcon className='text-gray-500' /></th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Expenses</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.category}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.contract}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.income}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.expenses}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.profit}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-2 px-4 text-center border-b border-gray-200 font-bold">Total</td>
                            <td className="py-2 px-4 text-center border-b border-gray-200 font-bold">${contractTotal}</td>
                            <td className="py-2 px-4 text-center border-b border-gray-200 font-bold">${incomeTotal}</td>
                            <td className="py-2 px-4 text-center border-b border-gray-200 font-bold">${expensesTotal}</td>
                            <td className="py-2 px-4 text-center border-b border-gray-200 font-bold">${profitTotal}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    )
}

export default SlugProfitAndLoss