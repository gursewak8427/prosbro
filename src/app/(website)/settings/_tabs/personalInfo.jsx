"use client"
import { AccountBalance, Check, CheckCircleRounded, CheckRounded, Edit, EditOutlined, FoodBank } from "@mui/icons-material";
import { useState } from "react";

export const PersonalInformation = () => {

    return (<>
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="flex items-center space-x-4">
                <div className="w-44 h-44 overflow-hidden group relative">
                    {/* Replace with your image source */}
                    <img src="https://res.cloudinary.com/dzq7uzhji/image/upload/d_no-company-logo.jpg/pzpjqjmfhulxp4actfrc.jpg" alt="Business Logo" className="object-cover w-full h-full z-30 rounded-full" />
                    <button className="bg-gray-200 bg-opacity-50 text-black px-3 py-1 rounded-full w-full h-full hidden group-hover:block absolute top-[50%] transform translate-y-[-50%] translate-x-[-50%] left-[50%] z-50">
                        <EditOutlined color="primary"/>
                    </button>
                </div>
            </div>
            <form className="space-y-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value="Gurvinder Singh"
                        className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        readOnly
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value="aghreno@gmail.com"
                            className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Secondary email</label>
                        <input
                            type="email"
                            className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone number</label>
                        <input
                            type="tel"
                            value="+1 587-899-3252"
                            className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Language</label>
                        <select className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 w-full">
                            <option>English</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div className="pt-4">
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Save</button>
                </div>
            </form>
        </div>
    </>)
}

