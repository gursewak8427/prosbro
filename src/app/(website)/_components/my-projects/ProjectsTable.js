import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';




function ProjectsTable({ projectlist }) {
  const createData = (ref, address, tag, date, size, status,slug) => {
    return { ref, address, tag, date, size, status,slug };
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
        item.slug
      )
      rows.push(tempdata);
    });
  }
  return (
    <>
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
            {rows.map((row,index) => (
              <tr key={index}>
                <td className="py-2 px-4 border"><Link href={`/my-projects/${row.slug}?tab=description`}>{row.ref}</Link></td>
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

    </>
  )
}

export default ProjectsTable