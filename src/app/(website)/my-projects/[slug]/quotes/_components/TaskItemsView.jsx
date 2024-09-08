"use client"
import React, { Fragment, useEffect, useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BookmarkBorderOutlined, Close, CloseFullscreen, CloseOutlined, ContentCopy, DeleteOutline, Done, EditOutlined, Warning, WarningRounded, WarningSharp } from '@mui/icons-material';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import { CreateSubTask, DeleteClientQuoteTask, DeleteSubTask, FetchClientQuote, PatchQuotes, UpdateClientQuoteTask } from '@/app/redux/Project/ProjectSlice';
import { SingleTask } from './SingleTask';


export const TaskItemsView = ({ data }) => {
    const dispatch = useDispatch()
    const pathname = usePathname();

    useEffect(() => {
        console.log(data, "--data");
    }, [data])


    return <>
        {/* {
            data?.map((item, index) => <div key={`main-task-${index}`}><SingleTask setQuoteSubTotal={setQuoteSubTotal} quoteId={quoteId} subtotalbill={subtotalbill} key={index} setDeletePopupMain={handleDeletePopup} item={item} index={index} isEditable={isEditable} /></div>)
        } */}

        <div className="py-5">
            {
                data?.map((item, index) => {
                    return <Accordion className='rounded-xl bg-white shadow-none border-2 border-gray-200 py-2'>
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon className='text-primary' />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div className="w-full flex flex-row justify-between items-center">
                                <div className="w-1/2 flex flex-row items-center group">
                                    <h1 className='mr-2'><img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/media/${item?.task.icon}`} alt="" className='w-5 h-5' /></h1>
                                    <div className='mr-2 text-lg font-semibold text-black'>
                                        {item?.task?.name}
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-row justify-end items-center">
                                    <div className='font-black text-sm mr-2'>
                                        <span>${item?.totalcost}</span>
                                    </div>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='w-full'>
                                <table className='w-full'>
                                    <thead className='border-b border-gray-400'>
                                        <tr>
                                            <th className='p-1 text-sm text-left'>Task</th>
                                            <th className='p-1 text-sm text-center'>Quantity</th>
                                            <th className='p-1 text-sm text-center'>Material</th>
                                            <th className='p-1 text-sm text-center'>Labour</th>
                                            <th className='p-1 text-sm text-center'>Markup</th>
                                            <th className='p-1 text-sm text-right'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {
                                        subTaskList?.map((taskDetails, taskIndex) => <SingleSubTask
                                            key={`${item?.id}-subtask-${taskIndex}`}
                                            setQuoteSubTotal={setQuoteSubTotal} taskId={item?.id} quoteId={quoteId} subtotalbill={subtotalbill} taskTotalCost={totalPrice} setTotalPrice={setTotalPrice} setDeletePopup={setDeletePopupIndex2} taskDetails={{ ...taskDetails }} taskIndex={taskIndex} isEditable={isEditable} index={index} />)
                                    } */}

                                        {
                                            item?.subtasks?.map((taskDetails, taskIndex) => {
                                                return <tr key={`${index}-${taskIndex}`} className='text-sm'>
                                                    <td className='p-1'>
                                                        <div className='flex flex-col p-1 relative justify-center'>
                                                            <div>{taskDetails?.name}</div>
                                                            {taskDetails?.description && <div>{taskDetails?.description}</div>}
                                                        </div>
                                                    </td>
                                                    <td className='p-1'>
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>{taskDetails?.quantity} {taskDetails?.quantitytype}</span>
                                                        </div>
                                                    </td>
                                                    <td className='p-1 w-[200px] py-4'>
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>${taskDetails?.material}</span>
                                                        </div>
                                                    </td>
                                                    <td className='p-1 w-[200px] py-4'>
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>${taskDetails?.material}</span>
                                                        </div>
                                                    </td>
                                                    <td className='p-1 py-4'>
                                                        <div className="flex flex-row justify-center">
                                                            <span className='mx-1'>{taskDetails?.markuppercentage}% - ${taskDetails?.markup}</span>
                                                        </div>
                                                    </td>
                                                    <td className='p-1 py-4'>
                                                        <div className="flex flex-col items-end">
                                                            <p className='font-semibold mt-2'>${taskDetails?.totalcost}</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div>
    </>
}