'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../../../components/auth/AuthLayout';
import Button from '../../../components/ui/Button';

const LogoutPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    
    try {
      // Simulate API call for logout
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('User logged out successfully');
      
      // Clear any stored tokens/session data
      localStorage.removeItem('authToken');
      sessionStorage.clear();
      
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Go back to previous page or home
    window.history.back();
  };

  return (
    <AuthLayout 
      title="تسجيل الخروج" 
      subtitle="هل أنت متأكد من رغبتك في تسجيل الخروج؟"
    >
      <div className="text-center">
        <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-lg mb-8">
          <p className="font-semibold mb-2">تأكيد تسجيل الخروج</p>
          <p className="text-sm">
            سيتم إنهاء جلستك الحالية وستحتاج إلى تسجيل الدخول مرة أخرى للوصول إلى حسابك.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            type="button"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-global-10 font-extrabold py-4 rounded-lg transition-all duration-200"
          >
            {loading ? 'جاري تسجيل الخروج...' : 'تأكيد تسجيل الخروج'}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            fullWidth
            onClick={handleCancel}
            disabled={loading}
            className="border-global-5 text-global-4 hover:bg-global-7 hover:text-global-2 py-4 rounded-lg transition-all duration-200"
          >
            إلغاء
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-global-7 text-sm font-medium">
            أو يمكنك{' '}
            <Link 
              href="/" 
              className="text-global-1 hover:text-global-2 font-bold underline transition-colors"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-global-5">
          <p className="text-global-4 text-sm font-medium mb-4">
            إجراءات سريعة قبل المغادرة:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/profile"
              className="flex items-center justify-center p-3 bg-global-8 border border-global-5 rounded-lg hover:bg-global-7 transition-colors"
            >
              <svg className="w-5 h-5 text-global-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium text-global-4">الملف الشخصي</span>
            </Link>
            
            <Link
              href="/settings"
              className="flex items-center justify-center p-3 bg-global-8 border border-global-5 rounded-lg hover:bg-global-7 transition-colors"
            >
              <svg className="w-5 h-5 text-global-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-global-4">الإعدادات</span>
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LogoutPage;