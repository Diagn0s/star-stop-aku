"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "Araç aküsü ömrünü nasıl uzatabilirim?",
    answer:
      "Aracınızı düzenli kullanın, kısa mesafe sürüşlerden kaçının, klima ve farları motor kapalıyken uzun süre kullanmayın. Akü kutup başlarını temiz tutun ve yılda en az bir kez akü testi yaptırın.",
  },
  {
    question: "Araç tipime hangi akü uygun?",
    answer:
      "Aracınızın kullanım kılavuzunda belirtilen amper ve voltaj değerlerine uygun akü seçmelisiniz. Start-Stop özellikli araçlarda AGM veya EFB akü kullanımı zorunludur. Bize ulaşarak aracınıza en uygun aküyü öğrenebilirsiniz.",
  },
  {
    question: "Araç aküsü değişiminde nelere dikkat etmeliyim?",
    answer:
      "Akü değişimi sırasında önce negatif kutup, sonra pozitif kutup sökülmelidir. Yeni akü takılırken ise önce pozitif, sonra negatif kutup bağlanmalıdır. Profesyonel bir ekip tarafından değiştirilmesini tavsiye ederiz.",
  },
  {
    question: "Seyrek araç kullanıcıları için hangi akü seçenekleri önerilir?",
    answer:
      "Seyrek araç kullanıyorsanız, derin deşarj dayanımı yüksek aküleri tercih etmelisiniz. Ayrıca akü şarj cihazı kullanarak aküyü belirli aralıklarla şarj etmeniz faydalı olacaktır.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left — Header & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest">
              <HelpCircle className="h-3.5 w-3.5" />
              SSS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4">
              Sıkça Sorulan{" "}
              <span className="text-brand-orange">Sorular</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              Akü hizmetlerimiz hakkında merak ettiğiniz soruların
              cevaplarını burada bulabilirsiniz.
            </p>

            {/* CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-dark p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative z-10">
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Sorunuzun cevabını bulamadınız mı? Bize doğrudan ulaşın,
                  hemen yardımcı olalım.
                </p>
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange-dark transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Bizi Arayın
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-white border-gray-200 shadow-lg shadow-gray-100/80"
                        : "bg-gray-50/80 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center gap-4 px-6 py-5 text-left"
                    >
                      {/* Number */}
                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-xl text-xs font-bold shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-brand-orange text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`flex-1 text-[15px] font-semibold transition-colors duration-300 ${
                          isOpen ? "text-brand-navy" : "text-gray-600"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Chevron */}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "text-brand-orange rotate-180"
                            : "text-gray-300"
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[76px]">
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
