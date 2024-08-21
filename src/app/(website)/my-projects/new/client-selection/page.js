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
        <div className="max-w-screen mx-auto bg-white shadow-md rounded-lg w-full h-screen flex justify-between">
          <div className="relative z-10 hidden h-full sm:flex md:w-full lg:w-[65%]">
            <img
              src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fliving_room.png&w=3840&q=75"
              alt="Sign Up Step"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-full px-12 md:w-full lg:w-[35%] tablet:px-6">
            <div class="flex h-20 w-full items-center justify-between">
              <button
                className="rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row text-base justify-center bg-transparent text-primary hover:text-secondary p-0 flex cursor-pointer items-center gap-1"
                type="button"
                data-headlessui-state=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"></path></svg>
                <Link href={'/my-projects'}>Back</Link>
              </button>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-8 w-8 cursor-pointer"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>
            </div>
            <div className="flex h-5/6 flex-col">
              <h2 className="text-3xl font-bold mt-5 mb-10">Client Information</h2>
              <div className="flex h-full flex-col justify-center">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1 text-base font-semibold">Select client</label>
                  <select
                    id="dropdown"
                    className={`w-full h-11 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary`}
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
                    ) : <option disabled>Loading...</option>}
                  </select>
                </div>
                <button
                  className={`w-full py-3 text-white font-bold rounded-lg border-t ${!selectedClient ? "bg-gray-300" : "bg-primary"}`}
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
      </div >
    </>
  )
}

export default page