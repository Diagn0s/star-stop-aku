"use client";

import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const allPosts = [
  {
    title: "Araç Aküsü Bakımı İçin 7 Altın Kural",
    excerpt: "Araç aküsünün ömrünü uzatmak ve ani arızaların önüne geçmek için dikkat etmeniz gereken en önemli 7 altın kural.",
    date: "15 Haziran 2026",
    href: "/blog/aku-bakimi-7-kural",
    gradient: "from-brand-navy to-brand-navy-light",
    tag: "Bakım",
  },
  {
    title: "Start-Stop Akü Nedir? Normal Aküden Farkı Ne?",
    excerpt: "Start-stop teknolojili araçlarda kullanılan AGM ve EFB akülerin farkları ve doğru seçim rehberi.",
    date: "10 Haziran 2026",
    href: "/blog/start-stop-aku-nedir",
    gradient: "from-brand-orange to-brand-orange-dark",
    tag: "Rehber",
  },
  {
    title: "Kışın Araç Aküsü Neden Biter? Korunma Yolları",
    excerpt: "Soğuk havalarda aküsünün performans kaybetmesinin nedenleri ve alabileceğiniz önlemler.",
    date: "5 Haziran 2026",
    href: "/blog/kisin-aku-bakimi",
    gradient: "from-slate-700 to-slate-600",
    tag: "Bilgi",
  },
  {
    title: "Akü Takviyesi Nasıl Yapılır? Adım Adım Rehber",
    excerpt: "Yolda kaldığınızda başka bir araçtan güvenli bir şekilde akü takviyesi (jump start) nasıl yapılır?",
    date: "1 Haziran 2026",
    href: "/blog/aku-takviyesi-nasil-yapilir",
    gradient: "from-blue-600 to-cyan-500",
    tag: "Nasıl Yapılır?",
  },
  {
    title: "Akü Ömrü Kaç Yıldır? Ne Zaman Değiştirilmeli?",
    excerpt: "Bir akünün ortalama kullanım ömrü nedir ve değiştirme zamanının geldiğini gösteren işaretler nelerdir?",
    date: "28 Mayıs 2026",
    href: "/blog/aku-omru-kac-yildir",
    gradient: "from-emerald-500 to-teal-400",
    tag: "Bilgi",
  },
  {
    title: "Ağır Vasıta Akü Seçiminde Dikkat Edilmesi Gerekenler",
    excerpt: "Kamyon ve tırlar için akü seçerken göz önünde bulundurulması gereken sarsıntı direnci ve amper değerleri.",
    date: "20 Mayıs 2026",
    href: "/blog/agir-vasita-aku-secimi",
    gradient: "from-zinc-500 to-zinc-600",
    tag: "Ticari",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Blog & Haberler"
        description="Akü bakımı, doğru akü seçimi, kış hazırlıkları ve sektörel gelişmelerle ilgili tüm merak ettikleriniz."
        breadcrumb={[{ label: "Blog" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={post.href} className="group block h-full">
                <article className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  {/* Image Area */}
                  <div
                    className={`relative h-64 bg-gradient-to-br ${post.gradient} overflow-hidden`}
                  >
                    {/* Pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Tag */}
                    <div className="absolute top-5 left-5">
                      <span className="px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        {post.tag}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-5 right-5">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-brand-navy group-hover:scale-110 transition-all duration-500">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white/80 text-sm font-medium">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-brand-orange uppercase tracking-wider">
                        Okumaya Devam Et
                      </span>
                      <ArrowRight className="h-4 w-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300">
            Daha Fazla Yükle
          </button>
        </div>
      </div>
    </main>
  );
}
