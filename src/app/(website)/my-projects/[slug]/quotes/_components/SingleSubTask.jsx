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
import { CreateSubTask, DeleteClientQuoteTask, DeleteSubTask, FetchClientQuote, UpdateClientQuoteTask } from '@/app/redux/Project/ProjectSlice';


const toNum = (val) => parseFloat(val?.toString()?.replaceAll("$", ""))

export const SingleSubTask = ({ subtotalbill, taskTotalCost, taskId, quoteId, setDeletePopup, taskDetails, taskIndex, isEditable, index }) => {
    const [tempTotalCost, setTempTotalCost] = useState(0)
    const [tempTotalBil, setTempTotalBill] = useState(0)
    const [material, setMaterial] = useState(0)
    const [labour, setLabour] = useState(0)
    const [markup, setMarkup] = useState(0)
    const [total, setTotal] = useState(0)

    const [qty, setQty] = useState(0)
    const [qtyType, setQtyType] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

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
        setQty(taskDetails?.quantity || 1)
        setName(taskDetails?.name || "")
        setDescription(taskDetails?.description || "")
        setMarkup("$" + (taskDetails?.markup || 0))
        setMaterial("$" + (taskDetails?.material || 0))
        setLabour("$" + (taskDetails?.labour || 0))
    }, [JSON.stringify(taskDetails)])

    useEffect(() => {
        setQty(qty == 0 || !Boolean(qty) ? 1 : qty)
    }, [qty])

    useEffect(() => {
        let oldThisCost = (taskDetails?.markup + taskDetails?.material + taskDetails?.labour) * taskDetails?.quantity;

        let newThisCost = (toNum(material) + toNum(labour) + toNum(markup)) * qty;
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
            "quantity": toNum(qty),
            "material": toNum(material),
            "labour": toNum(labour),
            "markup": toNum(markup),
            "totalcost": toNum(newThisCost),
        }]

        console.log(listOfJson, "--listOfJson");

    }, [material, labour, markup, qty])



    return <tr key={`${index}-${taskIndex}`}>
        <td className='p-1 h-[100px] relative'>
            {
                taskDetails?.isCustom ?
                    <input
                        type="text"
                        className="border rounded p-1 mb-2 transform translate-y-4"
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> :
                    <div>{taskDetails?.name} | {tempTotalCost} |  {tempTotalBil}</div>
            }
            {
                isEditable ?
                    <input
                        type="text"
                        className="border rounded p-1 transform translate-y-4"
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /> :
                    taskDetails?.description
            }
        </td>
        <td className='p-1'>
            {
                isEditable ?
                    <div className="flex flex-row justify-center">
                        <input type="number" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' value={qty} onChange={e => setQty(e.target.value)} />
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
                        <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' value={material} onChange={e => setMaterial(`$${e.target.value?.replaceAll("$", "")}`)} />
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
                    <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='$1' value={labour} onChange={e => setLabour(`$${e.target.value?.replaceAll("$", "")}`)} />
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
                    <input type="text" className="border text-center rounded py-1 w-12 mt-2" placeholder='0%' value={markup} onChange={e => setMarkup(`$${e.target.value?.replaceAll("$", "")}`)} />
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

