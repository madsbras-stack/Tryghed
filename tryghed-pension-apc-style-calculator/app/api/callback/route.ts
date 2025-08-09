export const runtime = 'nodejs';
import { NextResponse } from "next/server";
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore
import nodemailer from "nodemailer";

export async function POST(req: Request){
  try{
    const { name, phone } = await req.json();
    if(!name || !phone){
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // If SMTP env vars are set, send email. Otherwise just log.
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CALLBACK_TO_EMAIL
    } = process.env as Record<string, string | undefined>;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CALLBACK_TO_EMAIL){
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `TRYGHED Pension <${SMTP_USER}>`,
        to: CALLBACK_TO_EMAIL,
        subject: "Ny callback-forespørgsel",
        text: `Navn: ${name}\nTelefon: ${phone}`,
      });
    } else {
      console.log("Callback request:", { name, phone });
    }

    return NextResponse.json({ ok: true });
  }catch(e){
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
