// components/CardLayout.jsx
import Link from 'next/link';
import React from 'react';

const CardLayout = ({ children , otp=false , subtitle , title , bottomTitle , linkText ,linkRouter }) => {

    return (
        <div className="w-full max-w-md rounded-xl">
            {/* Main content area with shadow that overlaps onto footer */}
            <div className="bg-white p-8 rounded-xl shadow-[0px_1px_4px_rgba(0,0,0,0.16)] relative z-10">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#FF7F50] rounded-full  w-13 h-13 flex items-center justify-center">
                        <img src="/assets/logoAuthPage.svg" alt="logo" className='w-[35px]' />
                    </div>
                </div>
                {/* Title */}
                <h1 className="font-semibold text-[20px] leading-[27px] tracking-[0.04em] text-center mb-2">{title}</h1>
                {/* Welcome text */}
                <p className={`font-light text-[15px] text-center leading-[100%] tracking-[0.02em] text-[#676B7F] ${!otp ? "mb-5" : "mb-3" }`}>
                   {subtitle}
                </p>
               {!otp && <div className="w-full max-w-md mx-auto">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between gap-4">
                            <button
                                className="flex h-[35px] items-center justify-center px-4 py-2 border rounded-md flex-1 hover:bg-gray-50 transition-colors text-black text-sm leading-none 
                                    rounded-[7px] border border-[#b3b5bf] text-[14px] leading-[100%] tracking-[0%]
                                    "
                            >
                                
                                <img src="/assets/googleIcons.svg" alt="googleIcons"  className="w-4 h-4 mr-2" />
                                <span className='text-[black]'>Google</span>
                            </button>

                            <button
                                className="flex h-[35px] items-center justify-center px-4 py-2 border rounded-md flex-1 hover:bg-gray-50 transition-colors text-black text-sm leading-none 
                                    rounded-[7px] border border-[#b3b5bf] text-[14px] leading-[100%] tracking-[0%]
                                    "
                            >
                                <img src="/assets/linkedIn.svg" alt="linkedIn"  className="w-4 h-4 mr-2" />
                                <span className='text-[black]'>LinkedIn</span>
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-2 mb-3">
                            <div className="border-t flex-1 text-[rgba(179,181,191,1)]" ></div>
                            <span className="px-4 text-sm" style={{
                                color: 'rgba(0, 0, 0, 1)',
                                fontSize: '14px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>or</span>
                            <div className="border-t flex-1 text-[rgba(179,181,191,1)]" ></div>
                        </div>
                    </div>
                </div>}
                {children}
            </div>
            {/* Footer area - appears as a lower layer with overlap from main content */}
            <div className="bg-gray-50 rounded-b-xl -mt-3">
                {/* Don't have an account section */}
               {!otp && <div className="pt-7 pb-4 text-center">
                    <p className="text-[#7D7E8D] text-[14px]">
                        {bottomTitle} <Link href={linkRouter} className="text-[#00BFF0] font-medium">{linkText}</Link>
                    </p>
                </div>}
                {/* Subtle divider line */}
                {!otp && <div className="border-t border-gray-200"></div>}
                {/* Secured by clerk section */}
                <div className={` ${!otp ? "py-4" :"pt-7 pb-5" }  text-center`}>
                    <p className={`text-[#7D7E8D] font-medium ${!otp ?  "text-[14px]" : "text-[17px]" } flex items-center justify-center`}>
                        Secured by
                        <span className="ml-2 flex items-center">
                            <img src="/assets/clerkLogo.png" alt="clerk" className='w-[62px]' />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;