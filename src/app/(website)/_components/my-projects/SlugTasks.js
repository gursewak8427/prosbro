import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
function SlugTasks() {
    const data = [
        {
            discription: 'Protect floors',
            comments: '0',
            assignees: '',
            startdate: '21/02/2023',
            duedate: '11/08/2023',
            completedon: '',
            status: '',
        },
    ]

    return (
        <div>
            <div className='flex gap-5 mt-5 mb-5 '>
                <select class="px-8 py-4 rounded-lg border border-gray-300">
                    <option value="" disabled selected>Select assignees</option>
                    <option value="gurvinder">Gurvinder Singh</option>
                    <option value="gagandeep">Gagandeep</option>
                    <option value="rupinderpal">Rupinderpal</option>
                    <option value="ajmer">Ajmer Dhillon</option>
                    <option value="principal">Principal Singh</option>
                </select>
                <select class="px-8 py-4 rounded-lg border border-gray-300">
                    <option value="" disabled selected>Select status</option>
                    <option value="not_started">Not started</option>
                    <option value="in_progress">In progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>

            <div className="overflow-x-auto rounded-lg mt-5">
                <table className="min-w-full bg-white">

                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Discription</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Comments</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Assigness</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Start date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Due date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Completed on</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.discription}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><ChatBubbleOutlineIcon className='text-sm mr-1' />{item.comments}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200 flex items-center justify-center space-x-2">
                                    <span className="w-10 h-10 rounded-full bg-green-400 text-white flex items-center justify-center">
                                        G.
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-indigo-600">
                                        <AddIcon className="text-indigo-600" />
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.startdate}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">{item.duedate}</td>
                                <td className="py-2 px-4 text-center border-b border-gray-200"><button className='text-indigo-600'>Add</button></td>
                                <td className="py-2 px-4 text-center border-b border-gray-200">
                                    <select class="p-2 rounded-lg border border-gray-300">
                                        <option value="" disabled selected>Select status</option>
                                        <option value="not_started">Not started</option>
                                        <option value="in_progress">In progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SlugTasks;