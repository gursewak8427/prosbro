
"use client"

import { Attachment, AttachmentOutlined, AttachmentTwoTone, DeleteOutline, UploadFile } from "@mui/icons-material"
import { useState } from "react";

export const ProjectSettings = () => {
    const [payments, setPayments] = useState([{ title: 'Begining of Project', amount: '20' }]);

    const addPayments = () => {
        setPayments([...payments, { title: '', amount: '0' }]);
    };

    const removePayments = (index) => {
        const updatedData = payments.filter((_, i) => i !== index);
        setPayments(updatedData);
    };

    const handlePaymentAmountChange = (index, field, value) => {
        const updatedData = payments.map((tax, i) =>
            i === index ? { ...tax, [field]: value } : tax
        );
        setPayments(updatedData);
    };

    return (<>
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Project Settings</h2>

            <div className="mb-6">
                <h3 className="text-lg font-semibold">Default terms and conditions</h3>
                <textarea
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-gray-100 h-[400px]"
                    defaultValue={`Purpose
The purpose of this Agreement is to set forth the terms and conditions under which Contractor will perform the construction work described above for Client.

Scope of Work
The Contractor shall perform the construction work described in this quote in accordance with all applicable laws and regulations and in accordance with the plans and specifications provided.

...

Payment Terms
The Contractor shall be solely responsible to take the necessary steps to protect the health and ensure the safety and physical well-being of construction workers.
Purpose
The purpose of this Agreement is to set forth the terms and conditions under which Contractor will perform the construction work described above for Client.

Scope of Work
The Contractor shall perform the construction work described in this quote in accordance with all applicable laws and regulations and in accordance with the plans and specifications provided.

...

Payment Terms
The Contractor shall be solely responsible to take the necessary steps to protect the health and ensure the safety and physical well-being of construction workers.
Purpose
The purpose of this Agreement is to set forth the terms and conditions under which Contractor will perform the construction work described above for Client.

Scope of Work
The Contractor shall perform the construction work described in this quote in accordance with all applicable laws and regulations and in accordance with the plans and specifications provided.

...

Payment Terms
The Contractor shall be solely responsible to take the necessary steps to protect the health and ensure the safety and physical well-being of construction workers.`}
                />
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold">Default payment schedule</h3>
                <div className="space-y-4">

                    {
                        payments?.map((payDetails, index) => {
                            return <div className="flex items-center space-x-4">
                                <input type="text" value={payDetails?.title} className="p-2 border border-gray-300 rounded-md bg-gray-100 w-1/2" />
                                <input
                                    type="text"
                                    value={`${payDetails?.amount}%`}
                                    className="w-20 p-2 border border-gray-300 rounded-md bg-gray-100 text-center"
                                />
                                <button onClick={() => removePayments(index)} className="text-red-500">
                                    <DeleteOutline />
                                </button>
                            </div>
                        })
                    }
                </div>
                <button onClick={addPayments} className="mt-4 text-blue-600 hover:underline">+ Add payment</button>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold">Default quote validity</h3>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        value="7"
                        className="w-20 p-2 border border-gray-300 rounded-md bg-gray-100 text-center"
                        readOnly
                    />
                    <span className="text-gray-700">days</span>
                </div>
            </div>

            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Save</button>
        </div>

        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Default quote files</h2>
            <p className="mb-2 text-sm text-gray-600">
                Upload default files to be shown on all your quotes.
            </p>
            <div className="border border-dashed border-gray-600 rounded-lg px-4 py-2 w-1/4">
                <button className="text-blue-500">
                    <AttachmentOutlined /> Add file
                </button>
            </div>
        </div>

        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Taxes</h2>
            <p className="mb-2 text-sm text-gray-600">
                Used as default for new projects created. If none set, taxes will be based on project location.
            </p>
            <div className="flex justify-between items-center mb-2 w-1/2">
                <span className="font-medium">GST</span>
                <span className="text-gray-700">5%</span>
                <span className="text-gray-700">Material & labor</span>
            </div>
            <button className="text-blue-500 text-sm">Edit taxes</button>

        </div>
    </>)
}

