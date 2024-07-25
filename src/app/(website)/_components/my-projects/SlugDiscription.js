import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

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
        </>
    )
}

export default SlugDiscription