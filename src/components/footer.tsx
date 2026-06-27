import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-brand-navy pt-20 pb-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 mb-16">

          {/* Brand & About (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6">
              <svg className="h-10 w-10 text-brand-orange" viewBox="0 0 40 40" fill="none">
                <path d="M12 8L20 4L28 8V20L20 32L12 20V8Z" fill="currentColor" opacity="0.15" />
                <path d="M15 28L20 36L25 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 6L26 10V18L20 26L14 18V10L20 6Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
                <circle cx="20" cy="16" r="4" fill="currentColor" />
              </svg>
              <div className="ml-2 flex flex-col leading-tight">
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  STAR<span className="text-brand-orange">STOP</span>
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/50 -mt-0.5">
                  AKÜ
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 pr-4">
              Yolda kaldığınızda endişelenmeyin. 7/24 mobil akü servisimizle,
              aracınıza en uygun aküyü bulunduğunuz yere getirip profesyonel
              montajını gerçekleştiriyoruz.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Kurumsal</h3>
            <ul className="space-y-4">
              {[
                { label: "Anasayfa", href: "/" },
                { label: "Hakkımızda", href: "/kurumsal" },
                { label: "Blog & Haberler", href: "/blog" },
                { label: "Sıkça Sorulanlar", href: "/sss" },
                { label: "İletişim", href: "/iletisim" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <ArrowRight className="h-3 w-3 text-brand-orange" />
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">Hizmet & Ürünler</h3>
            <ul className="space-y-4">
              {[
                { label: "Otomobil Aküleri", href: "/urunler/otomobil-akuleri" },
                { label: "Start-Stop Aküler", href: "/urunler/start-stop-akuler" },
                { label: "Ağır Vasıta Aküleri", href: "/urunler/agir-vasita-aku" },
                { label: "7/24 Akü Takviye", href: "/hizmetler" },
                { label: "Yerinde Montaj", href: "/hizmetler" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <ArrowRight className="h-3 w-3 text-brand-orange" />
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">İletişim</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Acil Yardım</p>
                  <a href="tel:+905551234567" className="text-lg font-bold text-white hover:text-brand-orange transition-colors">
                    0555 123 45 67
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">E-Posta</p>
                  <a href="mailto:info@starstopaku.com" className="text-base text-gray-300 hover:text-white transition-colors">
                    info@starstopaku.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Adres</p>
                  <span className="text-base text-gray-300 leading-snug block">
                    Atatürk Mah. Akü Sok. No:1<br />
                    Fatih / İstanbul
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Star Stop Akü. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/gizlilik" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              KVKK Aydınlatma
            </Link>
            <Link href="/sartlar" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
