"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Wrench, Zap, Clock, ShieldCheck, MapPin, Truck } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "7/24 Akü Takviye",
    description: "Yolda kaldığınız her an, bir telefonla yanınızdayız. Uzman ekibimiz bulunduğunuz konuma en kısa sürede ulaşarak akü takviyesi (jump start) işlemini güvenle gerçekleştirir.",
    gradient: "from-brand-orange to-amber-500",
  },
  {
    icon: Wrench,
    title: "Yerinde Akü Montajı",
    description: "Aracınızın aküsü tamamen bittiğinde veya ömrünü tamamladığında, yeni akünüzü adresinize getirip profesyonel ekipmanlarla aracınıza zarar vermeden montajını yapıyoruz.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Garantili Ürün ve Servis",
    description: "Tüm ürünlerimiz TSE belgeli olup, 2 yıl resmi garanti kapsamındadır. Montaj ve takviye işlemlerimiz de tamamen profesyonel güvence altındadır.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Truck,
    title: "Ağır Vasıta Yol Yardım",
    description: "Sadece binek araçlar değil, ticari filolar, kamyon ve tırlar için de 7/24 ağır vasıta akü takviye ve değişim hizmeti sunuyoruz.",
    gradient: "from-slate-600 to-slate-700",
  },
];

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Hizmetlerimiz"
        description="İstanbul'un neresinde olursanız olun, akü ile ilgili tüm sorunlarınızda yanınızdayız. Profesyonel, hızlı ve güvenilir hizmet."
        breadcrumb={[{ label: "Hizmetlerimiz" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-3xl p-10 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Süreç Nasıl İşliyor?</h2>
            <p className="text-gray-400">Yolda kaldığınızda yapmanız gerekenler çok basit.</p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-3 gap-8 text-center">
            <div className="relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-black text-brand-orange">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Bizi Arayın</h4>
              <p className="text-gray-400 text-sm">7/24 hizmet veren numaramızdan çağrı merkezimize ulaşın.</p>
              
              {/* Connector line */}
              <div className="hidden sm:block absolute top-8 left-[60%] right-[-40%] h-px bg-gradient-to-r from-brand-orange/50 to-transparent border-t border-dashed border-white/20" />
            </div>

            <div className="relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-black text-brand-orange">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Konum Gönderin</h4>
              <p className="text-gray-400 text-sm">WhatsApp üzerinden bulunduğunuz konumu bizimle paylaşın.</p>

              {/* Connector line */}
              <div className="hidden sm:block absolute top-8 left-[60%] right-[-40%] h-px bg-gradient-to-r from-brand-orange/50 to-transparent border-t border-dashed border-white/20" />
            </div>

            <div>
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-orange flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Yola Devam Edin</h4>
              <p className="text-gray-400 text-sm">Ekibimiz 30 dakikada yanınızda olsun ve sorununuzu çözsün.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
