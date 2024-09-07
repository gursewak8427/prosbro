import { CloseOutlined, MoreVert } from "@mui/icons-material";
import RightSidebar from "../../_components/RightSidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import { Switch } from "@mui/joy";
import { switchStyles } from "@/app/utils";
import CustomMenu from "../../_components/CustomMenu";


const people = [
    {
        name: "Gurvinder ",
        currentStatus: true,
        phoneNumber: "(587) 555-1234",
        jobTitle: "Owner",
        smsReminder: true
    },
    {
        name: "Princepal Singh",
        currentStatus: false,
        phoneNumber: "(587) 555-5678",
        jobTitle: "Supervisor",
        smsReminder: false
    },
    {
        name: "Rupundrapal Singh",
        currentStatus: false,
        phoneNumber: "(587) 555-8765",
        jobTitle: "-",
        smsReminder: true
    },
    {
        name: "Ajmer Dhillon",
        currentStatus: true,
        phoneNumber: "(587) 555-4321",
        jobTitle: "-",
        smsReminder: false
    },
    {
        name: "Gagandeep Singh",
        currentStatus: false,
        phoneNumber: "(587) 555-9876",
        jobTitle: "-",
        smsReminder: true
    }
];


export const EmployeeTable = () => {
    const router = useRouter();
    const [activeUser, setActiveUser] = useState(-1)

    return <>
        <div className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-700 px-4'>7 members</div>

        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Current Status</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Phone Number</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Job Title</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">SMS Reminder</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item, idx) => (
                        <tr onClick={() => { setActiveUser(item) }} key={idx} className="border-b text-center cursor-pointer hover:bg-gray-100">
                            <td className="py-4 px-4 text-sm text-left flex items-center space-x-3">
                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                    {item.name.split(' ').map(word => word[0]).join('')}
                                </span>
                                <span>{item.name}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-left">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${item?.currentStatus ? "bg-green-400" : "bg-red-400"}`}></div>
                                    <span>{item?.currentStatus ? "Clocked In" : "Clocked Out"}</span>
                                </div>
                            </td>
                            <td className="py-4 px-4 text-sm text-left">{item.phoneNumber}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.jobTitle}</td>
                            <td className="py-4 px-4 text-sm text-left flex flex-row gap-1 items-center">
                                <p className='text-gray-500 min-w-8'>{item.smsReminder ? 'ON' : 'OFF'}</p>
                                <div className="min-w-12 flex items-center justify-center">
                                    <Switch onClick={(e) => { e?.stopPropagation() }} defaultChecked={item?.smsReminder} sx={switchStyles} />
                                </div>
                                <p className='text-gray-700 capitalize'>
                                    {
                                        ["mon", "tue", "wed"]?.join(", ")
                                    }
                                </p>
                            </td>
                            <td className="py-4 px-4 text-sm text-right">
                                <CustomMenu menuItems={[
                                    { label: 'Send Clock-in & daily-log SMS', onClick: () => console.log('clicked') },
                                    { label: 'Edit user', onClick: () => setActiveUser(item) },
                                    { label: 'View app', onClick: () => console.log('clicked') },
                                    { label: 'Remove user', onClick: () => console.log('clicked'), className: "text-red-400 hover:text-red-500" },
                                ]}>
                                    <MoreVert className='text-lg text-gray-700 hover:text-black' />
                                </CustomMenu>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <EditAnEmployee activeUser={activeUser} onClose={() => { setActiveUser(-1) }} />
    </>
}


export const EditAnEmployee = ({ activeUser, onClose }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false)
    const [smsReminders, setSmsReminders] = useState(false);

    useEffect(() => {
        setIsOpen(activeUser !== -1)
    }, [activeUser])

    const handleClose = () => {
        setIsOpen(false)
        onClose()
    }

    return (<>
        <RightSidebar isOpen={isOpen} onClose={handleClose}>
            <div className="w-full h-screen relative">
                <div className="flex justify-between items-center p-6">
                    <h2 className="text-2xl font-semibold">Edit Member</h2>
                    <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
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
                                value="Gurvinder"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                readOnly
                            />
                        </div>

                        {/* Phone number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="text"
                                value="(587) 899-3252"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                readOnly
                            />
                        </div>

                        {/* Job title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job title <span className="text-gray-500">(Optional)</span></label>
                            <input
                                type="text"
                                value="Owner"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Hourly rate */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Hourly rate <span className="text-gray-500">(Optional)</span></label>
                            <input
                                type="text"
                                value="$25/h"
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
                        onClick={() => handleClose()}
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
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
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
