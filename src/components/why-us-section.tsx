"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  Battery,
  Wrench,
  BadgeDollarSign,
  Recycle,
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Hızlı Servis",
    description:
      "Acil durumlarda en geç 30 dakika içinde bulunduğunuz konumda oluyoruz.",
    color: "amber",
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description:
      "Gece gündüz fark etmez, haftanın her günü kesintisiz hizmet veriyoruz.",
    color: "blue",
  },
  {
    icon: Battery,
    title: "Uzun Ömürlü Ürünler",
    description:
      "TSE belgeli ve yetkili firma garantisi altında kaliteli aküler sunuyoruz.",
    color: "emerald",
  },
  {
    icon: Wrench,
    title: "Uzman Teknisyenler",
    description:
      "Eğitimli, deneyimli ekibimiz akünüzü test edip en doğru çözümü sunar.",
    color: "violet",
  },
  {
    icon: BadgeDollarSign,
    title: "Uygun Fiyat",
    description:
      "Bütçenize en uygun akü seçeneklerini rekabetçi fiyatlarla sunuyoruz.",
    color: "rose",
  },
  {
    icon: Recycle,
    title: "Çevreye Duyarlı",
    description:
      "Eski akülerinizi geri dönüşüme kazandırarak doğaya katkıda bulunuyoruz.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; text: string; glow: string }> = {
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    glow: "group-hover:shadow-amber-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    glow: "group-hover:shadow-blue-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    glow: "group-hover:shadow-emerald-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-500",
    glow: "group-hover:shadow-violet-500/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-500",
    glow: "group-hover:shadow-rose-500/20",
  },
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-500",
    glow: "group-hover:shadow-teal-500/20",
  },
};

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            Neden Biz?
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Bizi Tercih Etmeniz İçin{" "}
            <span className="text-amber-500">6 Neden</span>
          </h2>
          <p className="text-lg text-slate-500">
            Müşterilerimize en iyi hizmeti sunmak için sürekli kendimizi
            geliştiriyoruz.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => {
            const colors = colorMap[advantage.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${colors.glow}`}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <advantage.icon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
