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
import { CreateSubTask, DeleteClientQuoteTask, DeleteSubTask, FetchClientQuote, UpdateClientQuoteTask, UpdateSubTask } from '@/app/redux/Project/ProjectSlice';


const toNum = (val) => parseFloat(val?.toString()?.replaceAll("$", ""))

export const SingleSubTask = ({ setQuoteSubTotal, subtotalbill, taskTotalCost, taskId, quoteId, setDeletePopup, taskDetails, taskIndex, isEditable, index }) => {
    const dispatch = useDispatch();
    const [isFirst, setFirst] = useState(true)
    const [tempTotalCost, setTempTotalCost] = useState(0)
    const [tempTotalBil, setTempTotalBill] = useState(0)
    const [total, setTotal] = useState(0)

    const [fd, setFd] = useState({})

    const [qtyType, setQtyType] = useState("")

    useEffect(() => {
        console.log(subtotalbill, "--subtotalbill");

        setTempTotalBill(subtotalbill)
    }, [subtotalbill])


    useEffect(() => {
        console.log(taskTotalCost, "--totalcost");

        setTempTotalCost(taskTotalCost)
    }, [taskTotalCost])

    useEffect(() => {
        setQtyType(taskDetails?.quantitytype)
        setFd({
            name: taskDetails?.name,
            description: taskDetails?.description,
            material: taskDetails?.material,
            labour: taskDetails?.labour,
            markup: taskDetails?.markup,
            qty: taskDetails?.quantity,
        })
        setTotal(taskDetails?.totalcost) // total Cost
    }, [JSON.stringify(taskDetails)])

    // useEffect(() => {
    //     setQty(qty == 0 || !Boolean(qty) ? 1 : qty)
    // }, [qty])

    const updateNow = (localFd) => {
        let oldThisCost = (taskDetails?.markup + taskDetails?.material + taskDetails?.labour) * taskDetails?.quantity;

        let newThisCost = (toNum(localFd?.material) + toNum(localFd?.labour) + toNum(localFd?.markup)) * localFd?.qty;
        let updatedTotalCost = parseFloat(taskTotalCost) - oldThisCost + newThisCost

        let updatedSubTotalBill = parseFloat(subtotalbill) - oldThisCost + newThisCost

        console.log({ oldThisCost, newThisCost, updatedTotalCost, updatedSubTotalBill, subtotalbill });
        setTempTotalCost(updatedTotalCost) // Single Task Total Cost
        setTempTotalBill(updatedSubTotalBill) // Bill
        setTotal(newThisCost) // total Cost


        let listOfJson = [{
            "id": quoteId,
            "subtotalbill": updatedSubTotalBill,
        },
        {
            "id": taskId,
            "totalcost": updatedTotalCost,
        },
{
            ...taskDetails,
            "name": localFd?.name,
            "description": localFd?.description,
            "quantity": toNum(localFd?.qty),
            "material": toNum(localFd?.material),
            "labour": toNum(localFd?.labour),
            "markup": toNum(localFd?.markup),
            "totalcost": toNum(newThisCost),
        }]

        setQuoteSubTotal(updatedSubTotalBill)
        dispatch(UpdateSubTask(listOfJson))
    }


    const handleChange = e => {
        setFd({ ...fd, [e.target.name]: e.target.value });
        updateNow({ ...fd, [e.target.name]: e.target.value });
    }


    return <tr key={`${index}-${taskIndex}`}>
        <td className='flex flex-col p-1 h-[100px] relative'>
            {
                isEditable ?
                    <input
                        type="text"
                        className="border rounded p-1 mb-2 transform translate-y-4"
                        placeholder='Enter Name'
                        defaultValue={fd?.name}
                        name='name'
                        onBlur={handleChange}
                    /> :
                    <div>{taskDetails?.name}</div>
            }
            {
                isEditable ?
                    <input
                        type="text"
                        className="border rounded p-1 transform translate-y-4"
                        placeholder='Enter description'
                        defaultValue={fd?.description}
                        name='description'
                        onBlur={handleChange}
                    /> :
                    taskDetails?.description
            }
        </td>
        <td className='p-1'>
            {
                isEditable ?
                    <div className="flex flex-row justify-center">
                        <input type="number" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' name='qty' value={fd?.qty} onChange={handleChange} />
                        <select name="" value={qtyType} id="" className='px-2 py-1 border rounded' onChange={(e) => {
                            setQtyType(e.target.value)
                        }}>
                            <option value="hour">hour</option>
                            <option value="each">each</option>
                            <option value="day">day</option>
                            <option value="lin.ft">lin.ft</option>
                            <option value="sq.ft">sq.ft</option>
                            <option value="cu.ft">cu.ft</option>
                            <option value="lin.yad">lin.yad</option>
                            <option value="sq.yd">sq.yd</option>
                            <option value="cu.yd">cu.yd</option>
                            <option value="lin.m">lin.m</option>
                            <option value="sq.m">sq.m</option>
                            <option value="cu.m">cu.m</option>
                            <option value="lb">lb</option>
                            <option value="kg">kg</option>
                            <option value="ton">ton</option>
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
                        <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' name='material' value={fd?.material} onChange={handleChange} />
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
                    <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' name='labour' value={fd?.labour} onChange={handleChange} />
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
                    <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='0%' name='markup' value={fd?.markup} onChange={handleChange} />
                </div> :
                    <div className="flex flex-row justify-center">
                        <span className='mx-1'>10% - $848</span>
                    </div>
            }
        </td>
        <td className='p-1 py-4'>
            <div className="flex flex-col items-end">
                <p className='font-semibold mt-2'>${total}</p>
                {
                    isEditable &&
                    <>
                        <p className='text-sm mt-2'>${total}/{qtyType}</p>

                        <div className='flex justify-end items-center transform translate-y-4'>
                            <BookmarkBorderOutlined className='text-primary text-[20px] mx-1' />
                            <RemoveRedEyeIcon className='text-primary text-[20px] mx-1' />
                            <ContentCopy className='text-primary text-[20px] mx-1' />
                            <button onClick={() => setDeletePopup(taskDetails?.id)}><DeleteOutline className='text-red-600 text-[23px] mx-1' /></button>
                        </div>
                    </>
                }
            </div>
        </td>
    </tr>
}

