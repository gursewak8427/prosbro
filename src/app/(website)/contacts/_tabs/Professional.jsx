import { CloseOutlined, MoreVert } from "@mui/icons-material";
import RightSidebar from "../../_components/RightSidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomMenu from "../../_components/CustomMenu";

const people = [
    {
        name: "Gurvinder ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        role: "Engineer",
        jobTitle: "Professional Engineer",
        comapnay: "Contrive Engineering and Project Management Services",
    },
];


export const ProfessionalTable = () => {
    const [activeUser, setActiveUser] = useState(-1)

    return <>
        <div className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-700 px-4'>1 professional</div>

        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Email</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Phone </th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Role</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Job Title</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Company</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item, idx) => (
                        <tr onClick={() => { setActiveUser(item) }} key={idx} className="border-b text-center cursor-pointer hover:bg-gray-100">
                            <td className="py-4 px-4 flex items-center space-x-3">
                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                    {item.name.split(' ').map(word => word[0]).join('')}
                                </span>
                                <span className='text-sm font-semibold'>{item.name}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-left text-gray-600">{item.email}</td>
                            <td className="py-4 px-4 text-sm text-left text-gray-600">{item.phoneNumber}</td>
                            <td className="py-4 px-4 text-sm text-left text-gray-600">{item.role}</td>
                            <td className="py-4 px-4 text-sm text-left text-gray-600">{item.jobTitle}</td>
                            <td className="py-4 px-4 text-sm text-left text-gray-600">{item.comapnay}</td>
                            <td className="py-4 px-4 text-sm text-right">
                                <CustomMenu menuItems={[
                                    { label: 'Edit', onClick: () => setActiveUser(item) },
                                    { label: 'Delete', onClick: () => { }, className: "text-red-400 hover:text-red-500" },
                                ]}>
                                    <MoreVert className='text-lg text-gray-700 hover:text-black' />
                                </CustomMenu>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <EditAnProfessional activeUser={activeUser} onClose={() => { setActiveUser(-1) }} />
    </>
}


const EditAnProfessional = ({ activeUser, onClose }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false)

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
                    <h2 className="text-2xl font-semibold">Professional Information</h2>
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
                                value="Hemang Parikh"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                readOnly
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value="contriveeng@gmail.com"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                readOnly
                            />
                        </div>

                        {/* Phone number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="text"
                                value="(587) 834-5080"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Language */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Language</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                <option value="english">English</option>
                            </select>
                        </div>

                        {/* Company */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Company <span className="text-gray-500">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                value="Contrive Engineering and Project Management Services"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Role</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                <option value="engineer">Engineer</option>
                            </select>
                        </div>

                        {/* Job title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Job title <span className="text-gray-500">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                value="Professional Engineer"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-end space-x-4 w-full absolute bottom-0 bg-white p-4">
                    <button
                        onClick={handleClose}
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