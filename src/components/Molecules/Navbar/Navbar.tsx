"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const [isNavbarFixed, setIsNavbarFixed] = useState(false);

     const openSidebar = () => {
          setIsSidebarOpen(true);
     };

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 80) {
                    setIsNavbarFixed(true);
               } else {
                    setIsNavbarFixed(false);
               }
          };

          window.addEventListener("scroll", handleScroll);

          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     const closeSidebar = () => {
          setIsSidebarOpen(false);
     };
     return (
          <>
               <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
               <nav id="nav" className={` ${isNavbarFixed ? "navbar-fixed" : ""} `}>
                    <div className="nav-center">
                         <div className="nav-header">
                              <a href="/" className="nav-link">
                                   <Image width={100} height={100} style={{ width: "336px", height: "70px" }} src="/logo.svg" alt="nav-logo" className="nav-logo" />
                              </a>

                              <button type="button" className="nav-btn" onClick={openSidebar} id="nav-btn">
                                   <i className="fa-solid fa-bars-staggered"></i>
                              </button>
                         </div>

                         <ul className="nav-links">
                              <li>
                                   <a href="/" className="nav-link">
                                        Home
                                   </a>
                              </li>
                              <li>
                                   <a href="about" className="nav-link">
                                        About
                                   </a>
                              </li>
                              <li>
                                   <a href="contact" className="nav-link">
                                        Contact
                                   </a>
                              </li>
                              <li>
                                   <a href="project" className="nav-link">
                                        Project
                                   </a>
                              </li>
                         </ul>
                    </div>
               </nav>
          </>
     );
}

export default Navbar;
