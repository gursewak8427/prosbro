import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseOutlined } from '@mui/icons-material';

function SelectionModal({ show, onClose, onSelect }) {
    const [select, setSelect] = useState(-1)

    const handleClose = () => {
        onClose()
        setSelect(-1)
    }

    const handleSelect = () => {
        onSelect(select)
        setSelect(-1)
    }

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
                                    <h2 className="text-2xl font-semibold">  Add a team member</h2>
                                    <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                                        <CloseOutlined />
                                    </button>
                                </div>
                                <div className="mt-4 p-2 ">
                                    <div
                                        className={`py-6 p-4 text-center cursor-pointer rounded-lg border  duration-200 w-full mb-4 ${select == "admin" ? "bg-primary-soft border border-primary" : ""}`}
                                        onClick={() => setSelect("admin")}
                                    >
                                        <h4 className="text-xl font-semibold text-gray-700 mb-2">Administrator <span className='text-sm bg-slate-300/80 px-4 p-2 text-gray-700 rounded-xl'>1/6</span></h4>
                                        <p className="text-sm">Full access</p>
                                    </div>
                                    <div
                                        className={`py-6 p-4 text-center cursor-pointer rounded-lg border  duration-200 w-full mb-4 ${select == "employee" ? "bg-primary-soft border border-primary" : ""}`}
                                        onClick={() => setSelect("employee")}
                                    >
                                        <h4 className="text-xl font-semibold text-gray-700 mb-2">Employee/Subcontractor</h4>
                                        <p className="text-xs">Access to employee portal (Tasks, timesheet, daily logs)</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-end space-x-4 w-full">
                                    <button
                                        onClick={handleClose}
                                        className="w-1/2 px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSelect}
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
    )
}

export default SelectionModal