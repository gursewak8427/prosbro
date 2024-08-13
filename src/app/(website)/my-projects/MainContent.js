"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import MapIcon from "@mui/icons-material/Map";
import { useDispatch, useSelector } from "react-redux";
import { Fetchprojects, TotalProjects } from "@/app/redux/Project/ProjectSlice";
import { useSearchParams } from "next/navigation";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';




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
    <div className="p-6 flex-1 bg-gray-200 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">My Projects</h1>
          <p className="flex items-center justify-center text-xs p-2 bg-gray-300 text-center rounded-lg">
            {totalprojects} Projects
          </p>
        </div>
        <button
          className="text-white px-4 py-2 bg-indigo-600 hover:bg-indigo-700 duration-200 rounded-xl"
          onClick={() => setIsModalOpen(true)}
        >
          + Add a new project
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-4">
        <div className="p-2 border-b border-gray-400 w-full md:w-auto">
          <ul className="flex flex-wrap gap-4 text-gray-800 text-sm font-medium">
            <li
              className={`cursor-pointer transition-colors duration-200 ${selected === "all"
                ? "text-indigo-500 underline-indigo"
                : "hover:underline-indigo "
                }`}
              onClick={() => {
                setSelected("all");
              }}
            >
              All projects{" "}
              {selected == "all" ? "(" + projectlist.length + ")" : ""}
            </li>
            <li
              className={`cursor-pointer transition-colors duration-200 ${selected === "tobid"
                ? "text-indigo-500 underline-indigo"
                : "hover:text-indigo-500 hover:underline-indigo"
                }`}
              onClick={() => {
                setSelected("tobid");
              }}
            >
              To bid{" "}
              {selected === "tobid" ? "(" + projectlist.length + ")" : ""}
            </li>

            <li
              className={`cursor-pointer transition-colors duration-200 ${selected === "quotesent"
                ? "text-indigo-500 underline-indigo"
                : "hover:text-indigo-500 "
                }`}
              onClick={() => {
                setSelected("quotesent");
              }}
            >
              Quote sent{" "}
              {selected == "quotesent" ? "(" + projectlist.length + ")" : ""}
            </li>
            <li
              className={`cursor-pointer transition-colors duration-200 ${selected === "inconstruction"
                ? "text-indigo-500 underline-indigo"
                : "hover:text-indigo-500 "
                }`}
              onClick={() => {
                setSelected("inconstruction");
              }}
            >
              In Construction{" "}
              {selected == "inconstruction"
                ? "(" + projectlist.length + ")"
                : ""}
            </li>
            <li
              className={`cursor-pointer transition-colors duration-200 ${selected === "complete"
                ? "text-indigo-500 underline-indigo"
                : "hover:text-indigo-500 "
                }`}
              onClick={() => {
                setSelected("complete");
              }}
            >
              Completed{" "}
              {selected == "complete" ? "(" + projectlist.length + ")" : ""}
            </li>
            <li
              className={`cursor-pointer transition-colors duration-200 ${selected === "archived"
                ? "text-indigo-500 underline-indigo"
                : "hover:text-indigo-500 hover:underline-indigo"
                }`}
              onClick={() => {
                setSelected("archived");
              }}
            >
              Archived{" "}
              {selected == "archived" ? "(" + projectlist.length + ")" : ""}
            </li>
          </ul>
        </div>

        <div className="bg-white p-1 rounded-md w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex gap-4">
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer bg-slate-200 rounded-md transition-colors duration-200">
              <MenuIcon className="h-5 w-5" /> List
            </li>
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">
              <GridViewIcon className="h-5 w-5" /> Grid
            </li>
            <li className="flex items-center p-2 space-x-2 hover:cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">
              <MapIcon className="h-5 w-5" /> Map
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center w-full  mt-4 mb-4">

        <input
          type="text"
          placeholder="Search a project, a client, an address"
          class="p-2 h-10 text-sm border border-indigo-600 rounded-lg w-64 focus:border-indigo-600 focus:ring-0 transition-colors duration-200"
        />

        <div className="relative w-full md:w-44 h-10 border border-indigo-600 rounded-md">
          <button
            className="p-2 border border-gray-300 rounded-md w-full h-full bg-white flex items-center justify-between overflow-hidden"
            onClick={toggleDropdown}
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
               <span className="mr-2 text-gray-500 text-sm">Filter by tag</span> <KeyboardArrowDownIcon className="text-gray-500" />
              </>
            )}
          </button>
          {isOpen && (
            <div className="absolute bg-white border border-gray-300 rounded-md mt-2 w-full z-50">
              <ul className="py-2 max-h-60 overflow-auto">
                {options.map((option) => (
                  <li key={option.value} className="flex items-center text-gray-500 text-sm p-2 hover:bg-gray-100">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="mr-2"
                    />
                    <span>{option.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


      </div>

      {projectlist.length > 0 ? (
        <ProjectsTable projectlist={projectlist} />
      ) : (
        <div className="p-4">
          <img src="https://app.billdr.co/_next/image?url=%2Fassets%2Fimages%2Fempty-project-img.png&w=1920&q=75"></img>
        </div>
      )}
      <NewProject isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default MainContent;
