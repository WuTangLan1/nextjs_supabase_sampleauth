// src/app/page.tsx

"use client"; // Mark the component as a Client Component

import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  UserCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid"; // Corrected import paths and icons

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-4 flex items-center justify-center bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-md z-50 ${
          isExpanded ? "gap-6" : "gap-4"
        }`}
      >
        <button
          onClick={toggleNavbar}
          className="flex items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
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
            className="flex items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <HomeIcon className="w-5 h-5" />
            {isExpanded && <span className="mt-1 text-xs">Home</span>}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="#login"
            className="flex items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <UserCircleIcon className="w-5 h-5" />
            {isExpanded && <span className="mt-1 text-xs">Register/Login</span>}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={toggleDarkMode}
            className="flex items-center text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            {isExpanded && (
              <span className="mt-1 text-xs">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col gap-6 items-center bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md max-w-md w-full mt-16">
        <h1 className="text-2xl font-bold">Welcome to SecureAuth</h1>
        <p className="text-center">
          This is a sample homepage for the SecureAuth authentication website.
          Explore the features and learn how our system can securely manage your
          user authentication needs.
        </p>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-sm">
        &copy; {new Date().getFullYear()} SecureAuth. All rights reserved.
      </footer>
    </div>
  );
}
