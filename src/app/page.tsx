// src/app/page.tsx

"use client"; 

import AuthModal from "./components/AuthModal";
import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  UserCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid"; 

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <nav
        className={`fixed top-4 flex items-center justify-center bg-white dark:bg-gray-800 py-3 px-5 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isExpanded ? "gap-8" : "gap-2"
        }`}
      >
        <button
          onClick={toggleNavbar}
          className="flex items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
        >
          {isExpanded ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="flex flex-col items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
          >
            <HomeIcon className="w-6 h-6 mb-1" />
            {isExpanded && <span className="text-xs font-medium">Home</span>}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="#login"
            className="flex flex-col items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
            onClick={openModal}
          >
            <UserCircleIcon className="w-6 h-6 mb-1" />
            {isExpanded && (
              <span className="text-xs font-medium">Register/Login</span>
            )}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={toggleDarkMode}
            className="flex flex-col items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 mb-1" />
            ) : (
              <MoonIcon className="w-6 h-6 mb-1" />
            )}
            {isExpanded && (
              <span className="text-xs font-medium">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 p-10 rounded-xl shadow-lg max-w-md w-full mt-16 text-white">
        <h1 className="text-3xl font-extrabold tracking-tight text-center">
          Welcome to SecureAuth
        </h1>
        <p className="text-center mt-4 text-lg leading-relaxed">
            This is the sample landing page for this project.
            After the user is authenticated, the display for
             this should look quite different 
        </p>
      </main>
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
