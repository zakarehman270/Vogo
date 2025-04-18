
'use client'
// src/components/common/Input.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  error,
  required = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine the input type based on whether it's a password and visibility toggle
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="input-group relative">
      <input
        type={inputType}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`input ${error ? 'input-error' : ''} rounded-[7px] border-[1px] border-[#B3B5BF] px-2 h-[35px] w-full`}
        required={required}
      />
      
      {/* Show password toggle for password fields */}
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      )}
      
      {error && <p className="error-message text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;