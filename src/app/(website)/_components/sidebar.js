// Sidebar.js
import React from 'react';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BentoIcon from '@mui/icons-material/Bento';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Sidebar = () => {
  const items = [
    { text: 'My projects', icon: <GridViewIcon className="h-5 w-5" />, href: '/my-projects' },
    { text: 'Overview', icon: <SignalCellularAltIcon className="h-5 w-5" />, href: '/overview' },
    { text: 'Invoices', icon: <RequestQuoteIcon className="h-5 w-5" />, href: '/invoices' },
    { text: 'Templates & costs', icon: <BentoIcon className="h-5 w-5" />, href: '/templates-costs' },
    { text: 'My team', icon: <PeopleAltIcon className="h-5 w-5" />, href: '/team' },
    { text: 'Contacts', icon: <ContactsIcon className="h-5 w-5" />, href: '/contacts' },
    { text: 'Timesheet', icon: <PendingActionsIcon className="h-5 w-5" />, href: '/timesheet' },
    { text: 'Daily logs', icon: <EventNoteIcon className="h-5 w-5" />, href: '/daily-logs' },
    { text: 'Notifications', icon: <NotificationsActiveIcon className="h-5 w-5" />, href: '/notifications' },
    { text: 'Settings', icon: <SettingsIcon className="h-5 w-5" />, href: '/settings' },
  ];

  return (
    <div className="w-60  h-full bg-slate-50">
      <div className="text-xl font-semibold p-4">Billdr PRO</div>
      <ul className='px-2 '>
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <li className="group flex items-center font-semibold p-4 hover:bg-gray-200 cursor-pointer rounded-lg ">
              <span className="mr-4 group-hover:text-indigo-500 ">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="border-t p-2 mt-10  bg-white float-bottom ">
        <div className="text-sm">
          <h2 className='text-md items-center hover:bg-gray-200 cursor-pointer p-4 rounded-lg'><HelpIcon /> Help</h2>
          <h2 className='text-md items-center hover:bg-gray-200 cursor-pointer p-4 rounded-lg'>< AccountCircleIcon className='text-indigo-500' /> Gurvinder Singh</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
