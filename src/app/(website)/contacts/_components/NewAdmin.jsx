import React, { Fragment } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { CloseOutlined } from '@mui/icons-material';

export const NewAdmin = ({ isOpen, onClose }) => {

    return <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                        <DialogPanel className="w-full h-[150px] max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <div className="flex justify-between items-center mb-4 p-6">
                                <h2 className="text-lg font-semibold">Add an administrator</h2>
                                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <div className="flex flex-row justify-end space-x-4 w-full absolute bottom-0 bg-white p-4">
                                <input
                                    type="email"
                                    placeholder='email@domain.com'
                                    className="block w-full border border-gray-300 rounded-md px-2"
                                />
                                <button
                                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                                    onClick={null}
                                >
                                    Invite
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
}