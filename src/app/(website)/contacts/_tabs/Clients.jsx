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
        relatedprojects: "1"

    },
    {
        name: "Hitesg Bedi ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "3"
    },
    {
        name: "Muhhamad ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "1"
    },
    {
        name: "Rajupal",
        email: "aghreno+test@gmail.com",
        phoneNumber: "",
        relatedprojects: "2"
    },
    {
        name: "Rajupal",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: ""
    },
    {
        name: "Ramandeep",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "2"
    },
    {
        name: "Ramandeep ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects: "1"
    }
];


export const ClientsTable = () => {
    const router = useRouter()
    const [activeUser, setActiveUser] = useState(-1)

    return <>
        <div className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-700 px-4'>7 Clients</div>

        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Email</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Phone </th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Related Projects</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item, idx) => (
                        <tr onClick={() => { setActiveUser(item) }} key={idx} className="border-b text-center cursor-pointer">
                            <td className="py-4 px-4 flex items-center space-x-3">
                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                    {item.name.split(' ').map(word => word[0]).join('')}
                                </span>
                                <span className='text-sm font-semibold'>{item.name}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-left">{item.email}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.phoneNumber}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.relatedprojects}</td>
                            <td className="py-4 px-4 text-sm text-right">
                                <CustomMenu menuItems={[
                                    { label: 'Edit', onClick: () => setActiveUser(item) },
                                    { label: 'Create new project', onClick: () => { router.push(`/my-projects/new/project-creation`) } },
                                ]}>
                                    <MoreVert className='text-lg text-gray-700 hover:text-black' />
                                </CustomMenu>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <EditAnClient activeUser={activeUser} onClose={() => { setActiveUser(-1) }} />
    </>
}


const EditAnClient = ({ activeUser, onClose }) => {
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
                    <h2 className="text-2xl font-semibold">Client Information</h2>
                    <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                        <CloseOutlined />
                    </button>
                </div>
                <div className="max-w-xl mx-auto p-6 bg-white rounded-md h-[80vh] overflow-auto">
                    {/* Alert Message */}
                    <div className="p-4 mb-4 text-gray-700 font-light border border-orange-700 bg-orange-100 rounded-md">
                        <span className="font-semibold">Your client has already logged in.</span> To change contact details, only your client can do it from their own dashboard.
                    </div>
                    {/* Form Fields */}
                    <div className="space-y-4">
                        {/* Full name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full name</label>
                                <input type="text" defaultValue="Abdul Zia" className="mt-1 block w-full border border-gray-300 rounded-md p-2" readOnly />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" defaultValue="amzia@xinetworks.com" className="mt-1 block w-full border border-gray-300 rounded-md p-2" readOnly />
                            </div>
                        </div>
                        {/* Secondary Email and Phone Number */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Secondary email <span className="text-gray-500">(Optional)</span></label>
                                <input type="email" placeholder="client@email.com" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone number <span className="text-gray-500">(Optional)</span></label>
                                <input type="text" defaultValue="(403) 512-4395" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>
                        {/* Language Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Language</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                <option value="english">English</option>
                            </select>
                        </div>
                    </div>
                    {/* Related Projects Section */}
                    <div className="mt-8">
                        <h3 className="text-md font-semibold text-gray-700 mb-2">Related projects</h3>
                        <button className="text-blue-600 hover:underline" onClick={() => router.push(`/my-projects/new/project-creation`)}>+ Create a new project for this client</button>
                        {/* Projects List */}
                        <ul className="mt-4 space-y-4">
                            {/* Project Item 1 */}
                            <li className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="font-semibold">P24_0015</span>
                                    <p className="text-gray-500">Toronto, ON, Canada, Toronto</p>
                                </div>
                                <span className="text-red-500 text-xs font-semibold bg-red-100 py-1 px-2 rounded-md">To bid</span>
                            </li>
                            {/* Project Item 2 */}
                            <li className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="font-semibold">P24_0013</span>
                                    <p className="text-gray-500">3508 Boulton Road Northwest, Calgary, T2L...</p>
                                </div>
                                <span className="text-red-500 text-xs font-semibold bg-red-100 py-1 px-2 rounded-md">To bid</span>
                            </li>
                            {/* Project Item 3 */}
                            <li className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="font-semibold">P24_0012</span>
                                    <p className="text-gray-500">3508 Boulton Road NW, Calgary, T2L 1M6</p>
                                </div>
                                <span className="text-orange-500 text-xs font-semibold bg-orange-100 py-1 px-2 rounded-md">Quote sent</span>
                            </li>
                            {/* Project Item 1 */}
                            <li className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="font-semibold">P24_0015</span>
                                    <p className="text-gray-500">Toronto, ON, Canada, Toronto</p>
                                </div>
                                <span className="text-red-500 text-xs font-semibold bg-red-100 py-1 px-2 rounded-md">To bid</span>
                            </li>
                            {/* Project Item 2 */}
                            <li className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="font-semibold">P24_0013</span>
                                    <p className="text-gray-500">3508 Boulton Road Northwest, Calgary, T2L...</p>
                                </div>
                                <span className="text-red-500 text-xs font-semibold bg-red-100 py-1 px-2 rounded-md">To bid</span>
                            </li>
                            {/* Project Item 3 */}
                            <li className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="font-semibold">P24_0012</span>
                                    <p className="text-gray-500">3508 Boulton Road NW, Calgary, T2L 1M6</p>
                                </div>
                                <span className="text-orange-500 text-xs font-semibold bg-orange-100 py-1 px-2 rounded-md">Quote sent</span>
                            </li>
                        </ul>
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