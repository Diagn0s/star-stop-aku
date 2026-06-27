"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative pt-[72px] bg-brand-navy overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-6"
          >
            <Link href="/" className="hover:text-brand-orange transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-gray-600" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
      
      {/* Bottom Border/Curve placeholder if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
