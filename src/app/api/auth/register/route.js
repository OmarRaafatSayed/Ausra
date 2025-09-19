import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'جميع الحقول مطلوبة' },
                { status: 400 }
            );
        }

        // التحقق من صحة البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'البريد الإلكتروني غير صحيح' },
                { status: 400 }
            );
        }

        // هنا تضع منطق حفظ المستخدم في قاعدة البيانات
        return NextResponse.json({
            success: true,
            message: 'تم إنشاء الحساب بنجاح',
            user: { id: Date.now(), name, email }
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'خطأ في الخادم' },
            { status: 500 }
        );
    }
}