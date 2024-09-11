import React from 'react';

// #TODO Shift this into utility
function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}


function Cards({ data, }) {
    return (
        <div className='flex flex-wrap gap-4 w-full'>
            {data.map((template, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row basis-full md:basis-[calc(50%-1rem)] p-4 rounded-lg shadow-lg border-2 cursor-pointer border-gray-300 relative hover:bg-gray-200 bg-gray-100`}
                >
                    <h1 className="font-bold text-primary absolute top-2 right-2 text-sm bg-white px-2 py-1 rounded-lg">${nFormatter(template.totalbill, 1)}</h1>
                    <img
                        src={`${template.photo}`}
                        // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${template.photo}`}
                        alt={template.title}
                        className="w-full md:w-1/6 h-auto rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-between ml-4 w-full">
                        <div className='flex flex-col justify-center h-full'>
                            <h1 className="text-lg font-semibold">{template.name}</h1>
                            <p className="text-gray-600 text-sm mt-2">{template.description}</p>
                        </div>
                        <div className="flex justify-end mt-4 md:mt-0 text-gray-500 text-sm">
                            <p><span>{template.categories}</span> Categories <span>{template.tasks}</span> Tasks</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
