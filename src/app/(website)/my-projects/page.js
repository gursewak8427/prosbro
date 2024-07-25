"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic'

import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import MapIcon from '@mui/icons-material/Map';

const NewProject = dynamic(() => import('../_components/my-projects/NewProject'), { ssr: false })
const ProjectsTable = dynamic(() => import('../_components/my-projects/ProjectsTable'), { ssr: false })



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
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200 underline-indigo">All projects (0)</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200 underline-grey">To bid</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200 underline-grey">Quote sent</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200 underline-grey">In Construction</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200 underline-grey">Completed</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200 underline-grey">Archived</li>
          </ul>
        </div>

        <div className="bg-white p-1 rounded-md w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex gap-4">
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer bg-slate-200 rounded-md transition-colors duration-200">
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

      <ProjectsTable />
      {/* modal new project component */}
      <NewProject isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* <div className='p-4'>
        <img src='https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fempty-project-img.png&w=1920&q=75'></img>
      </div> */}
    </div>
  );
};

export default MainContent;
