import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseOutlined } from '@mui/icons-material';

function SelectionModal({ isModalOpen, setIsModalOpen, setIsAdminModalOpen }) {
    const [selected, setSelected] = useState({ option1: false, option2: false })
    const [btn, setBtn] = useState(false)
    const submitHandle = () => {
        if (selected.option1) {
            setIsModalOpen(false)
            setIsAdminModalOpen(true)
        }
    }
    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { setIsModalOpen(false); setSelected({ option1: false, option2: false }); setBtn(false) }}>
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
                                    <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-900">
                                        <CloseOutlined />
                                    </button>
                                </div>
                                <div className="mt-4 p-2 ">
                                    <div
                                        className={`p-4 py-6 text-center   ${selected.option1 ? 'bg-indigo-100 border-primary' : ''} cursor-pointer rounded-lg border  duration-200 w-full mb-4`}
                                        onClick={() => {
                                            setSelected({ option1: true, option2: false });
                                            setBtn(true)
                                        }}
                                    >
                                        <h4 className="text-xl font-semibold text-gray-700 mb-2">Administrator <span className='text-sm bg-slate-300/80 px-4 p-2 text-gray-700 rounded-xl'>1/6</span></h4>
                                        <p className="text-sm">Full access</p>
                                    </div>
                                    <div
                                        className={`p-4 py-6 text-center ${selected.option2 ? 'bg-indigo-100 border-primary' : ''} cursor-pointer rounded-lg border duration-200 w-full mb-4`}
                                        onClick={() => {
                                            setSelected({ option1: false, option2: true });
                                            setBtn(true)
                                        }}
                                    >
                                        <h4 className="text-xl font-semibold text-gray-700 mb-2">Employee/Subcontractor</h4>
                                        <p className="text-xs">Access to employee portal (Tasks, timesheet, daily logs)</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-end space-x-4 w-full">
                                    <button
                                        onClick={() => { setIsModalOpen(false); setSelected({ option1: false, option2: false }); setBtn(false) }}
                                        className="w-1/2 px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={submitHandle}
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