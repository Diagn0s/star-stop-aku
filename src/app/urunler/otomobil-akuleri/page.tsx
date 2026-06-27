import { ProductListingLayout, Product } from "@/components/product-listing-layout";

const products: Product[] = [
  { id: "1", name: "Mutlu Akü SFB 60Ah", brand: "Mutlu", capacity: "12V 60Ah", cca: "540A", href: "/urunler/otomobil-akuleri/mutlu-sfb-60ah", isPopular: true },
  { id: "2", name: "Varta Blue Dynamic 60Ah", brand: "Varta", capacity: "12V 60Ah", cca: "540A", href: "/urunler/otomobil-akuleri/varta-blue-60ah", isPopular: true },
  { id: "3", name: "İnci Akü Formul A 72Ah", brand: "İnci Akü", capacity: "12V 72Ah", cca: "600A", href: "/urunler/otomobil-akuleri/inci-formul-72ah" },
  { id: "4", name: "Bosch S4 60Ah", brand: "Bosch", capacity: "12V 60Ah", cca: "540A", href: "/urunler/otomobil-akuleri/bosch-s4-60ah" },
  { id: "5", name: "Mutlu Akü SFB 72Ah", brand: "Mutlu", capacity: "12V 72Ah", cca: "640A", href: "/urunler/otomobil-akuleri/mutlu-sfb-72ah" },
  { id: "6", name: "Varta Silver Dynamic 74Ah", brand: "Varta", capacity: "12V 74Ah", cca: "680A", href: "/urunler/otomobil-akuleri/varta-silver-74ah" },
];

export default function OtomobilAkuleriPage() {
  return (
    <ProductListingLayout
      title="Otomobil Aküleri"
      description="Binek araçlarınız için uzun ömürlü, güvenilir ve bakım gerektirmeyen standart sulu akü çeşitleri."
      categorySlug="otomobil-akuleri"
      products={products}
    />
  );
}
