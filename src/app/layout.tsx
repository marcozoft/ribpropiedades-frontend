import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "../components";
import { primaryFont } from "./config/fonts";
import '@/src/styles/flat-icon/flaticon.css'



export const metadata: Metadata = {
  title: "RIB Inmobiliara",
  description: "Servicio y Experiencia a tu disposición." + 
    "Haciendo enfoque en el servicio excepcional a los clientes" + 
    "significa ser expertos en lo que hacemos, calidad, tecnología, y vanguardia inmobiliaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={primaryFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
