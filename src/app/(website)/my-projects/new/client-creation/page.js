"use client";
import React, { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/app/redux/AxiosInstance';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from "react-toastify";
import { projectAction } from '@/app/redux/Project/ProjectSlice';


function Page() {
    const [form, setForm] = useState({ email: '', name: '', mobile: '', language: '' });
    const [errors, setErrors] = useState({ email: '', name: '', mobile: '', language: '' });
    const [btnloading, setBtnloading] = useState(false)
    const formone = useSelector(data => data.newProject.formone);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        validateInput(name, value);
    };

    const validateInput = (name, value) => {
        let error = '';

        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) error = 'Email is required';
            else if (!emailPattern.test(value)) error = 'Invalid email format';
        }

        if (name === 'mobile') {
            const mobilePattern = /^[0-9]+$/;
            if (!value) error = 'Phone number is required';
            else if (!mobilePattern.test(value)) error = 'Phone number must be numeric';
        }

        if (name === 'name' && !value) error = 'Full name is required';
        if (name === 'language' && !value) error = 'Language is required';

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnloading(true)
        let localErrors = {};
        const validateField = (name, value) => {
            let error = '';

            if (name === 'email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) error = 'Email is required';
                else if (!emailPattern.test(value)) error = 'Invalid email format';
            }

            if (name === 'mobile') {
                const mobilePattern = /^[0-9]+$/;
                if (!value) error = 'Phone number is required';
                else if (!mobilePattern.test(value)) error = 'Phone number must be numeric';
            }

            if (name === 'name' && !value) error = 'Full name is required';
            if (name === 'language' && !value) error = 'Language is required';
            localErrors[name] = error;
        };
        Object.keys(form).forEach((key) => validateField(key, form[key]));

        if (Object.values(localErrors).every(error => error === '')) {
            const formdata = {
                ...form,
                ...formone,
                newclient: true
            }
            try {
                const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/newproject/`, formdata)
                dispatch(projectAction(response.data))
                router.push(`/my-projects/${response.data.slug}?tab=description`)
                setBtnloading(false)
            } catch (error) {
                toast.error('Client Already Exist', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setBtnloading(false)
            }
        } else {
            setBtnloading(false)
            setErrors(localErrors);
        }
    };

    useEffect(() => {
        if (Object.keys(formone).length === 0) {
            router.push('/my-projects/new/project-creation')
        }
    }, [formone, router])
    return (
        <>
            <ToastContainer />
            <div className="w-full bg-gray-200 min-h-screen">
                <div className="max-w-screen mx-auto bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
                    <div className="relative z-10 hidden h-full sm:flex md:w-full lg:w-[65%]">
                        <img
                            src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
                            alt="Sign Up Step"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative h-full px-12 md:w-full lg:w-[35%] tablet:px-6">
                        <div class="flex h-20 w-full items-center justify-between">
                            <button
                                className="rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row text-base justify-center bg-transparent text-primary hover:text-secondary p-0 flex cursor-pointer items-center gap-1"
                                type="button"
                                data-headlessui-state=""
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path></svg>
                                <Link href={'/my-projects'}>Back</Link>
                            </button>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 cursor-pointer"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>
                        </div>
                        <div className="flex h-5/6 flex-col">
                            <h2 className="text-3xl font-bold mt-5 mb-10">Client information</h2>
                            <div className="flex h-full flex-col justify-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2 text-sm font-semibold">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="client@email.com"
                                            className={`w-full h-11 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-indigo-600'}`}
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2 text-sm font-semibold">Full name</label>
                                        <input
                                            name="name"
                                            placeholder="John Doe"
                                            className={`w-full h-11 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-indigo-600'}`}
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex justify-between">
                                            <label className="block text-gray-700 mb-2 text-sm font-semibold">Phone number</label>
                                            <label className="block text-gray-500 mb-2 text-sm">Optional</label>
                                        </div>
                                        <input
                                            name="mobile"
                                            type="text"
                                            placeholder="555-555-5555"
                                            className={`w-full h-11 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-500' : 'focus:ring-indigo-600'}`}
                                            value={form.mobile}
                                            onChange={handleChange}
                                        />
                                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-1 text-sm font-semibold">Preferred language</label>
                                        <p className='text-sm text-gray-500 mb-1'>Your clients will receive automatic notifications in this language</p>
                                        <select
                                            name="language"
                                            className={`w-full h-11 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.language ? 'border-red-500' : 'focus:ring-indigo-600'}`}
                                            value={form.language}
                                            onChange={handleChange}
                                        >
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="French">French</option>
                                        </select>
                                        {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language}</p>}
                                    </div>
                                    <div className="mb-4 mt-8 flex justify-between">
                                        <button
                                            type="submit"
                                            className="bg-primary h-11 w-full text-sm font-semibold text-white px-4 py-2 rounded-xl transition-colors"
                                            disabled={btnloading}
                                        >
                                            {
                                                btnloading ? 'please wait' : 'Confirm and create project'
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
