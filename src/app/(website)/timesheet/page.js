import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import IosShareIcon from '@mui/icons-material/IosShare';
import DoneIcon from '@mui/icons-material/Done';
function page() {

    const people = [
        {
            name: "Gurvinder ",
            work1: "add",
            work2: "add",
            work3: "add",
            work4: "add",
            work5: "add",
            totalhrs: "00h00m",
            totaldoller: "$0.00"

        },
        {
            name: "Gagandeep ",
            work1: "add",
            work2: "add",
            work3: "add",
            work4: "add",
            work5: "add",
            totalhrs: "00h00m",
            totaldoller: "$0.00"
        },
        {
            name: "Principle",
            work1: "13hr28m",
            work2: "14hr45",
            work3: "add",
            work4: "add",
            work5: "add",
            totalhrs: "28h13m",
            totaldoller: "$479.83"
        },
        {
            name: "Rupinder",
            work1: "add",
            work2: "add",
            work3: "add",
            work4: "add",
            work5: "add",
            totalhrs: "00h00m",
            totaldoller: "$0.00"
        },
        {
            name: "Ajmer",
            work1: "add",
            work2: "add",
            work3: "add",
            work4: "add",
            work5: "add",
            totalhrs: "00h00m",
            totaldoller: "$0.00"
        }
    ];


    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md'>

            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Timesheet</h1>

                </div>
                <div className='flex gap-4'>
                    <button className='text-indigo-600 flex font-semibold justify-center items-center'><span><PeopleAltIcon /> </span>Manage team</button>
                    <button
                        className="text-white px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 duration-200">
                        + Add a team member
                    </button>
                </div>

            </div>


            <div className="mt-10 mb-5 flex justify-between items-stretch space-x-4">
                <div className="flex items-center gap-2 bg-white w-1/2 p-1 rounded-lg shadow">
                    <p className="bg-gray-300 px-2 py-1 rounded-lg font-semibold text-gray-700 text-sm">Current week</p>
                    <p className="text-gray-600 text-sm">Last two weeks</p>
                    <input type="date" className="p-1 border rounded-lg text-sm" />
                </div>

                <div className="flex items-center gap-2">
                    <select className="p-1 border rounded-lg h-full text-sm">

                        <option ><input type='check-box'></input>Gurvinder </option>
                        <option >Gangandeep</option>
                        <option >Principle</option>
                        <option >Ajmer Dhillon</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 p-1h-full text-sm font-semibold text-indigo-600">
                        <span ><IosShareIcon className='text-lg text-indigo-600' /></span> Export
                    </button>
                    <button className="flex items-center gap-1 text-gray-700 font-semibold p-1 border-2 border-gray-400 rounded-xl h-full text-sm">
                        <span><DoneIcon /></span> Approve pending (2)
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto mt-5 mb-5 p-4 bg-gray-100 rounded-lg shadow-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr className='border-b'>
                            <th className="py-2 px-4 text-sm  text-gray-500">June 15 - jul 21, 2024</th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b text-gray-500"></th>
                            <th className="py-2 px-4 border-b text-gray-500">Mon 15</th>
                            <th className="py-2 px-4 border-b text-gray-500">Tue 16</th>
                            <th className="py-2 px-4 border-b text-gray-500">Wed 17</th>
                            <th className="py-2 px-4 border-b text-gray-500">Thu 18</th>
                            <th className="py-2 px-4 border-b text-gray-500">Fri 19</th>
                            <th className="py-2 px-4 border-b text-gray-500">Total hrs</th>
                            <th className="py-2 px-4 border-b text-gray-500">Total $</th>

                        </tr>
                    </thead>
                    <tbody>
                        {people.map((item, idx) => (
                            <tr key={idx} className="border-b text-center">
                                <td className="py-2 px-4 flex items-center space-x-3">
                                    <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                        {item.name.split(' ').map(word => word[0]).join('')}
                                    </span>
                                    <span className='font-semibold'>{item.name}</span>
                                </td>
                                <td className="py-2 px-4 text-indigo-600">{item.work1}</td>
                                <td className="py-2 px-4 text-indigo-600">{item.work2}</td>
                                <td className="py-2 px-4 text-indigo-600">{item.work3}</td>
                                <td className="py-2 px-4 text-indigo-600">{item.work4}</td>
                                <td className="py-2 px-4 text-indigo-600">{item.work5}</td>
                                <td className="py-2 px-4 ">{item.totalhrs}</td>
                                <td className="py-2 px-4 ">{item.totaldoller}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='p-4 bg-white rounded-xl mt-4 mb-5 flex justify-between w-full'>
                <h1>Weekly total</h1>
                <div className='flex gap-16'>
                    <p>28hr13m</p>
                    <p>$479.83</p>

                </div>

            </div>

            <div className="overflow-x-auto mt-5 w-1/2 float-right mb-5 p-4 bg-gray-100 rounded-lg shadow-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-gray-500">Jul 15 - Jul 21, 2024</th>
                            <th className="py-2 px-4 border-b text-gray-500">Total hrs</th>
                            <th className="py-2 px-4 border-b text-gray-500">Total $</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((item, idx) => (
                            <tr key={idx} className="border-b text-center">
                                <td className="py-2 px-4 flex items-center space-x-3">
                                    <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                        {item.name.split(' ').map(word => word[0]).join('')}
                                    </span>
                                    <span className="font-semibold">{item.name}</span>
                                </td>
                                <td className="py-2 px-4">{item.totalhrs}</td>
                                <td className="py-2 px-4">{item.totaldoller}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-4 float-right bg-white rounded-xl mt-4 flex justify-between w-full">
                    <h1 className="font-semibold">Total</h1>
                    <div className="flex gap-16">
                        <p className="font-semibold">28hr 13m</p>
                        <p className="font-semibold">$479.83</p>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default page