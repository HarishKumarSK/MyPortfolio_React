// import React, { useState } from "react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
 
//     <header className="header_container fixed inset-x-0 top-0 z-50">
//       {/* Header Container */}
//       <div className="flex justify-between items-center p-6 md:justify-center relative">
//         {/* Show "HK" on large screens, "Harish Kumar" on small screens */}
//         <h2 className="myname md:block hidden text-4xl font-semibold text-blue-950 absolute left-1/2 transform -translate-x-1/2">
//         Harish Kumar
//         </h2>
//         <h2 className="myname md:hidden block text-4xl text-blue-950 p-0 font-semibold">HK</h2>

//         {/* Menu Button for Small Screens */}
//         <button
//           className="md:hidden bg-slate-400 shadow-lg shadow-slate-400/50 text-white p-2 rounded"
//           onClick={() => setIsOpen(true)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Menu - Large Screens */}
//       <ul className="hidden md:flex justify-center items-center gap-16 p-4 title_menu">
//         <li className="bg-slate-400 shadow-lg shadow-slate-400/50 text-white p-2 rounded"> <a href="#home">Home</a> </li>
//         <li className="bg-slate-400 shadow-lg shadow-slate-400/50 text-white p-2 rounded"> <a href="#about">About</a> </li>
//         <li className="bg-slate-400 shadow-lg shadow-slate-400/50 text-white p-2 rounded"> <a href="#skills">Skills</a> </li>
//         <li className="bg-slate-400 shadow-lg shadow-slate-400/50 text-white p-2 rounded"> <a href="#projects">Project</a> </li>
//         <li className="bg-slate-400 shadow-lg shadow-slate-400/50 text-white p-2 rounded"> <a href="#contact">Contact</a> </li>
//       </ul>

//        {/* Right Side Menu - Small Screens */}
//        <div
//          className={`side_navbar fixed inset-y-0 right-0 w-64 bg-blue-200 shadow-lg transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-700"
//           onClick={() => setIsOpen(false)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Menu Items */}
//         <ul className="flex flex-col items-center gap-6 p-8 title_menu">
//           <li className="bg-slate-400 shadow-md text-white p-3 rounded text-center"> <a href="#home">Home</a> </li>
//           <li className="bg-slate-400 shadow-md text-white p-3 rounded text-center"> <a href="#about">About</a> </li>
//           <li className="bg-slate-400 shadow-md text-white p-3 rounded text-center"> <a href="#skills">Skills</a> </li>
//           <li className="bg-slate-400 shadow-md text-white p-3 rounded text-center"> <a href="#projects">Project</a> </li>
//           <li className="bg-slate-400 shadow-md text-white p-3 rounded text-center"> <a href="#contact">Contact</a> </li>
//         </ul>
//       </div>

//       {/* Overlay Background (Click to Close Menu) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-5 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>

//       )}


//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "/src/Style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header_container fixed inset-x-0 top-0 z-50">
      <div className="flex justify-between items-center p-6 md:justify-center relative">
        <h2 className="myname md:block hidden text-4xl font-semibold text-blue-950 absolute left-1/2 transform -translate-x-1/2">
          Harish Kumar
        </h2>
        <h2 className="myname md:hidden block text-4xl text-blue-950 p-0 font-semibold">HK</h2>

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden bg-slate-400 shadow-lg text-white p-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu - Large Screens */}
      <ul className="hidden md:flex justify-center items-center gap-16 p-4 title_menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Small Screen Sidebar */}
      <div className={`side_navbar ${isOpen ? "open" : ""} md:hidden`}>
        {/* <button className="absolute top-4 right-4 text-gray-700" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cls-btn w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <ul className="flex flex-col items-center gap-6 p-8 title_menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Overlay Background */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
};

export default Header;
