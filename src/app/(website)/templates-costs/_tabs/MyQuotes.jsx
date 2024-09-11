import React from 'react'
import Cards from '../_components/Cards'

export const MyQuotes = () => {
  let data = [{
    photo: "https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fcustom_template_img.jpg&w=128&q=75",
    totalbill: 100,
    title: "New Build",
    name: "New Build",
    description: "Contemporary wood frame house on a concrete foundation",
    categories: 38,
    tasks: 49,
  },
  {
    photo: "https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fcustom_template_img.jpg&w=128&q=75",
    totalbill: 100,
    title: "New Build",
    name: "New Build",
    description: "Contemporary wood frame house on a concrete foundation",
    categories: 38,
    tasks: 49,
  }]

  return (
    <div class="w-full py-6">
      <div className="w-full flex justify-end items-center px-6 pb-6">
        <button
          className="text-white px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark duration-200"
        // onClick={() => setIsModalOpen(true)}
        >
          + Create a new template
        </button>
      </div>
      <Cards data={data} />
    </div>
  )
}
