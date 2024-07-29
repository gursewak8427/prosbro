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
function SlugMaterials() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <div className='p-4'>
            <div className='flex justify-between p-2 items-center'>

                <div className='flex items-center'>
                    <button className='p-2 bg-white border border-gray-500  rounded-lg text-gray-500 hover:bg-gray-300'><AddIcon /> Add a category to schedule</button>
                </div>
                <div className='flex items-center gap-5 '>
                    <h1>Display task name</h1>
                    <button className='text-indigo-600'><ToggleOnIcon className='text-5xl' /></button>
                </div>
                <div className='text-indigo-600 text-lg font-semibold'>
                    <button><KeyboardArrowUpIcon /> Collpse all</button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg mt-5 mb-5">
                <div className="p-2">
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <div className="flex gap-5">
                            <div className="text-indigo-600">
                                <button onClick={toggleExpand}>
                                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </button>
                            </div>
                            <div>
                                <h1 className="font-semibold"><span><EngineeringIcon className="mr-5 text-gray-500 text-3xl" /></span> General conditions</h1>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="px-4 py-2 border border-t bg-gray-400 font-semibold rounded-lg">No material recorded</p>
                            <button className="text-red-600"><DeleteOutlineIcon /></button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 mb-2 text-gray-500 font-semibold">
                        <div>
                            <h1>Item</h1>
                        </div>
                        <div>
                            <h1>Qty</h1>
                        </div>
                        <div className="flex gap-4">
                            <h1>Waste</h1>
                            <h1>Qty to order</h1>
                        </div>
                    </div>
                </div>

                <hr />

                {isExpanded && (
                    <div>
                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Allowance time for a project manager
                            </button>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Plans printing allowance
                            </button>
                            <div className="p-2 flex items-center justify-between">
                                <input placeholder="Enter material name" className="p-2 rounded-lg" />
                                <input type="text" placeholder="0" className="p-2 rounded-lg w-11 text-center border border-gray-400" />
                                <label>unit</label>
                                <input type="text" placeholder="15%" className="p-2 rounded-lg w-20 text-center border border-gray-400" />
                                <label>0</label>
                                <button className="text-red-600"><DeleteOutlineIcon /></button>
                            </div>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="flex items-center justify-center mt-5 mb-5">
                            <button className="p-2 bg-white border border-gray-500 rounded-lg text-gray-500 hover:bg-gray-200"><AddIcon /> Add a category to schedule</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white p-4 rounded-lg mt-5 mb-5">
                <div className="p-2">
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <div className="flex gap-5">
                            <div className="text-indigo-600">
                                <button onClick={toggleExpand}>
                                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </button>
                            </div>
                            <div>
                                <h1 className="font-semibold"><span><EngineeringIcon className="mr-5 text-gray-500 text-3xl" /></span> General conditions</h1>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="px-4 py-2 border border-t bg-gray-400 font-semibold rounded-lg">No material recorded</p>
                            <button className="text-red-600"><DeleteOutlineIcon /></button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 mb-2 text-gray-500 font-semibold">
                        <div>
                            <h1>Item</h1>
                        </div>
                        <div>
                            <h1>Qty</h1>
                        </div>
                        <div className="flex gap-4">
                            <h1>Waste</h1>
                            <h1>Qty to order</h1>
                        </div>
                    </div>
                </div>

                <hr />

                {isExpanded && (
                    <div>
                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Allowance time for a project manager
                            </button>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Plans printing allowance
                            </button>
                            <div className="p-2 flex items-center justify-between">
                                <input placeholder="Enter material name" className="p-2 rounded-lg" />
                                <input type="text" placeholder="0" className="p-2 rounded-lg w-11 text-center border border-gray-400" />
                                <label>unit</label>
                                <input type="text" placeholder="15%" className="p-2 rounded-lg w-20 text-center border border-gray-400" />
                                <label>0</label>
                                <button className="text-red-600"><DeleteOutlineIcon /></button>
                            </div>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="flex items-center justify-center mt-5 mb-5">
                            <button className="p-2 bg-white border border-gray-500 rounded-lg text-gray-500 hover:bg-gray-200"><AddIcon /> Add a category to schedule</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white p-4 rounded-lg mt-5 mb-5">
                <div className="p-2">
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <div className="flex gap-5">
                            <div className="text-indigo-600">
                                <button onClick={toggleExpand}>
                                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </button>
                            </div>
                            <div>
                                <h1 className="font-semibold"><span><EngineeringIcon className="mr-5 text-gray-500 text-3xl" /></span> General conditions</h1>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="px-4 py-2 border border-t bg-gray-400 font-semibold rounded-lg">No material recorded</p>
                            <button className="text-red-600"><DeleteOutlineIcon /></button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 mb-2 text-gray-500 font-semibold">
                        <div>
                            <h1>Item</h1>
                        </div>
                        <div>
                            <h1>Qty</h1>
                        </div>
                        <div className="flex gap-4">
                            <h1>Waste</h1>
                            <h1>Qty to order</h1>
                        </div>
                    </div>
                </div>

                <hr />

                {isExpanded && (
                    <div>
                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Allowance time for a project manager
                            </button>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Plans printing allowance
                            </button>
                            <div className="p-2 flex items-center justify-between">
                                <input placeholder="Enter material name" className="p-2 rounded-lg" />
                                <input type="text" placeholder="0" className="p-2 rounded-lg w-11 text-center border border-gray-400" />
                                <label>unit</label>
                                <input type="text" placeholder="15%" className="p-2 rounded-lg w-20 text-center border border-gray-400" />
                                <label>0</label>
                                <button className="text-red-600"><DeleteOutlineIcon /></button>
                            </div>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="flex items-center justify-center mt-5 mb-5">
                            <button className="p-2 bg-white border border-gray-500 rounded-lg text-gray-500 hover:bg-gray-200"><AddIcon /> Add a category to schedule</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white p-4 rounded-lg mt-5 mb-5">
                <div className="p-2">
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <div className="flex gap-5">
                            <div className="text-indigo-600">
                                <button onClick={toggleExpand}>
                                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </button>
                            </div>
                            <div>
                                <h1 className="font-semibold"><span><EngineeringIcon className="mr-5 text-gray-500 text-3xl" /></span> General conditions</h1>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="px-4 py-2 border border-t bg-gray-400 font-semibold rounded-lg">No material recorded</p>
                            <button className="text-red-600"><DeleteOutlineIcon /></button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5 mb-2 text-gray-500 font-semibold">
                        <div>
                            <h1>Item</h1>
                        </div>
                        <div>
                            <h1>Qty</h1>
                        </div>
                        <div className="flex gap-4">
                            <h1>Waste</h1>
                            <h1>Qty to order</h1>
                        </div>
                    </div>
                </div>

                <hr />

                {isExpanded && (
                    <div>
                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Allowance time for a project manager
                            </button>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="mt-5 mb-5">
                            <button className="w-full text-gray-500 mt-2 mb-2 flex p-2 border border-gray-400 rounded-lg hover:bg-gray-200">
                                Plans printing allowance
                            </button>
                            <div className="p-2 flex items-center justify-between">
                                <input placeholder="Enter material name" className="p-2 rounded-lg" />
                                <input type="text" placeholder="0" className="p-2 rounded-lg w-11 text-center border border-gray-400" />
                                <label>unit</label>
                                <input type="text" placeholder="15%" className="p-2 rounded-lg w-20 text-center border border-gray-400" />
                                <label>0</label>
                                <button className="text-red-600"><DeleteOutlineIcon /></button>
                            </div>
                            <div className="flex text-indigo-600 font-semibold mt-4">
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <AddIcon className="mr-2" /> Add materials
                                </button>
                                <button className="flex items-center px-4 py-2 hover:text-gray-800">
                                    <SearchIcon className="mr-2" /> Search catalog
                                </button>
                            </div>
                        </div>

                        <hr />

                        <div className="flex items-center justify-center mt-5 mb-5">
                            <button className="p-2 bg-white border border-gray-500 rounded-lg text-gray-500 hover:bg-gray-200"><AddIcon /> Add a category to schedule</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SlugMaterials;