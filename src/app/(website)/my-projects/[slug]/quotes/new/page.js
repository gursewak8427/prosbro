"use-client"
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function page() {
  return (
    <>
      <div className='p-6 flex-1 bg-gray-200 shadow-md'>
        <div className='flex justify-between' >
          <div className='p-2 '>
            <h1 className='text-2xl font-semibold mt-2 mb-5'>Choose a template to start your quote</h1>
            <p className='text-gray-700'>No template selected</p>
          </div>
          <div>
            <button><CloseIcon /></button>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className='flex flex-col gap-5 rounded-r-md mt-5 mb-5'>
            <div className='bg-white px-5 py-4 border-l-4 border-indigo-600 rounded-r-md shadow-sm'>
              <h1 className="text-lg font-medium">Billdr templates</h1>
            </div>
            <div className='bg-white px-5 py-4 border-l-4 border-indigo-600 rounded-r-md shadow-sm'>
              <h1 className="text-lg font-medium">My templates</h1>
            </div>
            <div className='bg-white px-5 py-4 border-l-4 border-indigo-600 rounded-r-md shadow-sm'>
              <h1 className="text-lg font-medium">Previous quotes</h1>
            </div>
          
            <div className='bg-white hover:bg-gray-100 cursor-pointer px-5 py-4 border-2 border-indigo-600 rounded-md text-indigo-600 font-semibold '>
              <button><AddIcon/> Blank quote</button>
            </div>
          
          </div>
          <div className='flex-1 mt-5 mb-5'>
            <div className='flex flex-wrap gap-4'>
              {[
                {
                  imgSrc: "https://th.bing.com/th/id/OIP.PUuevUFoxDO5lRMcQBdQnAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7",
                  title: "New Build",
                  description: "Contemporary wood frame house on a concrete foundation",
                  price: "$193k"
                },
                {
                  imgSrc: "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/06/29154124/kitchen-nakul-baghel.jpeg",
                  title: "Kitchen remodel standard",
                  description: "Renovation of standard low to mid-end kitchen",
                  price: "$36k"
                },
                {
                  imgSrc: "https://th.bing.com/th/id/OIP._LLumzR0wnTykqBEHaq7pAHaFC?w=182&h=124&c=7&r=0&o=5&pid=1.7",
                  title: "Bathroom Remodel- High End 10X10",
                  description: "Contemporary wood frame house on a concrete foundation",
                  price: "$26k"
                },
                {
                  imgSrc: "https://th.bing.com/th/id/OIP.BNJ4V6jItBKycrHY2ZJb1gAAAA?rs=1&pid=ImgDetMain",
                  title: "New Build",
                  description: "Contemporary wood frame house on a concrete foundation",
                  price: "$193k"
                },
              ].map((template, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white basis-full md:basis-[calc(50%-1rem)] p-4 rounded-lg shadow-lg ">
                  <img
                    src={template.imgSrc}
                    alt={template.title}
                    className="w-full md:w-1/3 h-auto rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between ml-4 w-full">
                    <div>
                      <h1 className="text-lg font-semibold">{template.title}</h1>
                      <p className="text-gray-600 text-sm mt-2">{template.description}</p>
                    </div>
                    <div className="flex justify-end mt-4 md:mt-0">
                      <h1 className="text-xl font-bold text-indigo-600">{template.price}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>
      <div className='flex justify-center items-center py-5 bg-gray-100 '>
        <button className='px-4 py-2 bg-gray-300 font-semibold rounded-xl hover:bg-gray-400 cursor-pointer'>
          Confirm & create a quote
        </button>
      </div>
    </>

  )
}

export default page;