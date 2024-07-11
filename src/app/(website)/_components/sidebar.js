// Sidebar.js
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'


const Sidebar = () => {
  const items = [
    { text: 'My projects', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Overview', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Invoices', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Templates & costs', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'My team', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Contacts', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Timesheet', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Daily logs', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Notifications', icon: <BeakerIcon className="h-5 w-5" /> },
    { text: 'Settings', icon: <BeakerIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="w-60 bg-gray-100 h-screen">
      <div className="text-xl font-semibold p-4">Billdr PRO</div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
            <span className="mr-4">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="border-t p-4">
        <div className="text-sm">Gurvinder Singh</div>
      </div>
    </div>
  );
};

export default Sidebar;
