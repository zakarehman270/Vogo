'use client'

import React from "react";

export default function page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] px-4 my-5">
            <div className="text-center">
                {/* Checkmark Image */}
                <div className="flex justify-center mb-6">
                        <img
                            src="/assets/successTickMarkIcons.svg"
                            alt="Success"
                            className="w-[70px] h-[70px]"
                        />
                </div>

                {/* Heading */}
                <h1 className=" mb-2 font-normal text-[27px] leading-[20px] mb-5">Payment succeeded</h1>
                <p className=" mb-9 font-[300] text-[17px] leading-[25px] text-[#939393]">
                    Thanks for your purchase! A payment from VOGO<br />
                    will appear on your statement
                </p>

                {/* Receipt Bar with Background Image */}

                <div
                    className="  py-6 px-4 w-full max-w-md mx-auto relative"
                    style={{
                        backgroundImage: "url('assets/successPriceBar.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        
                    }}
                >
                    <div className="flex justify-between items-center text-lg font-semibold text-gray-700 px-2">
                        <span className="font-semibold text-[17px] leading-[25px] text-[#949494]">VOGO</span>
                        <span className="font-normal text-[17px] leading-[25px] text-[#949494]">$9.99</span>
                    </div>
                </div>

                {/* Redirect Notice */}
                <p className="font-normal text-[14px] leading-[25px] text-[#939393] mt-12">
                    You will be automatically redirected to on-boarding process in 5 seconds,
                    <br />
                    if not please{" "}
                    <a href="/onboarding" className="text-[#FF7F50] hover:underline">
                        click here
                    </a>{" "}
                    to continue
                </p>
            </div>
        </div>
    );
}
