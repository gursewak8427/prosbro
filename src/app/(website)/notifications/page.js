import React from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const notifications = [
  {
    id: 1,
    type: 'Clock-out',
    description: 'Princepal Singh just clocked-out at 10:33 PM. 59 Whitehaven Road Northeast, Calgary, T1Y 6A5',
    time: '4 days'
  },
  {
    id: 2,
    type: 'Clock-in',
    description: 'Princepal Singh just clocked-in at 07:18 AM. 59 Whitehaven Road Northeast, Calgary, T1Y 6A5',
    time: '4 days'
  },
  {
    id: 3,
    type: 'Quote opened',
    description: 'Mahmuda has just opened quote #1 for $26,334.00.',
    time: '4 days'
  },
  {
    id: 4,
    type: 'Clock-out',
    description: 'Princepal Singh just clocked-out at 10:33 PM. 59 Whitehaven Road Northeast, Calgary, T1Y 6A5',
    time: '5 days'
  },
  {
    id: 5,
    type: 'Clock-in',
    description: 'Princepal Singh just clocked-in at 07:18 AM. 59 Whitehaven Road Northeast, Calgary, T1Y 6A5',
    time: '4 days'
  },
  {
    id: 6,
    type: 'Clock-out',
    description: 'Princepal Singh just clocked-out at 10:33 PM. 59 Whitehaven Road Northeast, Calgary, T1Y 6A5',
    time: '4 days'
  },
];

function Page() {
  return (
    <div className='p-6 flex-1 bg-gray-200 shadow-md'>
      <div>
        <h1 className='text-4xl mt-5 mb-5 font-bold'>Notifications</h1>
        <div>
          {notifications.map(notification => (
            <div key={notification.id} className='flex items-center rounded-lg bg-white p-4 justify-between mb-5'>
              <div>
                <h1 className='font-semibold text-xl mt-2 mb-2'>
                  <span><EventNoteIcon /></span> {notification.type}
                </h1>
                <p>{notification.description}</p>
              </div>
              <div>
                <h1><span><AccessTimeIcon /></span> {notification.time}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
