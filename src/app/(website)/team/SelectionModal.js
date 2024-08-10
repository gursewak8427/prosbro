import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';

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
                                <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Add a team member
                                </DialogTitle>
                                <div className="mt-4 p-2 ">
                                    <div
                                        className={`p-4 text-center   ${selected.option1 ? 'bg-indigo-100' : ''} cursor-pointer text-black rounded-lg border border-indigo-600  duration-200 w-full mb-4`}
                                        onClick={() => {
                                            setSelected({ option1: true, option2: false });
                                            setBtn(true)
                                        }}
                                    >
                                        <h4 className="text-xl font-semibold mb-2">Administrator <span className='text-sm bg-gray-400 p-2 text-gray-700 rounded-xl'>1/6</span></h4>
                                        <p className="text-sm">Full access</p>
                                    </div>
                                    <div
                                        className={`p-4 text-center ${selected.option2 ? 'bg-indigo-100' : ''} cursor-pointer text-black rounded-lg border border-indigo-600 duration-200 w-full mb-4`}
                                        onClick={() => {
                                            setSelected({ option1: false, option2: true });
                                            setBtn(true)
                                        }}
                                    >
                                        <h4 className="text-xl font-semibold mb-2">Employee/Subcontractor</h4>
                                        <p className="text-xs">Access to employee portal (Tasks, timesheet, daily logs)</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between gap-2">
                                    <button
                                        type="button"
                                        className="w-1/2 inline-flex justify-center rounded-md border border-indigo-600  px-4 py-2 text-sm font-medium bg-slate-200 text-black hover:bg-indigo-600 hover:text-white focus:outline"
                                        onClick={() => { setIsModalOpen(false); setSelected({ option1: false, option2: false }); setBtn(false) }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className={`w-1/2 inline-flex justify-center rounded-md ${btn ? 'bg-indigo-600 hover:bg-blue-700 cursor-pointer text-white' : 'text-black cursor-not-allowed'}  px-4 py-2 bg-gray-200   text-sm font-mediumfocus:outline`}
                                        onClick={submitHandle}
                                        disabled={!btn}
                                    >
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