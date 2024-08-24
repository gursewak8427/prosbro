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


const SingleSubTask = ({ setDeletePopup, taskDetails, taskIndex, isEditable, index }) => {


    const [qtyType, setQtyType] = useState("")

    useEffect(() => {
        console.log({ taskDetails })
        setQtyType(taskDetails?.quantitytype)
    }, [JSON.stringify(taskDetails)])

    return <tr key={`${index}-${taskIndex}`}>
        <td className='p-1 h-[100px] relative'>
            {
                taskDetails?.isCustom ?
                    <input type="text" className="border rounded p-1 mb-2 transform translate-y-4" placeholder='Enter Name' value={taskDetails?.description} /> :
                    <div className=''>{taskDetails?.name}</div>
            }
            {
                isEditable ?
                    <input type="text" className="border rounded p-1 transform translate-y-4" placeholder='Enter description' value={taskDetails?.description} /> :
                    taskDetails?.description
            }
        </td>
        <td className='p-1'>
            {
                isEditable ?
                    <div className="flex flex-row justify-center">
                        <input type="text" className="border text-center rounded py-1 w-12 mr-2" placeholder='1' value={taskDetails?.quantity} />
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
                            <button onClick={() => setDeletePopup(taskDetails?.id)}><DeleteOutline className='text-red-600 text-[23px] mx-1' /></button>
                        </div>
                    </>
                }
            </div>
        </td>
    </tr>
}


const SingleTaskItem = ({ setDeletePopupMain, item, index, isEditable, key }) => {
    // const [item, setItem] = useState(myItem)
    const [labourPopup, setLaboutPopup] = useState(false)
    const [deletePopupIndex2, setDeletePopupIndex2] = useState(-1)
    const [hourlyRate, setHourlyRate] = useState(75);
    const pathname = usePathname();
    const dispatch = useDispatch();
    const pathSegments = pathname.split("/");
    const slug = pathSegments[pathSegments.length - 2];


    useEffect(() => {
        setHourlyRate(item?.labourrate)
    }, [])

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

        setLaboutPopup(!labourPopup)
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
                                            onClick={toggleLabourPopup}
                                            className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                                        >
                                            Cancel
                                        </button>
                                        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
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
                    <div className="w-1/2 flex flex-row items-center">
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
                                isEditable && <h1 onClick={(e) => { setEditingModel(e, item?.task?.name, true) }}><EditOutlined className='text-primary' /></h1>
                        }
                    </div>
                    <div className="w-1/2 flex flex-row justify-end items-center">
                        {
                            isEditable &&
                            <div className="flex flex-col justify-end items-end mr-2">
                                <p className='text-sm'>Estimate Labour time: {item?.estimateLabourTimeHours}h</p>
                                <p className='text-sm'>Labour Rate: ${item?.labourrate}/h <button onClick={toggleLabourPopup}><EditOutlined className='text-primary' /></button></p>
                            </div>
                        }
                        {
                            isEditable ?
                                <input placeholder={`$${item?.totalcost}`} className='w-[150px] border border-gray-400 rounded-lg px-1 py-1 text-sm'></input> :
                                <span className='mx-4 font-semibold'>${item?.totalcost}</span>
                        }
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
                                item?.subtasks?.map((taskDetails, taskIndex) => <SingleSubTask setDeletePopup={setDeletePopupIndex2} taskDetails={taskDetails} taskIndex={taskIndex} isEditable={isEditable} index={index} />)
                            }
                            <Button onClick={() => { addNewSubTask(item.id) }} variant='text' className='font-semibold'><AddIcon /> Add Custom Task</Button>
                        </tbody>
                    </table>
                </div>
            </AccordionDetails>
        </Accordion>
    </div >
}


export const TaskItems = ({ data, isEditable }) => {
    const dispatch = useDispatch()
    const pathname = usePathname();
    const [deletePopupIndex1, setDeletePopupIndex1] = useState(-1)


    const handleDeletePopup = (index, e) => {
        if (e?.stopPropagation) {
            e?.stopPropagation();
        }

        setDeletePopupIndex1(index)
    }


    const confirmDeleteMainTask = () => {
        // let oldSubTask = [...data]; // Create a shallow copy of the subtasks array
        // console.log(deletePopupIndex1, "==deletePopupIndex1");

        // Use splice to remove the element at deletePopupIndex2
        // oldSubTask.splice(deletePopupIndex1, 1);

        // setData([...oldSubTask]);
        const pathSegments = pathname.split("/");
        const slug = pathSegments[pathSegments.length - 2];
        dispatch(DeleteClientQuoteTask({ id: data?.[deletePopupIndex1]?.task?.id, slug: slug }))
        setDeletePopupIndex1(-1)
    }



    return <>

        {/* Delete Popup SubTask*/}
        <Transition appear show={deletePopupIndex1 != -1} as={Fragment}>
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
                                    Are you sure you want to delete <span className="font-semibold">{data?.[deletePopupIndex1]?.task?.name}</span>? This action cannot be undone.
                                </p>
                                <p className="mt-2">
                                    This category has <span className="font-semibold">{data?.[deletePopupIndex1]?.subtasks?.length} task(s)</span>
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

        {
            data?.map((item, index) => <SingleTaskItem key={index} setDeletePopupMain={handleDeletePopup} item={item} index={index} isEditable={isEditable} />)
        }
    </>
}