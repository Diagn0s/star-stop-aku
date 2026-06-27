"use client";

import { PageHeader } from "@/components/page-header";

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="KVKK Aydınlatma Metni"
        breadcrumb={[{ label: "KVKK Aydınlatma Metni" }]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Veri Sorumlusunun Kimliği</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, Star Stop Akü olarak, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere aktarabileceğiz.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">Kişisel Verilerin İşlenme Amacı</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Toplanan kişisel verileriniz, şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, satış ve satış sonrası destek süreçlerinin yürütülmesi, müşteri ilişkileri yönetiminin sağlanması amaçlarıyla işlenmektedir.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mb-6">Kişisel Veri Sahibinin Hakları (Madde 11)</h2>
          <ul className="text-gray-600 mb-6">
            <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
