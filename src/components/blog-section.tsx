"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Araç Aküsü Bakımı İçin 7 Altın Kural",
    excerpt:
      "Araç aküsünün ömrünü uzatmak ve ani arızaların önüne geçmek için dikkat etmeniz gereken en önemli 7 altın kural.",
    date: "15 Haziran 2026",
    href: "/blog/aku-bakimi-7-kural",
    gradient: "from-brand-navy to-brand-navy-light",
    tag: "Bakım",
  },
  {
    title: "Start-Stop Akü Nedir? Normal Aküden Farkı Ne?",
    excerpt:
      "Start-stop teknolojili araçlarda kullanılan AGM ve EFB akülerin farkları ve doğru seçim rehberi.",
    date: "10 Haziran 2026",
    href: "/blog/start-stop-aku-nedir",
    gradient: "from-brand-orange to-brand-orange-dark",
    tag: "Rehber",
  },
  {
    title: "Kışın Araç Aküsü Neden Biter? Korunma Yolları",
    excerpt:
      "Soğuk havalarda aküsünün performans kaybetmesinin nedenleri ve alabileceğiniz önlemler.",
    date: "5 Haziran 2026",
    href: "/blog/kisin-aku-bakimi",
    gradient: "from-slate-700 to-slate-600",
    tag: "Bilgi",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Blog &amp; Haberler
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg leading-relaxed">
              Akü bakımı, seçim rehberi ve sektörel gelişmelerle ilgili faydalı
              içeriklerimizi takip edin.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shrink-0"
          >
            Tümünü İncele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={post.href} className="group block h-full">
                <article className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1">
                  {/* Image Area */}
                  <div
                    className={`relative h-56 bg-gradient-to-br ${post.gradient} overflow-hidden`}
                  >
                    {/* Pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                        {post.tag}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-brand-navy transition-all duration-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/70 text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-brand-orange group-hover:gap-2.5 transition-all duration-300 uppercase tracking-wider">
                      Devamını Oku
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
