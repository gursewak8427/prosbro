import React from 'react';

function Cards({ data, selectedtempletes, setSelectedtempletes }) {

    const handleselected = (template) => {
        const isSelected = selectedtempletes.some(item => item.id === template.id);

        if (isSelected) {
            // If the card is already selected, deselect it
            setSelectedtempletes(selectedtempletes.filter(item => item.id !== template.id));
        } else {
            // If the card is not selected, select it
            setSelectedtempletes([...selectedtempletes, { id: template.id, name: template.name }]);
        }
    }

    return (
        <div className='flex flex-wrap gap-4'>
            {data.map((template, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row basis-full md:basis-[calc(50%-1rem)] p-4 rounded-lg shadow-lg border-2 cursor-pointer ${
                        selectedtempletes.some(item => item.id === template.id) ? 'bg-indigo-200 border-indigo-500' : 'border-transparent'
                    }`}
                    onClick={() => handleselected(template)}
                >
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${template.photo}`}
                        alt={template.title}
                        className="w-full md:w-1/3 h-auto rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-between ml-4 w-full">
                        <div>
                            <h1 className="text-lg font-semibold">{template.name}</h1>
                            <p className="text-gray-600 text-sm mt-2">{template.description}</p>
                        </div>
                        <div className="flex justify-end mt-4 md:mt-0">
                            <h1 className="text-xl font-bold text-primary">{template.totalbill}</h1>
                            <p><span>{template.categories}</span> Categories <span>{template.tasks}</span> Tasks</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
