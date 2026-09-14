import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;

    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!token || !phoneNumberId) {
      console.error("Missing WhatsApp environment variables.");
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length === 10) {
      cleanPhone = '91' + cleanPhone;
    }

    const whatsappPayload = {
      messaging_product: "whatsapp",
      to: cleanPhone,
      type: "text",
      text: {
        body: `Hello ${name}!\n\nThank you for reaching out to R.N. Pandey Insurance regarding "${subject}". We have received your inquiry and our team will get back to you shortly.`
      }
    };

    const response = await fetch(`https://graph.facebook.com/v17.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(whatsappPayload)
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("WhatsApp API Error:", responseData);
      return NextResponse.json({ error: 'Failed to send WhatsApp message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
