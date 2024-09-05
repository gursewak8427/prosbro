const { MoreVert, DeleteOutline } = require("@mui/icons-material");


const people = [
    {
        name: "Gurvinder ",
        email: "aghreno+test@gmail.com",
        role: "OWNER",
    },
    {
        name: "Hitesg Bedi ",
        email: "aghreno+test@gmail.com",
        role: "Admin",
    },
];


export const AdminstratorsTable = () => {
    return <>
        <div className='bg-gray-300 text-sm rounded-lg inline-block p-1 text-gray-700 px-4'>2 administrator of 6</div>

        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Email</th>
                        <th className="py-3 px-4 border-b text-left text-gray-700">Role </th>
                        <th className="py-3 px-4 border-b text-left text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item, idx) => (
                        <tr key={idx} className="border-b text-center">
                            <td className="py-4 px-4 flex items-center space-x-3">
                                <span className="flex items-center justify-center h-8 w-8 text-white font-semibold bg-pink-500 rounded-full">
                                    {item.name.split(' ').map(word => word[0]).join('')}
                                </span>
                                <span className='text-sm font-semibold'>{item.name}</span>
                            </td>
                            <td className="py-4 px-4 text-sm text-left">{item.email}</td>
                            <td className="py-4 px-4 text-sm text-left">{item.role}</td>
                            <td className="py-4 px-4 text-sm text-right">
                                {
                                    ["admin"]?.includes(item?.role?.toLocaleLowerCase()) && <button className='hover:bg-red-400 w-8 h-8 rounded-full transition duration-500'>
                                        <DeleteOutline className='text-red-400 hover:text-white transition duration-500' />
                                    </button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}