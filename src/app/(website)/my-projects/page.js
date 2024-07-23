"use client";
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import MapIcon from '@mui/icons-material/Map';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

const createData = (ref, address, tag, date, size, status) => {
  return { ref, address, tag, date, size, status };
};

const rows = [
  createData('P24_0001', 'Basement remodel Test', '', '07/10/24', '$267,246.02', 'In construction')
];

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 flex-1 bg-gray-200 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">My Projects</h1>
          <p className="flex items-center justify-center text-xs p-2 bg-gray-300 text-center rounded-lg">Project-1</p>
        </div>
        <button
          className="text-white px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          + Add a new project
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-4">
        <div className="p-2 border-b border-gray-400 w-full md:w-auto">
          <ul className="flex flex-wrap gap-4 text-gray-800 text-sm font-medium">
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">All projects (0)</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">To bid</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">Quote sent</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">In Construction</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">Completed</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">Archived</li>
          </ul>
        </div>

        <div className="bg-white p-1 rounded-md w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex gap-4">
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">
              <MenuIcon className="h-5 w-5" /> List
            </li>
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">
              <GridViewIcon className="h-5 w-5" /> Grid
            </li>
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">
              <MapIcon className="h-5 w-5" /> Map
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-1/2 mt-4 mb-4">
        <input
          type="text"
          placeholder="Search a project, a client, an address"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <select className="p-2 border border-gray-300 rounded-md w-full md:w-auto mt-4 md:mt-0">
          <option value="">Filter by tag</option>
          <option value="project">Project</option>
          <option value="client">Client</option>
          <option value="address">Address</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Ref #</th>
              <th className="py-2 px-4 border">Address & Client</th>
              <th className="py-2 px-4 border">Tag</th>
              <th className="py-2 px-4 border">Created on</th>
              <th className="py-2 px-4 border">Project size</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.ref}>
                <td className="py-2 px-4 border">{row.ref}</td>
                <td className="py-2 px-4 border">{row.address}</td>
                <td className="py-2 px-4 border">{row.tag}</td>
                <td className="py-2 px-4 border">{row.date}</td>
                <td className="py-2 px-4 border">{row.size}</td>
                <td className="py-2 px-4 border">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between p-4 bg-white rounded-2xl mt-5 mb-5">
          <p className="text-gray-400 text-sm font-medium">Showing Results</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200">
              <KeyboardArrowLeftIcon className="h-5 w-5 text-gray-600" />
            </button>
            <p className="text-gray-800 text-sm font-medium">1</p>
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200">
              <KeyboardArrowRightIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Add New Project
                  </Dialog.Title>
                  <div className="mt-4 p-2 ">
                    <div
                      className=" p-4 text-center  cursor-pointer text-black rounded-lg border border-indigo-600  duration-200 w-full mb-4"
                      onClick={() => console.log('Add customer yourself clicked')}
                    >
                      <h4 className="text-xl font-semibold mb-2">Add customer yourself</h4>
                      <p className="text-sm">Fill out the form for your customers</p>
                    </div>
                    <div
                      className=" p-4 text-center cursor-pointer text-black rounded-lg border border-indigo-600 duration-200 w-full mb-4"
                      onClick={() => console.log('Share magic link clicked')}
                    >
                      <h4 className="text-xl font-semibold mb-2">Share magic link</h4>
                      <p className="text-sm">Share a link to allow customers to fill out the form themself with their contact information.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between gap-2">
                    <button
                      type="button"
                      className="w-1/2 inline-flex justify-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium bg-slate-200 text-black hover:bg-indigo-600 hover:text-white focus:outline-none"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <Link href={'/my-projects/new/project-creation'} className="w-1/2 inline-flex justify-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium bg-gray-200 text-black hover:bg-indigo-600 hover:text-white focus:outline-none">
                      Confirm
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className='p-4'>
        <img src='https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fempty-project-img.png&w=1920&q=75'></img>
      </div>
    </div>
  );
};

export default MainContent;
