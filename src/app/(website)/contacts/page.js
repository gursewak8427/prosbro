import React from 'react'

const people = [
    {
        name: "Gurvinder ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects:"1"
        
    },
    {
        name: "Hitesg Bedi ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects:"3"
    },
    {
        name: "Muhhamad ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects:"1"
    },
    {
        name: "Rajupal",
        email: "aghreno+test@gmail.com",
        phoneNumber: "",
        relatedprojects:"2"
    },
    {
        name: "Rajupal",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects:""
    },
    {
        name: "Ramandeep",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects:"2"
    },
    {
        name: "Ramandeep ",
        email: "aghreno+test@gmail.com",
        phoneNumber: "555-1234",
        relatedprojects:"1"
    }
];

function page() {
    return (
        <div className='p-6 flex-1 bg-gray-200 shadow-md'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">Contacts</h1>

                </div>
                <button
                    className="text-white px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 duration-200">
                    + Add a contact
                </button>
            </div>

            <div className='mt-5 mb-5'>
                <ul className='w-1/2 flex gap-4 border border-b-gray-400'>
                    <li className='text-gray-700 border-2 border-b-indigo-600'>Clients</li>
                    <li className='text-gray-700'>Professional</li>
                    <li className='text-gray-700'>Employees</li>
                    <li className='text-gray-700'>Administrators</li>
                </ul>
            </div>

            <div  className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-600'>
                <p>7 Clients</p>
            </div>

            <div className="overflow-x-auto mt-5 mb-5 p-4 bg-gray-100 rounded-lg shadow-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-gray-500">Name</th>
                            <th className="py-2 px-4 border-b text-gray-500">Email</th>
                            <th className="py-2 px-4 border-b text-gray-500">Phone </th>
                            <th className="py-2 px-4 border-b text-gray-500">Related Projects</th>
        
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((item, idx) => (
                            <tr key={idx} className="border-b text-center">
                                <td className="py-2 px-4 flex items-center space-x-3">
                                    <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                        {item.name.split(' ').map(word => word[0]).join('')}
                                    </span>
                                    <span className='font-semibold'>{item.name}</span>
                                </td>
                                <td className="py-2 px-4">{item.email}</td>
                                <td className="py-2 px-4">{item.phoneNumber}</td>
                                <td className="py-2 px-4">{item.relatedprojects}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default page