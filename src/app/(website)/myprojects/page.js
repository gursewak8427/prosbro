// MainContent.js
import React from 'react';

const createData = (ref, address, tag, date, size, status) => {
  return { ref, address, tag, date, size, status };
};

const rows = [
  createData('P24_0001', 'Basement remodel Test', '', '07/10/24', '$267,246.02', 'In construction')
];

const MainContent = () => {
  return (
    <div className="p-6 flex-1">
      <div className="text-2xl font-bold mb-4">My projects</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add a new project</button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
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
      </div>
    </div>
  );
};

export default MainContent;
