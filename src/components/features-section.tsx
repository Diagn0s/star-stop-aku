"use client";

import { motion } from "framer-motion";
import {
  Battery,
  Truck,
  ShoppingBag,
  ShieldCheck,
  Wrench,
  Recycle,
} from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "AKÜ TAKVİYESİ",
    description:
      "İstanbul Avrupa Yakası Tüm İlçelerine 24 Saat Akü Takviye Hizmeti Veriyoruz Maksimum Süre 30 Dakikadır",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Truck,
    title: "BİZ GELİYORUZ",
    description:
      "İstanbul Avrupa Yakası Tüm İlçelerine 24 Saat Bulunduğunuz Konumda Akü Satış ve Montaj Hizmeti",
    gradient: "from-orange-500 to-amber-400",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
  {
    icon: ShoppingBag,
    title: "HER ÇEŞİT AKÜ SEÇENEĞİ",
    description:
      "Dükkanımızda Her Çeşit Marka ve Bütçenize Uygun Akü Seçeneği Vardır",
    gradient: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    icon: ShieldCheck,
    title: "TAM GARANTİ",
    description:
      "Satışa Sunduğumuz Tüm Aküler TSE Belgeli Olup Yetkili Firma Garantisi Altındadır",
    gradient: "from-violet-500 to-purple-400",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: Wrench,
    title: "UZMAN TEKNİSYENLER",
    description:
      "Eğitimli, Uzman Teknisyenler Eski Akünüzü Test Ederek Akü Takviyesi, Gerekiyorsa Değişim Önerisinde Bulunacaklardır",
    gradient: "from-rose-500 to-pink-400",
    glowColor: "rgba(244, 63, 94, 0.3)",
  },
  {
    icon: Recycle,
    title: "ÇEVREYE DUYARLI",
    description:
      "Tüm Kullanılmış Eski Aküleri Geri Dönüşüme Kazandırıyoruz",
    gradient: "from-sky-500 to-indigo-400",
    glowColor: "rgba(14, 165, 233, 0.3)",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-orange text-xs font-bold uppercase tracking-[0.2em]">
            Neden Biz?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Farkımızı <span className="text-brand-orange">Keşfedin</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Kaliteli hizmet, güvenilir ürünler ve profesyonel ekibimizle
            yanınızdayız
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl bg-white border border-gray-200/80 p-7 sm:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1">
                {/* Number badge */}
                <span className="absolute top-5 right-6 text-[80px] font-black text-gray-100 leading-none select-none group-hover:text-gray-200/80 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
                    style={{
                      boxShadow: `0 8px 32px ${feature.glowColor}`,
                    }}
                  >
                    <feature.icon
                      className="h-7 w-7 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Accent line */}
                  <div
                    className={`w-8 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full mb-4 group-hover:w-12 transition-all duration-500`}
                  />

                  {/* Title */}
                  <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
