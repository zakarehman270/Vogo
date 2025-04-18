'use client'
import CardLayout from 'app/Components/layouts/CardLayout'
import { useState, useRef, useEffect } from 'react';

const OTPPage = () => {

  const [email, setEmail] = useState('example@email.com');
  const [countdown, setCountdown] = useState(21);
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [activeInput, setActiveInput] = useState(0);

  // Handle countdown timer
  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  // Handle code input
  const handleCodeChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Auto-focus next input after entering a digit
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
      setActiveInput(index + 1);
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace - move to previous input
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1].focus();
      setActiveInput(index - 1);
    }
  };

  const handleResendCode = () => {
    // Reset countdown and clear codes
    setCountdown(21);
    setCodes(['', '', '', '', '', '']);
    setActiveInput(0);
    inputRefs.current[0].focus();
  };


  return (
    <CardLayout otp={true} >
      <div className="flex flex-col items-center max-w-md mx-auto">
        {/* Email display */}
        <div className="flex items-center justify-center mb-4 text-gray-600">
          <span className="font-lg text-lg leading-5 tracking-normal">{email}</span>
          <button className="ml-2 text-gray-500 cursor-pointer">
            <img src="/assets/iconsEdit.svg" alt="iconsEdit" className='w-[22px]' />
          </button>
        </div>

        {/* Code input boxes */}
        <div className="flex gap-4 mb-3">
          {codes.map((code, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-[7px] flex items-center justify-center text-center border border-[rgba(202,202,202,1)] ${index === activeInput ? 'border-[#AEAEAE] border-4' : ''
                }`}
            >
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                className="w-full h-full text-center bg-transparent outline-none "
                value={code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => setActiveInput(index)}
              />
            </div>
          ))}
        </div>

        {/* Resend code */}
        <div className="text-center text-[#585858] mb-3">
          <button
            onClick={handleResendCode}
            className={countdown > 0 ? 'text-[#585858] cursor-default' : 'text-[#FF7F50] cursor-pointer'}
            disabled={countdown > 0}
          >
            Didn&apos;t receive a code? {countdown > 0 ? `(${countdown}s)` : ''}
          </button>
        </div>

        <button className="bg-[#FF7F50] w-full cursor-pointer hover:bg-orange-600 text-white text-[14px] font-[200] px-4 py-2 rounded-md transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5 h-[35px]">
          Continue
        </button>
      </div>
    </CardLayout>
  )
}

export default OTPPage
