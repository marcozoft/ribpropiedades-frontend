import { RECAPTCHA_SERVER_API_KEY } from "@/src/constants/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { recaptchaToken, ...data } = await req.json();

  const res = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SERVER_API_KEY,
        response: recaptchaToken,
      }),
    }
  );

  const result = await res.json();
  console.log(result);

  if (
    !result.success ||
    result.score < 0.5 ||
    result.action !== "contact_form"
  ) {
    return NextResponse.json(
      { error: "Captcha inválido" },
      { status: 403 }
    );
  }

  

  // 👉 Acá procesás el formulario (email, DB, etc.)
  return NextResponse.json({ ok: true });
}
