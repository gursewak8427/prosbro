"use client";
import React, { useState } from 'react';
import SelectionModal from './SelectionModal';
import { ArrowRight, DeleteOutline, MoreVert } from '@mui/icons-material';
import { Menu, Switch } from '@mui/material';
import { MenuSection } from '@headlessui/react';
import { EditAnEmployee } from '../contacts/_tabs/Employees';
import { AlertRemoveUser } from '../contacts/_tabs/Administrators';
import { NewEmployee } from '../contacts/_components/NewEmployee';
import { NewAdmin } from '../contacts/_components/NewAdmin';



const MainContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeUser, setActiveUser] = useState(-1);
    const [activeAdmin, setActiveAdmin] = useState(-1);
    const [addTeamType, setAddTeamType] = useState(null)

    const singlePeople = [
        {
            name: "Gurvinder Singh",
            email: "aghreono@gmail.com",
            role: "OWENER"
        },
        {
            name: "Gurjeet Grewal",
            email: "gurgrewak143@gmail.com",
            role: "ADMIN"
        }
    ]

    const people = [
        {
            name: "Gurvinder ",
            currentStatus: "Clocked In",
            phoneNumber: "555-1234",
            jobTitle: "Owner",
            smsReminder: true
        },
        {
            name: "Princepal Singh",
            currentStatus: "Clocked Out",
            phoneNumber: "555-5678",
            jobTitle: "Supervisor",
            smsReminder: false
        },
        {
            name: "Rupundrapal Singh",
            currentStatus: "Clocked Out",
            phoneNumber: "555-8765",
            jobTitle: "-",
            smsReminder: true
        },
        {
            name: "Ajmer Dhillon",
            currentStatus: "Clocked in",
            phoneNumber: "555-4321",
            jobTitle: "-",
            smsReminder: false
        },
        {
            name: "Gagandeep Singh",
            currentStatus: "Clocked Out",
            phoneNumber: "555-9876",
            jobTitle: "-",
            smsReminder: true
        }
    ];

    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md gap-4 flex flex-col'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">My team</h1>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-white px-4 py-2 rounded bg-primary hover:bg-primary-dark duration-200">
                    + Add a team member
                </button>
            </div>

            <div className=''>
                <div className='flex gap-4 items-center my-2'>
                    <h1 className='text-xl font-semibold'>Admin</h1>
                    <p className='bg-gray-300 text-gray-600 text-center items-center px-4 py-2 text-sm rounded-lg'>1 administrator of 6</p>
                </div>
                <p className='text-gray-500'>
                    Administrators will have the same access to the software as you do
                </p>

            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg ">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Email</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Role</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {singlePeople.map((item, idx) => (
                            <tr key={idx} className="border-b text-center">
                                <td className="py-4 px-4 flex items-center space-x-3">
                                    <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                        {item.name.split(' ').map(word => word[0]).join('')}
                                    </span>
                                    <span className='text-sm'>{item.name}</span>
                                </td>
                                <td className="py-4 px-4 text-sm text-left">{item.email}</td>
                                <td className="py-4 px-4 text-sm text-left">{item.role}</td>
                                <td className="py-4 px-4 text-sm text-right">
                                    {
                                        ["admin"]?.includes(item?.role?.toLocaleLowerCase()) && <button className='hover:bg-red-400 w-8 h-8 rounded-full transition duration-500' onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveAdmin(item)
                                        }}>
                                            <DeleteOutline className='text-red-400 hover:text-white transition duration-500' />
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className=''>
                <div className='flex gap-4 items-center my-2'>
                    <h1 className='text-xl font-semibold'>Employees or subcontractors</h1>
                    <p className='bg-gray-300 text-gray-600 text-center items-center px-4 py-2 text-sm rounded-lg'>5 members</p>
                </div>
                <p className='text-gray-500'>
                    No access to your account, only to the mobile portal for timesheets, daily logs, and tasks
                </p>
            </div>

            <div className="">
                <div className="border-2 border-primary rounded-xl flex flex-row gap-3 p-3 items-center bg-primary-soft text-sm">
                    <div className="bg-white py-2 px-3 text-primary rounded-xl font-semibold">Note</div>
                    <p className="text-gray-500 flex flex-row gap-2">
                        <span>Set SMS reminders per user so they recieve a notification at the start and end of each working day.</span>
                        <span className="text-primary hover:text-primary-dark cursor-pointer">View how it works video <ArrowRight /></span>
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Current Status</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Phone Number</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700">Job Title</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700">SMS Reminder</th>
                            <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((item, idx) => (
                            <tr onClick={() => { setActiveUser(item) }} key={idx} className="border-b text-center cursor-pointer">
                                <td className="py-4 px-4 text-sm text-left flex items-center space-x-3">
                                    <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                        {item.name.split(' ').map(word => word[0]).join('')}
                                    </span>
                                    <span>{item.name}</span>
                                </td>
                                <td className="py-4 px-4 text-sm text-left">{item.currentStatus}</td>
                                <td className="py-4 px-4 text-sm text-left">{item.phoneNumber}</td>
                                <td className="py-4 px-4 text-sm text-left">{item.jobTitle}</td>
                                <td className="py-4 px-4 text-sm text-left flex flex-row gap-1 items-center">
                                    <p className='text-gray-500'>{item.smsReminder ? 'ON' : 'OFF'}</p>
                                    <Switch defaultChecked={item?.smsReminder} />
                                    <p className='text-gray-700 capitalize'>
                                        {
                                            ["mon", "tue", "wed"]?.join(", ")
                                        }
                                    </p>
                                </td>
                                <td className="py-4 px-4 text-sm text-right">
                                    <button className='w-8 h-8'>
                                        <MoreVert className='text-lg text-gray-700 hover:text-black' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <SelectionModal show={isModalOpen} onClose={() => {
                setIsModalOpen(false)
            }} onSelect={(selected) => {
                setAddTeamType(selected)
                setIsModalOpen(false)
            }} />

            <EditAnEmployee activeUser={activeUser} onClose={() => { setActiveUser(-1) }} />
            <AlertRemoveUser isOpen={activeAdmin !== -1} onCancel={() => {
                setActiveAdmin(-1)
            }} onConfirm={() => {
                toast.success("Admin Removed Successfully")
                setActiveAdmin(-1)
            }} />

            <NewEmployee isOpen={addTeamType === "employee"} onClose={() => setAddTeamType(null)} />
            <NewAdmin isOpen={addTeamType === "admin"} onClose={() => setAddTeamType(null)} />
        </div>
    );
}

export default MainContent;
