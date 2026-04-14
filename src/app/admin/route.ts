import { redirect } from 'next/navigation';

export async function GET() {
  redirect(process.env.ADMIN_URL || 'https://admin.ribpropiedades.com.ar');
}
