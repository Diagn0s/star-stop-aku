"use client";

import { PageHeader } from "@/components/page-header";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Örnek formatlama, gerçek uygulamada API'den veya CMS'ten çekilecektir.
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Blog & Haberler"
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: title },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-orange transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Blog'a Dön
        </Link>

        {/* Post Container */}
        <article className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          
          {/* Header Image Area */}
          <div className="h-64 sm:h-80 md:h-96 w-full bg-gradient-to-br from-brand-navy to-brand-navy-light relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />
            
            <div className="relative z-10 px-8 text-center max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-orange-500/20">
                Akü Bakımı
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {title}
              </h1>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-100 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand-orange" />
                15 Haziran 2026
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-brand-orange" />
                Editör Ekibi
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-orange" />
                5 Dakika Okuma Süresi
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-gray max-w-none prose-headings:text-brand-navy prose-a:text-brand-orange hover:prose-a:text-brand-orange-dark">
              <p className="lead text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Aracınızın aküsü, tıpkı insan kalbi gibi tüm elektriksel sisteme can verir. 
                Gerekli bakımların yapılmaması durumunda en olmadık zamanlarda yolda kalmanıza neden olabilir.
                Peki akünüzün ömrünü uzatmak için nelere dikkat etmelisiniz?
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Düzenli Temizlik ve Oksitlenme Kontrolü</h2>
              <p className="text-gray-600 mb-6">
                Akü kutup başlarında zamanla beyaz veya mavimsi bir tortu (oksitlenme) birikebilir. 
                Bu durum, akım geçişini zorlaştırarak marş basma gücünü zayıflatır. 
                Belirli aralıklarla kutup başlarını sıcak su ve karbonat karışımı ile temizleyebilir, 
                ardından özel koruyucu spreyler veya vazelin sürebilirsiniz.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Kısa Mesafe Kullanımlarından Kaçının</h2>
              <p className="text-gray-600 mb-6">
                Araç çalışırken harcanan büyük enerjinin alternatör tarafından tekrar şarj edilebilmesi için 
                aracın bir süre çalışır durumda kalması gerekir. Sürekli kısa mesafe (5-10 dk) sürüşleri, 
                akünün tam şarj olmasını engelleyerek ömrünü hızla tüketir.
              </p>

              <blockquote className="border-l-4 border-brand-orange pl-6 py-2 my-8 bg-brand-orange/5 rounded-r-xl">
                <p className="text-lg italic text-brand-navy font-medium m-0">
                  "Unutmayın, iyi bakılan bir akü standart ömrünün (2-3 yıl) çok daha ötesinde, 
                  4-5 yıla kadar sorunsuz hizmet verebilir."
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Araç Çalışmıyorken Elektrik Tüketimini Sınırlayın</h2>
              <p className="text-gray-600 mb-6">
                Motor kapalıyken radyo dinlemek, farları açık unutmak veya klimayı çalıştırmak aküyü 
                doğrudan deşarj eder. Derin deşarj (tamamen bitme) durumu, akü plakalarına kalıcı 
                zararlar verebilir. Aracı stop etmeden önce tüm elektronik donanımları kapatmayı alışkanlık haline getirin.
              </p>

            </div>

            {/* Footer Tags & Share */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Tag className="h-5 w-5 text-gray-400" />
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-bold">Akü Bakımı</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-bold">Kış Hazırlığı</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-bold">Tavsiyeler</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Paylaş:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* Next Post / Read More Placeholder */}
        <div className="mt-12 bg-brand-navy rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Akünüzle İlgili Sorun Mu Yaşıyorsunuz?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Makaledeki çözümler işe yaramadıysa veya yolda kaldıysanız, Star Stop Akü olarak 7/24 mobil servisimizle yanınızdayız.
            </p>
            <a href="tel:+905551234567" className="inline-block px-8 py-4 rounded-xl bg-brand-orange text-white font-bold hover:bg-brand-orange-dark transition-colors shadow-lg shadow-orange-500/20">
              Acil Destek Alın
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
