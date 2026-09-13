"use client";
import React from "react";

export default function WhatsAppButton() {
  // Replace this with your WhatsApp number
  // Country code included, but WITHOUT + or spaces
  const phoneNumber = "919881181400";

  const message = "Hello, I am interested to buy the product.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="whatsapp-float"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.11 17.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.01 3C8.84 3 3 8.84 3 16.01c0 2.29.6 4.52 1.74 6.48L3 29l6.67-1.7a12.94 12.94 0 0 0 6.34 1.65h.01C23.18 28.95 29 23.11 29 16.01 29 8.84 23.18 3 16.01 3zm0 23.83h-.01a10.8 10.8 0 0 1-5.51-1.52l-.4-.24-3.96 1.01 1.06-3.86-.26-.4a10.84 10.84 0 1 1 9.08 5.01z" />
      </svg>
    </a>
  );
}

