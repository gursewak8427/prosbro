"use client"
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '@/app/redux/AxiosInstance';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from "react-toastify";
import { projectAction } from '@/app/redux/Project/ProjectSlice';

function page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const formone = useSelector(data => data.newProject.formone)
  const [clients, setClients] = useState([])
  const [selectedClient, setSelectedClient] = useState('');
  const [btnloading, setBtnloading] = useState(false)

  const handleSelectChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleSubmit = async () => {
    setBtnloading(true)
    const clientId = selectedClient ? parseInt(selectedClient, 10) : null;
    const formdata = {
      ...formone,
      newclient: false,
      client: clientId
    }
    try {
      const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/newproject/`, formdata)
      dispatch(projectAction(response.data))
      router.push(`/my-projects/${response.data.slug}?tab=description`)
      setBtnloading(false)
    } catch (error) {
      toast.error('Client Already Exist', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setBtnloading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(formone).length === 0) {
      router.push('/my-projects/new/project-creation')
    }
  }, [formone, router])
  useEffect(() => {
    const getclients = async () => {
      try {
        const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/allclients/`)
        setClients(response.data)
      } catch (error) {

      }
    }
    getclients();
  }, [])
  return (
    <>
      <ToastContainer />
      <div className="w-full bg-gray-200 min-h-screen">
        <div className="max-w-screen mx-auto p-6 bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
          <div className="w-2/3 h-full">
            <img
              src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
              alt="Sign Up Step"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <div className="mb-10 " >
              <button className="text-indigo-600 text-sm font-semibold">
                <Link href={'/my-projects/new/client-flow-selection'}>
                  <ArrowBackIosIcon className="text-sm text-center" />Back
                </Link>
              </button>
              <h2 className="text-3xl font-bold  mt-5 mb-10 ">Client information</h2>
            </div>
            <div className="mb-4">
              <div className='text-center mt-4 mb-4'>
                <select
                  id="dropdown"
                  className="block w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  value={selectedClient}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Select a client</option>
                  {clients.length > 0 ? (
                    clients.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name} {item.mobile}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading...</option>
                  )}
                </select>
                <button
                  className='bg-indigo-600 w-full py-3 text-white font-bold rounded-lg border-t'
                  disabled={!selectedClient || btnloading}
                  onClick={handleSubmit}
                >

                  {
                    btnloading ? 'please wait' : 'confirm and create project'
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page