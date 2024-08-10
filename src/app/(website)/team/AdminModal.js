import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';

function AdminModal({ isModalOpen, setIsModalOpen }) {
    const [selected, setSelected] = useState({ option1: false, option2: false })
    const [btn, setBtn] = useState(false)
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
                                    Add an administrator
                                </DialogTitle>
                                <div class="item-start flex w-full gap-4">
                                    <div class="flex flex-col">
                                        <div class="relative my-2 flex rounded-md">
                                            <input id="inviteeEmail"
                                                type="email"
                                                name="inviteeEmail"
                                                placeholder="email@domain.com"
                                                autocomplete="email"
                                                class="base-cell border bg-neutral-10 py-3 px-2 text-left text-base text-secondary focus:border-transparent focus:outline-primary h-11 w-80 rounded-lg" value=""
                                            />
                                        </div>
                                    </div>
                                    <button
                                        class="flex items-center cursor-pointer rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row pl-4 pr-4 py-3 text-base gap-2 justify-center bg-indigo-700 text-neutral-50 hover:bg-blue-800 mt-1.5 h-fit w-fit"
                                        type="button"
                                    >Invite member</button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default AdminModal