"use client";
import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseOutlined, MoreVert } from '@mui/icons-material';
import { ProfessionalTable } from './_tabs/Professional';
import { EmployeeTable } from './_tabs/Employees';
import { AdminstratorsTable } from './_tabs/Administrators';
import { ClientsTable } from './_tabs/Clients';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { NewEmployee } from './_components/NewEmployee';
import { NewAdmin } from './_components/NewAdmin';
import { NewProfessional } from './_components/NewProfessional';

const classActiveTab = "text-sm pb-2 text-gray-700 border-b-2 border-b-primary cursor-pointer"
const classInActiveTab = "text-sm pb-2 text-gray-700 border-b-2 border-transparent cursor-pointer hover:border-gray-400"

const MainContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tab, setTab] = useState("");
    const tabName = searchParams.get('tab');
    const [addContactType, setAddContactType] = useState(null)

    useEffect(() => {
        if (tabName) setTab(tabName)
        else setTab("clients")
    }, [tabName])

    const handleNavigate = (tabName) => {
        router.push(`/contacts?tab=${tabName}`)
        setTab(tabName)
    }

    return (
        <div className='p-6 flex-1 min-h-screen bg-gray-200 shadow-md gap-4 flex flex-col items-start justify-start'>
            <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Contacts</h1>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-white px-4 py-2 rounded bg-primary hover:bg-primary-dark duration-200">
                    + Add a contact
                </button>
            </div>

            <div className='mt-5 mb-5 select-none'>
                <ul className='flex space-x-7 border border-b-gray-300'>
                    <li onClick={() => handleNavigate("clients")} className={`${tab == "clients" ? classActiveTab : classInActiveTab}`}>Clients</li>
                    <li onClick={() => handleNavigate("professional")} className={`${tab == "professional" ? classActiveTab : classInActiveTab}`}>Professional</li>
                    <li onClick={() => handleNavigate("employees")} className={`${tab == "employees" ? classActiveTab : classInActiveTab}`}>Employees</li>
                    <li onClick={() => handleNavigate("administrators")} className={`${tab == "administrators" ? classActiveTab : classInActiveTab}`}>Administrators</li>
                </ul>
            </div>

            {
                tab == "clients" ? <ClientsTable /> :
                    tab == "professional" ? <ProfessionalTable /> :
                        tab == "employees" ? <EmployeeTable /> :
                            tab == "administrators" && <AdminstratorsTable />
            }

            <SelectionModel show={isModalOpen} onClose={() => {
                setIsModalOpen(false)
            }} onSelect={(selected) => {
                setAddContactType(selected)
                setIsModalOpen(false)
                if (selected == "client") {
                    router.push(`/my-projects/new/project-creation`)
                }
            }} />
            <NewEmployee isOpen={addContactType === "employee"} onClose={() => setAddContactType(null)} />
            <NewAdmin isOpen={addContactType === "admin"} onClose={() => setAddContactType(null)} />
            <NewProfessional isOpen={addContactType === "professional"} onClose={() => setAddContactType(null)} />
        </div>
    )
}

export default MainContent;


const SelectionModel = ({ show, onClose, onSelect }) => {
    const [select, setSelect] = useState(-1)

    const handleClose = () => {
        onClose()
        setSelect(-1)
    }

    const handleSelect = () => {
        onSelect(select)
        setSelect(-1)
    }

    return (<Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
                        <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Add a contact</h2>
                                <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                                    <CloseOutlined />
                                </button>
                            </div>
                            <div className="mt-4 p-2">
                                <div
                                    className={`py-6 p-4 text-center cursor-pointer rounded-lg border  duration-200 w-full mb-4 ${select == "employee" ? "bg-primary-soft border border-primary" : ""}`}
                                    onClick={() => setSelect("employee")}
                                >
                                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Employee / Subcontractor</h4>
                                    <p className="text-xs">Access to employee portal (Tasks, timesheet, daily logs)</p>
                                </div>
                                <div
                                    className={`py-6 p-4 text-center cursor-pointer rounded-lg border duration-200 w-full mb-4 ${select == "admin" ? "bg-primary-soft border border-primary" : ""}`}
                                    onClick={() => setSelect("admin")}
                                >
                                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Administrator</h4>
                                    <p className="text-xs">Full access</p>
                                </div>
                                <div
                                    className={`py-6 p-4 text-center cursor-pointer rounded-lg border duration-200 w-full mb-4 ${select == "professional" ? "bg-primary-soft border border-primary" : ""}`}
                                    onClick={() => setSelect("professional")}
                                >
                                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Professional</h4>
                                    <p className="text-xs">No access to the software (For architects, subcontractors)</p>
                                </div>
                                <div
                                    className={`py-6 p-4 text-center cursor-pointer rounded-lg border duration-200 w-full mb-4 ${select == "client" ? "bg-primary-soft border border-primary" : ""}`}
                                    onClick={() => setSelect("client")}
                                >
                                    <h4 className="text-xl font-semibold text-gray-700 mb-2">Client</h4>
                                    <p className="text-xs">Access to client dashboard only (Quotes, invoices)</p>
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
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>)
}