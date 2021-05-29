import { FC, useState } from "react";
import clsx from "clsx";
import s from "./Mnav.module.css";
import SlideMenu from "../../core/SlideMenu";

interface NavBarProps {
  navLinks: NavLink[];
}
interface NavLink {
  text: string;
  url: string;
  icon?: unknown;
}

const MobileNavBar: FC<NavBarProps> = ({ navLinks }) => {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);

  //   function remove() {
  //     const element = document.getElementById("mob-nav");
  //     element.remove;
  //   }

  return (
    <nav className={clsx(s.root, " border-t border-gray-200 bg-white md:hidden")}>
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 ">
          <div className="relative flex flex-col md:flex-row w-full">
            <nav className="flex flex-wrap items-center pt-2 pb-5 mb-4 text-base border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
              {navLinks.map((link, idx) => (
                <div key={idx} className="w-1/3 mt-3 flex justify-items-center">
                  <div className="justify-items-center mx-auto justify-center">
                    {/* <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg> 
                    <svg  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    
                    */}
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg> */}
                    {/* 
                    <Link variant="mobile" text={link.text} href={link.url} icon={link.icon}/>
                    
                    <a href={link.url} className="mx-auto font-medium leading-6 text-gray-600 hover:text-gray-900">
                      {link.text}
                    </a> */}
                  </div>
                </div>
              ))}
              <div className="w-1/3 flex mt-3 justify-items-center">
                <button
                  onClick={toggleSlider}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center mx-auto justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <SlideMenu open={isSliderOpen} toggleSlider={toggleSlider} />
    </nav>
  );
  function toggleSlider() {
    setIsSliderOpen(!isSliderOpen);
  }
};

export default MobileNavBar;
