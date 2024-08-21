import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CircleIcon from '@mui/icons-material/Circle';
import MapIframe from './MapIframe';
import { EditOutlined } from '@mui/icons-material';

function SlugDiscription({ client, project }) {
    return (
        <div className='flex flex-col gap-4'>
            <div className=' bg-white p-4 rounded-lg'>
                <h1 className='flex items-center text-lg font-bold'><span className='mt-1'>Client contact</span><span className='ml-3 text-primary'> <EditOutlined /></span></h1>
                <div className='flex gap-5 mt-3 mb-3 text-primary'>
                    <p className='flex items-center gap-2 cursor-pointer text-sm'><span className='text-gray-500'><PersonIcon /></span> {client?.name}</p>
                    <p className='text-gray-500'>|</p>
                    <p className='flex items-center gap-2 cursor-pointer text-sm'><span className='text-gray-500'><LocalPhoneIcon /> </span>{client?.mobile}</p>
                    <p className='text-gray-500'>|</p>
                    <p className='flex items-center gap-2 cursor-pointer text-sm'><span className='text-gray-500'><EmailIcon /> </span> {client?.email}</p>
                </div>
            </div>

            <div className=' bg-white p-4 rounded-lg'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-lg font-semibold'>Tasks</h1>
                    </div>
                    <div className='flex gap-5'>
                        <button className='text-sm font-semibold px-4 py-2 border border-gray-400 rounded-lg'><span><AddIcon /> </span>Add Tasks</button>
                        <button className='text-sm font-semibold text-primary'>See all <span><ArrowForwardIosIcon /> </span></button>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-3 mb-3'>
                    <h1 className='text-xl font-semibold mt-3 mb-3'>Say goodbye to chaos and hello to productivity!</h1>
                    <p className='text-gray-500'>Easily add tasks to keep everything organized.</p>
                </div>
            </div>

            <div className='flex gap-5 justify-between'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <div className=' bg-white px-4 py-6 rounded-lg'>
                        <h1 className='text-lg font-semibold mt-2 mb-3'>Home Visit</h1>
                        <button className='text-primary'><CalendarTodayIcon className='text-lg' /> Schedule your home visit</button>

                    </div>
                    <div className=' bg-white px-4 py-6 rounded-lg'>
                        <h1 className='text-lg font-semibold mt-2 mb-3'>Latest activity</h1>
                        <div className="flex flex-col gap-5">
                            {
                                [0, 1, 2, 3].map(_ => {
                                    return <p className='text-gray-500 flex flex-row gap-4 relative activity-item'>
                                        <CircleIcon className='text-primary text-sm' />
                                        <div className="right flex flex-col text-sm -mt-[2px] gap-1">
                                            <span className='font-semibold text-gray-700'>You created the project</span>
                                            <span className='font-normal text-xs'>July 25th 2024 11:14:04PM</span>
                                        </div>
                                    </p>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <div className='bg-white p-4 rounded-lg'>
                        <h1 className='text-lg font-semibold mb-3 mt-2'>My personal notes</h1>
                        <textarea rows={3} className='p-2 w-full rounded-xl border border-gray-400 text-sm' placeholder='Add some personal notes about this project'></textarea>
                    </div>

                    <div className="rounded-lg max-w-full list-none transition-none overflow-hidden w-full h-[500px] shadow-xl">
                        <div id="my-map-display" className="h-full w-full max-w-full">
                            <MapIframe lat={project?.lat} lng={project?.lng} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlugDiscription