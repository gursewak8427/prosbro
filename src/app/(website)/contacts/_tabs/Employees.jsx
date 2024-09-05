import { MoreVert } from "@mui/icons-material";
import { Switch } from "@mui/material";

const people = [
    {
        name: "Gurvinder ",
        currentStatus: "Clocked In",
        phoneNumber: "555-1234",
        jobTitle: "Owner",
        smsReminder: true
    },
    {
        name: "Princepal Singh",
        currentStatus: "Clocked Out",
        phoneNumber: "555-5678",
        jobTitle: "Supervisor",
        smsReminder: false
    },
    {
        name: "Rupundrapal Singh",
        currentStatus: "Clocked Out",
        phoneNumber: "555-8765",
        jobTitle: "-",
        smsReminder: true
    },
    {
        name: "Ajmer Dhillon",
        currentStatus: "Clocked in",
        phoneNumber: "555-4321",
        jobTitle: "-",
        smsReminder: false
    },
    {
        name: "Gagandeep Singh",
        currentStatus: "Clocked Out",
        phoneNumber: "555-9876",
        jobTitle: "-",
        smsReminder: true
    }
];


export const EmployeeTable = () => {
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
                        <tr key={idx} className="border-b text-center">
                            <td className="py-4 px-4 text-sm text-left flex items-center space-x-3">
                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                    {item.name.split(' ').map(word => word[0]).join('')}
                                </span>
                                <span>{item.name}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-left">{item.currentStatus}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.phoneNumber}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.jobTitle}</td>
                            <td className="py-4 px-4 text-sm text-left flex flex-row gap-1 items-center">
                                <p className='text-gray-500'>{item.smsReminder ? 'ON' : 'OFF'}</p>
                                <Switch defaultChecked={item?.smsReminder} />
                                <p className='text-gray-700 capitalize'>
                                    {
                                        ["mon", "tue", "wed"]?.join(", ")
                                    }
                                </p>
                            </td>
                            <td className="py-4 px-4 text-sm text-right">
                                <button className='w-8 h-8'>
                                    <MoreVert className='text-lg text-gray-700 hover:text-black' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}