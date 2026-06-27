"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";

const slides = [
  {
    title: "7/24 Acil Akü\nYardım Servisi",
    subtitle: "AKÜ MARKET, AKÜ SATIŞI, AKÜ DESTEK HİZMETİ",
    description: "Yolda kaldığınızda endişelenmeyin. Profesyonel mobil ekibimizle İstanbul'un her noktasına 30 dakikada ulaşıp akü değişimi yapıyoruz.",
    gradient: "from-brand-navy via-brand-navy/90 to-brand-navy/80",
    image: "bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center",
  },
  {
    title: "Start-Stop Akü\nUzman Değişimi",
    subtitle: "YENİ NESİL ARAÇLAR İÇİN PROFESYONEL ÇÖZÜM",
    description: "Yeni nesil Start-Stop özellikli araçlarınız için AGM ve EFB teknolojili yüksek performanslı aküler. Üstelik ücretsiz kodlama hizmetiyle.",
    gradient: "from-brand-navy via-brand-navy/90 to-brand-navy/80",
    image: "bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center",
  },
  {
    title: "Ağır Vasıta\nYüksek Performans",
    subtitle: "TIR, KAMYON, OTOBÜS VE İŞ MAKİNELERİ İÇİN",
    description: "Ağır hizmet araçları için zorlu koşullara dayanıklı, uzun ömürlü ve yüksek marş basma gücüne sahip özel akü serileri.",
    gradient: "from-brand-navy via-brand-navy/90 to-brand-navy/80",
    image: "bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[650px] sm:h-[700px] lg:h-[750px] mt-[72px] overflow-hidden rounded-b-[32px] mx-auto max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] shadow-2xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 ${slides[current].image}`}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].gradient}`} />
          
          {/* Dark noise pattern for texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">
                    {slides[current].subtitle}
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] whitespace-pre-line mb-6">
                  {slides[current].title}
                </h1>
                
                <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
                  {slides[current].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+905551234567"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-all shadow-lg shadow-orange-500/30 group"
                  >
                    <Phone className="h-5 w-5" />
                    Hemen Arayın
                  </a>
                  <a
                    href="/urunler"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all group"
                  >
                    Ürünleri İncele
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right — Trust Badges (hidden on smaller screens) */}
            <div className="hidden lg:flex flex-col items-end justify-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xs w-full hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-orange/20 text-brand-orange">
                  <Clock className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">30 Dakikada</p>
                  <p className="text-white/60 text-sm">Hızlı Servis Garantisi</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xs w-full hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/20 text-blue-400">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Tam Garanti</p>
                  <p className="text-white/60 text-sm">TSE Belgeli Orijinal Ürünler</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current 
                    ? "w-8 h-2 bg-brand-orange" 
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110"
              aria-label="Önceki"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md transition-all hover:bg-white/25 hover:scale-110"
              aria-label="Sonraki"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
