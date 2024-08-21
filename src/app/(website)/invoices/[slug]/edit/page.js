"use client"
import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Page() {
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleFileInputClick = () => {
    // Trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    // Handle the file change event
    const files = event.target.files;
    if (files.length > 0) {
      console.log("Files selected:", files);
      // Handle file upload here
    }
  };

  const tableData = [
    { description: 'Type here', quantity: 0, unitPrice: 5.00, total: "$50.00" },

    // Add more rows as needed
  ];

  const [activeButton, setActiveButton] = React.useState('edit');

  const handleEditClick = () => {
    setActiveButton('edit');
  };

  const handlePreviewClick = () => {
    setActiveButton('preview');
  };

  return (
    <div className='p-4 bg-gray-200'>
      <div className='flex justify-between p-4'>
        <div className='text-primary text-lg font-semibold'>
          <button><ArrowBackIosIcon className='text-lg' /> Back</button>
        </div>
        <div className='flex items-center space-x-4 relative text-gray-500'>
          <div className='relative flex flex-col items-center'>
            <button
              onClick={handleEditClick}
              className={`w-5 h-5 rounded-full ${activeButton === 'edit' ? 'bg-primary' : 'bg-gray-400'}`}
              style={{
                outline: activeButton === 'edit' ? '3px solid rgba(75, 85, 99, 0.5)' : '3px solid rgba(107, 114, 128, 0.5)',
                outlineOffset: '4px'
              }}
            />
            <span className='mt-2 text-sm'>Edit</span>
          </div>
          <div className="relative flex-1">
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gray-400"></div>
          </div>
          <div className='relative flex flex-col items-center'>
            <button
              onClick={handlePreviewClick}
              className={`w-5 h-5 rounded-full ${activeButton === 'preview' ? 'bg-primary' : 'bg-gray-400'}`}
              style={{
                outline: activeButton === 'preview' ? '3px solid rgba(75, 85, 99, 0.5)' : '3px solid rgba(107, 114, 128, 0.5)',
                outlineOffset: '4px'
              }}
            />
            <span className='mt-2 text-sm'>Preview & Send</span>
          </div>
        </div>
        <div className='text-primary text-lg font-semibold'>
          <button>Save & Exit</button>
        </div>
      </div>

      <hr></hr>

      <div className='p-2 mt-5 mb-5'>
        <h1 className='text-2xl font-bold'>Invoice #14158</h1>
      </div>

      <div className='flex justify-between gap-5'>
        <div className='w-9/12'>
          <div className='flex justify-between gap-5 bg-white p-4 rounded-lg'>
            <div className='w-1/3'>
              <h1 className='text-xl font-semibold mt-2 mb-2'>Client</h1>
              <p className='text-gray-600 mb-1 text-sm'>Rajupal Singh Gill</p>
              <p className='text-gray-600 mb-1 text-sm'>garru@gmail.com</p>
              <p className='text-gray-600 mb-1 text-sm'>767-232-4533</p>
            </div>
            <div className='w-1/3'>
              <h1 className='text-xl font-semibold mt-2 mb-2'>Project address</h1>
              <p className='text-gray-600 mb-1 text-sm'>183 Coral Springs Park Northeast, Calgary, T3J 3T7</p>
            </div>
            <div className='w-1/3'>
              <h1 className='text-xl font-semibold mt-2 mb-2'>Billing address</h1>
              <p className='text-gray-600 mb-1 text-sm'>183 Coral Springs Park Northeast, Calgary, T3J 3T7</p>
              <button className='border border-gray-400 px-3 py-2 text-center mt-2 mb-2 rounded-lg font-semibold hover:bg-gray-300'>
                <EditIcon /> Edit billing address
              </button>
            </div>
          </div>

          <div className='mt-4 rounded-lg border border-gray-300 overflow-hidden'>
            <table className='min-w-full bg-white'>
              <thead>
                <tr className='border-b'>
                  <th className='py-2 px-4 text-left'>Description</th>
                  <th className='py-2 px-4 text-left'>Quantity</th>
                  <th className='py-2 px-4 text-left'>Unit Price</th>
                  <th className='py-2 px-4 text-left'>Total</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index} className='border-b'>
                    <td className='py-2 px-4'>
                      <input
                        className='border border-gray-400 rounded-lg p-2 text-gray-500'
                        value={item.description}
                        readOnly
                      />
                    </td>
                    <td className='py-2 px-4'>
                      <input
                        type='number'
                        step='1'
                        className='border border-gray-400 rounded-lg p-2 w-16'
                        defaultValue={item.quantity}
                      />
                    </td>
                    <td className='py-2 px-4'>
                      <input
                        type='number'
                        step='0.01'
                        className='border border-gray-400 rounded-lg p-2 w-20'
                        defaultValue={item.unitPrice}
                      />
                    </td>
                    <td className='py-2 px-4'>
                      {item.total}
                    </td>
                    <td className='py-2 px-4'>
                      <button>
                        <DeleteOutlineIcon className='text-primary' />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="py-2 px-4 text-center">
                    <button className='text-primary py-2 px-4 rounded font-semibold'>
                      <AddIcon /> Add Line Item
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='bg-white p-6 rounded-lg mt-6 border-2 border-gray-400 border-dashed'>
            <div className='flex flex-col items-center justify-center'>
              <NoteAddIcon onClick={handleFileInputClick} className='text-gray-600 text-4xl mb-4 cursor-pointer' />
              <button
                className='flex items-center space-x-2 text-primary py-2 px-4 rounded'
                onClick={handleFileInputClick}
              >
                <AddIcon />
                <span>Drop new files or click to import</span>
              </button>
              {/* Hidden file input */}
              <input
                type='file'
                ref={fileInputRef}
                onChange={handleFileChange}
                className='hidden'
              />
            </div>
          </div>

        </div>

        <div className='bg-white h-64 p-4 w-1/4 rounded-lg shadow-lg'>
          <h1 className='text-xl font-semibold mt-2 mb-4'>Payment Details</h1>
          <div className='flex justify-between mb-2'>
            <span className='text-gray-600'>Subtotal</span>
            <span className='text-gray-800'>$1000.00</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-gray-600'>GST</span>
            <span className='text-gray-800'>$50.00</span>
          </div>
          <div className='mt-2 mb-2 text-primary font-semibold'>
          <button>Edit taxes</button>
          </div>
          <div className='flex justify-between mb-4'>
            <span className=' font-bold'>Total</span>
            <span className='font-bold'>$1050.00</span>
          </div>
          <button className='w-full py-2 px-4 bg-primary text-white rounded-lg font-semibold hover:bg-indigo-700'>
            Preview and Send
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Page;
