"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Target, Shield, Zap, Award, CheckCircle2 } from "lucide-react";

export default function KurumsalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hakkımızda"
        description="Yılların verdiği tecrübe ile aracınızın gücüne güç katıyoruz. Star Stop Akü olarak her zaman yanınızdayız."
        breadcrumb={[{ label: "Kurumsal", href: "/kurumsal" }, { label: "Hakkımızda" }]}
      />

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
                Yola Çıkmanın <span className="text-brand-orange">Güvencesi</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Star Stop Akü, araç aküleri konusundaki derin uzmanlığı ve koşulsuz
                  müşteri memnuniyeti odaklı yaklaşımıyla sektörde öne çıkan öncü bir firmadır.
                </p>
                <p>
                  Yılların getirdiği paha biçilemez deneyimle, en yüksek kaliteli akü
                  çözümlerini sunarak araçlarınızın performansını maksimize etmeyi ve
                  yolculuk güvenliğinizi sağlamayı temel hedefimiz olarak belirledik.
                </p>
                <p>
                  Geniş ürün yelpazemizle hem bireysel kullanıcıların hem de kurumsal
                  filoların ihtiyaçlarına nokta atışı çözümler üretiyor; 7/24 mobil
                  servis ağımızla yolda kalma stresini tarihe karıştıran yenilikçi
                  hizmetler sunuyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
                  alt="Akü Servisi"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center font-black text-xl">
                    15+
                  </div>
                  <div>
                    <div className="text-white font-bold">Yıllık Tecrübe</div>
                    <div className="text-white/70 text-sm">Sektörde Lider</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-20" style={{
                backgroundImage: `radial-gradient(#f97316 2px, transparent 2px)`,
                backgroundSize: `16px 16px`
              }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-3xl hover:bg-white/[0.08] transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
              <p className="text-gray-400 leading-relaxed">
                Akü sektöründe teknolojik gelişmeleri yakından takip ederek, 
                müşteri memnuniyetini en üst düzeyde tutan, çevreye duyarlı ve 
                sürekli gelişime açık yapımızla Türkiye'nin en güvenilir ve en çok 
                tercih edilen akü tedarik ve servis markası olmak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-md p-10 rounded-3xl hover:bg-white/[0.08] transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Misyonumuz</h3>
              <p className="text-gray-400 leading-relaxed">
                Müşterilerimizin araç enerji ihtiyaçlarını en hızlı, en güvenilir ve 
                ekonomik şekilde karşılamak. 7/24 kesintisiz hizmet anlayışımız ve 
                uzman kadromuzla, yolda kalma endişesini ortadan kaldırarak 
                hayatı kolaylaştıran kesin çözümler sunmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Neden Biz?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Bizi tercih etmeniz için birçok geçerli nedenimiz var. İşimize olan 
              tutkumuz ve kaliteden ödün vermeyen yapımızla hizmetinizdeyiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Güvenilirlik", desc: "TSE belgeli orijinal ürün garantisi" },
              { icon: Zap, title: "Hız", desc: "30 dakika içerisinde yerinde servis" },
              { icon: Award, title: "Uzmanlık", desc: "Eğitimli ve sertifikalı profesyonel ekip" },
              { icon: CheckCircle2, title: "Müşteri Odaklı", desc: "%100 müşteri memnuniyeti garantisi" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                <div className="mx-auto w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm">
                  <item.icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
