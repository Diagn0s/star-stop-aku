"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  {
    href: "/kurumsal",
    label: "Kurumsal",
    hasDropdown: true,
    children: [
      { href: "/kurumsal", label: "Hakkımızda" },
      { href: "/kurumsal/markalar", label: "Markalar" },
    ],
  },
  {
    href: "/urunler",
    label: "Ürünler",
    hasDropdown: true,
    children: [
      { href: "/urunler/otomobil-akuleri", label: "Otomobil Aküleri" },
      { href: "/urunler/start-stop-akuler", label: "Start-Stop Aküler" },
      { href: "/urunler/agir-vasita-aku", label: "Ağır Vasıta Akü" },
      { href: "/urunler/marin-akuleri", label: "Marin Aküleri" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "Bize Ulaşın" },
];

const socialLinks = [
  { href: "#", label: "Facebook", icon: "f" },
  { href: "#", label: "Twitter", icon: "𝕏" },
  { href: "#", label: "Instagram", icon: "📷" },
  { href: "#", label: "LinkedIn", icon: "in" },
  { href: "#", label: "YouTube", icon: "▶" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300",
        scrolled && "shadow-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <svg className="h-10 w-10 text-brand-orange" viewBox="0 0 40 40" fill="none">
                <path d="M12 8L20 4L28 8V20L20 32L12 20V8Z" fill="currentColor" opacity="0.15"/>
                <path d="M15 28L20 36L25 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 6L26 10V18L20 26L14 18V10L20 6Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
                <circle cx="20" cy="16" r="4" fill="currentColor"/>
              </svg>
              <div className="ml-1.5 flex flex-col leading-tight">
                <span className="text-xl font-extrabold text-brand-navy tracking-tight">
                  STAR<span className="text-brand-orange">STOP</span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-navy -mt-0.5">
                  AKÜ
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Search + Social */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-brand-navy transition-colors" aria-label="Ara">
              <Search className="h-5 w-5" />
            </button>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex items-center justify-center w-7 h-7 rounded-full text-xs text-gray-500 hover:text-brand-orange transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-[11px] font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
