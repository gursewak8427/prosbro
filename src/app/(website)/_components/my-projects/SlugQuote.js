import React, { useEffect, useState } from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { FetchQuotes, quoteslistAction } from '@/app/redux/Project/ProjectSlice';
import Link from 'next/link';
import { showToastPromise, updateToast } from '@/app/redux/toastSlice';
import axiosInstance from '@/app/redux/AxiosInstance';
import { MoreVert } from '@mui/icons-material';
import CustomMenu from '../CustomMenu';
import { DeleteAlert } from '../Alerts/DeleteAlert';

function SlugQuote() {
    const dispatch = useDispatch();
    const pathname = usePathname();

    const [deletePopup, setDeletePopup] = useState(null)

    const router = useRouter();
    const data = useSelector(store => store.projectData.quoteslist)
    const toastId = useSelector((state) => state.toast.toastId);
    const segments = pathname.split('/');
    const slug = segments[segments.length - 1];
    const handleDelete = async (id) => {
        const requestPromise = axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/fetchquotes/?slug=${slug}&id=${id}`)
        dispatch(showToastPromise({
            promise: requestPromise,
            messages: {
                pending: 'Deleting quote...',
                success: 'Quote deleted successfully!',
                error: 'Failed to delete Quote please contact service team!!!',
            }
        }));
        try {
            const response = await requestPromise;
            dispatch(quoteslistAction(response.data))
            dispatch(updateToast({
                toastId,
                options: { render: 'Data loaded!', type: 'success', isLoading: false }
            }));
        } catch (error) {
            dispatch(updateToast({
                toastId,
                options: { render: 'Failed to load data!', type: 'error', isLoading: false }
            }));
        }
    }
    useEffect(() => {
        dispatch(FetchQuotes(slug))
    }, [])

    return (
        <div className='flex flex-col gap-5 p-4'>
            <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full bg-white rounded-lg ">
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-400">Title</th>
                        <th className="py-3 px-4 border-b text-left text-gray-400">Last Edited Date</th>
                        <th className="py-3 px-4 border-b text-center text-gray-400">Status</th>
                        <th className="py-3 px-4 border-b text-center text-gray-400">Amount</th>
                        <th className="py-3 px-4 border-b text-left text-gray-400"></th>
                    </tr>
                    <tbody>
                        {data.map((item, index) => (
                            <tr onClick={() => router.push(`/my-projects/${slug}/quotes/${item.slug}/edit`)} key={index} className='cursor-pointer hover:bg-gray-100 border'>
                                <td className="py-4 px-4 text-sm text-left">{item.name}</td>
                                <td className="py-4 px-4 text-sm text-left">{new Date(item.updatedAt)?.toLocaleDateString()}</td>
                                <td className="py-4 px-4 text-sm text-left">
                                    <div className="bg-gray-200 text-center px-2 py-1 rounded-md capitalize">
                                        {item.status}
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-sm text-center">${item.totalbill}</td>
                                <td className="py-4 px-4 text-sm text-right">
                                    <CustomMenu menuItems={[
                                        { label: 'Share', onClick: () => console.log('Profile clicked') },
                                        { label: 'Mark as sent', onClick: () => console.log('My account clicked') },
                                        { label: 'Mark as signed', onClick: () => console.log('Logout clicked') },
                                        { label: 'Download PDF', onClick: () => console.log('Logout clicked') },
                                        { label: 'Delete', onClick: () => setDeletePopup(item.id), className: "text-red-500 hover:text-red-700" },
                                    ]}>
                                        <MoreVert className='text-lg text-gray-700 hover:text-black' />
                                    </CustomMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <DeleteAlert
                title="Delete"
                description="Are you sure you want to delete this quote ? This process cannot be undone."
                isOpen={deletePopup !== null}
                onCancel={() => setDeletePopup(null)}
                onConfirm={() => {
                    handleDelete(deletePopup)
                    setDeletePopup(null)
                }} />
        </div >
    )
}

export default SlugQuote;