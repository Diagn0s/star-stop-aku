"use client";

import { PageHeader } from "@/components/page-header";

export default function GizlilikPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Gizlilik Politikası"
        breadcrumb={[{ label: "Gizlilik Politikası" }]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">1. Bilgilerin Toplanması</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Web sitemizi ziyaret ettiğinizde, iletişim formlarını doldurduğunuzda veya müşteri hizmetlerimizle iletişime geçtiğinizde belirli kişisel bilgilerinizi toplayabiliriz. Bu bilgiler arasında adınız, e-posta adresiniz, telefon numaranız ve adres bilgileriniz yer alabilir.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">2. Bilgilerin Kullanımı</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Topladığımız bilgiler şu amaçlarla kullanılabilir:
          </p>
          <ul className="text-gray-600 mb-6">
            <li>Size sunduğumuz hizmetleri iyileştirmek</li>
            <li>Taleplerinize ve sorularınıza yanıt vermek</li>
            <li>Randevu ve servis işlemlerinizi organize etmek</li>
            <li>Pazarlama ve kampanya bildirimleri göndermek (onayınız dahilinde)</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">3. Bilgilerin Korunması</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kişisel bilgilerinizin güvenliğini sağlamak için çeşitli güvenlik önlemleri uyguluyoruz. Verileriniz güvenli sunucularda saklanmakta olup, yetkisiz erişime, değiştirilmeye veya ifşa edilmeye karşı korunmaktadır.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">4. Çerezler (Cookies)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kullanıcı deneyimini geliştirmek amacıyla web sitemizde çerezler kullanılmaktadır. Çerezler, tarayıcınızın sabit diskinde saklanan küçük veri dosyalarıdır. Çerez kullanımını tarayıcı ayarlarınızdan dilediğiniz zaman kapatabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
