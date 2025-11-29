"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const BttButton = () => {
  const [showForm, setShowForm] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "526647268277";
  const rsvpMessage = encodeURIComponent("¡Hola!\n Quiero pedir informes.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${rsvpMessage}`;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end lg:hidden">
      {/* Popover */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-72 rounded-2xl bg-white shadow-lg border border-gray-200 p-4"
          >
            <h2 className="text-primary text-sm font-semibold mb-3">
              Envíanos un mensaje 💬
            </h2>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Tu nombre"
                className="rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
              <input
                type="tel"
                placeholder="Numero de teléfono"
                className="rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
              <textarea
                placeholder="Tu mensaje..."
                rows={3}
                className="rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
              <button
                type="button"
                className="mt-1 rounded-lg bg-primary text-white py-2 text-sm font-semibold hover:bg-primary-darker transition"
                onClick={() => {
                  alert("Mensaje enviado ✅");
                  setShowForm(false);
                }}
              >
                Enviar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <span
        // onClick={() => setShowForm((prev) => !prev)}
        onClick={() => window.open(whatsappLink, "_blank")}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-primary-darker p-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary shadow-lg`}
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
      </span>
    </div>
  );
};

export default BttButton;
