import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="bg-[#555843] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <div className="w-10 h-9 mr-3">
            <svg
              fill="#ffffff"
              viewBox="0 0 56 56"
              id="Layer_1"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M50.7,31.7c-1.7-0.5-3.6-0.5-5.4,0.1l-6.2,2c-0.1-0.4-0.4-0.9-0.9-1.4c-1-1.1-2.6-1.8-4.2-1.8h-5.3c-0.3,0-0.7-0.1-0.9-0.3 c-3.9-3.3-8.4-1.8-9.7-1.2c-0.3,0.1-0.6,0.3-0.8,0.5l-6.1,5.1c-0.5-0.5-1.2-0.9-1.9-1c-0.9-0.1-1.8,0.1-2.6,0.7l-2.3,1.7 c-1.5,1.2-1.8,3.3-0.7,4.9l8,10.6c0.6,0.7,1.4,1.2,2.3,1.3c0.2,0,0.3,0,0.5,0c0.7,0,1.5-0.2,2.1-0.7l2.3-1.7 c1.2-0.9,1.7-2.6,1.1-3.9l1.2-0.9c0.3-0.2,0.6-0.3,0.9-0.3l11.3-0.2c2,0,4-0.6,5.8-1.6l11.6-6.7c0.6-0.3,2.4-1.5,2.2-3.1 C52.9,32.8,52.1,32.1,50.7,31.7z M17.6,48.9l-2.3,1.7C15,50.9,14.6,51,14.3,51c-0.4-0.1-0.7-0.3-1-0.6l-8-10.6 c-0.5-0.6-0.4-1.6,0.3-2.1L7.9,36c0.3-0.2,0.6-0.3,0.9-0.3c0.1,0,0.1,0,0.2,0c0.4,0.1,0.7,0.2,0.9,0.5l5.6,7.4l2.5,3.2 C18.4,47.5,18.3,48.5,17.6,48.9z M49.8,35.1l-11.6,6.7c-1.5,0.8-3.1,1.3-4.8,1.3L22,43.3c-0.8,0-1.5,0.3-2.1,0.7l-1,0.8l-2.3-3 l-4.2-5.6l6.1-5.1c0.1-0.1,0.2-0.1,0.3-0.2c1-0.4,4.6-1.7,7.6,0.9c0.6,0.5,1.4,0.8,2.2,0.8h5.3c1.1,0,2.1,0.4,2.8,1.1 c0.2,0.3,0.5,0.7,0.5,1c0,0.2-0.3,0.8-1.9,1.5h-7.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h8.1l0.2-0.1c1.5-0.7,2.4-1.4,2.9-2.2l7.1-2.2 c1.4-0.5,2.9-0.5,4.2-0.1c0.6,0.2,0.8,0.3,0.9,0.4C50.9,34.3,50.3,34.8,49.8,35.1z"></path>{" "}
                  <path d="M9.1,38.1l-1.8,1.3c-0.4,0.3-0.5,1-0.2,1.4c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2l1.8-1.3c0.4-0.3,0.5-1,0.2-1.4 C10.1,37.8,9.5,37.7,9.1,38.1z"></path>{" "}
                  <path d="M27.2,14c1.7,1.4,4,1.7,5.9,1.7c1.1,0,2.2-0.1,2.9-0.3v6.2c-3.7,0.5-6.6,3.4-6.6,6.8v1h15.7v-1c0-3.6-3.2-6.5-7.2-6.8v-7.2 c1.4,0.6,3.6,1.3,5.8,1.3c1,0,2-0.1,2.9-0.5c4.2-1.7,5.6-7.6,5.7-7.9c0.1-0.4-0.1-0.8-0.4-1.1c-0.2-0.1-5.4-3.3-9.6-1.6 c-2.2,0.9-3.9,3-4.9,4.8C37,7.8,36.1,6,34.5,4.8c-3.7-3-9.8-1.3-10.1-1.2c-0.4,0.1-0.7,0.5-0.7,0.9C23.7,4.8,23.4,11.1,27.2,14z M43,27.5H31.5c0.6-2.2,2.9-3.9,5.7-3.9C40.1,23.6,42.5,25.3,43,27.5z M43.1,6.6c2.5-1,5.8,0.4,7.1,1.1c-0.5,1.5-1.8,4.7-4.3,5.8 c0,0,0,0,0,0c-2,0.8-4.5,0.2-6.3-0.5l7.2-2.8c0.4-0.2,0.6-0.5,0.6-0.9c0-0.1,0-0.2-0.1-0.4c-0.2-0.5-0.8-0.8-1.3-0.6l-7.2,2.8 C39.7,9.4,41.1,7.4,43.1,6.6z M33.3,6.3c1.8,1.4,2.4,4,2.6,5.8l-6.3-5c-0.4-0.3-1.1-0.3-1.4,0.2c-0.1,0.2-0.2,0.4-0.2,0.6 c0,0.3,0.1,0.6,0.4,0.8l6.3,5c-1.8,0.2-4.4,0.2-6.2-1.2c-2.3-1.8-2.6-5.5-2.7-7.1C27.3,5,31,4.5,33.3,6.3z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="text-[#F5EEC8] font-bold text-xl">
            <Link to="/home">अन्न-Data</Link>
          </div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/about"
              className="text-[#F5EEC8] hover:text-gray-400 transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/upload"
              className="text-[#F5EEC8] hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Image-Diagnosis
            </a>
          </li>
          <li>
            <a
              href="/forum"
              className="text-[#F5EEC8] hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Forum
            </a>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
