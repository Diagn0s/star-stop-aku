"use client";

import { PageHeader } from "@/components/page-header";

export default function SartlarPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Kullanım Şartları"
        breadcrumb={[{ label: "Kullanım Şartları" }]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">1. Taraflar ve Kapsam</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bu Kullanım Şartları, Star Stop Akü web sitesini ziyaret eden ve sunulan hizmetlerden yararlanan tüm kullanıcılar için geçerlidir. Web sitemizi kullanarak bu şartları tamamen kabul etmiş sayılırsınız.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">2. Hizmetlerin Kullanımı</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kullanıcılar, site üzerinden sunulan içerik ve hizmetleri hukuka uygun, sitenin amacına ters düşmeyecek şekilde kullanmakla yükümlüdür. Web sitemizin işleyişini bozucu veya yavaşlatıcı herhangi bir işlem yapılamaz.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">3. Fikri Mülkiyet Hakları</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Web sitemizde yer alan tüm tasarım, metin, grafik, logo, görseller ve diğer tüm içeriklerin fikri mülkiyet hakları Star Stop Akü'ye aittir. Önceden yazılı izin alınmaksızın bu içerikler kopyalanamaz, çoğaltılamaz veya başka mecralarda kullanılamaz.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">4. Sorumluluğun Sınırlandırılması</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Star Stop Akü, web sitesinde yer alan bilgilerin doğruluğu ve güncelliği için azami gayreti göstermekle birlikte, olası yazım ve bilgi hatalarından kaynaklanabilecek durumlarda sorumluluk kabul etmez. Sunulan hizmetler "olduğu gibi" sağlanmaktadır.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">5. Değişiklikler</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Şirketimiz, işbu Kullanım Şartları metnini dilediği zaman, kullanıcılara önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler sitede yayımlandığı andan itibaren geçerlilik kazanır.
          </p>
        </div>
      </div>
    </main>
  );
}
