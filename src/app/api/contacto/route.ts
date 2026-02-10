import { API_URL, BACKEND_API_KEY, RECAPTCHA_SERVER_API_KEY } from "@/src/constants/constants";
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

  if (
    !result.success ||
    result.score < 0.5 ||
    result.action !== "contacto_form"
  ) {
    return NextResponse.json(
      { error: "Captcha inválido" },
      { status: 403 }
    );
  }

  const resp = await fetch(`${API_URL}/contacto`, {
    method: "POST",
    headers: {
      'X-API-Key': BACKEND_API_KEY,
    },
    body: JSON.stringify(data),
  }).then(resp => resp.json())

  return NextResponse.json({ ok: true, resp});
}
