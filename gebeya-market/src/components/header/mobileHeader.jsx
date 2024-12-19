import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Navbar/logo.jpg';

const MobileMenu = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        const toggleDropdown = () => {
          setIsMenuOpen(!isMenuOpen);
        };
      
      
      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState({ label: "EN/USD", flag: "us" });
    
      const options = [
        { label: "EN/USD", flag: "us" },
        { label: "EN/EUR", flag: "eu" },
        { label: "EN/GBP", flag: "gb" },
        { label: "EN/AUD", flag: "au" },
        { label: "EN/CAD", flag: "ca" },
        { label: "EN/JPY", flag: "jp" },
        { label: "EN/INR", flag: "in" },
        { label: "EN/CNY", flag: "cn" },
        { label: "EN/BRL", flag: "br" },
        { label: "EN/ZAR", flag: "za" },
        { label: "EN/ETB", flag: "et" },
      ];
      const moreMenu =[
        { to: "/perfumes", label: "Perfumes" },
        { to: "/jewelries", label: "Jewelries" },
        { to: "/gym wears", label: "Gym Wears" },
        { to: "/vintage wears", label: "Vintage Wears" },
        { to: "/sport wear", label: "Sport Wears" },
        { to: "/pyjamas", label: "Pyjamas" },
        { to: "/slippers", label: "Slippers" },
    
      ]
      
    
      const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
      const OurCategories = [
        { id: 1, name: "Men" },
        { id: 2, name: "Women" },
        { id: 3, name: "Kids" },
        { id: 4, name: "Accessories" }, 
      ]
     
  return (
    <div className="fixed hidden sm:block  bg-white w-full h-[70.5px] top-0
    z-50">
    <div className="relative flex  w-[400px] justify-between
    gap-[24px] right-6 
    items-center h-[32px] left-[24px]  mt-[20px]  bg-white "
>
   {/* hamburger menu */}
   <div className="relative w-[24px] h-[24px]  
   cursor-pointer "
   onClick={toggleDropdown}
  >
    {isMenuOpen ? (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19 5L5 19M5 5L19 19" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
    ) : (
     <svg
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7H21" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M3 12H21" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M3 17H21" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
       
    )}
      {/* dropdown menu */}
 {isMenuOpen && (
   <div className="relative w-[180px]  h-fit 
     flex-col shadow-lg py-0 gap-0 top-[-72px] px-0 left-[-24px]
      bg-[#FFFFFF] z-30"
        onClick={(e) => e.stopPropagation()}
        >
        <div className="relative flex  
         mb-[40px] gap-[24px] 
         items-center w-[180px] h-[32px] left-[24px] top-[40px] 
     ">
        <button 
        onClick={() => setIsMenuOpen(false)}
        className='cursor-pointer'>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19 5L5 19M5 5L19 19" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         </button>
        <img src={logo} alt="Gebeya Market's Logo" className="w-[32px] h-[32px]"/>

        </div>
    
         <div className="relative flex justify-center 
         border-b  border-t border-gray-400 mb-4
         items-center w-[180px] h-[40px] left-0 top-[5px] 
          group ">
       <h1 className=" relative w-[120px] h-6 font-poppins text-[14px] leading-[24px] 
       font-semibold text-[#1E1E1E] text-left  cursor-pointer">
         Register/Sign in
       </h1>
 
       {/* Dropdown Toggle */}
       <span className="  cursor-pointer">
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M7.5 15L11.7929 10.7071C12.1262 10.3738 12.2929 10.2071 12.2929 10C12.2929 9.79289 12.1262 9.62623 11.7929 9.29289L7.5 5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
 
 
       </span>
 
       {/* Dropdown Content */}
       <div
        className="absolute top-8 left-28 bg-white shadow-lg
        border border-gray-400 z-30
        w-[140px] hidden  group-hover:block 
        transition-all duration-200">
         <ul className="p-2">
           <li className="px-4 py-2 font-semibold cursor-pointer 
           border-b border-gray-300  last:border-none">Register</li>
           <li className="px-4 py-2 font-semibold cursor-pointer">Sign in</li>
         </ul>
       </div>
     </div>
     <div className="relative w-[180px] h-[30px]  left-0 gap-2 top-0
      ">
       <h1 className=" relative w-[150px] h-[18px] font-poppins text-[16px] 
        leading-[18px] left-[20px] font-semibold text-[#1E1E1E]">
        Our Catagories
         </h1>  
     </div>
     
     <div className="relative w-[180px] h-[92px] space-y-1 top-0
      left-0">
 {OurCategories.map(({ id, name }) => (
 <div
   key={id}
   className="relative w-[73px] h-[20px] font-poppins
    text-[14px] left-[20px]
   leading-[18px] font-semibold text-[#000000] 
   cursor-pointer"
 >
   {name}
 </div>
 ))}
 </div>
 <div className="relative w-[180px] h-[24px] left-0 flex
 items-center  border-b border-gray-400">
 {/* Dropdown Trigger */}
 <h1 className="relative w-[53px] h-[18px] font-poppins text-[14px]
 leading-[18px] left-[20px]
 text-[#1E1E1E] cursor-pointer 
 font-semibold">
 More
 </h1>
 <span className="justify-center items-center cursor-pointer">
 <svg
   width="16"
   height="17"
   viewBox="0 0 16 17"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   className="transform transition duration-300 group-hover:rotate-180"
 >
   <path
     d="M4 6.25L7.29289 9.54289C7.62623 9.87623 7.79289 10.0429
        8 10.0429C8.20711 10.0429 8.37377 9.87623 8.70711 9.54289L12 6.25"
     stroke="#1E1E1E"
     strokeWidth="1.5"
     strokeLinecap="round"
     strokeLinejoin="round"
   />
 </svg>
 </span>
 
 {/* Dropdown Content */}
 <div
 className="absolute top-8 hidden group-hover:flex 
 shadow-lg w-[200px] 
   bg-white border border-gray-300 
   transition-all duration-300 flex-col"
 >
 {moreMenu.map(({ to, label }) => (
   <Link
     key={to}
     to={to}
     className="px-4 py-2 border-b border-gray-300 font-semibold 
       text-black hover:bg-gray-200 transition-all cursor-pointer"
   >
     {label}
   </Link>
 ))}
 </div>
 </div>
 {/* currency with dropdown */}
 <div className="  h-[40px]  relative">
   {/* Dropdown Toggle */}
   <div
     className=" relative w-[120px] h-[40px] bg-white flex items-center
        rounded-md  left-[18px]
     cursor-pointer hover:bg-gray-200"
     onClick={toggleDropdown}
   >
     <div className="flex items-center gap-2">
       <img
         src={`https://flagcdn.com/w40/${selectedOption.flag}.png`}
         alt={`${selectedOption.label} flag`}
         className="w-6 h-4 rounded-sm"
       />
       <span className="text-[#1E1E1E] font-semibold font-poppins text-[12px]  leading-[18px]">{selectedOption.label}</span>
     </div>
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M7.5 15L11.7929 10.7071C12.1262 10.3738 12.2929 10.2071 12.2929 10C12.2929 9.79289 12.1262 9.62623 11.7929 9.29289L7.5 5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
 
   </div>
 
   {/*  Dropdown Menu */}
   
   {isOpen && (
     <div
       className=" left-0 px-2 bg-white 
       shadow-lg w-[120px] rounded-md  top-0
       border border-gray-300 z-10"
     >
       {options.map((option) => (
         <div
           key={option.label}
           onClick={() => handleSelect(option)}
           className="flex items-center gap-2  py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
         >
           <img
             src={`https://flagcdn.com/w40/${option.flag}.png`}
             alt={`${option.label} flag`}
             className="w-6 h-4 rounded-sm"
           />
           <span>{option.label}</span>
         </div>
       ))}
     </div>
   )}
 </div>
     </div> 
  )}  
  
  </div>
  <img src={logo} alt="Gebeya Market's Logo" className="w-[32px] h-[32px]"/>

   {/* search bar section */}
<div className=" flex items-center w-[230px] h-[32px] rounded-xl
  border-[2px] border-gray-[#C6C6C6]">
  <div className=" flex items-center  p-2 gap-2">
  <svg
      width="16" 
      height="16" 
      viewBox="0 0 16 17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
     className=" justify-center items-center 
     transform hover:scale-110 transition duration-200"
       > 
<g clip-path="url(#clip0_56_349)">
<path d="M11.6667 11.9167L14.6667 14.9167"
    stroke="#1E1E1E"
    stroke-width="1.5"
    stroke-linecap="round" 
    stroke-linejoin="round"
    stroke-justify="center"
    stroke-items="center"

    />
<path d="M13.3335 7.58333C13.3335 4.26962 10.6472 1.58333 7.3335 1.58333C4.01979
 1.58333 1.3335 4.26962 1.3335 7.58333C1.3335 10.897 4.01979 13.5833 7.3335
  13.5833C10.6472 13.5833 13.3335 10.897 13.3335 7.58333Z" 
  stroke="#1E1E1E" 
  stroke-width="1.5" 
  stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_56_349">
<rect width="16" height="16" fill="white" transform="translate(0 0.25)"/>
</clipPath>
</defs>
</svg>
<input 
type="text"
placeholder="Search..."
className="relative w-[67px] h-[25px] font-poppins 
text-[16px]  text-gray-500
 items-center 
"/> 
  </div>
  </div>
   {/* notification section */}
   <div 
      className=" relative flex justify-center items-center
       rounded-full w-[24px] h-[24px]  bg-[#222222]">

        
        <div>
          
        <svg 
           width="16" 
           height="16" 
           viewBox="0 0 24 25" 
           fill="none" 
           xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.16999V7.19999C7.5 4.94999 9.31 2.73999
 11.56 2.52999C14.24 2.26999 16.5 4.37999 16.5 7.00999V8.38999" 
stroke="white" 
stroke-width="1.5" 
stroke-miterlimit="10" 
stroke-linecap="round" 
stroke-linejoin="round"/>
<path d="M8.99983 22.5H14.9998C19.0198 22.5 19.7398 20.89 19.9498
 18.93L20.6998 12.93C20.9698 10.49 20.2698 8.5 15.9998 8.5H7.99983C3.72983
  8.5 3.02983 10.49 3.29983 12.93L4.04983 18.93C4.25983 20.89 4.97983 22.5
   8.99983 22.5Z" 
   stroke="white" 
   stroke-width="1.5"
    stroke-miterlimit="10"
     stroke-linecap="round" 
     stroke-linejoin="round"/>
<path d="M15.4955 12.5H15.5045" 
stroke="white" stroke-width="2" 
stroke-linecap="round" 
stroke-linejoin="round"/>
<path d="M8.49451 12.5H8.50349" 
stroke="white" stroke-width="2" 
stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
 </div>
  </div>
  </div>
  )
};


export default MobileMenu;