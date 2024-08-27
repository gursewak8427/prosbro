"use client"
import React, { Fragment, useEffect, useRef, useState } from 'react'

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
import { CreateSubTask, DeleteClientQuoteTask, DeleteSubTask, FetchClientQuote, PatchSubTask, UpdateClientQuoteTask, UpdateSubTask } from '@/app/redux/Project/ProjectSlice';
import { FaCalculator } from "react-icons/fa";

const toNum = (val) => parseFloat(val?.toString()?.replaceAll("$", "")) || 0

export const SingleSubTask = ({ setQuoteSubTotal, subtotalbill, taskTotalCost, taskId, quoteId, setDeletePopup, taskDetails, taskIndex, isEditable, index }) => {
    const dispatch = useDispatch();
    const [labourCalc, setLabourCalc] = useState(false)
    const [isFirst, setFirst] = useState(true)
    const [tempTotalCost, setTempTotalCost] = useState(0)
    const [tempTotalBil, setTempTotalBill] = useState(0)
    const [total, setTotal] = useState(0)

    const [fd, setFd] = useState({})

    const [qtyType, setQtyType] = useState("")

    const labourCalcRef = useRef(null);
    const labourCalcButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => labourCalcRef.current && !labourCalcRef.current.contains(event.target) && labourCalcButtonRef.current && !labourCalcButtonRef.current.contains(event.target) ? setLabourCalc(false) : null

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



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
            labourtime: taskDetails?.labourtime,
            labourperhour: taskDetails?.labourperhour,
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

    const handleChange = (e, isDollarValue) => {
        let value = isDollarValue ? toNum(e?.target?.value) : e?.target?.value;

        setFd({ ...fd, [e.target.name]: value });

        if (["labour"]?.includes(e?.target?.name)) {
            handleLabourChange({ ...fd, [e.target.name]: value });
            return;
        }

        if (["labourtime", "labourperhour"]?.includes(e?.target?.name)) {
            updateLabourCalculator({ ...fd, [e.target.name]: value });
            return;
        }

        updateNow({ ...fd, [e.target.name]: value });
    }

    const handleLabourChange = (data) => {
        dispatch(PatchSubTask({
            "qid": quoteId,
            "id": taskDetails?.id,
            "labour": toNum(data?.labour),
            "labourtime": toNum(data?.labour) / data?.labourperhour,
        }))
    }

    const updateLabourCalculator = (data) => {
        dispatch(PatchSubTask({
            "qid": quoteId,
            "id": taskDetails?.id,
            "labour": parseFloat(data?.labourtime) * parseFloat(data?.labourperhour),
            "labourtime": data?.labourtime,
            "labourperhour": data?.labourperhour
        }))
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
                isEditable ? <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 relative">
                        <input type="text" className="border text-center rounded py-1 w-[150px]" placeholder='$1' name='labour' value={`$${fd?.labour}`} onChange={(e) => handleChange(e, true)} />
                        <div ref={labourCalcButtonRef} className="calc w-12" onClick={() => setLabourCalc(true)}>
                            <FaCalculator className='text-gray-600 cursor-pointer hover:text-primary' />
                        </div>
                        {
                            labourCalc &&
                            <div ref={labourCalcRef} className="absolute top-[125%] rounded shadow-xl bg-white border z-50">
                                <div class="p-4 border">
                                    <h3 class="text-md font-semibold">Labor price details</h3>
                                    <p class="text-xs mt-2">To complete <span class="font-bold">{taskDetails?.quantity} {qtyType}</span> of this task, it will take me approximately <span class="font-bold">{fd?.labourtime} hour(s)</span> of work at a cost of <span class="font-bold">${fd?.labourperhour}</span> per hour.</p>

                                    <div class="flex items-center mt-4">
                                        <div className="flex-col">
                                            <div className="flex items-center">
                                                <input type="text" onChange={(e) => handleChange(e, true)} name='labourtime' value={fd?.labourtime?.toString()?.replaceAll("$", "")} class="w-16 border px-2 py-1 rounded-md text-center text-sm mr-1" />
                                                <span class="text-gray-600 text-sm">hrs</span>
                                                <span class="text-gray-600 text-sm ml-2"><CloseOutlined /></span>
                                                <input type="text" onChange={(e) => handleChange(e, true)} name='labourperhour' value={`$${fd?.labourperhour?.toString()?.replaceAll("$", "")}`} class="w-20 border px-2 py-1 rounded-md text-center text-sm mx-1" />
                                                <span class="text-gray-600 text-sm">/hr</span>
                                            </div>
                                            <div class="mt-4 border-t-2 flex justify-center items-center p-2">
                                                <input type="text" disabled readOnly value={taskDetails?.quantity} class="w-16 border px-2 py-1 rounded-md text-center text-sm mr-1" />
                                                <span class="text-gray-600 text-sm">each</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center ml-4 text-sm">
                                            <span class="text-gray-600">=</span>
                                            <span class="font-bold text-sm mx-2">${fd?.labour}</span>
                                            <span class="text-gray-600">/{qtyType}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
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

