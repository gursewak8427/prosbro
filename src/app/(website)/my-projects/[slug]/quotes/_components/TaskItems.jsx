"use client"
import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Bookmark, BookmarkAdd, BookmarkBorderOutlined, BookmarkOutlined, ContentCopy, CopyAll, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const TaskItems = ({ isEditable = true }) => {

    const data = [
        {
            title: "General conditions",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Plans and permitting",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Mobilization",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Demolition",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Structural wood",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Flooring",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Painting",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Electrical",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Doors and windows",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Plumbing",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "HVAC",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Walls - interior",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Walls - insulation",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Ceiling",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Ceiling - insulation",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Kitchen fixtures",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Kitchen countertops",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
        {
            title: "Appliances",
            estimateLabourTimeHours: 70,
            labourRateHours: 40,
            taskList: [{
                title: "General Admin Fees",
                quantity: 1,
                quantityType: "each",
                material: 1,
                labour: 1,
                markup: 0,
                total: 5220,
            }]
        },
    ]


    return <>
        {
            data?.map((item, index) => <div key={index} className="my-3">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<KeyboardArrowDownIcon className='text-indigo-600' />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="w-1/2 flex flex-row">
                                <h1 className='mr-2'><PersonIcon className='text-indigo-600' /></h1>
                                <h1 className='mr-2'>{item?.title}</h1>
                                {isEditable && <h1><EditOutlined className='text-indigo-600' /></h1>}
                            </div>
                            <div className="w-1/2 flex flex-row justify-end items-center">
                                {
                                    isEditable &&
                                    <div className="flex flex-col justify-end items-end mr-2">
                                        <p className='text-sm'>Estimate Labour time: {item?.estimateLabourTimeHours}h</p>
                                        <p className='text-sm'>Labour Rate: ${item?.labourRateHours}/h <EditOutlined className='text-indigo-600' /></p>
                                    </div>
                                }
                                {
                                    isEditable ?
                                        <input placeholder='$43' className='w-[150px] border border-gray-400 rounded-lg px-1 py-1 text-sm'></input> :
                                        <span className='mx-4 font-semibold'>$43</span>
                                }
                                {
                                    isEditable &&
                                    <DeleteOutline className='text-red-600' />}
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='w-full'>
                            <table className='w-full'>
                                <thead className='border-b border-gray-400'>
                                    <td className='p-1 text-sm'>Task</td>
                                    <td className='p-1 text-sm text-center'>Quantity</td>
                                    <td className='p-1 text-sm text-center'>Material</td>
                                    <td className='p-1 text-sm text-center'>Labour</td>
                                    <td className='p-1 text-sm text-center'>Markup</td>
                                    <td className='p-1 text-sm text-right'>Total</td>
                                </thead>
                                <tbody>
                                    {
                                        item?.taskList?.map((taskDetails, taskIndex) => <tr key={`${index}-${taskIndex}`}>
                                            <td className='p-1 h-[100px] relative'>
                                                <div className=''>{taskDetails?.title}</div>
                                                {isEditable && <input type="text" className="border rounded py-1 transform translate-y-4" placeholder='Enter description' />}
                                            </td>
                                            <td className='p-1'>
                                                {
                                                    isEditable ?
                                                        <div className="flex flex-row justify-center">
                                                            <input type="text" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' value={taskDetails?.quantity} />
                                                            <select name="" value={taskDetails?.quantityType} id="" className='px-2 py-1 border rounded'>
                                                                <option value="">all</option>
                                                                <option value="each">each</option>
                                                                <option value="">a</option>
                                                                <option value="">b</option>
                                                            </select>
                                                        </div> :

                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>{taskDetails?.quantity}</span>
                                                            <span className='mx-1'>{taskDetails?.quantityType}</span>
                                                        </div>
                                                }
                                            </td>
                                            <td className='p-1 w-[200px] py-4'>
                                                {
                                                    isEditable ?
                                                        <div className="flex flex-col items-center">
                                                            <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>Builder Cost</label>
                                                            <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' value={`$${taskDetails?.material}`} />
                                                            <p className='text-sm mt-2'>/each</p>
                                                        </div> :
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>${taskDetails?.material}</span>
                                                        </div>
                                                }
                                            </td>
                                            <td className='p-1 w-[200px] py-4'>
                                                {
                                                    isEditable ? <div className="flex flex-col items-center">
                                                        <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' value={`$${taskDetails?.labour}`} />
                                                        <p className='text-sm mt-2'>/each</p>
                                                    </div> :
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>${taskDetails?.material}</span>
                                                        </div>
                                                }
                                            </td>
                                            <td className='p-1 py-4'>
                                                {
                                                    isEditable ? <div className="flex flex-col items-center">
                                                        <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>$0.00</label>
                                                        <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='0%' value={`$${taskDetails?.markup}`} />
                                                    </div> :
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>10% - $848</span>
                                                        </div>
                                                }
                                            </td>
                                            <td className='p-1 py-4'>
                                                <div className="flex flex-col items-end">
                                                    <p className='font-semibold mt-2'>${taskDetails?.total}</p>
                                                    {
                                                        isEditable &&
                                                        <>
                                                            <p className='text-sm mt-2'>${taskDetails?.total}/each</p>

                                                            <div className='flex justify-end items-center transform translate-y-4'>
                                                                <BookmarkBorderOutlined className='text-indigo-600 text-[20px] mx-1' />
                                                                <RemoveRedEyeIcon className='text-indigo-600 text-[20px] mx-1' />
                                                                <ContentCopy className='text-indigo-600 text-[20px] mx-1' />
                                                                <DeleteOutline className='text-red-600 text-[23px] mx-1' />
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </td>
                                        </tr>)
                                    }
                                    <Button variant='text' className='font-semibold'><AddIcon /> Add Custom Task</Button>
                                </tbody>
                            </table>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>)
        }
    </>
}