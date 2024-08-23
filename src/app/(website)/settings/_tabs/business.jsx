"use client"
import { AccountBalance, Check, CheckCircleRounded, CheckRounded, FoodBank } from "@mui/icons-material";
import { useState } from "react";

export const Business = () => {
    const [taxNumbers, setTaxNumbers] = useState([{ name: 'GST', number: '733658314RT0001' }]);

    const addTaxNumber = () => {
        setTaxNumbers([...taxNumbers, { name: '', number: '' }]);
    };

    const removeTaxNumber = (index) => {
        const updatedTaxNumbers = taxNumbers.filter((_, i) => i !== index);
        setTaxNumbers(updatedTaxNumbers);
    };

    const handleTaxChange = (index, field, value) => {
        const updatedTaxNumbers = taxNumbers.map((tax, i) =>
            i === index ? { ...tax, [field]: value } : tax
        );
        setTaxNumbers(updatedTaxNumbers);
    };

    return (<>
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Business</h2>
            <div className="flex items-center space-x-4">
                <div className="w-44 h-44 bg-gray-200 overflow-hidden hover:bg-black hover:bg-opacity-20 group relative">
                    {/* Replace with your image source */}
                    <img src="https://res.cloudinary.com/dzq7uzhji/image/upload/d_no-company-logo.jpg/pzpjqjmfhulxp4actfrc.jpg" alt="Business Logo" className="object-cover w-full h-full z-30 rounded-lg" />
                    <button className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-t-md hidden group-hover:block absolute bottom-0 w-full z-50">Edit</button>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company name</label>
                    <input
                        type="text"
                        value="AGH Renovation Limited"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company address</label>
                    <input
                        type="text"
                        value="2016 Redwood Crescent SE, Calgary, Alberta, T2B 1R7, Canada"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company website</label>
                    <input
                        type="text"
                        value="https://www.aghrenovation.ca"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
            </div>
            <button className="mt-4 bg-gray-300 text-gray-700 px-3 py-2 rounded-md">Save</button>
        </div>

        <div className='w-full p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-2xl font-semibold mb-6">Documents</h2>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Business license</label>
                <input
                    type="text"
                    placeholder="Add your business license number Ex: 8352285ABC31"
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                />
            </div>

            {taxNumbers.map((tax, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                    <div className="w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tax Name</label>
                        <input
                            type="text"
                            value={tax.name}
                            onChange={(e) => handleTaxChange(index, 'name', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                            placeholder="HST"
                        />
                    </div>
                    <div className="w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number</label>
                        <input
                            type="text"
                            value={tax.number}
                            onChange={(e) => handleTaxChange(index, 'number', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                            placeholder="8584846865X0005"
                        />
                    </div>
                    <button
                        onClick={() => removeTaxNumber(index)}
                        className="text-primary hover:text-primary-dark text-sm mt-5"
                    >
                        &minus; Remove
                    </button>
                </div>
            ))}

            <button
                onClick={addTaxNumber}
                className="text-primary hover:text-primary-dark text-sm mb-6"
            >
                + Add tax number
            </button>

            <div className="mb-6 flex items-center space-x-4">
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Insurance</label>
                    <div className="w-full border-dashed border-2 border-gray-300 rounded-md shadow-sm p-2 flex items-center space-x-2 cursor-pointer">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.172 7l-6.414 6.414a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828L9.586 2m5.586 5.586L20 9m0 0l-5.172-5.172a2 2 0 00-2.828 0l-8.586 8.586a4 4 0 000 5.656l1.414 1.414a4 4 0 005.656 0L20 9z"
                            ></path>
                        </svg>
                        <span className="text-primary">Add insurance file</span>
                    </div>
                </div>
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Insurance expiration date</label>
                    <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700">Save</button>
        </div>

        <div className='w-full p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-2xl font-semibold mb-6">Bank account</h2>
            <div className="p-4 bg-green-200 bg-opacity-45 border border-green-400 rounded-lg text-sm flex flex-col gap-2">
                <div className="flex items-center gap-1">
                    <CheckCircleRounded color="success" />
                    <p className="text-teal-600 font-medium">Your bank account is connected</p>
                </div>
                <div className="flex items-center gap-2">
                    <AccountBalance color="success" />
                    <div className="">
                        <p className="text-gray-800">ATB FINANCIAL</p>
                        <p className="text-gray-600">08209-219 | XXXX-6779</p>
                    </div>
                </div>
                <a href="#" className="text-gray-700 underline">Edit</a>
            </div>
        </div>
    </>)
}

