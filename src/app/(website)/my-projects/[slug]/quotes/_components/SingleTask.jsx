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
import { CreateSubTask, DeleteClientQuoteTask, DeleteSubTask, FetchClientQuote, PatchClientQuoteTask, PatchQuotes, PatchSubTask, PatchSubTaskWithoutStore, UpdateClientQuoteTask, UpdateSubTask } from '@/app/redux/Project/ProjectSlice';
import { SingleSubTask } from './SingleSubTask';

const toNum = (val) => parseFloat(val?.toString()?.replaceAll("$", "")) || 0


export const SingleTask = ({ setQuoteSubTotal, subtotalbill, quoteId, setDeletePopupMain, item, index, isEditable, key }) => {
    const [subTaskList, setSubTaskList] = useState([])
    const [labourPopup, setLabourPopup] = useState(false)
    const [totalPriceChangeModal, setTotalPriceChangeModal] = useState(false)
    const [deletePopupIndex2, setDeletePopupIndex2] = useState(-1)
    const [hourlyRate, setHourlyRate] = useState(75);
    const [totalPrice, setTotalPrice] = useState(75);
    const pathname = usePathname();
    const dispatch = useDispatch();
    const pathSegments = pathname.split("/");
    const slug = pathSegments[pathSegments.length - 2];


    useEffect(() => {
        console.log(item, "--item");

        setHourlyRate(item?.labourrate)
        setTotalPrice(item?.totalcost)
        setSubTaskList([...item?.subtasks])

    }, [JSON.stringify(item)])

    useEffect(() => {
        console.log(subTaskList, "--subTaskList");
        // ISSUE : taskDeatils Not update whenever item has change
    }, [JSON.stringify(subTaskList)])


    const [quotetask, setquotetask] = useState({
        id: 0,
        name: item?.task?.name,
        editable: false
    })

    const setEditingModel = (e, name, editable) => {
        e.stopPropagation();
        setquotetask({
            ...quotetask,
            'name': name,
            'editable': editable
        })
    }

    const closeTitle = (e, editable) => {
        e.stopPropagation();
        setquotetask({
            ...quotetask,
            'editable': editable
        })
    }

    const handleChange = (e, id) => {
        e.stopPropagation();

        setquotetask({
            ...quotetask,
            [e.target.name]: e.target.value,
            'id': id
        })
    }

    const saveTitle = (e) => {
        e.stopPropagation();
        setEditingModel(e, quotetask?.name, false)
        if (quotetask.id > 0)
            dispatch(UpdateClientQuoteTask(quotetask))
    }

    const toggleLabourPopup = (e) => {
        if (e?.stopPropagation) {
            e?.stopPropagation();
        }

        setLabourPopup(!labourPopup)
    }



    const handleDeletePopup = (index, e) => {
        if (e?.stopPropagation) {
            e?.stopPropagation();
        }

        setDeletePopupIndex2(index)
    }



    const addNewSubTask = (id) => {
        dispatch(CreateSubTask({ task: id, slug: slug }))
    }

    const confirmDeleteMainTask = () => {
        dispatch(DeleteSubTask({ id: deletePopupIndex2, slug: slug }))
        setDeletePopupIndex2(-1)
        updateAfterDeleteSubTask(deletePopupIndex2) // update cost also after delete 
    }

    const updateAfterDeleteSubTask = (subTaskId) => {
        let taskDetails = item?.subtasks.filter(t => t?.id == subTaskId)[0];
        let oldThisCost = taskDetails?.totalcost;

        console.log({ oldThisCost })
        console.log(item?.totalcost)
        console.log(subtotalbill)

        let updatedTotalCost = parseFloat(item?.totalcost) - oldThisCost
        let updatedSubTotalBill = parseFloat(subtotalbill) - oldThisCost



        setQuoteSubTotal(updatedSubTotalBill)
        dispatch(PatchQuotes({
            "id": quoteId,
            "subtotalbill": updatedSubTotalBill,
        }))
        dispatch(PatchClientQuoteTask({
            "qid": quoteId,
            "id": item?.id,
            "totalcost": updatedTotalCost,
        }))
    }

    const updateLabourRate = () => {

        let finaltotalcost = 0;

        item?.subtasks?.map((subTask, index) => {

            let newLabourRate = toNum(hourlyRate) * toNum(subTask?.labourtime);

            console.log(subTask, "--subTask");

            let totalWithoutMarkup = parseFloat((toNum(subTask?.material) + toNum(subTask?.labour)) * subTask?.quantity); // It is just to calculate new markup

            // Calculate Markup
            let markupPercentage = toNum(subTask?.markuppercentage) || 0;
            let newMarkupValue = (markupPercentage / 100) * totalWithoutMarkup;

            let newThisCost = (newMarkupValue + toNum(subTask?.material) * toNum(subTask?.quantity) + newLabourRate * toNum(subTask?.quantity));

            finaltotalcost += toNum(newThisCost)

            dispatch(PatchSubTask({
                "qid": quoteId,
                "id": subTask?.id,
                "labour": newLabourRate?.toFixed(2),
                "labourperhour": hourlyRate,
                "markup": toNum(newMarkupValue),
                "totalcost": newThisCost?.toFixed(2)
            }))

            if (index + 1 == item?.subtasks?.length) {
                dispatch(PatchClientQuoteTask({
                    "qid": quoteId,
                    "id": item?.id,
                    "labourrate": hourlyRate,
                    "totalcost": finaltotalcost
                }))

                let updatedSubTotalBill = parseFloat(subtotalbill) - totalPrice + finaltotalcost

                dispatch(PatchQuotes({
                    "id": quoteId,
                    "subtotalbill": toNum(updatedSubTotalBill)?.toFixed(2),
                }))
            }
        })


        setLabourPopup(false)
    }

    const updateTotalPrice = () => {
        localStorage.setItem("prosbro_override_total_price", "true")
        dispatch(PatchClientQuoteTask({
            "qid": quoteId,
            "id": item?.id,
            "totalcost": totalPrice,
        }))

        item?.subtasks?.map(subTask => {
            dispatch(PatchSubTaskWithoutStore({
                "qid": quoteId,
                "id": subTask?.id,
                "labour": 0,
                "markup": 0,
                "markuppercentage": 0,
                "material": 0,
                "totalcost": 0,
            }))
        })
        setTotalPriceChangeModal(false)
    }


    return <div key={index} className="my-3">
        <Transition appear show={labourPopup} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={toggleLabourPopup}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                                <div className="bg-white rounded-lg">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold">Set labor rate by category</h2>
                                        <button onClick={toggleLabourPopup} className="text-gray-600 hover:text-gray-900">
                                            <CloseOutlined />
                                        </button>
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-gray-700 font-medium">General conditions</h3>
                                        <div className="bg-orange-100 text-orange-600 p-2 rounded mt-2 text-sm flex items-center">
                                            <div className="mr-2"><WarningRounded /></div>
                                            This will update the hourly rate for all current tasks in this category.
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="number"
                                                value={hourlyRate}
                                                onChange={(e) => setHourlyRate(e.target.value)}
                                                className="w-20 p-2 border rounded"
                                            />
                                            <span className="text-gray-700">/hour</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            onClick={() => { setHourlyRate(item?.labourrate); setLabourPopup(false); }}
                                            className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={updateLabourRate}
                                            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

        {/* Change Total Modal */}
        <Transition appear show={totalPriceChangeModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setTotalPriceChangeModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                                <div className="bg-white rounded-lg">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold">Category price override</h2>
                                        <button onClick={toggleLabourPopup} className="text-gray-600 hover:text-gray-900">
                                            <CloseOutlined />
                                        </button>
                                    </div>
                                    <div className="mb-4">
                                        <div className="bg-orange-100 text-orange-600 p-2 rounded mt-2 text-sm flex items-center">
                                            <div className="mr-2"><WarningRounded /></div>
                                            Warning, modifying the price of the category directly will delete all tasks unit prices. The global markup will not apply on this category.
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="text"
                                                value={`$${totalPrice}`}
                                                onChange={(e) => setTotalPrice(toNum(e.target.value))}
                                                className="w-28 p-2 border-b-2 border-gray-400 focus:outline-none"
                                            />
                                            <span className="text-gray-700">/hour</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            onClick={() => { setTotalPrice(item?.totalcost); setTotalPriceChangeModal(false); }}
                                            className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={updateTotalPrice}
                                            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>


        {/* Delete Popup SubTask*/}
        <Transition appear show={deletePopupIndex2 != -1} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={(e) => handleDeletePopup(-1, e)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">Delete category</h2>
                                    <button
                                        onClick={(e) => handleDeletePopup(-1, e)}
                                        className="text-gray-400 hover:text-gray-600">
                                        <CloseOutlined />
                                    </button>
                                </div>
                                <p className="mt-4">
                                    Are you sure you want to delete <span className="font-semibold">{item?.subtasks[deletePopupIndex2]?.name}</span>? This action cannot be undone.
                                </p>
                                <div className="mt-6 flex items-center gap-2">
                                    <button
                                        className="text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 rounded-xl px-4 py-2 w-1/2"
                                        onClick={(e) => handleDeletePopup(-1, e)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-4 py-2 w-1/2"
                                        onClick={confirmDeleteMainTask}
                                    >
                                        Confirm deletion
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>


        <Accordion>
            <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className='text-primary' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="w-1/2 flex flex-row items-center group">
                        <h1 className='mr-2'><img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/media/${item?.task.icon}`} alt="" className='w-5 h-5' /></h1>
                        <div className='mr-2'>
                            {
                                !quotetask.editable ?
                                    <>{quotetask?.name}</> :
                                    <><input onClick={(e) => { e.stopPropagation() }} className='px-2 py-1 border border-gray-600 rounded-md' value={quotetask?.name} name="name" onChange={(e) => { handleChange(e, item?.task?.id) }} /></>
                            }
                        </div>
                        {
                            quotetask.editable ? <div className='flex flex-row items-center gap-2'>
                                <button className='cursor-pointer hover:bg-gray-300 w-8 h-8 rounded-full pb-[2px]' onClick={(e) => saveTitle(e)}><Done color='success' /></button>
                                <button className='cursor-pointer hover:bg-gray-300 w-8 h-8 rounded-full pb-[2px]' onClick={(e) => closeTitle(e, false)}><Close color='warning' /></button>
                            </div> :
                                isEditable && <h1 className='group-hover:block hidden' onClick={(e) => { setEditingModel(e, item?.task?.name, true) }}><EditOutlined className='text-primary' /></h1>
                        }
                    </div>
                    <div className="w-1/2 flex flex-row justify-end items-center">
                        {
                            isEditable &&
                            <div className="flex flex-col justify-end items-end mr-2">
                                <p className='text-sm'>Estimate Labour time: {item?.subtasks?.reduce((prev, curr) => prev += (curr?.labourtime || 0), 0)}h</p>
                                <p className='text-sm'>Labour Rate: ${item?.labourrate}/h <button onClick={toggleLabourPopup}><EditOutlined className='text-primary' /></button></p>
                            </div>
                        }
                        {/* {
                            isEditable ?
                                <input onChange={(e) => handleChangeTotalPrice(e.target.value)} defaultValue={item?.totalcost} placeholder={`$${item?.totalcost}`} className='w-[150px] border border-gray-400 rounded-lg px-1 py-1 text-sm'></input> :
                                <span className='mx-4 font-semibold'>${item?.totalcost}</span>
                        } */}
                        <div className='mx-4 min-w-[150px] bg-gray-200 py-1 px-2 pt-[6px] flex gap-1 rounded-xl justify-center group relative' onClick={(e) => { e.stopPropagation(); setTotalPriceChangeModal(true) }}>
                            <span>${totalPrice}</span>
                            {
                                isEditable &&
                                <button className='group-hover:block hidden absolute right-4'><EditOutlined className='text-primary text-xl mb-1' /></button>
                            }
                        </div>
                        {
                            isEditable &&
                            <button onClick={(e) => setDeletePopupMain(index, e)}><DeleteOutline className='text-red-600' /></button>
                        }
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
                                subTaskList?.map((taskDetails, taskIndex) => <SingleSubTask
                                    key={`${item?.id}-subtask-${taskIndex}`}
                                    setQuoteSubTotal={setQuoteSubTotal} taskId={item?.id} quoteId={quoteId} subtotalbill={subtotalbill} taskTotalCost={totalPrice} setTotalPrice={setTotalPrice} setDeletePopup={setDeletePopupIndex2} taskDetails={{ ...taskDetails }} taskIndex={taskIndex} isEditable={isEditable} index={index} />)
                            }
                            <Button onClick={() => { addNewSubTask(item.id) }} variant='text' className='font-semibold'><AddIcon /> Add Custom Task</Button>
                        </tbody>
                    </table>
                </div>
            </AccordionDetails>
        </Accordion>
    </div >
}

