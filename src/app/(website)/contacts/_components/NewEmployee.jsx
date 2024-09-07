import { CloseOutlined, MoreVert } from "@mui/icons-material";
import RightSidebar from "../../_components/RightSidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import { Switch } from "@mui/joy";
import { switchStyles } from "@/app/utils";


export const NewEmployee = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [smsReminders, setSmsReminders] = useState(false)

    return (<>
        <RightSidebar isOpen={isOpen} onClose={onClose}>
            <div className="w-full h-screen relative">
                <div className="flex justify-between items-center p-6">
                    <h2 className="text-2xl font-semibold">New Member</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <CloseOutlined />
                    </button>
                </div>
                <div className="max-w-xl mx-auto p-6 bg-white rounded-md h-[80vh] overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                readOnly
                            />
                        </div>

                        {/* Phone number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                readOnly
                            />
                        </div>

                        {/* Job title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job title <span className="text-gray-500">(Optional)</span></label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Hourly rate */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Hourly rate <span className="text-gray-500">(Optional)</span></label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-medium text-gray-900">Set custom SMS reminders</h2>
                        <p className="text-sm text-gray-500">A SMS will be sent at the start and end of each working day.</p>
                    </div>

                    {/* SMS Reminders Toggle */}
                    <div className="flex items-center my-4">
                        <span className="text-sm font-medium text-gray-700 mr-2">SMS reminders</span>
                        <div className="flex items-center">
                            <span className="mr-2 text-sm">ON</span>
                            <div className="min-w-12">
                                <Switch onClick={(e) => e?.stopPropagation()} defaultChecked={smsReminders} onChange={() => setSmsReminders(!smsReminders)} sx={switchStyles} />
                            </div>
                        </div>
                    </div>

                    {/* Days of the week checkboxes */}
                    {/* <div className="grid grid-cols-1 gap-3 mt-4">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                            <div key={day} className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">{day}</label>
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                />
                            </div>
                        ))}
                    </div> */}

                    <TimeScheduler />

                </div>

                <div className="flex flex-row justify-end space-x-4 w-full absolute bottom-0 bg-white p-4">
                    <button
                        onClick={onClose}
                        className="w-1/2 px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50"
                    >
                        Cancel
                    </button>
                    <button
                        className="w-1/2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                        Save
                    </button>
                </div>
            </div>
        </RightSidebar>
    </>)
}

const TimeScheduler = () => {
    const [checkedDays, setCheckedDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    });

    const [times, setTimes] = useState({
        Monday: { start: null, end: null },
        Tuesday: { start: null, end: null },
        Wednesday: { start: null, end: null },
        Thursday: { start: null, end: null },
        Friday: { start: null, end: null },
        Saturday: { start: null, end: null },
        Sunday: { start: null, end: null },
    });

    const handleDayChange = (day) => {
        setCheckedDays({ ...checkedDays, [day]: !checkedDays[day] });
    };

    const handleTimeChange = (day, type, newTime) => {
        setTimes({ ...times, [day]: { ...times[day], [type]: newTime } });
    };

    return (
        <Box>
            {Object.keys(checkedDays).map((day) => (
                <Box key={day} className="select-none flex flex-row items-center justify-between">
                    <Box className={`${checkedDays[day] ? 'bg-primary-soft  border-primary' : 'border-transparent'} border px-4 rounded-xl w-[150px]`}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedDays[day]}
                                    onChange={() => handleDayChange(day)}
                                />
                            }
                            label={day}
                        />
                    </Box>
                    {checkedDays[day] ? (
                        <div className="flex flex-row items-center gap-3">
                            <input className="h-9 border p-2 m-2" type="time" name="" id="" />
                            <span className="w-4 h-[1px] bg-gray-800"></span>
                            <input className="h-9 border p-2 m-2" type="time" name="" id="" />
                        </div>
                    ) : <div className="h-9 p-2 m-2 w-[309px] flex items-center justify-center">
                        <span className="w-4 h-[1px] bg-gray-800"></span>
                    </div>}
                </Box>
            ))}
        </Box>
    );
};
