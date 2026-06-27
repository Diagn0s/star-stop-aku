import { ProductListingLayout, Product } from "@/components/product-listing-layout";

const products: Product[] = [
  { id: "1", name: "Varta Professional Dual Purpose 90Ah", brand: "Varta", capacity: "12V 90Ah", cca: "800A", href: "/urunler/marin-akuleri/varta-dual-purpose-90ah", isPopular: true },
  { id: "2", name: "Mutlu Marin 105Ah", brand: "Mutlu", capacity: "12V 105Ah", cca: "850A", href: "/urunler/marin-akuleri/mutlu-marin-105ah" },
  { id: "3", name: "İnci Akü Marin 135Ah", brand: "İnci Akü", capacity: "12V 135Ah", cca: "950A", href: "/urunler/marin-akuleri/inci-marin-135ah" },
  { id: "4", name: "Varta Professional Deep Cycle AGM 115Ah", brand: "Varta", capacity: "12V 115Ah", cca: "800A", href: "/urunler/marin-akuleri/varta-deep-cycle-agm-115ah", isPopular: true },
];

export default function MarinAkuleriPage() {
  return (
    <ProductListingLayout
      title="Marin Aküleri"
      description="Tekne, yat ve her türlü deniz aracı için korozyona dayanıklı, sızdırmaz ve derin deşarj özellikli marin tip aküler."
      categorySlug="marin-akuleri"
      products={products}
    />
  );
}
