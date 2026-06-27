"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Car, Battery, Truck, Anchor, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: Car,
    title: "Otomobil Aküleri",
    description: "Her marka ve model araç için standart sulu aküler, bakım gerektirmeyen uzun ömürlü çözümler.",
    href: "/urunler/otomobil-akuleri",
    gradient: "from-blue-500 to-cyan-400",
    features: ["Uzun Ömür", "Yüksek Marş Basma", "Bakımsız Tip"],
  },
  {
    icon: Battery,
    title: "Start-Stop Aküler",
    description: "Yeni nesil start-stop özellikli araçlar için özel olarak üretilmiş AGM ve EFB teknolojili aküler.",
    href: "/urunler/start-stop-akuler",
    gradient: "from-brand-orange to-amber-500",
    features: ["AGM/EFB Teknoloji", "Yakıt Tasarrufu", "Hızlı Şarj Kabulü"],
  },
  {
    icon: Truck,
    title: "Ağır Vasıta Aküleri",
    description: "Kamyon, tır ve otobüsler için zorlu koşullara dayanıklı, yüksek amperli ağır hizmet aküleri.",
    href: "/urunler/agir-vasita-aku",
    gradient: "from-slate-600 to-slate-700",
    features: ["Sarsıntıya Dirençli", "Yüksek Amper", "Ağır Hizmet"],
  },
  {
    icon: Anchor,
    title: "Marin Aküleri",
    description: "Deniz araçları için özel olarak tasarlanmış, sızdırmaz ve korozyona dayanıklı jel ve sulu aküler.",
    href: "/urunler/marin-akuleri",
    gradient: "from-teal-500 to-emerald-400",
    features: ["Tam Sızdırmazlık", "Derin Deşarj", "Jel Teknoloji"],
  },
];

export default function UrunlerPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Ürün Gruplarımız"
        description="Aracınızın ihtiyacı olan her türlü akü çözümünü, dünyanın en iyi markaları ve uygun fiyat garantisiyle sunuyoruz."
        breadcrumb={[
          { label: "Ürünler" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={cat.href} className="group block h-full">
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 h-full flex flex-col">
                  {/* Top Header */}
                  <div className={`p-8 bg-gradient-to-br ${cat.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
                    
                    <cat.icon className="absolute -bottom-6 -right-6 h-40 w-40 text-white/20 group-hover:scale-110 transition-transform duration-500" strokeWidth={0.5} />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                        <cat.icon className="h-7 w-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{cat.title}</h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {cat.features.map(feature => (
                        <span key={feature} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider text-sm group-hover:gap-4 transition-all">
                      Ürünleri İncele
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
