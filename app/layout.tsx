import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ['latin'] })

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
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
