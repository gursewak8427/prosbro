import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CircleIcon from '@mui/icons-material/Circle';

function SlugDiscription() {
    return (
        <>
            <div className='mt-5 mb-5 bg-white p-4 rounded-lg'>
                <h1 className='flex items-center text-xl font-bold'>Client contact<span className='ml-5 text-indigo-600'> <EditIcon /></span></h1>
                <div className='flex gap-5 mt-3 mb-3 text-indigo-600'>
                    <p><span className='text-gray-500'><PersonIcon /></span> Grujeet Singh</p>
                    <p className='text-gray-500'>|</p>
                    <p><span className='text-gray-500'><LocalPhoneIcon /> </span>5555-555-555</p>
                    <p className='text-gray-500'>|</p>
                    <p><span className='text-gray-500'><EmailIcon /> </span> Gurjeet@gmail.com</p>
                </div>
            </div>

            <div className='mt-5 mb-5 bg-white p-4 rounded-lg'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Tasks</h1>
                    </div>
                    <div className='flex gap-5'>
                        <button className='font-semibold px-4 py-2 border border-gray-400 rounded-lg'><span><AddIcon /> </span>Add Tasks</button>
                        <button className='font-semibold text-indigo-600'>See all <span><ArrowForwardIosIcon /> </span></button>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-3 mb-3'>
                    <h1 className='text-xl font-semibold mt-3 mb-3'>Say goodbye to chaos and hello to productivity!</h1>
                    <p className='text-gray-500'>Easily add tasks to keep everything organized.</p>
                </div>
            </div>

            <div className='flex  gap-5 justify-between'>
                <div className='w-1/2'>
                    <div className='mt-5 mb-5 bg-white px-4 py-6 rounded-lg'>
                        <h1 className='text-xl font-semibold mt-2 mb-3'>Home Visit</h1>
                        <button className='text-indigo-600'><CalendarTodayIcon className='text-lg' /> Schedule your home visit</button>

                    </div>
                    <div className='mt-5 mb-5 bg-white px-4 py-6  rounded-lg'>
                        <h1 className='text-xl font-semibold mt-2 mb-3'>Latest activity</h1>
                        <p className='text-gray-500'><CircleIcon className='text-indigo-600 text-sm mr-2' /> You created the project
                            July 25th 2024 11:14:04PM</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='mt-5 mb-5 bg-white p-4 rounded-lg'>
                        <h1 className='text-lg font-semibold mb-3 mt-2'>My personal notes</h1>
                        <input className='py-10 px-2 w-full rounded-lg border border-gray-400 ' placeholder='Add some personal notes about this project'></input>
                    </div>

                    <div className="rounded-lg max-w-full list-none transition-none overflow-hidden w-[500px] h-[400px]">
                        <div id="my-map-display" className="h-full w-full max-w-full">
                            <iframe
                                className="h-full w-full border-0"
                                frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/place?q=Toronto&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                allowFullScreen
                                title="Google Map"
                            ></iframe>
                        </div>
                      
                    </div>
                </div>

            </div>

        </>
    )
}

export default SlugDiscription