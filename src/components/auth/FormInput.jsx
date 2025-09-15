'use client';
import React, { useState } from 'react';

const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error = '',
  disabled = false,
  icon = null,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="w-full mb-4">
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-bold text-global-2 mb-2 text-right"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-global-7">
            {icon}
          </div>
        )}
        
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full px-4 py-3 text-right
            bg-global-8 border-2 rounded-lg
            font-somar font-medium
            transition-all duration-200
            placeholder:text-global-7
            focus:outline-none focus:ring-2 focus:ring-global-1 focus:ring-opacity-20
            ${error ? 'border-red-500' : focused ? 'border-global-1' : 'border-global-5'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-global-2'}
            ${icon ? 'pr-12' : ''}
            ${type === 'password' ? 'pl-12' : ''}
          `}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-global-7 hover:text-global-2 transition-colors"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-1 text-right font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;