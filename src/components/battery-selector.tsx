"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BatteryCharging, ChevronDown, Zap } from "lucide-react";

export function BatterySelector() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { brand, model });
    alert("Araç bilgileri alındı, uygun aküler listeleniyor...");
  };

  return (
    <section className="relative py-14 bg-brand-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-[340px] shrink-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-orange/20">
                <BatteryCharging className="h-5 w-5 text-brand-orange" />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold">
                <Zap className="h-3 w-3" />
                Hızlı Arama
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
              Aracınıza Uygun{" "}
              <span className="text-brand-orange">Aküyü</span> Bulun
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Marka ve model seçerek aracınıza uygun aküyü saniyeler içinde bulun.
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 p-3 rounded-2xl bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm"
            >
              {/* Brand Select */}
              <div className="relative flex-1">
                <select
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full h-14 pl-5 pr-10 text-white bg-white/[0.06] border border-white/[0.1] rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 transition-all text-sm"
                  required
                >
                  <option value="" disabled className="text-gray-900">
                    Marka Seçiniz
                  </option>
                  <option value="audi" className="text-gray-900">Audi</option>
                  <option value="bmw" className="text-gray-900">BMW</option>
                  <option value="fiat" className="text-gray-900">Fiat</option>
                  <option value="ford" className="text-gray-900">Ford</option>
                  <option value="honda" className="text-gray-900">Honda</option>
                  <option value="mercedes" className="text-gray-900">Mercedes-Benz</option>
                  <option value="renault" className="text-gray-900">Renault</option>
                  <option value="toyota" className="text-gray-900">Toyota</option>
                  <option value="vw" className="text-gray-900">Volkswagen</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Model Select */}
              <div className="relative flex-1">
                <select
                  id="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full h-14 pl-5 pr-10 text-white bg-white/[0.06] border border-white/[0.1] rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 transition-all disabled:opacity-40 text-sm"
                  disabled={!brand}
                  required
                >
                  <option value="" disabled className="text-gray-900">
                    Model Seçiniz
                  </option>
                  <option value="1" className="text-gray-900">Model 1</option>
                  <option value="2" className="text-gray-900">Model 2</option>
                  <option value="3" className="text-gray-900">Model 3</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="h-14 px-8 flex items-center justify-center gap-2 bg-brand-orange text-white font-semibold rounded-xl hover:bg-brand-orange-dark transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 shrink-0 text-sm"
              >
                <Search className="h-5 w-5" />
                Akü Bul
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
