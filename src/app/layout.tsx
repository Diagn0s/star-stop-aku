import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Stop Akü | Kaliteli ve Güvenilir Akü Çözümleri",
  description:
    "Star Stop Akü — 7/24 acil akü yardım servisi, akü satışı, montaj ve değişim hizmeti. Otomobil, ağır vasıta, start-stop ve marin aküleri. Profesyonel ekip, uygun fiyat, hızlı servis.",
  keywords: [
    "akü",
    "oto akü",
    "akü değişimi",
    "akü takviye",
    "start-stop akü",
    "7/24 akü servisi",
    "İstanbul akücü",
  ],
  openGraph: {
    title: "Star Stop Akü | Kaliteli ve Güvenilir Akü Çözümleri",
    description:
      "7/24 acil akü yardım servisi. Kaliteli ürünler, profesyonel ekip, uygun fiyat.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-700">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
