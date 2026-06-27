"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fab-container">
      <a
        href="tel:+905551234567"
        className="fab-btn fab-phone"
        aria-label="Bizi Arayın"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/905551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
