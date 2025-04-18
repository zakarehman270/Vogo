// SubscriptionCard.jsx
import Image from 'next/image';

export default function SubscriptionCard() {
  return (
    <div className="bg-transparent text-white rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-3">
        <div className="bg-white text-[#00BFF0] px-4 sm:px-6 py-2 rounded-tr-[8px] rounded-br-[8px] font-[300] text-sm sm:text-base leading-none">
          Subscription fee
        </div>
        <div className="flex items-center">
          <Image 
            src="/assets/stripeLocation.svg" 
            alt="Location" 
            width={18} 
            height={18}
            className="mr-2 sm:mr-3 w-4 h-4 sm:w-[18px] sm:h-[18px]"
          />
          <span className="font-[400] text-base sm:text-[20px] leading-[18px]">Goer Premium</span>
        </div>
      </div>
      
      {/* Price */}
      <div className="mb-4">
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl md:text-[36px] font-[500]">$9.99</span>
          <span className="ml-2 sm:ml-3 text-xs sm:text-[14px] leading-[100%] font-[200] opacity-90">
            Per<br />month
          </span>
        </div>
      </div>
      
      {/* Details */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className='text-sm sm:text-[16px] font-[400]'>Goer Premium</span>
          <span className='text-sm sm:text-[16px] font-[400]'>$9.99</span>
        </div>
        <div className="">
          <span className='text-sm sm:text-[16px] font-[400] text-[#80DFF8]'>Billed monthly</span>
        </div>
        
        <div className="border-t border-[#80DFF8] border-opacity-20 my-3"></div>
        
        <div className="flex justify-between">
          <span className='text-sm sm:text-[16px] font-[400]'>Subtotal</span>
          <span className='text-sm sm:text-[16px] font-[400]'>$9.99</span>
        </div>
        
        <div className="flex justify-between text-sm opacity-80">
          <span className='text-xs sm:text-[15px] font-[400]'>Tax</span>
          <span className='text-xs sm:text-[15px] font-[400] text-[#80DFF8]'>$0.00</span>
        </div>
        
        <div className="border-t border-[#80DFF8] border-opacity-20 my-3"></div>
        
        <div className="flex justify-between font-semibold">
          <span className='text-sm sm:text-[16px] font-[600]'>Total due today</span>
          <span className='text-sm sm:text-[16px] font-[600]'>$9.99</span>
        </div>
      </div>
    </div>
  );
}