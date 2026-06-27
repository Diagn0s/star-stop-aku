"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Battery, Truck, Anchor, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Car,
    title: "Otomobil Aküleri",
    description:
      "Araç Akü Marketimizde Zengin İçerikli Çeşitlerimiz 7/24 Hizmet İle Her Marka ve Model Bütçenize Uygun Akü Seçenekleri",
    href: "/urunler/otomobil-akuleri",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    accentColor: "bg-blue-500",
    tag: "En Popüler",
  },
  {
    icon: Battery,
    title: "Start-Stop Aküler",
    description:
      "Start Stop Özellikli Aracınıza Uyumlu AGM ve EFB Aküleri Star Stop Akü Mobil Servisi Bulunduğunuz Konuma Ücretsiz Getirsin",
    href: "/urunler/start-stop-akuler",
    gradient: "from-brand-orange via-orange-500 to-amber-400",
    accentColor: "bg-brand-orange",
    tag: "Yüksek Performans",
  },
  {
    icon: Truck,
    title: "Ağır Vasıta Akü",
    description:
      "Ağır Vasıta Araçlar İçin, Kamyon, Tır, Otobüs, İş Makinası, Yüksek Amperli Akü İhtiyaçlarınız İçin 7/24 Arayabilirsiniz",
    href: "/urunler/agir-vasita-aku",
    gradient: "from-slate-700 via-slate-600 to-slate-500",
    accentColor: "bg-slate-600",
    tag: "Endüstriyel",
  },
  {
    icon: Anchor,
    title: "Marin Aküleri",
    description:
      "Titreşim ve Darbelere Dayanacak Şekilde Tasarlanmış Marin Kullanımına Uygun Deniz Araç Tipi Jel ve Sulu Aküler",
    href: "/urunler/marin-akuleri",
    gradient: "from-cyan-600 via-cyan-500 to-teal-400",
    accentColor: "bg-cyan-500",
    tag: "Deniz Tipi",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest">
              Ürünler
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Ürün Grupları
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg leading-relaxed">
              İhtiyaçlarınıza uygun geniş bir yelpazede sunulan ürün gruplarımız,
              yüksek kalite ve performansı garanti eder.
            </p>
          </div>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shrink-0"
          >
            Tümünü İncele
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Product Grid — Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={
                index === 0
                  ? "lg:col-span-7 lg:row-span-2"
                  : index === 1
                  ? "lg:col-span-5"
                  : index === 2
                  ? "lg:col-span-5"
                  : "lg:col-span-12"
              }
            >
              <Link href={product.href} className="group block h-full">
                <div
                  className={`relative overflow-hidden rounded-2xl h-full ${
                    index === 0 ? "min-h-[420px]" : index === 3 ? "min-h-[200px]" : "min-h-[200px]"
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} transition-transform duration-700 group-hover:scale-105`}
                  />

                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Large icon watermark */}
                  <div className="absolute -bottom-8 -right-8 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500">
                    <product.icon
                      className={index === 0 ? "h-64 w-64" : "h-40 w-40"}
                      strokeWidth={0.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      {/* Tag */}
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold backdrop-blur-sm">
                        {product.tag}
                      </span>

                      {/* Arrow */}
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-brand-navy transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <div className="mt-auto pt-12">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm mb-4">
                        <product.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>

                      <h3
                        className={`font-bold text-white mb-2 ${
                          index === 0 ? "text-2xl lg:text-3xl" : "text-lg"
                        }`}
                      >
                        {product.title}
                      </h3>
                      <p
                        className={`text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 ${
                          index === 0 ? "text-base max-w-md" : "text-sm"
                        }`}
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
