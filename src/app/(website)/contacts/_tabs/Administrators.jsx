import React, { useEffect, Fragment, useState } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { CloseOutlined, DeleteOutline } from '@mui/icons-material';
import { toast } from 'react-toastify';

const people = [
    {
        name: "Gurvinder ",
        email: "aghreno+test@gmail.com",
        role: "OWNER",
    },
    {
        name: "Hitesg Bedi ",
        email: "aghreno+test@gmail.com",
        role: "Admin",
    },
];


export const AdminstratorsTable = () => {
    const [activeUser, setActiveUser] = useState(-1)

    return <>
        <div className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-700 px-4'>2 administrator of 6</div>

        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Email</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Role </th>
                        <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item, idx) => (
                        <tr key={idx} className="border-b text-center cursor-pointer">
                            <td className="py-4 px-4 flex items-center space-x-3">
                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                    {item.name.split(' ').map(word => word[0]).join('')}
                                </span>
                                <span className='text-sm font-semibold'>{item.name}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-left">{item.email}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.role}</td>
                            <td className="py-4 px-4 text-sm text-right">
                                {
                                    ["admin"]?.includes(item?.role?.toLocaleLowerCase()) && <button className='hover:bg-red-400 w-8 h-8 rounded-full transition duration-500' onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveUser(item)
                                    }}>
                                        <DeleteOutline className='text-red-400 hover:text-white transition duration-500' />
                                    </button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <AlertRemoveUser isOpen={activeUser !== -1} onCancel={() => {
            setActiveUser(-1)
        }} onConfirm={() => {
            toast.success("User Removed Successfully")
            setActiveUser(-1)
        }} />
    </>
}

export const AlertRemoveUser = ({ isOpen, onCancel, onConfirm }) => {

    return <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onCancel}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <div className="flex justify-between items-center mb-4 p-6">
                                <h2 className="text-lg font-semibold">Are you sure you want to delete this user ?</h2>
                                <button onClick={onCancel} className="text-gray-600 hover:text-gray-900">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <div className="w-full h-[40px]">

                            </div>
                            <div className="flex flex-row justify-end space-x-4 w-full absolute bottom-0 bg-white p-4">
                                <button
                                    className="w-1/2 px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                    onClick={onCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="w-1/2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={onConfirm}
                                >
                                    Remvoe User
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
}