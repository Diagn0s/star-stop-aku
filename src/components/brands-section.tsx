"use client";

import { motion } from "framer-motion";

const brands = [
  "Mutlu Akü",
  "Varta",
  "Bosch",
  "Yuasa",
  "Exide",
  "İnci Akü",
  "Hugel",
  "Topla",
  "Akuma",
  "Banner",
];

export function BrandsSection() {
  return (
    <section className="py-14 bg-section-gray border-t border-gray-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
            Çalıştığımız Markalar
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12 items-center">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <span className="text-sm font-bold text-gray-400 whitespace-nowrap tracking-wide">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
