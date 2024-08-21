"use client";
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const people = [
    {
        name: "Gurvinder ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "1"

    },
    {
        name: "Hitesg Bedi ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "3"
    },
    {
        name: "Muhhamad ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "1"
    },
    {
        name: "Rajupal",
        email: "aghreno+test@gmail.com",
        phoneNumber: "",
        relatedprojects: "2"
    },
    {
        name: "Rajupal",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: ""
    },
    {
        name: "Ramandeep",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "2"
    },
    {
        name: "Ramandeep ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "1"
    }
];

const MainContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Contacts</h1>

                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-white px-4 py-2 rounded bg-primary hover:bg-indigo-700 duration-200">
                    + Add a contact
                </button>
            </div>

            <div className='mt-5 mb-5'>
                <ul className='w-1/2 flex gap-4 border border-b-gray-400'>
                    <li className='text-gray-700 border-2 border-b-primary'>Clients</li>
                    <li className='text-gray-700'>Professional</li>
                    <li className='text-gray-700'>Employees</li>
                    <li className='text-gray-700'>Administrators</li>
                </ul>
            </div>

            <div className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-600'>
                <p>7 Clients</p>
            </div>

            <div className="overflow-x-auto mt-5 mb-5 p-4 bg-gray-100 rounded-lg shadow-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-gray-500">Name</th>
                            <th className="py-2 px-4 border-b text-gray-500">Email</th>
                            <th className="py-2 px-4 border-b text-gray-500">Phone </th>
                            <th className="py-2 px-4 border-b text-gray-500">Related Projects</th>

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
                                <td className="py-2 px-4">{item.email}</td>
                                <td className="py-2 px-4">{item.phoneNumber}</td>
                                <td className="py-2 px-4">{item.relatedprojects}</td>

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
                                        Add a contact
                                    </Dialog.Title>
                                    <div className="mt-4 p-2 ">
                                        <div
                                            className=" p-4 text-center  cursor-pointer text-black rounded-lg border border-primary  duration-200 w-full mb-4"
                                            onClick={() => console.log('Add customer yourself clicked')}
                                        >
                                            <h4 className="text-xl font-semibold mb-2">Employee / Subcontractor</h4>
                                            <p className="text-xs">Access to employee portal (Tasks, timesheet, daily logs)</p>
                                        </div>
                                        <div
                                            className=" p-4 text-center cursor-pointer text-black rounded-lg border border-primary duration-200 w-full mb-4"
                                            onClick={() => console.log('Share magic link clicked')}
                                        >
                                            <h4 className="text-xl font-semibold mb-2">Administrator</h4>
                                            <p className="text-xs">Full access</p>
                                        </div>
                                        <div
                                            className=" p-4 text-center cursor-pointer text-black rounded-lg border border-primary duration-200 w-full mb-4"
                                            onClick={() => console.log('Share magic link clicked')}
                                        >
                                            <h4 className="text-xl font-semibold mb-2">Professional</h4>
                                            <p className="text-xs">No access to the software (For architects, subcontractors)</p>
                                        </div>
                                        <div
                                            className=" p-4 text-center cursor-pointer text-black rounded-lg border border-primary duration-200 w-full mb-4"
                                            onClick={() => console.log('Share magic link clicked')}
                                        >
                                            <h4 className="text-xl font-semibold mb-2">Client</h4>
                                            <p className="text-xs">Access to client dashboard only (Quotes, invoices)</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between gap-2">
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md border border-primary  px-4 py-2 text-sm font-medium bg-slate-200 text-black hover:bg-primary hover:text-white focus:outline"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md  px-4 py-2 bg-gray-200 text-black hover:bg-primary hover:text-white text-sm font-mediumfocus:outline"
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
    )
}

export default MainContent;