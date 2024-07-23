"use client";
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';



const MainContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const singlePeople = [
        {
            name: "Gurvinder ",
            email: "aghreono@gmail.com",
            role: "OWENER"

        }
    ]

    const people = [
        {
            name: "Gurvinder ",
            currentStatus: "Clocked In",
            phoneNumber: "555-1234",
            jobTitle: "Owner",
            smsReminder: true
        },
        {
            name: "Princepal Singh",
            currentStatus: "Clocked Out",
            phoneNumber: "555-5678",
            jobTitle: "Supervisor",
            smsReminder: false
        },
        {
            name: "Rupundrapal Singh",
            currentStatus: "Clocked Out",
            phoneNumber: "555-8765",
            jobTitle: "-",
            smsReminder: true
        },
        {
            name: "Ajmer Dhillon",
            currentStatus: "Clocked in",
            phoneNumber: "555-4321",
            jobTitle: "-",
            smsReminder: false
        },
        {
            name: "Gagandeep Singh",
            currentStatus: "Clocked Out",
            phoneNumber: "555-9876",
            jobTitle: "-",
            smsReminder: true
        }
    ];

    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">My team</h1>

                </div>
                <button
                 onClick={() => setIsModalOpen(true)}
                    className="text-white px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 duration-200">
                    + Add a team member
                </button>
            </div>

            <div>
                <div className='flex gap-4 '>
                    <h1 className='text-2xl font-semibold'>Admin</h1>
                    <p className='bg-gray-300 text-gray-600 text-center mb-3 items-center px-4 py-2 text-sm rounded-lg'>1 administrator of 6</p>
                </div>
                <p>
                    Administrators will have the same access to the software as you do
                </p>

            </div>

            {
                singlePeople.map((item, idx) => {
                    return (
                        <div className="overflow-x-auto mt-5 mb-5">
                            <table className="min-w-full bg-white rounded-lg ">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Role</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {singlePeople.map((item, idx) => (
                                        <tr key={idx} className="border-b text-center">
                                            <td className="py-2 px-4 flex items-center space-x-3">
                                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                                    {item.name.split(' ').map(word => word[0]).join('')}
                                                </span>
                                                <span>{item.name}</span>
                                            </td>
                                            <td className="py-2 px-4">{item.email}</td>
                                            <td className="py-2 px-4">{item.role}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                })
            }

            <div className='mt-10 mb-5'>
                <div className='flex gap-4 '>
                    <h1 className='text-2xl font-semibold'>Employees or subcontractors</h1>
                    <p className='bg-gray-300 text-gray-600 text-center mb-3 items-center px-4 py-2 text-sm rounded-lg'>
                        5 members</p>
                </div>
                <p>
                    No access to your account, only to the mobile portal for timesheets, daily logs, and tasks
                </p>

            </div>

            <div className="overflow-x-auto mt-5 mb-5 p-4 bg-gray-100 rounded-lg shadow-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Current Status</th>
                            <th className="py-2 px-4 border-b">Phone Number</th>
                            <th className="py-2 px-4 border-b">Job Title</th>
                            <th className="py-2 px-4 border-b">SMS Reminder</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((item, idx) => (
                            <tr key={idx} className="border-b text-center">
                                <td className="py-2 px-4 flex items-center space-x-3">
                                    <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                        {item.name.split(' ').map(word => word[0]).join('')}
                                    </span>
                                    <span>{item.name}</span>
                                </td>
                                <td className="py-2 px-4">{item.currentStatus}</td>
                                <td className="py-2 px-4">{item.phoneNumber}</td>
                                <td className="py-2 px-4">{item.jobTitle}</td>
                                <td className="py-2 px-4">{item.smsReminder ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        Add New Project
                                    </Dialog.Title>
                                    <div className="mt-4 p-2 ">
                                        <div
                                            className=" p-4 text-center  cursor-pointer text-black rounded-lg border border-indigo-600  duration-200 w-full mb-4"
                                            onClick={() => console.log('Add customer yourself clicked')}
                                        >
                                            <h4 className="text-xl font-semibold mb-2">Administrator <span className='text-sm bg-gray-400 p-2 text-gray-700 rounded-xl'>1/6</span></h4>
                                            <p className="text-sm">Full access</p>
                                        </div>
                                        <div
                                            className=" p-4 text-center cursor-pointer text-black rounded-lg border border-indigo-600 duration-200 w-full mb-4"
                                            onClick={() => console.log('Share magic link clicked')}
                                        >
                                            <h4 className="text-xl font-semibold mb-2">Employee/Subcontractor</h4>
                                            <p className="text-xs">Access to employee portal (Tasks, timesheet, daily logs)</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between gap-2">
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md border border-indigo-600  px-4 py-2 text-sm font-medium bg-slate-200 text-black hover:bg-indigo-600 hover:text-white focus:outline"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md  px-4 py-2 bg-gray-200 text-black hover:bg-indigo-600 hover:text-white text-sm font-mediumfocus:outline"
                                            onClick={console.log("Confirm")}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>




    );
}

export default MainContent;
