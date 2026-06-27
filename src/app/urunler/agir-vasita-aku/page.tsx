import { ProductListingLayout, Product } from "@/components/product-listing-layout";

const products: Product[] = [
  { id: "1", name: "Mutlu SFB 135Ah Ağır Vasıta", brand: "Mutlu", capacity: "12V 135Ah", cca: "900A", href: "/urunler/agir-vasita-aku/mutlu-sfb-135ah", isPopular: true },
  { id: "2", name: "Varta ProMotive 180Ah", brand: "Varta", capacity: "12V 180Ah", cca: "1000A", href: "/urunler/agir-vasita-aku/varta-promotive-180ah" },
  { id: "3", name: "İnci Akü Supr A 200Ah", brand: "İnci Akü", capacity: "12V 200Ah", cca: "1150A", href: "/urunler/agir-vasita-aku/inci-supr-a-200ah" },
  { id: "4", name: "Mutlu SFB 225Ah Ağır Vasıta", brand: "Mutlu", capacity: "12V 225Ah", cca: "1150A", href: "/urunler/agir-vasita-aku/mutlu-sfb-225ah", isPopular: true },
];

export default function AgirVasitaAkuPage() {
  return (
    <ProductListingLayout
      title="Ağır Vasıta Aküleri"
      description="Kamyon, tır, otobüs ve iş makineleri gibi ağır hizmet gerektiren ticari araçlar için yüksek dayanıklılığa sahip özel aküler."
      categorySlug="agir-vasita-aku"
      products={products}
    />
  );
}
