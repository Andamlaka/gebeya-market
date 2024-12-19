import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cardData  from '../Pages/HomePage/CardData';

const CardItem = ({ item, handleAddTocCart }) => {
  // State to keep track of the current card index
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Handle dot click to update the current card index
  const handleDotClick = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Desktop View */}
      <div className="sm:hidden">
        <div className="flex items-center w-full h-[500px] mb-[20px] transition-transform duration-300">
          <div className="relative w-[400px] h-[450px] border justify-center rounded-[10px] items-center border-[#C1C1C1]">
            <div className="relative w-[400px] h-[250px] top-[10px] ml-[9px] mr-[9px] gap-[16px]">
              <div className="flex relative w-[380px] h-[240px] rounded-[15px] bg-[#F2F2F2]">
                <button className="relative w-[40px] h-[40px] top-[2px] items-center left-[10px]">
                  <img
                    src={item.like}
                    alt="like emoji"
                    className="relative w-[24px] h-[24px] rounded-full justify-center items-center"
                  />
                </button>
                <img
                  src={item.image}
                  alt={item.kind}
                  className="relative w-[200px] h-[240px] mt-0 left-[35px]"
                />
                <div className="relative w-[67px] h-[30px] top-[7px] right-[10px] left-[40px] rounded-[100px] px-[10px] py-[6px] bg-[#FFFFFF]">
                  <h1 className="relative w-[47px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#1E1E1E]">
                    {item.place}
                  </h1>
                </div>
              </div>
              <div className="flex relative w-[380px] h-[26px] mt-2 justify-between">
                <div className="w-fit h-[26px] rounded-[100px] top-[6px] border px-[10px] py-[3px] mt-0.5 bg-[#FFFFFF]">
                  <h1 className="h-[18px] font-poppins font-normal text-[14px] leading-[18px] text-[#808080]">
                    {item.who}
                  </h1>
                </div>
                <div className="relative flex w-[107px] h-[24px] gap-[2px]">
                  <img
                    src={item.star}
                    className="w-[24px] h-[24px] text-[#FFD700]"
                    alt="Rating"
                  />
                  <h1 className="w-[81px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#1E1E1EB2]">
                    {item.rate}
                  </h1>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex flex-col relative w-[192px] h-[139px] top-[20px] left-[96px] gap-[40px]">
                  <div className="relative flex flex-col w-[192px] h-[63px]">
                    <h1 className="w-[192px] h-[36px] font-poppins font-semibold text-[24px] leading-[36px] text-[#1E1E1E]">
                      {item.kind}
                    </h1>
                    <h1 className="w-[192px] h-[27px] font-poppins font-[500px] text-[18px] leading-[27px] text-[#808080]">
                      {item.brand}
                    </h1>
                  </div>
                  <h1 className="w-[192px] h-[36px] font-poppins font-[600px] text-[24px] text-[#1E1E1E]">
                    {item.price}
                  </h1>
                </div>
                <button
                  className="relative w-[150px] h-[50px] mt-16 left-[40px] rounded-[16px] bg-[#FEA301] px-[10px] py-[10px]"
                  onClick={() => handleAddTocCart(item)}
                  aria-label={`Add ${item.kind} to cart`}
                >
                  <h1 className="relative w-[130px] h-[30px] font-poppins font-[500px] leading-[30px] text-[20px] text-[#FFFFFF]">
                    {item.action}
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="hidden sm:block">
        <div className="flex items-center w-full h-[500px] mb-[20px] transition-transform duration-300">
          <div className="relative w-[400px] h-[450px] border justify-center rounded-[10px] items-center border-[#C1C1C1]">
            <div className="relative w-[400px] h-[250px] top-[10px] ml-[9px] mr-[9px] gap-[16px]">
              <div className="flex relative w-[380px] h-[240px] rounded-[15px] bg-[#F2F2F2]">
                <button className="relative w-[40px] h-[40px] top-[2px] items-center left-[10px]">
                  <img
                    src={item.like}
                    alt="like emoji"
                    className="relative w-[24px] h-[24px] rounded-full justify-center items-center"
                  />
                </button>
                <img
                  src={item.image}
                  alt={item.kind}
                  className="relative w-[200px] h-[240px] mt-0 left-[35px]"
                />
                <div className="relative w-[67px] h-[30px] top-[7px] right-[10px] left-[40px] rounded-[100px] px-[10px] py-[6px] bg-[#FFFFFF]">
                  <h1 className="relative w-[47px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#1E1E1E]">
                    {item.place}
                  </h1>
                </div>
              </div>
              <div className="flex relative w-[380px] h-[26px] mt-2 justify-between">
                <div className="w-fit h-[26px] rounded-[100px] top-[6px] border px-[10px] py-[3px] mt-0.5 bg-[#FFFFFF]">
                  <h1 className="h-[18px] font-poppins font-normal text-[14px] leading-[18px] text-[#808080]">
                    {item.who}
                  </h1>
                </div>
                <div className="relative flex w-[107px] h-[24px] gap-[2px]">
                  <img
                    src={item.star}
                    className="w-[24px] h-[24px] text-[#FFD700]"
                    alt="Rating"
                  />
                  <h1 className="w-[81px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#1E1E1EB2]">
                    {item.rate}
                  </h1>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex flex-col relative w-[192px] h-[139px] top-[20px] left-[96px] gap-[40px]">
                  <div className="relative flex flex-col w-[192px] h-[63px]">
                    <h1 className="w-[192px] h-[36px] font-poppins font-semibold text-[24px] leading-[36px] text-[#1E1E1E]">
                      {item.kind}
                    </h1>
                    <h1 className="w-[192px] h-[27px] font-poppins font-[500px] text-[18px] leading-[27px] text-[#808080]">
                      {item.brand}
                    </h1>
                  </div>
                  <h1 className="w-[192px] h-[36px] font-poppins font-[600px] text-[24px] text-[#1E1E1E]">
                    {item.price}
                  </h1>
                </div>
                <button
                  className="relative w-[150px] h-[50px] mt-16 left-[40px] rounded-[16px] bg-[#FEA301] px-[10px] py-[10px]"
                  onClick={() => handleAddTocCart(item)}
                  aria-label={`Add ${item.kind} to cart`}
                >
                  <h1 className="relative w-[130px] h-[30px] font-poppins font-[500px] leading-[30px] text-[20px] text-[#FFFFFF]">
                    {item.action}
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="relative bottom-4 flex space-x-2">
        {cardData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-10 h-4 rounded-full bg-gray-600 cursor-pointer ${
              index === currentCardIndex ? 'bg-gray-900' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardItem;
