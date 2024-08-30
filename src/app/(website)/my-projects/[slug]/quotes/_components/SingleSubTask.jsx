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
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import { CreateSubTask, DeleteClientQuoteTask, DeleteSubTask, FetchClientQuote, PatchSubTask, UpdateClientQuoteTask, UpdateSubTask } from '@/app/redux/Project/ProjectSlice';
import { FaCalculator } from "react-icons/fa";

const toNum = (val) => parseFloat(val?.toString()?.replaceAll("$", "")) || 0

export const SingleSubTask = ({ setQuoteSubTotal, subtotalbill, setTotalPrice, taskTotalCost, taskId, quoteId, setDeletePopup, taskDetails, taskIndex, isEditable, index }) => {
    const dispatch = useDispatch();
    const [labourCalc, setLabourCalc] = useState(false)
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

    const handleIconClick = (value) => {
        const customEvent = {
            target: {
                name: 'clientvisible',
                value: value
            }
        };
        handleChange(customEvent);
    };



    useEffect(() => {
        setQtyType(taskDetails?.quantitytype)
        console.log("===TaskDetailsChange", taskDetails)
        setFd({
            name: taskDetails?.name,
            description: taskDetails?.description,
            material: taskDetails?.material,
            labour: taskDetails?.labour,
            markup: taskDetails?.markup,
            markuppercentage: taskDetails?.markuppercentage,
            qty: taskDetails?.quantity,
            labourtime: taskDetails?.labourtime,
            labourperhour: taskDetails?.labourperhour,
            materialprice: taskDetails?.materialprice,
            clientvisible: taskDetails?.clientvisible,
        })
        setTotal(taskDetails?.totalcost) // total Cost
    }, [JSON.stringify(taskDetails)])

    // useEffect(() => {
    //     setQty(qty == 0 || !Boolean(qty) ? 1 : qty)
    // }, [qty])

    const updateNow = (localFd) => {
        dispatch(PatchSubTask({
            "qid": quoteId,
            ...taskDetails,
            "name": localFd?.name,
            "description": localFd?.description,
            "clientvisible": localFd?.clientvisible,
        }))

    }

    const handleChange = (e, isDollarValue) => {
        let value = isDollarValue ? toNum(e?.target?.value) : e?.target?.value;

        setFd({ ...fd, [e.target.name]: value });

        let isChangingPrices = false;
        let isTaskPriceSetToZero = false;
        let prosbro_override_total_price = localStorage.getItem("prosbro_override_total_price");

        if (["labour", "material"]?.includes(e?.target?.name)) {
            isChangingPrices = true;
        }

        if (Boolean(prosbro_override_total_price) && isChangingPrices) {
            isTaskPriceSetToZero = true;
            localStorage.removeItem("prosbro_override_total_price"); // Important to remove override
        }


        if (["markuppercentage"]?.includes(e?.target?.name)) {
            handleMarkupChange({ ...fd, [e.target.name]: value });
            return;
        }

        if (["labour", "material", "qty"]?.includes(e?.target?.name)) {
            handleSomeChanges({ ...fd, [e.target.name]: value }, isTaskPriceSetToZero);
            return;
        }

        if (["labourtime", "labourperhour"]?.includes(e?.target?.name)) {
            updateLabourCalculator({ ...fd, [e.target.name]: value });
            return;
        }

        updateNow({ ...fd, [e.target.name]: value });
    }

    // #FINAL
    const handleMarkupChange = (localFd) => {
        let oldThisCost = total;

        let totalWithoutMarkup = parseFloat((toNum(localFd?.material) + toNum(localFd?.labour)) * localFd?.qty); // It is just to calculate new markup

        // Calculate Markup
        let markupPercentage = toNum(localFd?.markuppercentage) || 0;
        let newMarkupValue = (markupPercentage / 100) * totalWithoutMarkup;

        let newThisCost = (newMarkupValue + toNum(localFd?.material) * toNum(localFd?.qty) + toNum(localFd?.labour) * toNum(localFd?.qty));

        // Update All Prices (Increment by markup)
        let updatedTotalCost = parseFloat(taskTotalCost) - oldThisCost + newThisCost;
        let updatedSubTotalBill = parseFloat(subtotalbill) - oldThisCost + newThisCost;

        setQuoteSubTotal(updatedSubTotalBill) // Bill
        setTotalPrice(updatedTotalCost) // State Task Total
        setTotal(newThisCost) // total Cost


        let listOfJson = [{
            "id": quoteId,
            "subtotalbill": updatedSubTotalBill?.toFixed(2),
        },
        {
            "id": taskId,
            "totalcost": updatedTotalCost?.toFixed(2),
        },
        {
            "id": taskDetails?.id,
            "markup": newMarkupValue?.toFixed(2),
            "markuppercentage": markupPercentage?.toFixed(2),
            "totalcost": newThisCost?.toFixed(2)
        }]
        dispatch(UpdateSubTask(listOfJson))
        setFd({
            ...localFd,
            markup: newMarkupValue?.toFixed(2)
        })
    }

    // #FINAL
    const handleSomeChanges = (localFd, isTaskPriceSetToZero) => {
        let _taskTotalCost = isTaskPriceSetToZero ? 0 : taskTotalCost // override prices

        let oldThisCost = total;

        // Recalculate Markup;
        let totalWithoutMarkup = parseFloat((toNum(localFd?.material) + toNum(localFd?.labour)) * localFd?.qty);

        // Calculate Markup
        let markupPercentage = toNum(localFd?.markuppercentage) || 0;
        let newMarkupValue = (markupPercentage / 100) * totalWithoutMarkup;

        // Just Add New Markup in task total
        let newThisCost = (newMarkupValue + toNum(localFd?.material) * toNum(localFd?.qty) + toNum(localFd?.labour) * toNum(localFd?.qty));

        let updatedTotalCost = parseFloat(_taskTotalCost) - oldThisCost + newThisCost;
        let updatedSubTotalBill = parseFloat(subtotalbill) - oldThisCost + newThisCost;

        setQuoteSubTotal(updatedSubTotalBill) // Bill
        setTotalPrice(updatedTotalCost) // State Task Total
        setTotal(newThisCost) // total Cost

        let listOfJson = [{
            "id": quoteId,
            "subtotalbill": updatedSubTotalBill?.toFixed(2),
        },
        {
            "id": taskId,
            "totalcost": updatedTotalCost,
        },
        {
            "id": taskDetails?.id,
            "totalcost": toNum(newThisCost),
            "quantity": toNum(localFd?.qty),
            "labour": toNum(localFd?.labour),
            "material": toNum(localFd?.material),
            "markup": toNum(newMarkupValue),
        }]

        setFd({
            ...localFd,
            markup: newMarkupValue?.toFixed(2)
        })

        dispatch(UpdateSubTask(listOfJson))
    }

    const updateLabourCalculator = (localFd) => {
        let newLabourValue = parseFloat(toNum(localFd?.labourtime)) * parseFloat(toNum(localFd?.labourperhour))

        let oldThisCost = total;

        // Recalculate Markup;
        let totalWithoutMarkup = parseFloat((toNum(localFd?.material) + toNum(newLabourValue)) * localFd?.qty);

        // Calculate Markup
        let markupPercentage = toNum(localFd?.markuppercentage) || 0;
        let newMarkupValue = (markupPercentage / 100) * totalWithoutMarkup;

        // Just Add New Markup in task total
        let newThisCost = (newMarkupValue + toNum(localFd?.material) * toNum(localFd?.qty) + toNum(newLabourValue) * toNum(localFd?.qty));

        let updatedTotalCost = parseFloat(taskTotalCost) - oldThisCost + newThisCost;
        let updatedSubTotalBill = parseFloat(subtotalbill) - oldThisCost + newThisCost;

        setQuoteSubTotal(updatedSubTotalBill) // Bill
        setTotalPrice(updatedTotalCost) // State Task Total
        setTotal(newThisCost) // total Cost

        let listOfJson = [{
            "id": quoteId,
            "subtotalbill": updatedSubTotalBill?.toFixed(2),
        },
        {
            "id": taskId,
            "totalcost": updatedTotalCost,
        },
        {
            "id": taskDetails?.id,
            "totalcost": toNum(newThisCost),
            "markup": newMarkupValue?.toFixed(2),
            "labour": newLabourValue?.toFixed(2),
            "labourtime": localFd?.labourtime,
            "labourperhour": localFd?.labourperhour
        }]

        setFd({
            ...localFd,
            labour: newLabourValue?.toFixed(2),
            markup: newMarkupValue?.toFixed(2)
        })

        dispatch(UpdateSubTask(listOfJson))

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
                        <input type="number" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' name='qty' defaultValue={fd?.qty} onBlur={handleChange} />
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
                        <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>{fd?.materialprice}</label>
                        <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' name='material' defaultValue={fd?.material} onBlur={handleChange} />
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
                        <input type="text" className="border text-center rounded py-1 w-[150px]" placeholder='$1' name='labour' defaultValue={fd?.labour} onBlur={(e) => handleChange(e, true)} />
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
                    <label htmlFor="" className='bg-slate-400 text-xs w-32 text-center px-2 py-1 rounded'>${fd?.markup}</label>
                    <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='0%' name='markuppercentage' defaultValue={fd?.markuppercentage} onBlur={handleChange} />
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
                            {/* <BookmarkBorderOutlined className='text-primary text-[20px] mx-1' /> */}

                            {
                                fd?.clientvisible ? <RemoveRedEyeIcon className='text-primary text-[20px] mx-1' onClick={() => { handleIconClick(false) }} /> : <VisibilityOffIcon className='text-primary text-[20px] mx-1' onClick={() => { handleIconClick(true) }} />
                            }
                            {/* <ContentCopy className='text-primary text-[20px] mx-1' /> */}
                            <button onClick={() => setDeletePopup(taskDetails?.id)}><DeleteOutline className='text-red-600 text-[23px] mx-1' /></button>
                        </div>
                    </>
                }
            </div>
        </td>
    </tr>
}

