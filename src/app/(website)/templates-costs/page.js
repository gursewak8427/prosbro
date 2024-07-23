"use client";
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Templates() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md'>
            <div>
                <h1 className="text-3xl font-bold">Templates</h1>
                <div className='mt-5 mb-5'>
                    <ul className=' w-8/12 flex gap-4 border border-b-gray-400'>
                        <li className='text-gray-700 border-2 border-b-indigo-600'>Billdr templates</li>
                        <li className='text-gray-700'>My templates</li>
                        <li className='text-gray-700'>My cost catalog</li>
                        <li className='text-gray-700'>Categories</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <button
                    className="text-white px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 duration-200 ml-auto"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Create a new template
                </button>
            </div>

            <div className='mt-5 mb-5'>
                <div className='flex flex-wrap gap-4'>
                    {/* Template cards */}
                    {[
                        {
                            imgSrc: "https://th.bing.com/th/id/OIP.PUuevUFoxDO5lRMcQBdQnAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7",
                            title: "New Build",
                            description: "Contemporary wood frame house on a concrete foundation",
                            price: "$193k"
                        },
                        {
                            imgSrc: "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/06/29154124/kitchen-nakul-baghel.jpeg",
                            title: "Kitchen remodel standard",
                            description: "Renovation of standard low to mid-end kitchen",
                            price: "$36k"
                        },
                        {
                            imgSrc: "https://th.bing.com/th/id/OIP._LLumzR0wnTykqBEHaq7pAHaFC?w=182&h=124&c=7&r=0&o=5&pid=1.7",
                            title: "Bathroom Remodel- High End 10X10",
                            description: "Contemporary wood frame house on a concrete foundation",
                            price: "$26k"
                        },
                        {
                            imgSrc: "https://th.bing.com/th/id/OIP.BNJ4V6jItBKycrHY2ZJb1gAAAA?rs=1&pid=ImgDetMain",
                            title: "New Build",
                            description: "Contemporary wood frame house on a concrete foundation",
                            price: "$193k"
                        },
                        {
                            imgSrc: "https://th.bing.com/th/id/OIP.mbiP8QOpyoMe8bdnmm-zKwHaE8?rs=1&pid=ImgDetMain",
                            title: "Bathroom Remodel- High End 5X5",
                            description: "Contemporary wood frame house on a concrete foundation",
                            price: "$193k"
                        }
                    ].map((template, index) => (
                        <div key={index} className="flex bg-white basis-full md:basis-[calc(50%-1rem)] p-4 rounded-lg shadow-lg">
                            <img
                                src={template.imgSrc}
                                alt="House"
                                className="w-1/3 h-auto rounded-lg object-cover"
                            />
                            <div className="flex flex-col justify-between ml-4 w-full">
                                <div>
                                    <h1 className="text-xl font-semibold">{template.title}</h1>
                                    <p className="text-gray-600 text-sm mt-2">{template.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <h1 className="text-2xl font-bold text-indigo-600">{template.price}</h1>
                            </div>
                        </div>
                    ))}
                </div>
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
                                        Create a new template
                                    </Dialog.Title>
                                    <div className="mt-4 p-2">
                                        <form className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-900">Title</label>
                                                <input
                                                    type="text"
                                                    placeholder="Kitchen remodel"
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-indigo-600 focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-900">Description</label>
                                                <textarea
                                                    placeholder="Includes cabinetry, trim, plumbing, electrical..."
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-indigo-600 focus:outline-none h-32"
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4 flex justify-between gap-2">
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium bg-slate-200 text-black hover:bg-indigo-600 hover:text-white focus:outline"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md px-4 py-2 bg-gray-200 text-black hover:bg-indigo-600 hover:text-white text-sm font-medium focus:outline"
                                            onClick={() => console.log('Confirm')}
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
    );
}
