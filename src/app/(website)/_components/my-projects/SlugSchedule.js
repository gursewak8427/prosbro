import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AddIcon from '@mui/icons-material/Add';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Switch } from '@mui/material';
import { themeColors } from '../../../../../constants';

function SlugSchedule() {
    const data = [
        {
            category: 'General Condition',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Site Preparation',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Foundation',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Framing',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Roofing',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Exterior Walls',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Windows and Doors',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Plumbing',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Electrical',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'HVAC',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Insulation',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Drywall',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Interior Finishes',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Exterior Finishes',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
        {
            category: 'Final Inspection',
            duedate: 'Enter date',
            duration: '0 Days',
            progression: '0%',
        },
    ];

    return (
        <div className='p-4'>

            <div className='flex items-center justify-between'>
                <div className='flex bg-white p-2 rounded-lg items-center gap-2'>
                    <div className='p-2 px-3 bg-gray-300 rounded-lg'>
                        <button><MenuIcon /> List</button>
                    </div>
                    <div className='p-2 px-3 rounded-lg hover:bg-gray-300'>
                        <button><CalendarTodayIcon /> Calender</button>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                        <h1>Share with client</h1>
                        <button><ToggleOnIcon className='text-5xl' /></button>
                    </div>
                    <div className='flex gap-5 text-primary hover:text-gray-600 items-center'>
                        <button className='text-sm font-semibsold'><LocalPrintshopIcon /> Print</button>
                    </div>
                    <div className='flex items-center'>
                        <button className='font-semibold px-4 py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-200'><AddIcon /> Add a category to schedule</button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg mt-5">
                <table className="min-w-full bg-white">

                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Categories</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Due date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Duration</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Progression</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100"></th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><MoreVertIcon className='float-left text-xs mt-1.5  text-gray-400' /> <RadioButtonUncheckedIcon className='text-gray-500 float-left' /> {item.category}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.duedate}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.duration}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.progression}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><LibraryAddIcon className='text-primary' /></td>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><DeleteIcon className='text-primary' /></td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SlugSchedule