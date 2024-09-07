import React, { useEffect, Fragment, useState } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { CloseOutlined, DeleteOutline } from '@mui/icons-material';

export const DeleteAlert = ({ title, description, isOpen, onCancel, onConfirm }) => {

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
                        <DialogPanel className="pb-[90px] w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <div className="flex justify-between items-center p-6">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <button onClick={onCancel} className="text-gray-600 hover:text-gray-900">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <p className="text-gray-700 w-full px-6">{description}</p>
                            <div className="flex flex-row justify-end space-x-4 w-full absolute bottom-0 bg-white px-6 py-6">
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
                                    Delete
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
}