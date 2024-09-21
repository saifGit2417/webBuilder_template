"use client";
import { useState } from "react";
import { UserDataType } from "@/app/constants/dataTypes";
import { useUserData } from "@/app/hooks/useUserData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useUserData() as { userData: UserDataType };;
  const pages = userData?.navBarItems?.map(
    (data: { name: string; logo: string }) => data?.name
  );

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left section (logo and text) */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={userData?.logoDetails?.logoIcon}
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-white text-xl font-bold">
            {userData?.logoDetails?.logoText}{" "}
          </span>
        </div>

        {/* Right section (menu items) */}
        <div className="hidden md:flex space-x-6">
          {pages?.map((data: string, index: number) => {
            return (
              <span className="text-gray-300 hover:text-white cursor-pointer" key={index}>
                {data}
              </span>
            );
          })}
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown for small screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2">
          {pages?.map((data: string) => {
            return (
              <>
                <span className="text-gray-300 hover:text-white">{data}</span>
              </>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
