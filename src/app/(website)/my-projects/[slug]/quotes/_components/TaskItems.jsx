"use client"
import React, { useEffect, useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BookmarkBorderOutlined, ContentCopy, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const SingleSubTask = ({ taskDetails, taskIndex, isEditable, index }) => {


    const [qtyType, setQtyType] = useState("")

    useEffect(() => {
        console.log({ taskDetails })
        setQtyType(taskDetails?.quantitytype)
    }, [JSON.stringify(taskDetails)])

    return <tr key={`${index}-${taskIndex}`}>
        <td className='p-1 h-[100px] relative'>
            <div className=''>{taskDetails?.name}</div>
            {isEditable && <input type="text" className="border rounded py-1 transform translate-y-4" placeholder='Enter description' value={taskDetails?.description} />}
        </td>
        <td className='p-1'>
            {
                isEditable ?
                    <div className="flex flex-row justify-center">
                        <input type="text" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' value={taskDetails?.quantity} />
                        <select name="" value={qtyType} id="" className='px-2 py-1 border rounded' onChange={(e) => {
                            setQtyType(e.target.value)
                        }}>
                            <option value="all">all</option>
                            <option value="each">each</option>
                        </select>
                    </div> :
                    <div className="flex flex-row justify-center">
                        <span className='mx-1'>{taskDetails?.quantity}</span>
                        <span className='mx-1'>/{qtyType}</span>
                    </div>
            }
        </td>
        <td className='p-1 w-[200px] py-4'>
            {
                isEditable ?
                    <div className="flex flex-col items-center">
                        <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>Builder Cost</label>
                        <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' value={`$${taskDetails?.material}`} />
                        <p className='text-sm mt-2'>/{qtyType}</p>
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
                    <p className='text-sm mt-2'>/{qtyType}</p>
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
                        <p className='text-sm mt-2'>${taskDetails?.total}/{qtyType}</p>

                        <div className='flex justify-end items-center transform translate-y-4'>
                            <BookmarkBorderOutlined className='text-primary text-[20px] mx-1' />
                            <RemoveRedEyeIcon className='text-primary text-[20px] mx-1' />
                            <ContentCopy className='text-primary text-[20px] mx-1' />
                            <DeleteOutline className='text-red-600 text-[23px] mx-1' />
                        </div>
                    </>
                }
            </div>
        </td>
    </tr>
}


const SingleTaskItem = ({ item, index, isEditable }) => {
    return <div key={index} className="my-3">
        <Accordion>
            <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className='text-primary' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="w-1/2 flex flex-row">
                        <h1 className='mr-2'><img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/media/${item?.task.icon}`} alt="" className='w-5 h-5' /></h1>
                        <h1 className='mr-2'>{item?.task.name}</h1>
                        {isEditable && <h1 onClick={(e) => { e.stopPropagation(); alert('hello') }}><EditOutlined className='text-primary' /></h1>}
                    </div>
                    <div className="w-1/2 flex flex-row justify-end items-center">
                        {
                            isEditable &&
                            <div className="flex flex-col justify-end items-end mr-2">
                                <p className='text-sm'>Estimate Labour time: {item?.estimateLabourTimeHours}h</p>
                                <p className='text-sm'>Labour Rate: ${item?.labourrate}/h <EditOutlined className='text-primary' /></p>
                            </div>
                        }
                        {
                            isEditable ?
                                <input placeholder={`$${item?.totalcost}`} className='w-[150px] border border-gray-400 rounded-lg px-1 py-1 text-sm'></input> :
                                <span className='mx-4 font-semibold'>${item?.totalcost}</span>
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
                                item?.subtasks?.map((taskDetails, taskIndex) => <SingleSubTask taskDetails={taskDetails} taskIndex={taskIndex} isEditable={isEditable} index={index} />)
                            }
                            <Button variant='text' className='font-semibold'><AddIcon /> Add Custom Task</Button>
                        </tbody>
                    </table>
                </div>
            </AccordionDetails>
        </Accordion>
    </div >
}


export const TaskItems = ({ data, isEditable }) => {
    return <>
        {
            data?.map((item, index) => <SingleTaskItem item={item} index={index} isEditable={isEditable} />)
        }
    </>
}