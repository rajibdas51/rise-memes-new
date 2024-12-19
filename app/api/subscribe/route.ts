// types/subscription.ts

// app/api/subscribe/route.ts
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/emailTemplate/EmailTemplate';
import { NextResponse } from 'next/server';
import { SubscriptionError } from '@/app/types/subscription';

const resend = new Resend(process.env.RESEND_API_KEY!);
const OWNER_EMAIL = 'komrech@proton.me';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      const error: SubscriptionError = {
        message: 'Invalid email address',
        code: 'INVALID_EMAIL',
        status: 400,
      };
      return NextResponse.json({ error }, { status: 400 });
    }

    // Send confirmation email to subscriber
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Subscription Confirmed!',
      react: EmailTemplate({
        type: 'subscriber',
        email: email,
      }),
    });

    // Send notification to owner
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: OWNER_EMAIL,
      subject: 'New Subscriber!',
      react: EmailTemplate({
        type: 'owner',
        email: email,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);

    const subscriptionError: SubscriptionError = {
      message: error instanceof Error ? error.message : 'Failed to subscribe',
      code: 'SUBSCRIPTION_FAILED',
      status: 500,
    };

    return NextResponse.json({ error: subscriptionError }, { status: 500 });
  }
}
