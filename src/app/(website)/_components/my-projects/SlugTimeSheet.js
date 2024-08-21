import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';

function SlugTimeSheet() {

    const dataPayment = [
        {
            hour: '00h00m',
            doller: '$0.00',
        },
    ]

    const dataPerson = [
        {
            name: 'Gurvinder singh',
            mon: '',
            tue: '',
            wed: '',
            thu: "",
            fri: '',
            totalhrs: '00h00m',
            totaldoller: '$0.00'
        },
        {
            name: 'Gagandeep singh',
            mon: '',
            tue: '',
            wed: '',
            thu: "",
            fri: '',
            totalhrs: '00h00m',
            totaldoller: '$0.00'
        },
        {
            name: 'Grjeet singh',
            mon: '',
            tue: '',
            wed: '',
            thu: "",
            fri: '',
            totalhrs: '00h00m',
            totaldoller: '$0.00'
        },
        {
            name: 'Ajmer Dhillon',
            mon: '',
            tue: '',
            wed: '',
            thu: "",
            fri: '',
            totalhrs: '00h00m',
            totaldoller: '$0.00'
        },
        {
            name: 'Principal singh',
            mon: '',
            tue: '',
            wed: '',
            thu: "",
            fri: '',
            totalhrs: '00h00m',
            totaldoller: '$0.00'
        },



    ];

    const weeklyTotalHrs = dataPerson.reduce((total, item) => total + (parseFloat(item.totalhrs) || 0), 0);
    const weeklyTotalDollars = dataPerson.reduce((total, item) => total + (parseFloat(item.totaldoller) || 0), 0).toFixed(2);

    return (
        <div className='p-4'>


            <div className="flex items-end justify-between">
                <div className="overflow-x-auto rounded-lg mt-5 w-1/3 ">
                    <table className="min-w-full bg-white">

                        <thead>
                            <tr>

                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Total hrs</th>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Total $</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPayment.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.hour}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.doller}</td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                <div className='flex items-center gap-3'>
                    <div className='flex justify-evenly bg-white p-2 rounded-lg items-center gap-2'>
                        <div className='p-2 bg-gray-300 rounded-lg'>
                            <button>Overall</button>
                        </div>
                        <div className='p-2 rounded-lg hover:bg-gray-300'>
                            <button>Custom dates</button>
                        </div>

                    </div>
                    <div className=''>
                        <select class="px-8 py-4 rounded-lg border border-gray-300">
                            <option value="" disabled selected>5 employees</option>
                            <option value="gurvinder">Gurvinder Singh</option>
                            <option value="gagandeep">Gagandeep</option>
                            <option value="rupinderpal">Rupinderpal</option>
                            <option value="ajmer">Ajmer Dhillon</option>
                            <option value="principal">Principal Singh</option>
                        </select>
                    </div>
                    <div className='text-primary hover:text-primary-dark'>
                        <button><FileUploadIcon /> Export</button>
                    </div>
                </div>
            </div>


            <div className="overflow-x-auto rounded-lg mt-5">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th colSpan="8" className="py-2 px-4 border-b bg-gray-100 text-gray-700 text-left">
                                Jul 22 - Jul 28, 2024
                            </th>
                        </tr>
                        <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b border-gray-200"></th>
                            <th className="py-2 px-4 border-b border-gray-200">Mon 22</th>
                            <th className="py-2 px-4 border-b border-gray-200">Tue 23</th>
                            <th className="py-2 px-4 border-b border-gray-200">Wed 24</th>
                            <th className="py-2 px-4 border-b border-gray-200">Thu 25</th>
                            <th className="py-2 px-4 border-b border-gray-200">Fri 26</th>
                            <th className="py-2 px-4 border-b border-gray-200">Total hrs</th>
                            <th className="py-2 px-4 border-b border-gray-200">Total $</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPerson.length > 0 ? (
                            dataPerson.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.name}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">
                                        <button className="text-primary hover:underline">Add</button>
                                    </td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">
                                        <button className="text-primary hover:underline">Add</button>
                                    </td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">
                                        <button className="text-primary hover:underline">Add</button>
                                    </td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">
                                        <button className="text-primary hover:underline">Add</button>
                                    </td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">
                                        <button className="text-primary hover:underline">Add</button>
                                    </td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.totalhrs}</td>
                                    <td className="py-2 px-4 text-center border-b border-gray-200">{item.totaldoller}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="py-4 text-center text-gray-500">
                                    No change order to display yet
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan="8" className="py-2 px-4 text-center border-t border-gray-200 bg-gray-50">
                                <div className="flex justify-between w-1/2 float-right">
                                    <span className="font-semibold text-gray-500">Weekly Total</span>
                                    <span className="font-semibold text-gray-500">{weeklyTotalHrs}hrs</span>
                                    <span className="font-semibold text-gray-500">${weeklyTotalDollars}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default SlugTimeSheet;