import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const { role, name } = getUserInfo() as any;

 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`max-w-7xl w-full mx-auto mt-5 ${
        mobileMenuOpen ? "bg-white" : ""
      }`}
    >
      <div className="flex justify-between items-center h-full">
      
        <Link
          className={`font-bold font-serif text-xl text-purple-700 ${
            mobileMenuOpen ? "text-purple-700 " : "text-purple-700 "
          }`}
          href="/"
        >
          TradingCar
        </Link>

       
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/all-cars">All Cars</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/about-us">About Us</Link>
        </nav>

     
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bg-purple-300 z-20 p-4 space-y-4 overflow-hidden">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-red-500 absolute top-2 right-2 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="mx-auto">
              <ul className="mx-auto">
                <li className="mx-auto my-3 font-bold text-center">
                  
                  <Link href="/all-cars">All Cars</Link>
                </li>
                <li className="mx-auto my-3 font-bold text-center">
                 
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="mx-auto font-bold text-center ">
                 
                  <Link href="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* User Info and Logout */}
        <div className="flex items-center">
         
          <button
            onClick={logOut}
            className={`text-black cursor-pointer bg-transparent hover:bg-purple-700 font-medium hover:text-white py-2 px-4 border border-black hover:border-transparent rounded ${
              mobileMenuOpen ? "border-black" : ""
            }`}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
