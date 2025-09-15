'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../../../components/auth/AuthLayout';
import FormInput from '../../../components/auth/FormInput';
import Button from '../../../components/ui/Button';

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
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

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    }
    if (!hasUpperCase || !hasLowerCase) {
      return 'كلمة المرور يجب أن تحتوي على أحرف كبيرة وصغيرة';
    }
    if (!hasNumbers) {
      return 'كلمة المرور يجب أن تحتوي على رقم واحد على الأقل';
    }
    if (!hasSpecialChar) {
      return 'كلمة المرور يجب أن تحتوي على رمز خاص واحد على الأقل';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'كلمة المرور الجديدة مطلوبة';
    } else {
      const passwordError = validatePassword(formData.newPassword);
      if (passwordError) {
        newErrors.newPassword = passwordError;
      }
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
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
      console.log('Password reset successful');
      setSuccess(true);
    } catch (error) {
      console.error('Reset password error:', error);
      setErrors({ general: 'حدث خطأ في إعادة تعيين كلمة المرور. يرجى المحاولة مرة أخرى.' });
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    return strength;
  };

  const getStrengthLabel = (strength) => {
    switch (strength) {
      case 0:
      case 1: return { label: 'ضعيفة جداً', color: 'bg-red-500' };
      case 2: return { label: 'ضعيفة', color: 'bg-orange-500' };
      case 3: return { label: 'متوسطة', color: 'bg-yellow-500' };
      case 4: return { label: 'قوية', color: 'bg-blue-500' };
      case 5: return { label: 'قوية جداً', color: 'bg-green-500' };
      default: return { label: '', color: 'bg-gray-300' };
    }
  };

  if (success) {
    return (
      <AuthLayout 
        title="تم تحديث كلمة المرور بنجاح" 
        subtitle="يمكنك الآن تسجيل الدخول بكلمة المرور الجديدة"
      >
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8">
            <p className="font-semibold mb-2">تم تحديث كلمة المرور بنجاح!</p>
            <p className="text-sm">
              تم تحديث كلمة المرور الخاصة بك. يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.
            </p>
          </div>

          <Button
            type="button"
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => window.location.href = '/auth/login'}
            className="bg-global-1 hover:bg-global-2 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
          >
            تسجيل الدخول
          </Button>
        </div>
      </AuthLayout>
    );
  }

  const passwordStrength = getPasswordStrength(formData.newPassword);
  const strengthInfo = getStrengthLabel(passwordStrength);

  return (
    <AuthLayout 
      title="إعادة تعيين كلمة المرور" 
      subtitle="أدخل كلمة مرور جديدة وقوية"
    >
      <div className="text-center mb-8">
        <div className="bg-global-1 bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-global-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-right">
            {errors.general}
          </div>
        )}

        <div>
          <FormInput
            label="كلمة المرور الجديدة"
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="أدخل كلمة مرور قوية"
            required
            error={errors.newPassword}
          />
          
          {/* Password Strength Indicator */}
          {formData.newPassword && (
            <div className="mt-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1 flex-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 rounded-full flex-1 transition-colors ${
                        level <= passwordStrength ? strengthInfo.color : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-global-4">
                  {strengthInfo.label}
                </span>
              </div>
              
              <div className="text-xs text-global-7 space-y-1">
                <p>كلمة المرور يجب أن تحتوي على:</p>
                <ul className="list-disc list-inside space-y-1 text-right">
                  <li className={formData.newPassword.length >= 8 ? 'text-green-600' : 'text-gray-500'}>
                    8 أحرف على الأقل
                  </li>
                  <li className={/[A-Z]/.test(formData.newPassword) && /[a-z]/.test(formData.newPassword) ? 'text-green-600' : 'text-gray-500'}>
                    أحرف كبيرة وصغيرة
                  </li>
                  <li className={/\d/.test(formData.newPassword) ? 'text-green-600' : 'text-gray-500'}>
                    رقم واحد على الأقل
                  </li>
                  <li className={/[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword) ? 'text-green-600' : 'text-gray-500'}>
                    رمز خاص واحد على الأقل
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <FormInput
          label="تأكيد كلمة المرور الجديدة"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="أعد إدخال كلمة المرور الجديدة"
          required
          error={errors.confirmPassword}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          className="bg-global-1 hover:bg-global-2 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
        >
          تحديث كلمة المرور
        </Button>

        <div className="text-center">
          <Link 
            href="/auth/login" 
            className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
          >
            العودة إلى تسجيل الدخول
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;