import { CloseOutlined, MoreVert } from "@mui/icons-material";
import RightSidebar from "../../_components/RightSidebar";
import { useRouter } from "next/navigation";

export const NewProfessional = ({ isOpen, onClose }) => {
    const router = useRouter();

    const handleClose = () => {
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
                                placeholder="John Doe"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter an email address"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Phone number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="text"
                                placeholder="(000) 000-0000 "
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Language */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Language</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                <option placeholder="english">English</option>
                            </select>
                        </div>

                        {/* Company */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Company <span className="text-gray-500">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter a company name"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Role</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                <option placeholder="engineer">Engineer</option>
                            </select>
                        </div>

                        {/* Job title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Job title <span className="text-gray-500">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Professional Engineer"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
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