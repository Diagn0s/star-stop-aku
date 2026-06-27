"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Settings,
  HeartPulse,
  MessageCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Araç Aküsü Satışı",
    description:
      "Farklı marka ve modellerdeki araçlar için uygun akü seçeneklerini sunuyoruz. Öncelikli amacımız aracınızın ihtiyacı olan aküyü, UYGUN FİYAT ile size sunmaktır",
    gradient: "from-blue-500 to-cyan-400",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    number: "01",
  },
  {
    icon: Settings,
    title: "Akü Montajı ve Değişimi",
    description:
      "Uzman ekibimiz aracınıza en uygun aküyü belirleyip, profesyonel montaj hizmeti sunar. Eski akünüzü de geri dönüşüme kazandırıyoruz.",
    gradient: "from-brand-orange to-amber-400",
    lightBg: "bg-orange-50",
    lightText: "text-brand-orange",
    number: "02",
  },
  {
    icon: HeartPulse,
    title: "Araç Aküsü Bakımı",
    description:
      "Akünüzün ömrünü uzatmak için düzenli bakım ve test hizmeti sunuyoruz. Akü sağlığınızı kontrol edip, erken müdahale ile sizi yolda bırakmıyoruz.",
    gradient: "from-emerald-500 to-teal-400",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
    number: "03",
  },
  {
    icon: MessageCircle,
    title: "Uzman Danışmanlık",
    description:
      "Aracınız için en uygun akü tipini, amperi ve markayı seçmenizde size rehberlik ediyoruz. Bütçenize ve kullanım alışkanlıklarınıza göre önerilerde bulunuyoruz.",
    gradient: "from-violet-500 to-purple-400",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
    number: "04",
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Neler Yapıyoruz?
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Müşterilerimizin ihtiyaçlarına en iyi şekilde cevap vermek için
            çeşitli profesyonel hizmetler sunuyoruz.
          </p>
        </motion.div>

        {/* Services — Interactive Accordion Cards */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left: Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "bg-white border-gray-200 shadow-lg shadow-gray-200/50"
                      : "bg-white/60 border-gray-100 hover:bg-white hover:border-gray-200"
                  }`}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${service.gradient} transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="flex items-center gap-4 p-5 pl-6">
                    {/* Number */}
                    <span
                      className={`text-xs font-bold transition-colors duration-300 ${
                        isActive ? service.lightText : "text-gray-300"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
                        isActive
                          ? `${service.lightBg} ${service.lightText}`
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <service.icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3
                      className={`flex-1 font-semibold transition-colors duration-300 ${
                        isActive ? "text-brand-navy" : "text-gray-500"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Arrow */}
                    <ChevronRight
                      className={`h-5 w-5 transition-all duration-300 ${
                        isActive
                          ? `${service.lightText} rotate-90`
                          : "text-gray-300"
                      }`}
                    />
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-[88px]">
                          <p className="text-sm text-gray-500 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <a
                            href="/hizmetler"
                            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.lightText} hover:gap-2.5 transition-all duration-300`}
                          >
                            Detaylı İncele
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block sticky top-28"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${services[activeIndex].gradient} p-10 min-h-[400px] flex flex-col justify-between`}
              >
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Large watermark icon */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.1]">
                  {(() => {
                    const Icon = services[activeIndex].icon;
                    return <Icon className="h-72 w-72" strokeWidth={0.4} />;
                  })()}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold backdrop-blur-sm mb-6">
                    Hizmet {services[activeIndex].number}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-white/80 leading-relaxed max-w-sm text-base">
                    {services[activeIndex].description}
                  </p>
                </div>

                <div className="relative z-10 mt-8">
                  <a
                    href="/hizmetler"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-navy text-sm font-semibold hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                  >
                    Detaylı İncele
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
