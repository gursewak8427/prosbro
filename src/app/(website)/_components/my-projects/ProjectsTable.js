import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';

function ProjectsTable({ projectlist }) {
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl table-fixed">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-gray-500 text-sm w-24 text-left">Ref #</th>
              <th className="py-2 px-4 text-gray-500 text-sm w-1/4 text-left">Address & Client</th>
              <th className="py-2 px-4 text-gray-500 text-sm w-36 text-left">Tag</th>
              <th className="py-2 px-4 text-gray-500 text-sm w-32 text-left">Created on</th>
              <th className="py-2 px-4 text-gray-500 text-sm w-28 text-left">Project size</th>
              <th className="py-2 px-4 text-gray-500 text-sm w-24 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b ">
                <td className="py-2 px-4 whitespace-nowrap text-sm">
                  <Link href={`/my-projects/${row.slug}?tab=description`}>{row.ref}</Link>
                </td>
                <td className="py-2 px-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm mb-1">{row.name}</span>
                    <span className="text-xs text-gray-600">{row.address}</span>
                  </div>
                </td>
                <td className="py-2 px-4 whitespace-nowrap">
                  <button className="text-sm text-indigo-600 flex items-center text-center"><AddIcon className='text-sm' /> Add tag</button>
                </td>
                <td className="py-2 px-4 whitespace-nowrap text-sm">{row.date}</td>
                <td className="py-2 px-4 whitespace-nowrap text-sm">{row.size}</td>
                <td className="py-2 px-4 whitespace-nowrap text-sm">{<button className='bg-orange-300 px-4 rounded-md font-semibold text-orange-700'>To bid</button>}</td>
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
    </>
  );
}

export default ProjectsTable;

