'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AuthLayout from '../../../components/auth/AuthLayout';
import Button from '../../../components/ui/Button';

const VerifyPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef([]);

  useEffect(() => {
    // Start countdown timer
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Clear error when user starts typing
    if (error) setError('');
    
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newCode = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
    setCode(newCode);
    
    // Focus the last filled input or the first empty one
    const lastFilledIndex = newCode.findIndex(digit => !digit);
    const focusIndex = lastFilledIndex === -1 ? 5 : Math.max(0, lastFilledIndex - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const verificationCode = code.join('');
    if (verificationCode.length !== 6) {
      setError('يرجى إدخال الرمز المكون من 6 أرقام');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Verification code:', verificationCode);
      // Redirect to success page or dashboard
      window.location.href = '/';
    } catch (error) {
      console.error('Verification error:', error);
      setError('رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Resending verification code');
      
      // Reset timer
      setResendTimer(60);
      setCanResend(false);
      
      // Start new countdown
      const timer = setInterval(() => {
        setResendTimer(prev => {
          if (prev <= 1) {
            setCanResend(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
    } catch (error) {
      console.error('Resend error:', error);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="تأكيد الحساب" 
      subtitle="تم إرسال رمز التحقق إلى بريدك الإلكتروني"
    >
      <div className="text-center mb-8">
        <div className="bg-global-1 bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-global-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-global-4 font-medium">
          أدخل الرمز المكون من 6 أرقام المرسل إلى
        </p>
        <p className="text-global-2 font-bold">
          example@email.com
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Verification Code Input */}
        <div className="flex justify-center gap-2 mb-6" dir="ltr">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value.replace(/\D/g, ''))}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`
                w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-bold
                bg-global-8 border-2 rounded-lg
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-global-1 focus:ring-opacity-20
                ${error ? 'border-red-500' : 'border-global-5 focus:border-global-1'}
                hover:border-global-2
              `}
            />
          ))}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          className="bg-global-1 hover:bg-global-2 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
        >
          تأكيد الحساب
        </Button>

        {/* Resend Code */}
        <div className="text-center">
          {canResend ? (
            <button
              type="button"
              onClick={handleResendCode}
              disabled={resendLoading}
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors disabled:opacity-50"
            >
              {resendLoading ? 'جاري الإرسال...' : 'إعادة إرسال الرمز'}
            </button>
          ) : (
            <p className="text-global-7 font-medium">
              يمكنك إعادة إرسال الرمز خلال {resendTimer} ثانية
            </p>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-global-4 font-medium">
            <Link 
              href="/auth/login" 
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
            >
              العودة إلى تسجيل الدخول
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default VerifyPage;