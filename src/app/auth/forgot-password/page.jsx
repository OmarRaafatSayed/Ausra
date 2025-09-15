'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../../../components/auth/AuthLayout';
import FormInput from '../../../components/auth/FormInput';
import Button from '../../../components/ui/Button';

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'البريد الإلكتروني أو رقم الهاتف مطلوب';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Reset request for:', formData.emailOrPhone);
      setSuccess(true);
    } catch (error) {
      console.error('Reset password error:', error);
      setErrors({ general: 'حدث خطأ. يرجى المحاولة مرة أخرى.' });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <AuthLayout 
        title="تم إرسال رابط الاستعادة" 
        subtitle="تحقق من بريدك الإلكتروني أو رسائلك النصية"
      >
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">تم إرسال تعليمات الاستعادة بنجاح!</p>
            <p className="text-sm">
              تحقق من بريدك الإلكتروني أو رسائلك النصية واتبع التعليمات لإعادة تعيين كلمة المرور.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-global-4 font-medium text-sm">
              لم تستلم الرسالة؟ تحقق من مجلد الرسائل غير المرغوب فيها
            </p>
            
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setSuccess(false);
                setFormData({ emailOrPhone: '' });
              }}
              className="border-global-1 text-global-1 hover:bg-global-1 hover:text-global-10 py-3 px-6"
            >
              إعادة المحاولة
            </Button>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/auth/login" 
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
            >
              العودة إلى تسجيل الدخول
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="نسيت كلمة المرور؟" 
      subtitle="لا تقلق، سنساعدك في استعادة حسابك"
    >
      <div className="text-center mb-8">
        <div className="bg-global-1 bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-global-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
        <p className="text-global-4 font-medium">
          أدخل بريدك الإلكتروني أو رقم هاتفك وسنرسل لك تعليمات إعادة تعيين كلمة المرور
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-right">
            {errors.general}
          </div>
        )}

        <FormInput
          label="البريد الإلكتروني أو رقم الهاتف"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleInputChange}
          placeholder="example@email.com أو 01xxxxxxxxx"
          required
          error={errors.emailOrPhone}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          className="bg-global-1 hover:bg-global-2 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
        >
          إرسال رابط الاستعادة
        </Button>

        <div className="text-center">
          <p className="text-global-4 font-medium">
            تذكرت كلمة المرور؟{' '}
            <Link 
              href="/auth/login" 
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
            >
              تسجيل الدخول
            </Link>
          </p>
        </div>

        <div className="text-center">
          <p className="text-global-4 font-medium">
            ليس لديك حساب؟{' '}
            <Link 
              href="/auth/register" 
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
            >
              إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;