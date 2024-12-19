import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Navbar/logo.jpg'
import profile from '../assets/Navbar/profile.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState({
    label: 'EN/USD',
    flag: 'us',
  })

  const options = [
    { label: 'EN/USD', flag: 'us' },
    { label: 'EN/EUR', flag: 'eu' },
    { label: 'EN/GBP', flag: 'gb' },
    { label: 'EN/AUD', flag: 'au' },
    { label: 'EN/CAD', flag: 'ca' },
    { label: 'EN/JPY', flag: 'jp' },
    { label: 'EN/INR', flag: 'in' },
    { label: 'EN/CNY', flag: 'cn' },
    { label: 'EN/BRL', flag: 'br' },
    { label: 'EN/ZAR', flag: 'za' },
    { label: 'EN/ETB', flag: 'et' },
  ]

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  const navLinks = [
    { to: '/', label: 'Home' },
    // { to: "/cart", label: "Cart" },
    // { to: "/checkout", label: "Checkout" },
    { to: '/men', label: 'Men' },
    { to: '/women', label: 'Women' },
    { to: '/kids', label: 'Kids' },
    { to: '/accessories', label: 'Accessories' },
  ]
  const moreMenu = [
    { to: '/perfumes', label: 'Perfumes' },
    { to: '/jewelries', label: 'Jewelries' },
    { to: '/gym wears', label: 'Gym Wears' },
    { to: '/vintage wears', label: 'Vintage Wears' },
    { to: '/sport wear', label: 'Sport Wears' },
    { to: '/pyjamas', label: 'Pyjamas' },
    { to: '/slippers', label: 'Slippers' },
  ]
  const OurCategories = [
    { id: 1, name: 'Men' },
    { id: 2, name: 'Women' },
    { id: 3, name: 'Kids' },
    { id: 4, name: 'Accessories' },
  ]

  return (
    <div
      className="fixed bg-white w-full h-[80.5px] top-0 
    z-50"
    >
      <header
        className="fixed w-full flex h-[46.5px] items-center 
      gap-[40px] top-[10px]  left-[84px] bg-white  mb-[24px]
      "
      >
        {/* Logo Section */}
        <img
          src={logo}
          alt="Gebeya Market's Logo"
          className=" sm:hidden w-[32px] h-[32px] mr-[20px]  sm:ml-[20px]"
        />

        {/* Profile and Navbar Link Section */}
        <div className="flex sm:hidden items-center w-fit h-[24px] gap-[24px]">
          <div className="flex items-center w-[165px] h-[24px] gap-0">
            <div className="flex items-center w-[165px] h-[24px] gap-0">
              <img
                src={profile}
                alt="Profile Photo"
                className="w-[24px] h-[24px]"
              />
            </div>

            <div className="relative flex justify-center items-center w-[140px] h-[24px] gap-0 group">
              <h1
                className="w-[120px] h-[24px] font-poppins text-[14px] leading-[34px] 
          font-semibold text-[#1E1E1E] text-left   cursor-pointer"
              >
                Register/Sign in
              </h1>

              {/* Dropdown Toggle */}
              <span className="  cursor-pointer group">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition duration-300
               group-hover:rotate-180 justify-center items-center"
                >
                  <path
                    d="M4 6.25L7.29289 9.54289C7.62623 9.87623 7.79289 10.0429
                 8 10.0429C8.20711 10.0429 8.37377 9.87623 8.70711 9.54289L12 6.25"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              {/* Dropdown Content - Shows on hover */}
              <div
                className="absolute top-8 left-0 bg-white shadow-lg
           border border-gray-400
           w-[140px] opacity-0 group-hover:opacity-100 group-hover:block 
           transition-all duration-200"
              >
                <ul className="p-2">
                  <li
                    className="px-4 py-2 font-semibold cursor-pointer 
              border-b border-gray-300  last:border-none"
                  >
                    Register
                  </li>
                  <li className="px-4 py-2 font-semibold cursor-pointer">
                    Sign in
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navbar Link Section */}
          <nav className="space-x-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative w-[40px] h-6 font-poppins text-[16px] leading-[24px] 
      text-[#1E1E1E] text-left cursor-pointer 
        group:hover:font-semibol group:hover-black
         transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav className="space-x-4">
            <div className=" relative flex justify-center items-center gap-0 group">
              {/* Dropdown Trigger */}
              <h1
                className="w-[40px] h-6 font-poppins text-[16px] leading-[34px] 
      text-[#1E1E1E] text-left cursor-pointer items-center justify-center
        group:hover:font-semibol group:hover-black
         transition-all"
              >
                More
              </h1>
              <span className="justify-center items-center cursor-pointer group">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition duration-300 group-hover:rotate-180 "
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
                className="absolute top-8  shadow-lg w-[200px] 
        bg-white border border-gray-300 
        opacity-0 group-hover:opacity-100 
        transition-all duratio-300  flex flex-col"
              >
                {moreMenu.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="px-4 py-2  border
           border-gray-300 font-semibold
        text-black transition-all cursor-pointer"
                  >
                    {label}
                  </Link>
                ))}
              </div>    
            </div>
          </nav>
        </div>
        {/* search bar section */}
        <div className=" sm:hidden justify-between flex w-fit h-9  rounded-xl border border-gray-[#C6C6C6]">
          <div className=" flex w-[199px] p-2 gap-2 h-10  ">
            <svg
              width="16"
              height=""
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" justify-center items-center 
     transform hover:scale-110 transition duration-200"
            >
              <g clip-path="url(#clip0_56_349)">
                <path
                  d="M11.6667 11.9167L14.6667 14.9167"
                  stroke="#1E1E1E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-justify="center"
                  stroke-items="center"
                />
                <path
                  d="M13.3335 7.58333C13.3335 4.26962 10.6472 1.58333 7.3335 1.58333C4.01979
 1.58333 1.3335 4.26962 1.3335 7.58333C1.3335 10.897 4.01979 13.5833 7.3335
  13.5833C10.6472 13.5833 13.3335 10.897 13.3335 7.58333Z"
                  stroke="#1E1E1E"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_56_349">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-[57px] h-[24px] font-poppins 
text-[16px] leading-[24px] text-gray-500
border-none outline-none
"
            />
          </div>
          <div
            className="w-[78px] h-9 rounded-tr-[16px] 
  rounded-br-[16px] pt-2 pr-2 pb-2 gap-[10px] bg-[#882BECF2] 
  flex justify-center items-center"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" justify-center items-center 
     transform hover:scale-110 transition duration-200"
            >
              <g clip-path="url(#clip0_56_349)">
                <path
                  d="M11.6667 11.9167L14.6667 14.9167"
                  stroke="#FFFFFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3335 7.58333C13.3335 4.26962 10.6472 1.58333 7.3335 1.58333C4.01979
 1.58333 1.3335 4.26962 1.3335 7.58333C1.3335 10.897 4.01979 13.5833 7.3335
  13.5833C10.6472 13.5833 13.3335 10.897 13.3335 7.58333Z"
                  stroke="#FFFFFF"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_56_349">
                  <rect
                    width="25"
                    height="24"
                    fill="white"
                    transform="translate(0 0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        {/* currency with dropdown */}
        <div
          className="sm:hidden w-[130px] h-[40px] gap-[4px]  relative 
"
        >
          {/* Dropdown Toggle */}
          <div
            className="w-28 h-[40px] bg-white flex items-center justify-between px-2 rounded-md 
        cursor-pointer hover:bg-gray-200"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-2">
              <img
                src={`https://flagcdn.com/w40/${selectedOption.flag}.png`}
                alt={`${selectedOption.label} flag`}
                className="w-6 h-4 rounded-sm"
              />
              <span className="relativetext-[#1E1E1E] text-[16px] font-poppins font-normal">
                {selectedOption.label}
              </span>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/*  Dropdown Menu */}

          {isOpen && (
            <div
              className="absolute top-[48px] left-0 px-2 bg-white shadow-lg w-[120px] rounded-md 
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
        {/* notification section */}
        <div
          className=" sm:hidden relative flex justify-center items-center 
       rounded-full w-[47px] h-[46.5px]  bg-[#9847EF]"
        >
          <h1
            className="absolute -top-1 -right-1 text-white bg-red-600 
    rounded-full w-[20px] h-[20px] flex items-center justify-center 
    text-xs font-bold"
          >
            2
          </h1>

          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 8.16999V7.19999C7.5 4.94999 9.31 2.73999
 11.56 2.52999C14.24 2.26999 16.5 4.37999 16.5 7.00999V8.38999"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99983 22.5H14.9998C19.0198 22.5 19.7398 20.89 19.9498
 18.93L20.6998 12.93C20.9698 10.49 20.2698 8.5 15.9998 8.5H7.99983C3.72983
  8.5 3.02983 10.49 3.29983 12.93L4.04983 18.93C4.25983 20.89 4.97983 22.5
   8.99983 22.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4955 12.5H15.5045"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.49451 12.5H8.50349"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
