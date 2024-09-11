"use client";
import React, { useEffect, Fragment, useRef, useState } from "react";
import dynamic from "next/dynamic";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import MapIcon from "@mui/icons-material/Map";
import { useDispatch, useSelector } from "react-redux";
import { Fetchprojects, TotalProjects } from "@/app/redux/Project/ProjectSlice";
import { useRouter, useSearchParams } from "next/navigation";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { KeyboardArrowUp } from "@mui/icons-material";
import { Dialog, Transition } from '@headlessui/react';
import { BilldrQuotes } from "./_tabs/BilldrQuotes";
import { MyQuotes } from "./_tabs/MyQuotes";
import { MyCostCatalog } from "./_tabs/MyCostCatalog";
import { MyCategories } from "./_tabs/MyCategories";
import { CostCodes } from "./_tabs/CostCodes";
import { BilldrSchedules } from "./_tabs/BilldrSchedules";
import { MySchedules } from "./_tabs/MySchedules";

export default function Templates() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    let _tab = searchParams.get("tab")

    console.log({ _tab })

    useEffect(() => {
        if (_tab) setSelected(_tab)
    }, [_tab])

    useEffect(() => updateUrl(), [selected])

    const updateUrl = () => {
        const newUrl = `${window.location.pathname}?tab=${selected}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
    };

    const renderTab = () => {
        switch (selected) {
            case "builderquotes": return <BilldrQuotes />
            case "myquotes": return <MyQuotes />
            case "mycostcatalog": return <MyCostCatalog />
            case "mycategories": return <MyCategories />
            case "costcodes": return <CostCodes />
            case "billdrschedules": return <BilldrSchedules />
            case "myschedules": return <MySchedules />
        }
    }

    return (
        <div className="p-8 h-full min-h-screen flex-1 bg-gray-200 shadow-md">
            <h1 className="mb-9 flex items-center gap-4 leading-9 whitespace-nowrap text-[2rem] font-bold">Templates & costs</h1>

            {/* Tab List */}
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="border-b border-gray-300 w-full md:w-auto">
                        <ul className="flex flex-wrap gap-4 text-gray-800 text-sm font-medium">
                            <li
                                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "builderquotes"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("builderquotes");
                                }}
                            >
                                Builder quotes
                            </li>
                            <li
                                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "myquotes"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("myquotes");
                                }}
                            >
                                My quotes
                            </li>

                            <li
                                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "mycostcatalog"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("mycostcatalog");
                                }}
                            >
                                My cost catalog
                            </li>
                            <li
                                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "mycategories"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("mycategories");
                                }}
                            >
                                My categories
                            </li>
                            <li
                                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "costcodes"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("costcodes");
                                }}
                            >
                                Cost codes
                            </li>
                            <li
                                className={`cursor-pointer  border-b-2  pb-2 transition-colors duration-200   ${selected === "billdrschedules"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("billdrschedules");
                                }}
                            >
                                Billdr schedules
                            </li>
                            <li
                                className={`cursor-pointer  border-b-2  pb-2 transition-colors duration-200   ${selected === "myschedules"
                                    ? "text-indigo-500 border-primary"
                                    : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                                    }`}
                                onClick={() => {
                                    setSelected("myschedules");
                                }}
                            >
                                My schedules
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                {renderTab()}
            </div>
            {/* <div className='flex'>
                <button
                    className="text-white px-4 py-2 rounded-lg bg-primary hover:bg-indigo-700 duration-200 ml-auto"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Create a new template
                </button>
            </div> */}

            {/* <div className='mt-5 mb-5'>
                <div className='flex flex-wrap gap-4'>
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
                                <h1 className="text-2xl font-bold text-primary">{template.price}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

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
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-primary focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-900">Description</label>
                                                <textarea
                                                    placeholder="Includes cabinetry, trim, plumbing, electrical..."
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-2 focus:border-primary focus:outline-none h-32"
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4 flex justify-between gap-2">
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium bg-slate-200 text-black hover:bg-primary hover:text-white focus:outline"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="w-1/2 inline-flex justify-center rounded-md px-4 py-2 bg-gray-200 text-black hover:bg-primary hover:text-white text-sm font-medium focus:outline"
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
