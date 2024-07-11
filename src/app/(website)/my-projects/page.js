// MainContent.js
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import MapIcon from '@mui/icons-material/Map';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const createData = (ref, address, tag, date, size, status) => {
  return { ref, address, tag, date, size, status };
};

const rows = [
  createData('P24_0001', 'Basement remodel Test', '', '07/10/24', '$267,246.02', 'In construction')
];

const MainContent = () => {
  return (
    <div className="p-6 flex-1 bg-gray-200 shadow-md">

      <div className='flex justify-between'>
        <div>
          <div className="flex gap-4 text-2xl font-bold mb-4">
            <h1>My Projects </h1>
            <p className='flex items-center justify-center text-xs p-2 bg-gray-300 text-center rounded-lg h-full'>Project-1</p>
          </div>
        </div>
        <div>
          <button className=" text-white px-4 py-2 rounded mb-4 bg-indigo-600 hover:bg-indigo-700 duration-200 "> + Add a new project</button>
        </div>

      </div>

      <div className='flex justify-between mt-4 mb-4'>
        <div className="p-2 border-b  border-gray-400">
          <ul className="flex gap-4 text-gray-800 text-sm font-medium">
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">All projects</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">To bid</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">Quote sent</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">In Construction</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">Completed</li>
            <li className="hover:text-indigo-500 cursor-pointer transition-colors duration-200">Archived</li>
          </ul>
        </div>


        <div className='bg-white p-1 rounded-md'>
          <ul className='flex gap-4'>
            <li className='items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200'><MenuIcon className='h-5 w-5' /> List</li>
            <li className='items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200'><GridViewIcon className='h-5 w-5' /> Grid</li>
            <li className='items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200'><MapIcon className='h-5 w-5' /> Map</li>
          </ul>
        </div>

      </div>


      <div className="flex gap-4 items-center w-1/2 mt-4 mb-4">
        <input
          type="text"
          placeholder="Search a project, a client, an address"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <select className="p-2 border border-gray-300 rounded-md">
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
        <div className="flex  items-center p-2 bg-white rounded-2xl  justify-between mt-5 mb-5">
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
    </div>
  );
};

export default MainContent;
