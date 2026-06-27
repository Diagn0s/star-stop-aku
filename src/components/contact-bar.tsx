"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Müşteri Hizmetleri",
    value: "+90 555 123 45 67",
    href: "tel:+905551234567",
    gradient: "from-brand-orange to-amber-400",
    bgLight: "bg-brand-orange/10",
    textColor: "text-brand-orange",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Hattı",
    value: "+90 555 123 45 67",
    href: "https://wa.me/905551234567",
    gradient: "from-emerald-500 to-green-400",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    external: true,
  },
  {
    icon: Mail,
    label: "Kurumsal İletişim",
    value: "info@starstopaku.com",
    href: "mailto:info@starstopaku.com",
    gradient: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
];

export function ContactBar() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl ${contact.bgLight} ${contact.textColor} group-hover:scale-110 transition-transform duration-300`}
              >
                <contact.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                  {contact.label}
                </p>
                <p className="text-base font-bold text-brand-navy truncate group-hover:text-brand-orange transition-colors duration-300">
                  {contact.value}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
