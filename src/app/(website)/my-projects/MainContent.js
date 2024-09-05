"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import MapIcon from "@mui/icons-material/Map";
import { useDispatch, useSelector } from "react-redux";
import { Fetchprojects, TotalProjects } from "@/app/redux/Project/ProjectSlice";
import { useSearchParams } from "next/navigation";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { KeyboardArrowUp } from "@mui/icons-material";




const NewProject = dynamic(
  () => import("../_components/my-projects/NewProject"),
  { ssr: false }
);
const ProjectsTable = dynamic(
  () => import("../_components/my-projects/ProjectsTable"),
  { ssr: false }
);

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const projectlist = useSelector((data) => data.projectData.projectlist);
  const totalprojects = useSelector((data) => data.projectData.totalprojects);
  const searchParams = useSearchParams();
  const search = searchParams.get("tab");
  const updateUrl = (tab) => {
    const newUrl = `${window.location.pathname}?search=&tab=${tab}&view=list`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };
  const renderComponent = () => {
    switch (selected) {
      case "all":
        updateUrl(selected);
        dispatch(Fetchprojects(selected));
        return;
      case "tobid":
        updateUrl(selected);
        dispatch(Fetchprojects(selected));
        return;
      case "quotesent":
        updateUrl(selected);
        dispatch(Fetchprojects(selected));
        return;
      case "inconstruction":
        updateUrl(selected);
        dispatch(Fetchprojects(selected));
        return;
      case "complete":
        updateUrl(selected);
        dispatch(Fetchprojects(selected));
        return;
      case "archived":
        updateUrl(selected);
        dispatch(Fetchprojects(selected));
        return;
      default:
        updateUrl(selected);
        dispatch(Fetchprojects("all"));
        return;
    }
  };

  useEffect(() => {
    setSelected(search);
    dispatch(TotalProjects());
  }, []);

  useEffect(() => {
    if (selected) {
      renderComponent();
    }
  }, [selected]);


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





  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: 'project', label: 'Project' },
    { value: 'client', label: 'Client' },
    { value: 'address', label: 'Address' },
  ];

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
    <div className="p-8 h-full min-h-screen flex-1 bg-gray-200 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-9">
        <div className="self-left flex flex-1 h-fit items-center gap-5">
          <h1 className="flex items-center gap-4 leading-9 whitespace-nowrap text-[2rem] font-bold">My Projects</h1>
          <p className="rounded-lg bg-neutral-20 py-1 px-3 text-sm font-normal bg-gray-300">
            {totalprojects} Projects
          </p>
        </div>
        <button
          className="text-white flex items-center cursor-pointer rounded-xl font-semibold box-border outline-none transition-colors ease-in-out duration-300 flex-wrap flex-row py-3 text-base gap-2 justify-center pl-4 pr-5 bg-primary text-neutral-0 hover:bg-primary-dark"
          onClick={() => setIsModalOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="shrink-0 h-5 w-5"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"></path></svg>
          Add a new project
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="border-b border-gray-300 w-full md:w-auto">
            <ul className="flex flex-wrap gap-4 text-gray-800 text-sm font-medium">
              <li
                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "all"
                  ? "text-indigo-500 border-primary"
                  : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                  }`}
                onClick={() => {
                  setSelected("all");
                }}
              >
                All projects
                {selected == "all" ? "(" + projectlist.length + ")" : ""}
              </li>
              <li
                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "tobid"
                  ? "text-indigo-500 border-primary"
                  : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                  }`}
                onClick={() => {
                  setSelected("tobid");
                }}
              >
                To bid
                {selected === "tobid" ? "(" + projectlist.length + ")" : ""}
              </li>

              <li
                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "quotesent"
                  ? "text-indigo-500 border-primary"
                  : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                  }`}
                onClick={() => {
                  setSelected("quotesent");
                }}
              >
                Quote sent
                {selected == "quotesent" ? "(" + projectlist.length + ")" : ""}
              </li>
              <li
                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "inconstruction"
                  ? "text-indigo-500 border-primary"
                  : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                  }`}
                onClick={() => {
                  setSelected("inconstruction");
                }}
              >
                In Construction
                {selected == "inconstruction"
                  ? "(" + projectlist.length + ")"
                  : ""}
              </li>
              <li
                className={`cursor-pointer border-b-2 pb-2 transition-colors duration-200 ${selected === "complete"
                  ? "text-indigo-500 border-primary"
                  : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                  }`}
                onClick={() => {
                  setSelected("complete");
                }}
              >
                Completed
                {selected == "complete" ? "(" + projectlist.length + ")" : ""}
              </li>
              <li
                className={`cursor-pointer  border-b-2  pb-2 transition-colors duration-200   ${selected === "archived"
                  ? "text-indigo-500 border-primary"
                  : "hover:text-indigo-500 text-gray-600 font-normal border-transparent hover:border-gray-600"
                  }`}
                onClick={() => {
                  setSelected("archived");
                }}
              >
                Archived
                {selected == "archived" ? "(" + projectlist.length + ")" : ""}
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl w-full md:w-auto mt-4 md:mt-0">
            <ul className="w-fit flex rounded-xl bg-neutral-0 p-1">
              <li className="cursor-pointer flex gap-1 items-center text-sm w-fit whitespace-nowrap p-2 rounded-xl font-semibold bg-main text-secondary">
                <MenuIcon className="h-5 w-5" /> List
              </li>
              <li className="cursor-pointer flex gap-1 items-center text-sm w-fit whitespace-nowrap p-2 rounded-xl font-semibold bg-neutral-0 text-gray-700">
                <GridViewIcon className="h-5 w-5" /> Grid
              </li>
              <li className="cursor-pointer flex gap-1 items-center text-sm w-fit whitespace-nowrap p-2 rounded-xl font-semibold bg-neutral-0 text-gray-700">
                <MapIcon className="h-5 w-5" /> Map
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center w-full ">

          <div className="relative my-2 flex rounded-md text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="pointer-events-none absolute left-0 top-0 z-10 ml-4 flex h-full w-5 items-center text-neutral-70"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd"></path></svg>
            <input
              type="text"
              placeholder="Search a project, a client, an address"
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
                  <span className="mr-2 text-gray-500 text-sm">Filter by tag</span> {isOpen ? <KeyboardArrowUp className="text-gray-500" /> : <KeyboardArrowDownIcon className="text-gray-500" />}
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


        {projectlist.length > 0 ? (
          <ProjectsTable projectlist={Array.isArray(projectlist) ? projectlist : []} />
        ) : (
          <div className="p-4">
            <img src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fempty-project-img.png&w=1920&q=75"></img>
          </div>
        )}
        <NewProject isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default MainContent;
