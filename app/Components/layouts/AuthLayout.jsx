import Link from 'next/link'
import React from 'react'
import SubscriptionCard from '../SubscriptionCardDetails'

const AuthLayout = ({ children, LeftView = false, strip = false }) => {
    const handleBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back()
        }
    }
    return (
        <div className="bg-[#00BFF0] py-4 px-4 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-[160px] min-h-screen flex items-center">
            <div className={`flex flex-col ${LeftView ? 'lg:flex-row' : 'lg:flex-row'} justify-between items-center w-full gap-8 lg:gap-12`}>
                {/* Mobile: Children first with back button */}
                <div className="w-full lg:hidden">
                    <div className="flex cursor-pointer mb-4 gap-2  items-center group" onClick={handleBack}>
                        <img src="/assets/backArrow.svg" alt="backArrow" className="w-4 h-4" />
                        <Link href="#" className="font-normal text-sm text-[white] transition-transform duration-300 group-hover:translate-x-1">
                            Back
                        </Link>
                    </div>
                    {children}
                </div>

                {/* Content area - always visible */}
                <div className={`w-full lg:w-[47%] ${LeftView ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="hidden lg:flex cursor-pointer mb-6 gap-4 items-center group" onClick={handleBack}>
                        <img src="/assets/backArrow.svg" alt="backArrow" />
                        <Link href="#" className="font-normal text-base text-[white] transition-transform duration-300 group-hover:translate-x-1">
                            Back
                        </Link>
                    </div>

                    {strip && <SubscriptionCard />}
                    {!strip && (
                        <div className="text-white space-y-4 lg:space-y-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[600] leading-tight">
                                Are you called to go global with your vocation?
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                You're driven by purpose. Whether you're a missionally driven professional,
                                an actual missionary, a refugee seeking meaningful work, or a survivor starting
                                fresh—your story, your skills, and your heart are ready to make an impact.
                                As a Goer, you're not just finding a job—you're stepping into your calling...
                            </p>
                            <Link href="#" className="inline-block text-sm sm:text-base underline">
                                Learn more
                            </Link>
                        </div>
                    )}
                </div>

                {/* Desktop children - hidden on mobile since we show it first */}
                <div className={`hidden lg:flex w-full ${LeftView? "justify-start " :" justify-end " } lg:w-1/2 ${LeftView ? 'lg:order-1' : 'lg:order-2'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout