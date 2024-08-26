
"use client"

import { FetchDefQuotetaxes, FetchProjectProfile } from "@/app/redux/AuthSlice";
import { Attachment, AttachmentOutlined, AttachmentTwoTone, DeleteOutline, UploadFile } from "@mui/icons-material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProjectSettings = () => {
    const dispatch = useDispatch();
    const profile = useSelector(store => store.userData.projectprofile);
    const taxes = useSelector(store => store.userData.defaultquotetaxes);
    const [payments, setPayments] = useState([]);

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
    useEffect(() => {
        if (!Object.keys(profile).length) {
            dispatch(FetchProjectProfile())
            dispatch(FetchDefQuotetaxes())
            return
        }
        setPayments(profile.paymentschedule)
    }, [profile])
    return (<>
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Project Settings</h2>

            <div className="mb-6">
                <h3 className="text-lg font-semibold">Default terms and conditions</h3>
                <textarea
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-gray-100 h-[400px]"
                    value={profile?.tc}
                />
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold">Default payment schedule</h3>
                <div className="space-y-4">

                    {
                        payments?.map((payDetails, index) => {
                            return <div className="flex items-center space-x-4">
                                <input type="text" value={payDetails?.name} className="p-2 border border-gray-300 rounded-md bg-gray-100 w-1/2" />
                                <input
                                    type="text"
                                    value={`${payDetails?.number}%`}
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
                        value={profile?.quotevalidity}
                        className="w-20 p-2 border border-gray-300 rounded-md bg-gray-100 text-center"
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
            {
                taxes.map((item, index) => (
                    <div className="flex justify-between items-center mb-2 w-1/2" key={index}>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-700">{item.number}%</span>
                        <span className="text-gray-700">{item.type}</span>
                    </div>
                ))
            }
            <button className="text-blue-500 text-sm">Edit taxes</button>

        </div>
    </>)
}

