import React, { useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseOutlined } from '@mui/icons-material';
import { Business } from '@/app/(website)/settings/_tabs/business';

export const CoverImageModel = ({ isModalOpen, setIsModalOpen, }) => {


    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
        }
    }, [isModalOpen])

    return <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => { setIsModalOpen(false); }}>
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
                        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Change Cover Image</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-900">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <div className='my-4 flex items-center justify-center'>
                                <img
                                    src="https://via.placeholder.com/150" // Replace with your logo URL
                                    alt="Company Logo"
                                    className="h-48 w-48 object-contain mb-2"
                                />
                            </div>
                            <div className="flex flex-row justify-end space-x-4 w-full">
                                <input type="file" className='hidden' name="changepicture" id='changepicture' />
                                <label
                                    htmlFor='changepicture'
                                    className="w-1/2 px-4 py-2 text-center border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                >
                                    Change Picture
                                </label>
                                <button
                                    className="w-1/2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                                    Confirm
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
}