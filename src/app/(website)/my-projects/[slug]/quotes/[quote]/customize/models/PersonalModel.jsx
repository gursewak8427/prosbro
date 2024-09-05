import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseOutlined } from '@mui/icons-material';
import { Business } from '@/app/(website)/settings/_tabs/business';

export const PersonalModel = ({ isModalOpen, setIsModalOpen, }) => {
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
                                <h2 className="text-2xl font-semibold">Personal Information</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-900">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <div className='my-4 flex flex-col gap-3'>
                                <div className="w-full">
                                    <input type="text" placeholder='Name' className='border border-gray-400 rounded-lg p-2 text-gray-500 w-full' />
                                </div>
                                <div className="w-full flex flex-row gap-3">
                                    <input type="text" placeholder='Email' className='border border-gray-400 rounded-lg p-2 text-gray-500 w-1/2' />
                                    <input type="text" placeholder='Secondary Email' className='border border-gray-400 rounded-lg p-2 text-gray-500 w-1/2' />
                                </div>
                                <div className="w-full flex flex-row gap-3">
                                    <input type="text" placeholder='Phone' className='border border-gray-400 rounded-lg p-2 text-gray-500 w-1/2' />
                                    <input type="text" placeholder='Language' className='border border-gray-400 rounded-lg p-2 text-gray-500 w-1/2' />
                                </div>
                            </div>
                            <div className="flex flex-row justify-start space-x-4 w-full">
                                <button
                                    className="w-1/2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                                    Save
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
}