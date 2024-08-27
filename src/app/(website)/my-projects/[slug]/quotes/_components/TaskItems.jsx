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


export const TaskItems = ({ setQuoteSubTotal, quoteId, subtotalbill, data, isEditable }) => {
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
        updateAfterDeleteMainTask(deletePopupIndex1) // update cost also after delete 
    }

    const updateAfterDeleteMainTask = (mainTaskIndex) => {
        let taskDetails = data[mainTaskIndex];
        let oldThisCost = taskDetails?.totalcost;

        let updatedSubTotalBill = parseFloat(subtotalbill) - oldThisCost


        setQuoteSubTotal(updatedSubTotalBill)
        dispatch(PatchQuotes({
            "id": quoteId,
            "subtotalbill": updatedSubTotalBill,
        }))
    }



    useEffect(() => {
        console.log(data, "--data");

    }, [data])


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
            data?.map((item, index) => <div key={`main-task-${index}`}><SingleTask setQuoteSubTotal={setQuoteSubTotal} quoteId={quoteId} subtotalbill={subtotalbill} key={index} setDeletePopupMain={handleDeletePopup} item={item} index={index} isEditable={isEditable} /></div>)
        }
    </>
}