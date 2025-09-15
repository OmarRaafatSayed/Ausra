'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../../../components/auth/AuthLayout';
import FormInput from '../../../components/auth/FormInput';
import Button from '../../../components/ui/Button';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    agreeToTerms: false
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
    
    if (!formData.fullName.trim()) newErrors.fullName = 'الاسم الكامل مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.password) newErrors.password = 'كلمة المرور مطلوبة';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    }
    if (!formData.accountType) newErrors.accountType = 'نوع الحساب مطلوب';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
    
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
      console.log('Registration data:', formData);
      // Redirect to verification page
      window.location.href = '/auth/verify';
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="إنشاء حساب جديد" 
      subtitle="انضم إلى مجتمع أُسرة اليوم"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="الاسم الكامل"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="أدخل اسمك الكامل"
          required
          error={errors.fullName}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />

        <FormInput
          label="البريد الإلكتروني"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@email.com"
          required
          error={errors.email}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        <FormInput
          label="رقم الهاتف"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="01xxxxxxxxx"
          required
          error={errors.phone}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />

        <div className="mb-4">
          <label className="block text-sm font-bold text-global-2 mb-2 text-right">
            نوع الحساب <span className="text-red-500">*</span>
          </label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleInputChange}
            className={`
              w-full px-4 py-3 text-right
              bg-global-8 border-2 rounded-lg
              font-somar font-medium
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-global-1 focus:ring-opacity-20
              ${errors.accountType ? 'border-red-500' : 'border-global-5 hover:border-global-2 focus:border-global-1'}
            `}
          >
            <option value="">اختر نوع الحساب</option>
            <option value="parent">والد/أسرة</option>
            <option value="consultant">استشاري</option>
            <option value="youth">شاب</option>
          </select>
          {errors.accountType && (
            <p className="text-red-500 text-sm mt-1 text-right font-medium">
              {errors.accountType}
            </p>
          )}
        </div>

        <FormInput
          label="كلمة المرور"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="أدخل كلمة مرور قوية"
          required
          error={errors.password}
        />

        <FormInput
          label="تأكيد كلمة المرور"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="أعد إدخال كلمة المرور"
          required
          error={errors.confirmPassword}
        />

        <div className="mb-6">
          <label className="flex items-center text-right">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="ml-2 w-4 h-4 text-global-1 border-2 border-global-5 rounded focus:ring-global-1"
            />
            <span className="text-sm font-medium text-global-4">
              أوافق على{' '}
              <Link href="/terms" className="text-global-1 hover:text-global-2 underline">
                الشروط والأحكام
              </Link>
              {' '}و{' '}
              <Link href="/privacy" className="text-global-1 hover:text-global-2 underline">
                سياسة الخصوصية
              </Link>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-sm mt-1 text-right font-medium">
              {errors.agreeToTerms}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          className="bg-global-1 hover:bg-global-2 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
        >
          إنشاء الحساب
        </Button>

        <div className="text-center mt-6">
          <p className="text-global-4 font-medium">
            لديك حساب بالفعل؟{' '}
            <Link 
              href="/auth/login" 
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
            >
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;