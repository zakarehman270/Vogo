import React from 'react';

export default function VOGOFooter() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-20 pb-8 px-4 sm:px-6 lg:px-8 xl:px-15">
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-1">
          {/* Logo and Description Column - now spans full width on mobile */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 order-first">
            <div className="flex items-center mb-8 md:mb-16">
              <img 
                src="/assets/go-global.png" 
                alt="logo" 
                className='w-[160px] sm:w-[180px] md:w-[212px]' 
              />
            </div>
            <p className="mb-4 text-[#CCCCCC] font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[0em]">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
            </p>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:ms-10 lg:ms-20 order-2 sm:order-3 md:order-2">
            <h3 className="font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-[1] tracking-[0em] mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">For Goers</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">For Growers</a></li>
            </ul>
          </div>

          {/* Job Categories Column */}
          <div className="col-span-1 order-3 sm:order-4 md:order-3">
            <h3 className="font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-[1] tracking-[0em] mb-4 sm:mb-6">Job Categories</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Telecomunications</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Hotels & Tourism</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Construction</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] hover:text-white transition-colors">Financial Services</a></li>
            </ul>
          </div>

          {/* Newsletter Column - moves to bottom on mobile */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 order-4 sm:order-2 md:order-4">
            <h3 className="font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-[1] tracking-[0em] mb-4 sm:mb-6">Newsletter</h3>
            <p className="font-normal text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-[0em] mb-4 text-[#CBCBCB]">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 sm:px-5 py-2 sm:py-3 bg-black border border-[#999999] rounded-[10px] sm:rounded-[12px] text-white text-[13px] sm:text-[14px]"
              />
            </div>
            <button className="w-full cursor-pointer bg-[#00BFF0] hover:bg-cyan-500 text-white py-2 sm:py-3 rounded-[10px] sm:rounded-[12px] font-bold text-[14px] sm:text-[16px] tracking-[0em] transition-colors">
              Subscribe now
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-[#808080] text-[12px] sm:text-sm">© Copyright VOGO 2025.</p>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] underline decoration-solid decoration-[1px] sm:decoration-[2px] text-[#FFFFFF] hover:text-[#CCCCCC] transition-colors">Privacy Policy</a>
            <a href="#" className="font-normal text-[12px] sm:text-[13px] leading-[24px] sm:leading-[26px] tracking-[0em] underline decoration-solid decoration-[1px] sm:decoration-[2px] text-[#FFFFFF] hover:text-[#CCCCCC] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}