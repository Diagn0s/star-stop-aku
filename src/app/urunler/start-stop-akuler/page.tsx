import { ProductListingLayout, Product } from "@/components/product-listing-layout";

const products: Product[] = [
  { id: "1", name: "Varta AGM 70Ah Start-Stop", brand: "Varta", capacity: "12V 70Ah", cca: "760A", href: "/urunler/start-stop-akuler/varta-agm-70ah", isPopular: true },
  { id: "2", name: "Mutlu EFB 72Ah Start-Stop", brand: "Mutlu", capacity: "12V 72Ah", cca: "680A", href: "/urunler/start-stop-akuler/mutlu-efb-72ah", isPopular: true },
  { id: "3", name: "İnci Akü AGM 80Ah", brand: "İnci Akü", capacity: "12V 80Ah", cca: "800A", href: "/urunler/start-stop-akuler/inci-agm-80ah" },
  { id: "4", name: "Bosch S5 AGM 70Ah", brand: "Bosch", capacity: "12V 70Ah", cca: "760A", href: "/urunler/start-stop-akuler/bosch-s5-agm-70ah" },
];

export default function StartStopAkulerPage() {
  return (
    <ProductListingLayout
      title="Start-Stop Aküler"
      description="Start-Stop teknolojisine sahip yeni nesil araçlarınız için özel olarak üretilmiş, yüksek şarj kabulüne sahip AGM ve EFB aküler."
      categorySlug="start-stop-akuler"
      products={products}
    />
  );
}
