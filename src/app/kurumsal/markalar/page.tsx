"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "Mutlu Akü",
    description: "Türkiye'nin en köklü ve güvenilir akü markası. Üstün performans ve uzun ömür.",
    tag: "Yerli Üretim",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Varta",
    description: "Alman mühendisliği, yenilikçi teknoloji ve dünya çapında kanıtlanmış kalite.",
    tag: "Premium",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "İnci Akü",
    description: "Uzun ömürlü, dayanıklı ve zorlu iklim koşullarına uygun yüksek performans.",
    tag: "Popüler",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Bosch",
    description: "Güvenilir marş gücü ve tüm araç tipleri için kusursuz enerji kaynağı.",
    tag: "Premium",
    color: "from-slate-700 to-slate-800",
  },
  {
    name: "Yiğit Akü",
    description: "Yenilikçi AR-GE çalışmalarıyla geliştirilmiş, bütçe dostu kaliteli aküler.",
    tag: "Ekonomik",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Çelik Akü",
    description: "Zorlu koşullara karşı ekstra dayanıklı tasarım ve yüksek standartlar.",
    tag: "Dayanıklı",
    color: "from-zinc-500 to-zinc-600",
  },
];

export default function MarkalarPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Çalıştığımız Markalar"
        description="Dünyanın ve Türkiye'nin en seçkin akü markalarını, orijinal ürün garantisi ve uygun fiyatlarla sizlere sunuyoruz."
        breadcrumb={[
          { label: "Kurumsal", href: "/kurumsal" },
          { label: "Markalar" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              {/* Brand Header Placeholder */}
              <div className={`h-32 bg-gradient-to-br ${brand.color} relative overflow-hidden flex items-center justify-center`}>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
                
                <h3 className="text-3xl font-black text-white relative z-10 tracking-tight">
                  {brand.name.toUpperCase()}
                </h3>
              </div>
              
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold mb-4">
                  {brand.tag}
                </span>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {brand.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  Ürünleri İncele
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-brand-navy p-10 lg:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Aracınıza Hangi Marka Uygun Bilmiyor Musunuz?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz aracınızın modeline ve kullanım alışkanlıklarınıza en 
              uygun akü markasını belirlemeniz için size yardımcı olmaya hazır.
            </p>
            <a
              href="tel:+905551234567"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold hover:bg-brand-orange-dark transition-all shadow-lg shadow-orange-500/20"
            >
              Hemen Arayın, Destek Alın
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
