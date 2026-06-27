"use client";

import { PageHeader } from "@/components/page-header";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, BatteryCharging, ShieldCheck, Zap, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductDetailLayoutProps {
  title: string;
  categoryName: string;
  categorySlug: string;
  description: string;
  features: string[];
  benefits: string[];
  gradient: string;
  image?: string; // Optional image prop
  brand?: string; // e.g., "Mutlu Akü"
  capacity?: string; // e.g., "12V 60Ah"
  cca?: string; // e.g., "540A"
}

type TabType = "info" | "features" | "benefits";

export function ProductDetailLayout({
  title,
  categoryName,
  categorySlug,
  description,
  features,
  benefits,
  image,
  brand = "Star Stop Akü",
  capacity = "Bilinmiyor",
  cca = "Bilinmiyor"
}: ProductDetailLayoutProps) {
  const [activeTab, setActiveTab] = useState<TabType>("info");

  return (
    <main className="min-h-screen bg-gray-50 pb-0">
      <PageHeader
        title={title}
        description={`${categoryName} Kategorisi`}
        breadcrumb={[
          { label: "Ürünler", href: "/urunler" },
          { label: categoryName, href: `/urunler/${categorySlug}` },
          { label: title },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        
        {/* HERO SECTION */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 lg:p-10 shadow-sm mb-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square sm:aspect-video lg:aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center p-10"
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
              
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-contain relative z-10" />
              ) : (
                <BatteryCharging className="w-48 h-48 text-gray-300 relative z-10" strokeWidth={1} />
              )}
            </motion.div>

            {/* Right: Product Info & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wider uppercase mb-6">
                {brand}
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy mb-6 leading-tight">
                {title}
              </h1>
              
              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Kapasite</p>
                  <p className="text-xl font-bold text-brand-navy">{capacity}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Marş Gücü (CCA)</p>
                  <p className="text-xl font-bold text-brand-navy">{cca}</p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {description}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-dark transition-colors shadow-lg shadow-orange-500/20"
                >
                  <Phone className="h-5 w-5" />
                  Hemen Fiyat Alın
                </a>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                >
                  WhatsApp'tan Yazın
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          
          {/* Tab Headers */}
          <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-100 bg-gray-50/50">
            <button
              onClick={() => setActiveTab("info")}
              className={cn(
                "flex-1 min-w-[150px] py-5 px-6 flex items-center justify-center gap-2 font-bold text-sm transition-all relative",
                activeTab === "info" ? "text-brand-orange" : "text-gray-500 hover:text-brand-navy"
              )}
            >
              <Info className="h-4 w-4" />
              Ürün Bilgileri
              {activeTab === "info" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={cn(
                "flex-1 min-w-[150px] py-5 px-6 flex items-center justify-center gap-2 font-bold text-sm transition-all relative",
                activeTab === "features" ? "text-brand-orange" : "text-gray-500 hover:text-brand-navy"
              )}
            >
              <ShieldCheck className="h-4 w-4" />
              Özellikler
              {activeTab === "features" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("benefits")}
              className={cn(
                "flex-1 min-w-[150px] py-5 px-6 flex items-center justify-center gap-2 font-bold text-sm transition-all relative",
                activeTab === "benefits" ? "text-brand-orange" : "text-gray-500 hover:text-brand-navy"
              )}
            >
              <Zap className="h-4 w-4" />
              Avantajlar
              {activeTab === "benefits" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              
              {activeTab === "info" && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Detaylı Ürün Açıklaması</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {title}, zorlu koşullara karşı üstün dayanıklılık ve yüksek performans sunmak üzere tasarlanmıştır. 
                      En son teknoloji üretim süreçleri ve yüksek kalite standartları ile üretilen bu model, 
                      aracınızın elektriksel donanımlarını en verimli şekilde beslerken, uzun yıllar boyunca güvenle kullanabileceğiniz bir enerji kaynağıdır.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Sürekli gelişen otomotiv teknolojilerine tam uyum sağlayacak şekilde optimize edilmiş iç yapısı, titreşim ve korozyona karşı ekstra dirençlidir. Hem bütçenizi korur hem de sürüş güvenliğinizi garanti altına alır.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "features" && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Teknik Özellikler</h3>
                  <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                        </div>
                        <span className="text-gray-600 leading-relaxed text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "benefits" && (
                <motion.div
                  key="benefits"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Neden Tercih Etmelisiniz?</h3>
                  <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                        <span className="text-gray-600 leading-relaxed text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA SECTION - Bottom */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Profesyonel Çözüm Ortağınız
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Aracınıza en uygun aküyü bulmak ve yerinde ücretsiz montaj avantajından 
              yararlanmak için uzman ekibimiz 7/24 hizmetinizde.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905551234567"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-xl shadow-orange-500/20"
              >
                <Phone className="h-5 w-5" />
                Hemen Bizi Arayın
              </a>
              <span className="text-white/50 text-sm">veya</span>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
              >
                İletişim Formunu Doldurun
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
