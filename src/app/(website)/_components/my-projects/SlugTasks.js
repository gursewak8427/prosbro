"use client";

import React, { useEffect, useRef, useState } from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import { Download, DownloadDone, Group, KeyboardArrowDown, KeyboardArrowUp, UploadFile } from '@mui/icons-material';

function SlugTasks() {

    const dropdownRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        function handleClickOutside() {

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                if (btnRef.current && !btnRef.current.contains(event.target))
                    setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const data = [
        {
            discription: 'Protect floors',
            comments: '0',
            assignees: '',
            startdate: '21/02/2023',
            duedate: '11/08/2023',
            completedon: '',
            status: '',
        },
    ]

    return (
        <div>
            <div className='flex justify-between gap-5 mt-5 mb-5 '>
                <div className='flex gap-5'>
                    <select
                        name="assignees"
                        className={`h-11 px-3 py-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-gray-500 text-sm`}
                    >
                        <option value="" disabled selected>Select assignees</option>
                        <option value="gurvinder">Gurvinder Singh</option>
                        <option value="gagandeep">Gagandeep</option>
                        <option value="rupinderpal">Rupinderpal</option>
                        <option value="ajmer">Ajmer Dhillon</option>
                        <option value="principal">Principal Singh</option>
                    </select>

                    <div className="relative w-80">
                        <button
                            ref={btnRef}
                            className="h-11  w-full  px-3 py-2 border bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleDropdown();
                            }}
                        >
                            <div className="w-full flex justify-between items-center">
                                <span className="mr-2 text-gray-500 text-sm w-full text-left">Select status</span>
                                {isOpen ? <KeyboardArrowUp className="text-gray-500" /> : <KeyboardArrowDown className="text-gray-500" />}
                            </div>
                        </button>
                        {isOpen && (
                            <div ref={dropdownRef} className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full z-50 shadow-xl">
                                <ul className="py-2 max-h-60 overflow-auto">
                                    <li className="text-center text-sm p-2 bg-primary-soft text-primary-dark m-2 rounded-lg cursor-pointer hover:shadow-xl">
                                        Not started
                                    </li>
                                    <li className="text-center text-sm p-2 bg-orange-500  text-orange-700 bg-opacity-40 m-2 rounded-lg cursor-pointer hover:shadow-xl">
                                        In progress
                                    </li>
                                    <li className="text-center text-sm p-2 bg-green-500  text-green-700 bg-opacity-40 m-2 rounded-lg cursor-pointer hover:shadow-xl">
                                        Completed
                                    </li>
                                    <li className="text-center text-sm p-2 bg-gray-500  text-gray-700 bg-opacity-40 m-2 rounded-lg cursor-pointer hover:shadow-xl">
                                        Cancelled
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* <select
                        name="status"
                        className={`h-11 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary`}
                    >
                        <option value="" disabled selected>Select status</option>
                        <option value="not_started">Not started</option>
                        <option value="in_progress">In progress</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select> */}
                </div>

                <div className='flex gap-5'>
                    <div className='flex gap-5 text-primary hover:text-gray-600 items-center'>
                        <button className='text-sm font-semibsold'><Group /> Manage team</button>
                    </div>
                    <div className='flex gap-5 text-primary hover:text-gray-600 items-center'>
                        <button className='text-sm font-semibsold'><Download /> Export PDF</button>
                    </div>
                    <div className='flex items-center'>
                        <button className='font-semibold px-4 py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-200'><AddIcon /> Add task</button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg mt-5">
                <table className="min-w-full bg-white">

                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Discription</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Comments</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Assigness</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Start date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Due date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Completed on</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.discription}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><ChatBubbleOutlineIcon className='text-sm mr-1' />{item.comments}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200 flex items-center justify-center space-x-2">
                                    <span className="w-10 h-10 rounded-full bg-green-400 text-white flex items-center justify-center">
                                        G.
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-primary">
                                        <AddIcon className="text-primary" />
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.startdate}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.duedate}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><button className='text-primary'>Add</button></td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">
                                    <select class="p-2 rounded-lg border border-gray-300">
                                        <option value="" disabled selected>Select status</option>
                                        <option value="not_started">Not started</option>
                                        <option value="in_progress">In progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div >
    )
}

export default SlugTasks;