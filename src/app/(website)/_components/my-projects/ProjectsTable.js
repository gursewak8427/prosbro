import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useRouter } from 'next/navigation';

function ProjectsTable({ projectlist }) {
  const router = useRouter();

  const createData = (ref, address, tag, date, size, status, slug, name) => {
    return { ref, address, tag, date, size, status, slug, name };
  };

  const rows = [];
  if (projectlist.length > 0) {
    projectlist.forEach(item => {
      const tempdata = createData(
        item.reference,
        item.address,
        item.tag,
        item.createdAt,
        '$0',
        item.status.toLowerCase(),
        item.slug,
        item.name
      );
      rows.push(tempdata);
    });
  }

  return (
    <>
      <div className="overflow-x-auto min-h-[50vh] bg-white rounded-2xl flex flex-col justify-between">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-gray-500 text-sm font-semibold w-24 text-left">Ref #</th>
              <th className="p-4 text-gray-500 text-sm font-semibold w-1/4 text-left">Address & Client</th>
              <th className="p-4 text-gray-500 text-sm font-semibold w-36 text-left">Tag</th>
              <th className="p-4 text-gray-500 text-sm font-semibold w-32 text-left">Created on</th>
              <th className="p-4 text-gray-500 text-sm font-semibold w-28 text-right">Project size</th>
              <th className="p-4 text-gray-500 text-sm font-semibold w-24 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr onClick={() => {
                router.push(`/my-projects/${row.slug}?tab=description`);
              }} key={index} className="border-b hover:bg-indigo-50 cursor-pointer">
                <td className="p-4 whitespace-nowrap text-sm">{row?.ref}</td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm mb-1">{row.name}</span>
                    <span className="text-xs text-gray-600">{row.address}</span>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <button
                    onClick={(e) => e.stopPropagation()} // Prevent row click when this button is clicked
                    className="text-sm text-primary flex items-center text-center"><AddIcon className='text-sm' /> Add tag</button>
                </td>
                <td className="p-4 whitespace-nowrap font-light text-sm">{new Date(row.date)?.toLocaleDateString()}</td>
                <td className="p-4 whitespace-nowrap text-sm text-right">{row.size}</td>
                <td className="p-4 whitespace-nowrap text-sm">{<button className='bg-orange-100  w-full px-4 py-1 rounded-md font-semibold text-orange-700'>To bid</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between p-4 bg-white rounded-2xl">
          <p className="text-gray-500 text-xs font-medium">Showing 1 to {projectlist.length} of {projectlist.length} results.</p>
          <div className="flex items-center">

            <button className="flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-200 transition-colors duration-200 w-[35px] h-[35px]">
              <KeyboardDoubleArrowLeftIcon className="h-6 w-6 text-gray-400" />
            </button>

            <button className="flex items-center justify-center border border-gray-300  hover:bg-gray-200 transition-colors duration-200 w-[35px] h-[35px]">
              <KeyboardArrowLeftIcon className="h-6 w-6 text-gray-400" />
            </button>

            <p className="text-white bg-primary text-sm font-medium w-[35px] h-[35px] flex items-center justify-center">1</p>

            <button className="flex items-center justify-center border border-gray-300  hover:bg-gray-200 transition-colors duration-200 w-[35px] h-[35px]">
              <KeyboardArrowRightIcon className="h-6 w-6 text-gray-400" />
            </button>

            <button className="flex items-center justify-center border border-gray-300  rounded-r-md hover:bg-gray-200 transition-colors duration-200 w-[35px] h-[35px]">
              <KeyboardDoubleArrowRightIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>


        </div>
      </div>
    </>
  );
}

export default ProjectsTable;

