"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="İletişim"
        description="Akü ihtiyacınız, destek talepleriniz veya sorularınız için 7/24 yanınızdayız. Hemen bize ulaşın."
        breadcrumb={[{ label: "İletişim" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Bize Ulaşın</h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Sorularınız, fiyat teklifi veya acil akü yol yardım talepleriniz için aşağıdaki iletişim kanallarından bize hızlıca ulaşabilirsiniz.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Acil Yardım Hattı</h4>
                    <a href="tel:+905551234567" className="text-2xl font-black text-brand-navy hover:text-brand-orange transition-colors">
                      0555 123 45 67
                    </a>
                    <p className="text-sm text-gray-500 mt-2">7 gün 24 saat kesintisiz hizmet.</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">E-Posta</h4>
                    <a href="mailto:info@starstopaku.com" className="text-xl font-bold text-brand-navy hover:text-blue-500 transition-colors">
                      info@starstopaku.com
                    </a>
                    <p className="text-sm text-gray-500 mt-2">Kurumsal talepleriniz için.</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Adres</h4>
                    <address className="not-italic text-lg font-bold text-brand-navy leading-snug">
                      Atatürk Mah. Akü Sok. No: 1<br />
                      Fatih / İstanbul
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">Mesaj Gönderin</h3>
                  <p className="text-sm text-gray-500">Size en kısa sürede dönüş yapacağız.</p>
                </div>
              </div>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all"
                      placeholder="Örn: Ahmet Yılmaz"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all"
                      placeholder="Örn: 0532 000 00 00"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700">E-Posta Adresiniz</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all"
                    placeholder="Örn: ahmet@ornek.com"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700">Konu Seçiniz</label>
                  <select 
                    id="subject" 
                    className="w-full h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all appearance-none"
                  >
                    <option value="">Seçiniz...</option>
                    <option value="fiyat">Fiyat Teklifi Almak İstiyorum</option>
                    <option value="ariza">Akü Arızası / Yolda Kaldım</option>
                    <option value="soru">Genel Soru</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Mesajınız</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full p-5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all resize-none"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  ></textarea>
                </div>

                {/* Submit */}
                <button 
                  type="submit"
                  className="w-full h-14 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-orange transition-colors shadow-lg shadow-brand-navy/20"
                >
                  <Send className="h-5 w-5" />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 lg:mt-24 rounded-3xl overflow-hidden h-[400px] border border-gray-100 bg-gray-200 relative group"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-100">
            <MapPin className="h-12 w-12 mb-3 text-gray-300" />
            <p className="font-bold text-lg">Google Maps Görünümü</p>
            <p className="text-sm">Buraya harita iframe'i eklenecek</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
