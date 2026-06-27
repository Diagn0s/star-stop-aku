"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, ArrowRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Yıllık Deneyim", icon: Award },
  { value: "10K+", label: "Mutlu Müşteri", icon: Users },
  { value: "7/24", label: "Kesintisiz Hizmet", icon: Clock },
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6">
              Profesyonel{" "}
              <span className="text-brand-orange">Çözüm Ortağınız</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-base mb-8">
              Firmamız araba aküleri konusundaki uzmanlığı ve müşteri odaklı
              yaklaşımıyla öne çıkıyor. Yılların verdiği deneyimle, yüksek kaliteli
              akü çözümleri sunarak araçlarınızın güvenliği ve performansını
              artırmayı hedefliyoruz. Kaliteli markaları uygun fiyatlara sunmaya,
              ürün ve hizmet kalitesi ile güven veren ilk akla gelen akü firması
              olmak için gayret gösteriyoruz.
            </p>

            <a
              href="/kurumsal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white text-sm font-semibold hover:bg-brand-navy-dark transition-colors group"
            >
              Daha Fazla Bilgi
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right — Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-3xl font-black text-brand-navy leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
