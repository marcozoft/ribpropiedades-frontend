import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar, Footer } from "../components";
import { primaryFont } from "../config/fonts";
import "@/src/styles/flat-icon/flaticon.css";
import { Toaster } from "../components/shadcn-components/ui/sonner";

export const metadata: Metadata = {
  title: "RIB Inmobiliara",
  description:
    "Servicio y Experiencia a tu disposición." +
    "Haciendo enfoque en el servicio excepcional a los clientes" +
    "significa ser expertos en lo que hacemos, calidad, tecnología, y vanguardia inmobiliaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-37051020-1']); 
            _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; 
            ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(ga, s); })();
          `}
        </Script>
      </head>
      <body className={`${primaryFont.className}`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
