import React, { useEffect } from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { FetchQuotes, quoteslistAction } from '@/app/redux/Project/ProjectSlice';
import Link from 'next/link';
import { showToastPromise, updateToast } from '@/app/redux/toastSlice';
import axiosInstance from '@/app/redux/AxiosInstance';

function SlugQuote() {
    const dispatch = useDispatch();
    const pathname = usePathname();
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
            <div className="flex items-center justify-between">
                <div className='flex justify-start gap-4'>
                    <div className='min-w-[250px] bg-white  px-5 py-3 rounded-lg border-2 border-l-primary'>
                        <p className='text-gray-500'>CONTRACT VALUE</p>
                        <h1 className='text-lg font-semibold '>$280,608.33</h1>
                    </div>
                    <div className='min-w-[250px] bg-white  px-5 py-3 rounded-lg border-2 border-l-orange-600'>
                        <p className='text-gray-500'>PAID TO DATE</p>
                        <h1 className='text-lg font-semibold '>$0</h1>
                    </div>
                    <div className='min-w-[250px] bg-white  px-5 py-3 rounded-lg border-2 border-l-green-600'>
                        <p className='text-gray-500'>BALANCE</p>
                        <h1 className='text-lg font-semibold '>$280,608.33</h1>
                    </div>
                </div>

                <div className='flex items-center gap-4 my-2 justify-end'>
                    {/* <div className='text-primary mt-5 mb-5'>
                        <h1 className='flex items-center gap-2 hover:text-gray-500 cursor-pointer'><span><SummarizeIcon /> </span> View contract</h1>
                    </div> */}
                    <div>
                        <button className='font-semibold px-4 py-2 border border-gray-400 rounded-lg bg-white hover:bg-gray-200'><span><AddIcon /> </span>Create Quote</button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Title</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Last Edited Date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 text-center px-4 border-b border-gray-200"><Link href={`/my-projects/${slug}/quotes/${item.slug}/edit`}>{item.name}</Link></td>
                                <td className="py-2 text-center px-4 border-b border-gray-200">{item.updatedAt}</td>
                                <td className="py-2 text-center px-4 border-b border-gray-200">{item.status}</td>
                                <td className="py-2 text-center px-4 border-b border-gray-200" onClick={() => { handleDelete(item.id) }}>$ {item.totalbill}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SlugQuote;