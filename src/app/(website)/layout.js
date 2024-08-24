"use client"
import React, { useEffect, useState } from 'react';
import Sidebar from './_components/sidebar';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function WebsiteLayout({ children }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false)

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 2];
    const secondlastSegment = pathSegments[pathSegments.length - 3];
    if (secondlastSegment === "quotes" || lastSegment === "new") {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [pathname]);


  return (
    <div className="flex">
      <ToastContainer />
      {
        show && <Sidebar />
      }
      <div className={`content w-[100%] ${show ? 'pl-[270px]' : ''}`}>
        {children}
      </div>
    </div>
  );
}
