import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { KeyboardArrowUp } from "@mui/icons-material";


export const MyCostCatalog = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: 'ext', label: 'Exterior Finishing' },
    { value: 'living', label: 'Living' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'drywall', label: 'Drywall' },
    { value: 'ext', label: 'Exterior Finishing' },
    { value: 'living', label: 'Living' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'drywall', label: 'Drywall' },
    { value: 'ext', label: 'Exterior Finishing' },
    { value: 'living', label: 'Living' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'drywall', label: 'Drywall' },
  ];

  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleClickOutside() {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (btnRef.current && !btnRef.current.contains(event.target))
          setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const removeOption = (optionToRemove) => {
    setSelectedOptions(selectedOptions.filter(option => option !== optionToRemove));
  };


  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center w-full ">

        <div className="relative my-2 flex rounded-md text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="pointer-events-none absolute left-0 top-0 z-10 ml-4 flex h-full w-5 items-center text-neutral-70"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd"></path></svg>
          <input
            type="text"
            placeholder="Search"
            className="base-cell h-11 rounded-xl border py-3 px-2 text-left text-base text-secondary focus:border-transparent focus:outline-primary pl-12 bg-neutral-0 outline-offset-1 w-96"
          />
        </div>

        <div className="relative w-80">
          <button
            ref={btnRef}
            className="py-3 px-2 h-11 border-2 border-gray-300 rounded-xl w-full bg-white flex items-center justify-between hover:border-primary hover:border-2"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown();
            }}
          >
            {selectedOptions.length > 0 ? (
              <div className="flex gap-1 overflow-hidden whitespace-nowrap">
                {selectedOptions.map((option, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-gray-200 p-1 rounded-md text-xs"
                  >
                    {option}
                    <ClearIcon
                      className="text-xs ml-1 text-gray-500 hover:text-red-500 cursor-pointer"
                      fontSize="small"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent closing the dropdown when removing an option
                        removeOption(option);
                      }}
                    />
                  </span>
                ))}
              </div>
            ) : (
              <>
                <span className="mr-2 text-gray-500 text-sm">Filter by categories</span> {isOpen ? <KeyboardArrowUp className="text-gray-500" /> : <KeyboardArrowDownIcon className="text-gray-500" />}
              </>
            )}
          </button>
          {isOpen && (
            <div ref={dropdownRef} className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full z-50 shadow-xl">
              <ul className="py-2 max-h-60 overflow-auto">
                {options.map((option) => (
                  <li key={option.value} className="flex items-center text-gray-500 text-sm p-2 hover:bg-slate-200">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="mr-2 w-4 h-4"
                    />
                    <span className="text-base">{option.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
