import { MoreVert } from "@mui/icons-material";


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
                        <tr key={idx} className="border-b text-center">
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