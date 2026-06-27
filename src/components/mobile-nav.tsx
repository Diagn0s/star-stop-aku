"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
  children?: { href: string; label: string }[];
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-[320px] border-l border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-5">
          <div>
            <span className="text-lg font-extrabold text-brand-navy tracking-tight">
              STAR<span className="text-brand-orange">STOP</span>
            </span>
            <span className="ml-1 text-xs font-bold text-brand-navy">AKÜ</span>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-3">
          {links.map((link) => (
            <div key={link.href}>
              <div className="flex items-center">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex-1 rounded-lg px-4 py-3 text-[15px] font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <button
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === link.label ? null : link.label
                      )
                    }
                    className="p-3 text-gray-400 hover:text-brand-navy"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedItem === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.hasDropdown &&
                link.children &&
                expandedItem === link.label && (
                  <div className="ml-4 border-l-2 border-gray-100 pl-3 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-brand-orange transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          <div className="mt-6 border-t border-gray-100 pt-4 px-4 space-y-3">
            <a
              href="tel:+905551234567"
              className="flex items-center justify-center w-full rounded-lg bg-brand-orange py-3 text-sm font-semibold text-white hover:bg-brand-orange-dark transition-colors"
              onClick={onClose}
            >
              0555 123 45 67
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
