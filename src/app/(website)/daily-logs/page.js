import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function page() {
    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md'>

            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Daily logs</h1>
                </div>
                <button
                    className="text-white px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 duration-200">
                    + New Daily logs
                </button>
            </div>

            <div className='flex gap-5'>
                <div className='mt-5 mb-5'>
                    <div className=" flex gap-4">
                        <select className="p-2 border rounded-lg">
                            <option value="" disabled selected>Select a project</option>
                            <option value="Project-1">Project-1</option>
                            <option value="Project-2">Project-2</option>
                            <option value="Project-3">Project-3</option>
                            <option value="Project-">Project-4</option>
                        </select>
                    </div>
                </div>
                <div className='mt-5 mb-5'>
                    <div className=" flex gap-4">
                        <select className="p-2 border rounded-lg">
                            <option value="" disabled selected>Select a member</option>
                            <option value="Gurvinder Singh">Gurvinder Singh</option>
                            <option value="Gurvinder Singh">Gurvinder Singh</option>
                            <option value="Gurvinder Singh">Gurvinder Singh</option>
                            <option value="Gurvinder Singh">Gurvinder Singh</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-white p-6 rounded-md '>
                <div className='flex justify-between '>
                    <h1>No projects assigned </h1>
                    <button className='hover:bg-slate-300 flex justify-center items-center w-7 h-7 rounded-md'><MoreVertIcon/></button>
                </div>

                <div className='flex gap-3 mt-5 mb-5'>
                    <h1 className='bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center '>G.</h1>
                    <div>
                        <h1 className='text-sm font-semibold'>Gurvinder</h1>
                        <p className='text-xs'> Jul 11th 2024 07:35PM</p>
                    </div>
                </div>

                <div>
                    <h1 className='mt-3 mb-5'>Work job</h1>
                    <h1 className='font-semibold'>Files</h1>
                    <div className='flex w-1/3'>
                        <div className='flex flex-col w-1/2 justify-between m-4 p-2 border rounded-lg shadow-lg'>
                            <img src='https://miro.medium.com/max/8576/1*p1zBnv11CSx_EII8sB9Uaw.jpeg' alt='Image Description' className='rounded-md mb-2 w-full h-auto' />
                            <p className='text-center text-xs'>837,973</p>
                        </div>
                        <div className='flex flex-col w-1/2 m-4 p-2 border rounded-lg shadow-lg'>
                            <img src='https://miro.medium.com/max/8576/1*p1zBnv11CSx_EII8sB9Uaw.jpeg' alt='Image Description' className='rounded-md mb-2 w-full h-auto' />
                            <p className='text-center text-xs'>837,973</p>
                        </div>
                    </div>




                </div>

                <hr></hr>

                <div className='mt-5 mb-5'>
                    <h1 className='font-semibold text-xl '>Comments</h1>
                    <button className=' mt-5 mb-5 px-4 py-2 rounded-lg text-indigo-600 border-2 border-indigo-600'><span><QuestionAnswerIcon/> </span>Add comment</button>
                </div>
            </div>



        </div>
    )
}

export default page