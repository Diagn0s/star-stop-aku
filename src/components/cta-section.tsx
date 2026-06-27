"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
              7/24 Hizmet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Aracınız İçin En İyi{" "}
              <span className="text-brand-orange">Akü Çözümü</span>
            </h2>
            <p className="text-gray-300 text-base mb-8 max-w-lg leading-relaxed">
              Aracınız için en uygun akü çözümlerini sunuyor, 7/24 acil yol yardım
              hizmeti ile her zaman yanınızdayız. Şimdi arayın, anında yardım alın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+905551234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-colors shadow-lg shadow-orange-500/20 group"
              >
                <Phone className="h-5 w-5" />
                Hemen Arayın
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Fiyat Teklifi Alın
              </a>
            </div>

            {/* Info pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-brand-orange" />
                İstanbul Avrupa Yakası
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="h-4 w-4 text-brand-orange" />
                En geç 30 dakikada yanınızda
              </div>
            </div>
          </motion.div>

          {/* Right — Phone number card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative p-8 rounded-3xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm text-center min-w-[280px]">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/20 mx-auto mb-5">
                <Phone className="h-7 w-7 text-brand-orange" />
              </div>
              <p className="text-gray-400 text-sm mb-2">Acil Yardım Hattı</p>
              <a
                href="tel:+905551234567"
                className="text-2xl font-black text-white hover:text-brand-orange transition-colors"
              >
                0555 123 45 67
              </a>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold">
                  Şu an müsait
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
