"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Step, StepLabel, Stepper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setQuoteStepperFormIndex } from '@/app/redux/CommonSlice';

const steps = ['Edit', 'Add detials', 'Customize', 'Preview'];

const pathname_map_step = {
    'edit': 0, 'add-details': 1, 'customize': 2, 'preview': 3
};

export default function QuoteLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [step, setStep] = useState(0)

    useEffect(() => {
        const pathSegments = pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        setStep(pathname_map_step[lastSegment])
    }, [pathname]);

    return (
        <div className='p-2 bg-gray-100'>
            <div className='flex justify-between items-center p-4'>
                <div className='text-indigo-600'>
                    {
                        step != 0 && <button onClick={() => {
                            switch (step) {
                                case 0:
                                    break;
                                case 1:
                                    router.push("edit")
                                    break;
                                case 2:
                                    router.push("add-details")
                                    break;
                                case 3:
                                    router.push("customize")
                                    break;

                                default:
                                    break;
                            }
                        }} className='text-lg font-semibold'><ArrowBackIosIcon /> Back</button>
                    }
                </div>

                <div className='w-4/6'>
                    <Stepper activeStep={step}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...stepProps} className='flex flex-col'>
                                    <StepLabel {...labelProps}>
                                        <div className='font-semibold'>
                                            {label}
                                        </div>
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>

                {/* ======== OLD STEPPER ========== */}
                {/* <div className='flex gap-16'>
                    <div className='flex flex-col items-center'>
                        <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
                            <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
                        </button>
                        <span className='mt-2 text-sm text-gray-600'>Edit</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
                            <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
                        </button>
                        <span className='mt-2 text-sm text-gray-600'>Add details</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
                            <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
                        </button>
                        <span className='mt-2 text-sm text-gray-600'>Customize</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='w-6 h-6 bg-transparent rounded-full border-2 border-indigo-600 flex items-center justify-center'>
                            <div className='w-4 h-4 bg-indigo-600 rounded-full'></div>
                        </button>
                        <span className='mt-2 text-sm text-gray-600'>Send</span>
                    </div>
                </div> */}
                <div className='text-indigo-600'>
                    <button className='text-lg font-semibold'>Save and exit</button>
                </div>
            </div>
            <hr className='mt-4' />
            {children}
        </div>
    );
}
