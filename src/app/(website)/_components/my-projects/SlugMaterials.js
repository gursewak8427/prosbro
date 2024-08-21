"use client"
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { KeyboardArrowDown } from '@mui/icons-material';


function SlugMaterials() {
    const [expandedTab, setExpandedTab] = useState(-1)

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedTab(isExpanded ? panel : -1);
    };


    return (
        <div className='p-4 flex flex-col gap-5'>
            <div className='flex p-2 items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h1>Display task name</h1>
                    <button className='text-primary'><ToggleOnIcon className='text-5xl' /></button>
                </div>
                <div className='flex p-2 items-center gap-5 justify-between'>
                    <div className='flex items-center'>
                        <button className='p-2 bg-white border border-gray-500  rounded-lg text-gray-500 hover:bg-gray-300'><AddIcon /> Add a category to schedule</button>
                    </div>
                    <div className='text-primary text-lg font-semibold'>
                        <button><KeyboardArrowUpIcon /> Collpse all</button>
                    </div>
                </div>
            </div>
            <Accordion onChange={handleChange(1)}>
                <AccordionSummary
                    // expandIcon={<KeyboardArrowDown className='text-primary' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="w-full flex flex-col">
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="w-1/2 flex flex-row items-center gap-2">
                                <div className="text-primary">
                                    {expandedTab == 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </div>
                                <h1 className="font-semibold"><span><EngineeringIcon className="text-gray-500 text-3xl" /></span> </h1>
                                <h1 className=''>General conditions</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-end items-center">
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="px-4 py-2 border border-t bg-gray-400 bg-opacity-40 font-semibold rounded-lg">No material recorded</p>
                                    <button className="text-red-600"><DeleteOutlineIcon /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='w-full'>
                        <div className="mt-5 mb-5">
                            <table className="my-2 w-full">
                                <tr className='text-left'>
                                    <th className='w-[50%]'>Item</th>
                                    <th className='pl-4'>Qty</th>
                                    <th className='text-center px-3'>Waste</th>
                                    <th className='text-center'>Qty to order</th>
                                    <th></th>
                                </tr>

                                {/* 1st Start ================= */}
                                <tr>
                                    <td colspan="5" className='text-left py-4'>
                                        <button className="w-full font-semibold text-gray-500 mt-2 mb-2 flex p-2 rounded-lg hover:bg-gray-200">
                                            Allowance time for a project manager
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input placeholder="Enter material name" className="p-2 rounded-lg w-[90%]" /></td>
                                    <td>
                                        <div className="flex gap-3 items-center">
                                            <input type="text" placeholder="0" className="p-2 rounded-lg w-11 text-center border border-gray-400 min-w-16" />
                                            <label>unit</label>
                                        </div>
                                    </td>
                                    <td className='px-3'>
                                        <div className="text-center">
                                            <input type="text" placeholder="15%" className="text-center p-2 rounded-lg w-20 border border-gray-400" />
                                        </div>
                                    </td>
                                    <td className='text-center'>
                                        <label>0</label>
                                    </td>
                                    <td>
                                        <button className="text-red-600"><DeleteOutlineIcon /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <div className="flex text-primary font-semibold mt-4">
                                            <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                                <AddIcon className="mr-2" /> Add materials
                                            </button>
                                            <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                                <SearchIcon className="mr-2" /> Search catalog
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* 1st End =========== */}


                                {/* 2nd Start ============= */}
                                <tr className=''>
                                    <td colspan="5" className='text-left py-4'>
                                        <div className="py-4 w-full"><hr /></div>
                                        <button className="w-full font-semibold text-gray-500 mt-2 mb-2 flex p-2 rounded-lg hover:bg-gray-200">
                                            Allowance time for a project manager
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input placeholder="Enter material name" className="p-2 rounded-lg w-[90%]" /></td>
                                    <td>
                                        <div className="flex gap-3 items-center">
                                            <input type="text" placeholder="0" className="p-2 rounded-lg w-11 text-center border border-gray-400 min-w-16" />
                                            <label>unit</label>
                                        </div>
                                    </td>
                                    <td className='px-3'>
                                        <div className="text-center">
                                            <input type="text" placeholder="15%" className="text-center p-2 rounded-lg w-20 border border-gray-400" />
                                        </div>
                                    </td>
                                    <td className='text-center'>
                                        <label>0</label>
                                    </td>
                                    <td>
                                        <button className="text-red-600"><DeleteOutlineIcon /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <div className="flex text-primary font-semibold mt-4">
                                            <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                                <AddIcon className="mr-2" /> Add materials
                                            </button>
                                            <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                                <SearchIcon className="mr-2" /> Search catalog
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* 2nd End ============= */}


                            </table>
                        </div>
                        <div className="flex items-center justify-center mt-5 mb-5">
                            <button className="p-2 bg-white border border-gray-500 rounded-lg text-gray-500 hover:bg-gray-200"><AddIcon /> Add a category to schedule</button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div >
    )
}

export default SlugMaterials;