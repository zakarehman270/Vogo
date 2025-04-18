'use client'
import CardLayout from 'app/Components/layouts/CardLayout'
import { useState, useRef, useEffect } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const page = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  
  // Get email from signUp.emailAddress or use placeholder if not available
  const [email, setEmail] = useState(() => {
    if (isLoaded && signUp?.emailAddress) {
      return signUp.emailAddress;
    }
    return 'example@email.com';
  });
  
  const [countdown, setCountdown] = useState(21);
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [verificationError, setVerificationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);
  const [activeInput, setActiveInput] = useState(0);

  // Update email when signUp is loaded
  useEffect(() => {
    if (isLoaded && signUp?.emailAddress) {
      setEmail(signUp.emailAddress);
    }
  }, [isLoaded, signUp]);

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

  const handleResendCode = async () => {
    if (!isLoaded) return;
    
    try {
      // Reset countdown and clear codes
      setCountdown(21);
      setCodes(['', '', '', '', '', '']);
      setActiveInput(0);
      inputRefs.current[0].focus();
      
      // Resend verification code through Clerk
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } catch (error) {
      console.error('Failed to resend code', error);
      setVerificationError('Failed to resend verification code. Please try again.');
    }
  };

  const handleSubmit = async () => {
    if (!isLoaded || isSubmitting) return;
    
    // Combine the codes into a single string
    const verificationCode = codes.join('');
    
    // Check if the code is incomplete
    if (verificationCode.length !== 6) {
      setVerificationError('Please enter the complete 6-digit code');
      return;
    }
    
    setIsSubmitting(true);
    setVerificationError('');
    
    try {
      // Attempt to verify the email address with Clerk
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });
      
      if (completeSignUp.status !== "complete") {
        setVerificationError("Verification not complete. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Set the user session as active
      await setActive({ session: completeSignUp.createdSessionId });
      
      // Redirect to dashboard or home page
      router.push('/dashboard'); // Or any route you want to redirect to after successful verification
    } catch (error) {
      console.error('Verification failed', error);
      setVerificationError(error.errors?.[0]?.message || 'Invalid verification code. Please try again.');
      setIsSubmitting(false);
    }
  };

  // If clerk isn't loaded yet, show loading state
  if (!isLoaded) {
    return (
      <CardLayout otp={true}>
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-500">Loading verification...</div>
        </div>
      </CardLayout>
    );
  }

  return (
    <CardLayout otp={true} title="Verify your email" subtitle={"Enter the verification code sent to your email ID"}>
    <div className="flex flex-col items-center w-full max-w-md mx-auto px-4 sm:px-0">
      {/* Email display */}
      <div className="flex items-center justify-center mb-3 sm:mb-4 text-gray-600">
        <span className="text-base sm:text-lg leading-5 tracking-normal truncate max-w-[80%]">
          {email}
        </span>
        <button className="ml-2 text-gray-500 cursor-pointer">
          <img 
            src="/assets/iconsEdit.svg" 
            alt="iconsEdit" 
            className='w-5 sm:w-[22px]' 
          />
        </button>
      </div>
  
      {/* Code input boxes */}
      <div className="flex gap-3 sm:gap-4 mb-2 sm:mb-3">
        {codes.map((code, index) => (
          <div
            key={index}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-[7px] flex items-center justify-center text-center border ${
              index === activeInput ? 'border-[#AEAEAE] border-2 sm:border-4' : 'border-[rgba(202,202,202,1)]'
            }`}
          >
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              className="w-full h-full text-center bg-transparent outline-none text-sm sm:text-base"
              value={code}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => setActiveInput(index)}
            />
          </div>
        ))}
      </div>
  
      {/* Error message */}
      {verificationError && (
        <div className="text-red-500 text-xs sm:text-sm mb-2 sm:mb-3 text-center">
          {verificationError}
        </div>
      )}
  
      {/* Resend code */}
      <div className="text-center text-[#585858] mb-2 sm:mb-3 text-sm sm:text-base">
        <button
          onClick={handleResendCode}
          className={countdown > 0 ? 'text-[#585858] cursor-default' : 'text-[#FF7F50] cursor-pointer'}
          disabled={countdown > 0}
        >
          Didn&apos;t receive a code? {countdown > 0 ? `(${countdown}s)` : ''}
        </button>
      </div>
  
      <button 
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="bg-[#FF7F50] w-full cursor-pointer hover:bg-orange-600 text-white text-xs sm:text-sm font-[200] px-4 py-2 rounded-md transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5 h-8 sm:h-[35px]"
      >
        {isSubmitting ? 'Verifying...' : 'Continue'}
      </button>
    </div>
  </CardLayout>
  )
}
export default page