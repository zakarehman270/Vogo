// pages/index.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function SubscribeForm() {
  return (
    <div className="flex justify-center items-center max-w-[400px]">
      <div className="bg-[#FFFFFF] rounded-[12px]  p-6 ">
        <div className="mb-4">
          <h2 className="text-[#3C373A] mb-4 font-medium text-base leading-7 tracking-[-0.005em]">Contact information</h2>
          <div className="">
            <label htmlFor="email" className="block text-[14px] font-[500] text-[#666666] mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-[6px] border border-[#CACACA] text-[16px] text-[#666666] rounded-[8px]"
            />
          </div>
        </div>

        <div className="mb-3">
          <h2 className=" text-[#3B3639] mb-3 font-medium text-base leading-7 tracking-[-0.005em]">Payment method</h2>
          <div className="mb-3">
            <label htmlFor="card" className="block text-[14px] font-[500] text-[#666666] mb-1">Card information</label>
            <div className="relative">
              <input
                type="text"
                id="card"
                placeholder="1234 1234 1234 1234"
                className="w-full px-4 py-2 border border-[#CACACA] text-[16px] text-[#666666]  rounded-tl-[8px] rounded-tr-[8px]"
              />
              <div className="absolute right-3 top-[12px] flex space-x-1">
                <img src="/assets/visaCard.svg" alt="visaCard"  className=''/>
              </div>
            </div>
            <div className="flex element">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-1/2 px-3 py-2 border  border-[#CACACA] text-[16px] text-[#666666]   rounded-bl-[8px] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)]"
              />
              <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full px-3 py-2 border  border-[#CACACA] text-[16px] text-[#666666]   rounded-br-[8px] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)]"
                />
                <div className="absolute right-3 top-[12px]">
                  <img src="/assets/cvc.svg" alt="cvc" className='' />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="block text-[14px] font-[500] text-[#666666] mb-1">Cardholder name</label>

            <input
              type="text"
              id="name"
              placeholder="Full name on card"
              className="w-full px-3 py-2 border  border-[#CACACA] text-[16px] text-[#666666]   rounded-[8px]"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="block text-[14px] font-[500] text-[#666666] mb-1">Country or region</label>

            <div className="flex flex-col ">
              <div className="relative">
                <select
                  id="country"
                  className="w-full px-3 py-2 border text-[16px] text-[16px] text-[#666666] border-[#CACACA]   appearance-none rounded-tl-[8px]  rounded-tr-[8px]  "
                  defaultValue=""
                >
                  <option value="" disabled>Country</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <img src="/assets/ArrowDown.svg" alt="ArrowDown" className='' />
                </div>
              </div>
              
              <div className="relative">
                <select
                  id="state"
                  className="w-full px-3 py-2 border  text-[16px] text-[#666666]   border-[#CACACA]  appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>State</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <img src="/assets/ArrowDown.svg" alt="ArrowDown" className='' />
                </div>
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  placeholder="City"
                  className="w-1/2 px-3 py-2 border text-[16px] text-[#666666]   border-[#CACACA]  "
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="w-1/2 px-3 py-2 border text-[16px] text-[#666666]   border-[#CACACA]  "
                />
              </div>
              
              <input
                type="text"
                placeholder="Address line 1"
                className="w-full px-3 py-2 border text-[16px] text-[#666666]  border-[#CACACA]  "
              />
              
              <input
                type="text"
                placeholder="Address line 2 "
                className="w-full px-3 py-2 border element text-[16px] text-[#666666]   border-[#CACACA]  rounded-bl-[8px]  rounded-br-[8px]  "
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF7F50] text-14px font-[400] cursor-pointer hover:bg-orange-500 text-white py-3 px-4 rounded-[8px] transition duration-200"
        >
          Subscribe
        </button>

        <p className="text-center text-[16px] text-[#666666] mt-3">
          By clicking subscribe, you agree to the Link Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}