"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Search, LayoutGrid, List, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  brand: string;
  capacity: string;
  cca?: string; 
  image?: string;
  href: string;
  isPopular?: boolean;
}

interface ProductListingLayoutProps {
  title: string;
  description: string;
  categorySlug: string;
  products: Product[];
}

const SIDEBAR_CATEGORIES = [
  { title: "Otomobil Aküleri", slug: "otomobil-akuleri" },
  { title: "Start-Stop Aküler", slug: "start-stop-akuler" },
  { title: "Ağır Vasıta Aküleri", slug: "agir-vasita-aku" },
  { title: "Marin Aküleri", slug: "marin-akuleri" },
];

export function ProductListingLayout({
  title,
  description,
  categorySlug,
  products
}: ProductListingLayoutProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title={title}
        description={description}
        breadcrumb={[
          { label: "Ürünler", href: "/urunler" },
          { label: title },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-28">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-navy mb-4">Kategoriler</h3>
              <ul className="space-y-2">
                {SIDEBAR_CATEGORIES.map((cat) => {
                  const isActive = cat.slug === categorySlug;
                  return (
                    <li key={cat.slug}>
                      <Link 
                        href={`/urunler/${cat.slug}`}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group",
                          isActive 
                            ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20" 
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-brand-navy"
                        )}
                      >
                        {cat.title}
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform", 
                          isActive ? "text-white" : "text-gray-400 group-hover:text-brand-navy group-hover:translate-x-1"
                        )} />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Sidebar CTA */}
              <div className="mt-8 p-6 rounded-2xl bg-brand-navy text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl" />
                 <h4 className="text-white font-bold mb-2 relative z-10">Yardıma mı ihtiyacınız var?</h4>
                 <p className="text-gray-400 text-xs mb-4 relative z-10">Uzman ekibimiz doğru aküyü seçmeniz için burada.</p>
                 <a href="tel:+905551234567" className="relative z-10 block w-full py-2.5 rounded-lg bg-brand-orange text-white text-sm font-bold hover:bg-brand-orange-dark transition-colors">
                   Hemen Arayın
                 </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            
            {/* Toolbar */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4 justify-between">
              
              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Ürün veya marka ara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-sm text-gray-500 font-medium">
                  {filteredProducts.length} ürün bulundu
                </span>

                {/* View Toggles */}
                <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-1.5 rounded-md transition-colors",
                      viewMode === "grid" ? "bg-white text-brand-navy shadow-sm" : "text-gray-400 hover:text-gray-600"
                    )}
                    aria-label="Grid View"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-1.5 rounded-md transition-colors",
                      viewMode === "list" ? "bg-white text-brand-navy shadow-sm" : "text-gray-400 hover:text-gray-600"
                    )}
                    aria-label="List View"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Ürün Bulunamadı</h3>
                <p className="text-gray-500">Arama kriterlerinize uygun bir ürün bulamadık. Lütfen farklı kelimeler deneyin.</p>
              </div>
            ) : (
              <div className={cn(
                "grid gap-6",
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              )}>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link href={product.href} className="group block h-full">
                      <div className={cn(
                        "bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 h-full relative",
                        viewMode === "list" ? "flex flex-row items-center p-6" : "flex flex-col"
                      )}>
                        
                        {/* Badge */}
                        {product.isPopular && (
                          <div className={cn(
                            "absolute z-10 px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full shadow-sm",
                            viewMode === "list" ? "top-6 left-6" : "top-4 right-4"
                          )}>
                            Popüler
                          </div>
                        )}

                        {/* Image */}
                        <div className={cn(
                          "bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-colors group-hover:bg-brand-navy/5",
                          viewMode === "list" 
                            ? "w-48 h-48 rounded-xl border border-gray-50 shrink-0" 
                            : "h-48 p-6 border-b border-gray-50"
                        )}>
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="text-gray-300">
                              <BatteryCharging className="h-20 w-20 mx-auto opacity-50 group-hover:scale-110 group-hover:text-brand-orange/30 transition-all duration-500" strokeWidth={1} />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className={cn(
                          "flex flex-col flex-1",
                          viewMode === "list" ? "pl-8 py-2" : "p-6"
                        )}>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                            {product.brand}
                          </p>
                          <h3 className="text-lg font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          
                          {/* Specs */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">
                              {product.capacity}
                            </span>
                            {product.cca && (
                              <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">
                                CCA: {product.cca}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-brand-navy font-bold text-sm group-hover:gap-3 group-hover:text-brand-orange transition-all mt-auto pt-4 border-t border-gray-50">
                            Detayları İncele
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
