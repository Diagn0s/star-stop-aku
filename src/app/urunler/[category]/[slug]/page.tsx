"use client";

import { ProductDetailLayout } from "@/components/product-detail-layout";
import { useParams } from "next/navigation";

// Bu sayfa gerçek bir uygulamada veritabanından slug'a göre ürün detaylarını çekecektir.
// Şimdilik örnek bir veri yapısı ile "ProductDetailLayout" componentini test ediyoruz.

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = params.category as string;
  
  // Format the category and slug to be more readable
  const categoryName = category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const productName = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <ProductDetailLayout
      title={productName}
      categoryName={categoryName}
      categorySlug={category}
      description={`${productName} modelimiz, aracınızın enerji ihtiyacını en üst düzeyde karşılamak üzere tasarlanmıştır. Yüksek performans ve uzun ömür bir arada.`}
      features={[
        "Özel alaşımlı ızgara yapısı ile korozyona karşı yüksek direnç.",
        "Zorlu hava koşullarında (-40°C ile +60°C arası) sorunsuz marş basma.",
        "Tam kapalı (bakımsız) tasarım sayesinde su/asit sızıntısı yapmaz.",
        "Özel alev tutucu filtre sistemi ile yüksek güvenlik sağlar.",
        "Kısa devre önleyici özel separatörler kullanılmıştır.",
        "Üstün şarj kabul kapasitesi ile hızlı toparlanma."
      ]}
      benefits={[
        "Arıza ve yolda kalma riskini en aza indirir.",
        "Uzun servis ömrü ile bütçenize katkı sağlar.",
        "Araç içindeki elektronik donanımların (klima, multimedya vs.) kesintisiz çalışmasını destekler.",
        "Çevre dostu üretim süreçleriyle karbon ayak izini azaltır.",
        "Orijinal ekipman (OE) standartlarına tam uyumluluk gösterir."
      ]}
      gradient="from-brand-navy to-blue-900"
    />
  );
}
