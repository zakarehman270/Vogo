// components/PricingPlan.jsx
import React from 'react';

const PricingPlan = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
            <div className="text-center mb-6 sm:mb-10 md:mb-12">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-[100%] tracking-[0] mb-3 sm:mb-5">
                    Find Your Perfect Plan
                </h1>
                <p className="font-normal text-xs sm:text-sm md:text-base lg:text-[16px] leading-[1.5] sm:leading-[24px] tracking-[0] text-[#333333] max-w-2xl mx-auto">
                    Ultricies purus dolor viverra mi laoreet at cursus justo. Ultricies purus diam egestas amet faucibus tempor blandit.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
                {/* GOER Plan */}
                <div className="flex-1 border border-[#3CCEF3] rounded-2xl sm:rounded-[26px] px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 relative overflow-hidden">
                    <div className="bg-[#FF7F50] text-[#FFE5DC] px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-[6px] sm:rounded-[8px] inline-block mb-2 sm:mb-3 md:mb-4">
                        <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-[18px] leading-[1] sm:leading-[18px] tracking-normal">PREMIUM</span>
                    </div>

                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        <img src="/assets/location.svg" alt="location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[26px] font-bold text-[#FF7F50]">
                            GOER - IMPACT WORKER
                        </h2>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] font-[400] leading-[1.5] sm:leading-[1.7] md:leading-[32px] text-[#797878] mb-3 sm:mb-4 md:mb-6">
                        Ultricies purus dolor viverra mi laoreet at cursus justo.
                    </p>

                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <span className="text-[#FF7F50] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[57px] leading-[100%] font-thin lg:font-medium">$9.99</span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] text-[#FF7F50] leading-[100%] font-[300] ml-1 sm:ml-2">per month</span>
                    </div>

                    <hr className='border-[#E4E8FC] mb-3 sm:mb-4 md:mb-5' />
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-10 md:mb-14 text-white">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <img src="/assets/checkMarkOrange.svg" alt="checkMarkOrange" className='w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]' />
                            <span className='font-normal text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[32px]'>
                                Ultricies purus dolor viverra
                            </span>
                        </div>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                            <img src="/assets/checkMarkOrange.svg" alt="checkMarkOrange" className='w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]' />
                            <span className='font-normal text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[32px]'>
                                Ultricies purus dolor
                            </span>
                        </div>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                            <img src="/assets/checkMarkOrange.svg" alt="checkMarkOrange" className='w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]' />
                            <span className='font-normal text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[32px]'>
                                Ultricies purus
                            </span>
                        </div>
                    </div>

                    <button className="w-full cursor-pointer py-1.5 sm:py-2 md:py-3 bg-transparent rounded-lg text-[#00BFF0] font-medium hover:bg-opacity-90 transition-colors text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[40px] tracking-normal border border-[#00BFF0]">
                        Get Started
                    </button>
                </div>

                {/* GROWER Plan */}
                <div className="flex-1 rounded-2xl sm:rounded-[26px] border border-[#F08504] px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#75DCF7] to-[#1AC4F1]">
                    {/* Top left corner tag */}
                    <div className="absolute top-0 left-0">
                        <img src="/assets/leftCornerTag.svg" alt="leftCornerTag" className="w-12 sm:w-16 md:w-20 lg:w-25" />
                    </div>

                    <div className="bg-white text-[#EC764A] px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-[6px] sm:rounded-[8px] inline-block mb-2 sm:mb-3 md:mb-4">
                        <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-[18px] leading-[1] sm:leading-[18px] tracking-normal">PREMIUM</span>
                    </div>

                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        <img src="/assets/plant.svg" alt="plant" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[26px] font-bold text-white">
                            Grower - IMPACT CREATOR
                        </h2>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] font-[400] leading-[1.5] sm:leading-[1.7] md:leading-[32px] text-white mb-3 sm:mb-4 md:mb-6">
                        Ultricies purus dolor viverra mi laoreet at cursus justo.
                    </p>

                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[57px] leading-[100%] font-thin lg:font-medium">$9.99</span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] text-white leading-[100%] font-[300] ml-1 sm:ml-2">per month</span>
                    </div>

                    <hr className='border-white mb-3 sm:mb-4 md:mb-5' />
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-10 md:mb-14 text-white">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <img src="/assets/checkMark.svg" alt="checkMark" className='w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]' />
                            <span className='font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[32px]'>
                                Ultricies purus dolor viverra
                            </span>
                        </div>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                            <img src="/assets/checkMark.svg" alt="checkMark" className='w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]' />
                            <span className='font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[32px]'>
                                Ultricies purus dolor
                            </span>
                        </div>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                            <img src="/assets/checkMark.svg" alt="checkMark" className='w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]' />
                            <span className='font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[32px]'>
                                Ultricies purus
                            </span>
                        </div>
                    </div>
                    <div className="p-[1px] cursor-pointer rounded-[10px] sm:rounded-[12px] bg-[linear-gradient(99.18deg,_#FFFFFF_28.84%,_#F08504_85.64%)]">
                        <button className="w-full py-1.5 sm:py-2 md:py-3 bg-white rounded-[10px] sm:rounded-[12px] text-orange-400 font-medium hover:bg-opacity-90 transition-colors font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-[21px] leading-[1.5] sm:leading-[1.7] md:leading-[40px] tracking-normal shadow-[0px_4px_18px_rgba(27,34,60,0.16)] sm:shadow-[0px_8px_36px_rgba(27,34,60,0.16)]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;