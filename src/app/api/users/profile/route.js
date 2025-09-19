import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        // هنا تضع منطق جلب بيانات المستخدم
        const user = {
            id: 1,
            name: 'أحمد محمد',
            email: 'ahmed@ausra.com',
            role: 'مستخدم',
            joinDate: '2024-01-15'
        };

        return NextResponse.json({
            success: true,
            user
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'خطأ في جلب البيانات' },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const { name, email } = await request.json();
        
        if (!name || !email) {
            return NextResponse.json(
                { error: 'الاسم والبريد الإلكتروني مطلوبان' },
                { status: 400 }
            );
        }

        // هنا تضع منطق تحديث بيانات المستخدم
        return NextResponse.json({
            success: true,
            message: 'تم تحديث البيانات بنجاح',
            user: { id: 1, name, email }
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'خطأ في تحديث البيانات' },
            { status: 500 }
        );
    }
}