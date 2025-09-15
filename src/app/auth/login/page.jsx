'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../../../components/auth/AuthLayout';
import FormInput from '../../../components/auth/FormInput';
import Button from '../../../components/ui/Button';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login data:', formData);
      // Redirect to dashboard or home
      window.location.href = '/';
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'خطأ في تسجيل الدخول. يرجى المحاولة مرة أخرى.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="تسجيل الدخول" 
      subtitle="أهلاً بعودتك إلى أُسرة"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />

        <FormInput
          label="كلمة المرور"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="أدخل كلمة المرور"
          required
          error={errors.password}
        />

        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/auth/forgot-password" 
            className="text-sm text-global-1 hover:text-global-2 font-bold underline transition-colors"
          >
            نسيت كلمة المرور؟
          </Link>
          
          <label className="flex items-center text-right">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="ml-2 w-4 h-4 text-global-1 border-2 border-global-5 rounded focus:ring-global-1"
            />
            <span className="text-sm font-medium text-global-4">
              تذكرني
            </span>
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          className="bg-global-1 hover:bg-global-2 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
        >
          تسجيل الدخول
        </Button>

        <div className="text-center mt-6">
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

        {/* Social Login Options */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-global-5"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-global-6 text-global-7 font-medium">أو</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => {}}
              className="border-global-5 text-global-4 hover:bg-global-7 py-3"
            >
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={() => {}}
              className="border-global-5 text-global-4 hover:bg-global-7 py-3"
            >
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;