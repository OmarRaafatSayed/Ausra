import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        
        if (!email || !password) {
            return NextResponse.json(
                { error: 'البريد الإلكتروني وكلمة المرور مطلوبان' },
                { status: 400 }
            );
        }

        if (email === 'admin@ausra.com' && password === '123456') {
            return NextResponse.json({
                success: true,
                message: 'تم تسجيل الدخول بنجاح',
                user: { id: 1, email, name: 'المدير' }
            });
        }

        return NextResponse.json(
            { error: 'بيانات الدخول غير صحيحة' },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'خطأ في الخادم' },
            { status: 500 }
        );
    }
}