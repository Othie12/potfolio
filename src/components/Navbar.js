import React from "react";
import mylogo from "../pictures/Asset 9.png"

export default function Navbar() {
    const links = [
        {id: 1, name: "Home", lnk: "#home"},
        {id: 2, name: "Skills", lnk: "#skills"},
        {id: 3, name: "Projects", lnk: "#projects"}, 
        {id: 4, name: "Resume", lnk: "#resume"},
        {id: 5, name: "Contact", lnk: "#contact"}
    ];

    const prepared = links.map( item => 
        <li key={item.id} className="">
          <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-white" href={item.lnk}>{item.name}</a>
        </li>
        );

    return (
      <nav className="bg-white/30 backdrop-blur-sm border-gray-200 dark:bg-gray-900 dark:border-gray-200 sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a className="flex items-center w-10" href="#home"><img src={mylogo} alt="My personal logo" /></a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="ont-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {prepared}
            </ul>
          </div>
        </div>
      </nav>
    );
}